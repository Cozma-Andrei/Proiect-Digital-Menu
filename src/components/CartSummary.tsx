import { MenuCategory } from "../data/menuData";
import { useTranslation } from "../hooks/useTranslation";

interface Props {
  cart: Record<string, number>;
  menu: MenuCategory[];
}

const CartSummary = ({ cart, menu }: Props) => {
  const { t, language } = useTranslation();

  const products = menu.flatMap(c => c.products);

  const cartItems = Object.entries(cart)
  .reduce((items, [id, qty]) => {
    const product = products.find(p => p.id === id);
    if (product) {
      items.push({ ...product, qty });
    }
    return items;
  }, [] as Array<{ id: string; name: { en: string; ro: string }; price: number; qty: number }>);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="mt-10 p-4 border rounded-xl bg-gray-50">
      <h3 className="text-xl font-bold mb-3">{t("orderSummary")}</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">{t("noItems")}</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name[language]} x {item.qty}
              </span>
              <span>${(item.qty * item.price).toFixed(2)}</span>
            </li>
          ))}
          <li className="flex justify-between font-semibold mt-2 border-t pt-2">
            <span>{t("total")}</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CartSummary;
