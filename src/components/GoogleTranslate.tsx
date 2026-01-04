import { useEffect } from "react";
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
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    // Define the callback function
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,hi,fa,ur", // English, Arabic, Hindi, Persian, Urdu
            layout: (window.google.translate.TranslateElement as any).InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Check if script already exists
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      // Script already loaded, reinitialize
      window.googleTranslateElementInit();
    }

    return () => {
      // Cleanup is optional since we want to keep the script loaded
    };
  }, []);

  return (
    <div className="google-translate-wrapper flex items-center gap-2">
      <Globe className="w-4 h-4 text-current opacity-70 hidden sm:block" />
      <div id="google_translate_element" className="google-translate-container" />
    </div>
  );
};

export default GoogleTranslate;
