import { Product } from "../data/menuData";
import { useTranslation } from "../hooks/useTranslation";

interface Props {
  product: Product;
  onAdd: () => void;
  onToggle: () => void;
}

const ProductCard = ({ product, onAdd, onToggle }: Props) => {
  const { t, language } = useTranslation();

  return (
    <div className="border rounded-xl p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h3
          className="text-xl font-bold cursor-pointer hover:underline"
        >
          {product.name[language]}
        </h3>
        <p className="text-gray-600 text-sm">{product.description[language]}</p>
        <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-sm">
          {t("status")}:{" "}
          <span className={product.available ? "text-green-600" : "text-red-500"}>
            {product.available ? t("available") : t("notAvailable")}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={onAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!product.available}
        >
          {t("addToOrder")}
        </button>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" checked={product.available} onChange={onToggle} />
          {t("toggle")}
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
