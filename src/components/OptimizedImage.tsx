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
  /** Dominant color for blur placeholder (hex or rgb) */
  placeholderColor?: string;
}

/**
 * Optimized image component with WebP support, lazy loading, 
 * blur-up placeholder, and layout shift prevention
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
  placeholderColor = "hsl(var(--muted))",
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
      style={{ 
        width: width ? `${width}px` : undefined, 
        height: height ? `${height}px` : undefined,
      }}
    >
      {/* Blur-up placeholder with gradient background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          background: `linear-gradient(135deg, ${placeholderColor} 0%, ${placeholderColor} 100%)`,
        }}
      >
        {/* Animated shimmer effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)`,
            animation: 'shimmer 1.5s infinite',
          }}
        />
      </div>
      
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
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105"
            } ${className}`}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
