import { BrowserRouter, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900 h-[calc(100dvh-128px)]   overflow-hidden flex items-center justify-center">
      <div className="py- px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl lg:text-9xl font-extrabold tracking-tight text-blue-600 dark:text-blue-500">
            404
          </h1>

          <p className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Something&apos;s missing.
          </p>

          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 my-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
