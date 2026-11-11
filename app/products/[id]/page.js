import Link from "next/link";
async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="mx-auto max-w-4xl p-8">
      <Link href="/" className="text-sm text-gray-400 hover:text-white">
        ← Back to store
      </Link>
      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg object-cover"
        /> 

        <div className="rounded-lg border border-gray-700 p-4 hover:border-white hover:scale-105 transition">
          <p className="text-sm uppercase text-gray-400">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>
          <p className="mt-2 text-2xl">${product.price}</p>
          <p className="mt-4 text-gray-300">{product.description}</p>
          <p className="mt-4 text-sm text-gray-400">Rating: {product.rating} / 5</p>
        </div>
      </div>
    </main>
  );
}