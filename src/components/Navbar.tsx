import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-200 fixed z-30 w-full">
      <nav className="flex text-red-500 justify-end gap-4 p-5">
        <Link href="/en">ENG</Link>
        <Link href="/es">ESP</Link>
      </nav>
    </header>
  );
}
