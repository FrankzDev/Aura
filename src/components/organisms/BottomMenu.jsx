import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai"; // carrito outlined clásico
import { AiOutlineTag } from "react-icons/ai"; // tag outlined

export default function BottomMenu() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 py-4 z-50">
      <div className="max-w-md mx-auto flex justify-around text-slate-700">

        {/* Home */}
        <Link href="/" className="flex flex-col items-center">
          <AiOutlineHome size={22} /> {/* reducido 4px */}
        </Link>

        {/* Carrito (un poco más grande que los demás) */}
        <Link href="/cart" className="flex flex-col items-center">
          <AiOutlineShoppingCart size={26} /> {/* 4px más grande */}
        </Link>

        {/* Promos */}
        <Link href="/promos" className="flex flex-col items-center">
          <AiOutlineTag size={22} />
        </Link>

      </div>
    </nav>
  );
}