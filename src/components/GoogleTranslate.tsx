import { useEffect, useId } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateInitialized?: boolean;
  }
}

interface GoogleTranslateProps {
  className?: string;
  showIcon?: boolean;
}

const GoogleTranslate = ({ className = "", showIcon = true }: GoogleTranslateProps) => {
  const uniqueId = useId().replace(/:/g, "_");
  const elementId = `google_translate_element_${uniqueId}`;

  useEffect(() => {
    const initTranslate = () => {
      if (window.google?.translate?.TranslateElement) {
        const element = document.getElementById(elementId);
        if (element && !element.hasChildNodes()) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ar,hi,fa,ur",
              layout: (window.google.translate.TranslateElement as any).InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            elementId
          );
        }
      }
    };

    // Define the callback function
    if (!window.googleTranslateInitialized) {
      window.googleTranslateElementInit = () => {
        window.googleTranslateInitialized = true;
        // Initialize all translate elements on the page
        document.querySelectorAll('[id^="google_translate_element_"]').forEach((el) => {
          if (!el.hasChildNodes() && window.google?.translate?.TranslateElement) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,ar,hi,fa,ur",
                layout: (window.google.translate.TranslateElement as any).InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              el.id
            );
          }
        });
      };
    }

    // Check if script already exists
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.googleTranslateInitialized) {
      // Script already loaded and initialized, init this element
      initTranslate();
    }

    return () => {
      // Cleanup is optional since we want to keep the script loaded
    };
  }, [elementId]);

  return (
    <div className={`google-translate-wrapper flex items-center gap-2 ${className}`}>
      {showIcon && <Globe className="w-4 h-4 text-current opacity-70 hidden sm:block" />}
      <div id={elementId} className="google-translate-container" />
    </div>
  );
};

export default GoogleTranslate;
