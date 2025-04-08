import { useNavigate } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 px-4 text-center bg-gradient-to-b from-yellow-50 to-white">
      <div className="absolute top-4 right-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "ro")}
          className="border p-2 rounded bg-white shadow"
        >
          <option value="en">🇬🇧 English</option>
          <option value="ro">🇷🇴 Română</option>
        </select>
      </div>

      <div className="text-6xl animate-bounce">🍽️</div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 max-w-xl">
        {t("welcome")}
      </h1>

      <p className="text-lg text-gray-600 max-w-md">
        {t("subtitle")}
      </p>

      <button
        onClick={() => navigate("/menu")}
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 active:scale-100"
      >
        {t("startOrder")}
      </button>
    </div>
  );
};

export default Home;
