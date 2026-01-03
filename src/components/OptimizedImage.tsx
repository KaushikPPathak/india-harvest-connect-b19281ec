import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/2" | "auto";
}

/**
 * Optimized image component with WebP support, lazy loading, 
 * aspect ratio preservation, and layout shift prevention
 */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  width,
  height,
  priority = false,
  aspectRatio = "auto",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const aspectRatioClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    "auto": "",
  }[aspectRatio];

  // Generate WebP URL if not provided (append ?webp query)
  const webpSource = webpSrc || (src.includes('?') ? `${src}&format=webp` : `${src}?format=webp`);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatioClass}`}
      style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
    >
      {/* Placeholder skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source srcSet={webpSource} type="image/webp" />
          {/* JPEG/PNG fallback */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
