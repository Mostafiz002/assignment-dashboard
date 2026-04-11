import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
