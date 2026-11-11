"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductGrid({ products }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const categories = ["all", ...new Set(products.map((product) => product.category))];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mt-6 w-full rounded-lg border border-gray-700 bg-transparent p-3"
            />
            <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`rounded-full border px-4 py-1 text-sm capitalize ${category === cat ? "bg-white text-black" : "border-gray-700"
                            }`}
                    >
                        {cat.replace("-", " ")}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {filteredProducts.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <div className="rounded-lg border border-gray-700 p-4 transition hover:scale-105 hover:border-white">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="aspect-square w-full rounded object-cover"
                            />
                            <h2 className="mt-3 font-semibold">{product.title}</h2>
                            <p className="text-gray-400">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}