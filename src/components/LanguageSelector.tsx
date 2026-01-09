import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "fa", name: "Persian", nativeName: "فارسی" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync with Google Translate cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      const lang = languages.find((l) => l.code === match[1]);
      if (lang) setSelected(lang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setSelected(lang);
    setIsOpen(false);

    // Set Google Translate cookie
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/`;

    // Try to trigger Google Translate
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Fallback: reload page to apply translation
      window.location.reload();
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 p-2 sm:px-3 sm:py-2 rounded-lg border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 transition-all duration-200 shadow-sm hover:shadow-md group"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5 sm:w-4 sm:h-4 text-amber-600 group-hover:text-amber-700" />
        <span className="hidden sm:inline text-sm font-medium text-amber-800 min-w-[60px] text-left">
          {selected.nativeName}
        </span>
        <ChevronDown
          className={`hidden sm:block w-4 h-4 text-amber-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 sm:w-48 bg-white rounded-xl shadow-xl border border-amber-100 overflow-hidden z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-150 ${
                  selected.code === lang.code
                    ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900"
                    : "text-gray-700 hover:bg-amber-50"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{lang.nativeName}</span>
                  <span className="text-xs text-gray-500">{lang.name}</span>
                </div>
                {selected.code === lang.code && (
                  <Check className="w-4 h-4 text-amber-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
