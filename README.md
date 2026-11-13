# StyleNest

A responsive fashion e-commerce storefront built with **Next.js**, **React** and **Tailwind CSS**.

🔗 **Live demo:** [stylenest-seven.vercel.app](https://stylenest-seven.vercel.app/)

---

## Features

- **Product catalogue from a REST API**: products are fetched from the [DummyJSON](https://dummyjson.com) API and filtered down to fashion categories (shirts, tops, dresses, shoes and bags).
- **Dynamic product pages**: each product has its own page at `/products/[id]`, built from a single dynamic route.
- **Live search**: results update instantly as you type, ignoring upper and lower case.
- **Category filters**: filter by category and combine it with search.
- **Responsive design**: the product grid shows 2 columns on mobile and 4 on larger screens.
- **Interactive UI**: hover effects on product cards and easy navigation back to the store.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router) |
| UI | React, JavaScript (JSX) |
| Styling | Tailwind CSS |
| Data | DummyJSON REST API |
| Version control | Git, GitHub |
| Deployment | Vercel (automatic deployment on every push to `main`) |

## How it works

- **`app/page.js`**: the home page. It runs on the server, fetches all products from the API, keeps only the fashion categories, and passes them to the product grid.
- **`app/components/ProductGrid.js`**: a client component (`"use client"`) that handles everything interactive. It uses React's `useState` to remember the search text and the selected category, then filters the products and displays them as cards.
- **`app/products/[id]/page.js`**: a dynamic route. The `[id]` in the folder name matches any product ID in the URL, so one file powers every product page. It fetches a single product by ID and shows its image, category, price, description and rating.

## Project structure

```
app/
├── components/
│   └── ProductGrid.js     # Search, category filters and product grid
├── products/
│   └── [id]/
│       └── page.js        # Product details page
├── layout.js              # Shared layout and page metadata
├── globals.css            # Global styles and Tailwind
└── page.js                # Home page: fetches products
```

## Run it locally

```bash
git clone https://github.com/opemipo-ayenimelo/stylenest.git
cd stylenest
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What I learned

- Building UIs from reusable React components and passing data with props
- Fetching and filtering data from a REST API with `async`/`await`
- The difference between server and client components in Next.js
- Managing state with `useState` to power live search and filters
- Dynamic routing in the Next.js App Router
- Responsive layouts with Tailwind CSS
- Deploying with Vercel and continuous deployment from GitHub

## Planned improvements

- Shopping cart shared across pages
- Navigation bar and homepage banner
- Loading states and a "no products found" message
- Accessibility improvements

---

Product data and images are provided by [DummyJSON](https://dummyjson.com) for demonstration purposes.