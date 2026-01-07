import { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

interface GoogleTranslateProps {
  className?: string;
  showIcon?: boolean;
}

const GoogleTranslate = ({ className = "", showIcon = true }: GoogleTranslateProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If the Google script loaded before React mounted the container,
    // calling init again will mount the widget once the container exists.
    (window as any).googleTranslateElementInit?.();

    const checkLoaded = () => {
      const element = document.getElementById("google_translate_element");
      if (element && element.children.length > 0) {
        setIsLoaded(true);
      }
    };

    checkLoaded();
    const interval = setInterval(checkLoaded, 500);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!document.getElementById("google_translate_element")?.children.length) {
        console.log("Google Translate widget failed to load - may be blocked by browser/network");
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`google-translate-wrapper flex items-center gap-2 ${className}`}>
      {showIcon && <Globe className="w-4 h-4 text-current opacity-70" />}
      <div id="google_translate_element" className="google-translate-container" />
      {!isLoaded && (
        <span className="text-sm opacity-70 flex items-center gap-1">
          EN <ChevronDown className="w-3 h-3" />
        </span>
      )}
    </div>
  );
};

export default GoogleTranslate;
