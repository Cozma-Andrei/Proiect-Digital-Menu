import { useEffect, useState } from "react";
import { menuData, MenuCategory, Product } from "../data/menuData";
import ProductCard from "../components/ProductCard";
import CategoryFilter from '../components/CategoryFilter';
import CartSummary from "../components/CartSummary";
import { useTranslation } from "../hooks/useTranslation";

const Menu = () => {
  const { t, language } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [menu, setMenu] = useState<MenuCategory[]>(menuData);

  useEffect(() => {
    setSelectedCategory(t("all"));
  }, [language]);

  const handleAddToCart = (product: Product) => {
    if (!product.available) return;
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const handleToggleAvailability = (categoryId: string, productId: string) => {
    setMenu(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
            ...cat,
            products: cat.products.map(prod =>
              prod.id === productId ? { ...prod, available: !prod.available } : prod
            )
          }
          : cat
      )
    );
  };

  const filteredMenu = menu.filter(cat => selectedCategory === t("all") || selectedCategory === cat.category[language]);

  const allCategories = [t('all'), ...menu.map(c => c.category[language])];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("menu")}</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <CategoryFilter
          categories={allCategories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {filteredMenu.map(cat => (
        <div key={cat.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">{cat.category[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => handleAddToCart(product)}
                onToggle={() => handleToggleAvailability(cat.id, product.id)}
              />
            ))}
          </div>
        </div>
      ))}

      <CartSummary cart={cart} menu={menu} />
    </div>
  );
};

export default Menu;
