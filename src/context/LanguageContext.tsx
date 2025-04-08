import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ro";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome to Expressoft Digital Menu!",
    subtitle: "Select your language and start your order",
    startOrder: "Start Order",
    menu: "Menu",
    orderSummary: "Order Summary",
    noItems: "No items in cart.",
    total: "Total",
    addToOrder: "Add to Order",
    toggle: "Toggle",
    available: "Available",
    notAvailable: "Not Available",
    status: "Status",
    price: "Price",
    search: "Search product...",
    sortBy: "Sort by price",
    lowHigh: "Low → High",
    highLow: "High → Low",
    all: "All"
  },
  ro: {
    welcome: "Bine ai venit la Meniul Digital Expressoft!",
    subtitle: "Selecteaza limba si incepe comanda",
    startOrder: "Incepe Comanda",
    menu: "Meniu",
    orderSummary: "Sumar Comanda",
    noItems: "Niciun produs in cos.",
    total: "Total",
    addToOrder: "Adauga in cos",
    toggle: "Disponibilitate",
    available: "Disponibil",
    notAvailable: "Indisponibil",
    status: "Stare",
    price: "Pret",
    search: "Cauta produs...",
    sortBy: "Sorteaza dupa pret",
    lowHigh: "Mic → Mare",
    highLow: "Mare → Mic",
    all: "Toate"
  }
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) setLanguage(saved);
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
