import { Product } from "../data/menuData";
import { useTranslation } from "../hooks/useTranslation";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  const { t, language } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-2">{product.name[language]}</h2>
        <p className="text-gray-700 mb-4">{product.description[language]}</p>
        <p className="text-lg font-semibold mb-2">
          {t("price")}: ${product.price.toFixed(2)}
        </p>
        <p className="text-sm">
          {t("status")}:{" "}
          <span className={product.available ? "text-green-600" : "text-red-600"}>
            {product.available ? t("available") : t("notAvailable")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
