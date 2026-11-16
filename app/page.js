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
      <section className="rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 p-10">
        <h1 className="text-4xl font-bold">New Season Styles</h1>
        <p className="mt-2 text-lg">
          Discover shirts, dresses, shoes and bags picked just for you.
        </p>
      </section>

      <ProductGrid products={products} />
    </main>
  );
}