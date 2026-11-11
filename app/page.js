import ProductGrid from "./components/ProductGrid";

const FASHION_CATEGORIES = [
  "mens-shirts",
  "mens-shoes",
  "womens-dresses",
  "womens-shoes",
  "womens-bags",
  "tops",
];

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  const data = await res.json();
  return data.products.filter((product) =>
    FASHION_CATEGORIES.includes(product.category)
  );
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">StyleNest</h1>
      <p className="mt-2 text-gray-400">Your new favourite clothing store.</p>

      <ProductGrid products={products} />
    </main>
  );
}