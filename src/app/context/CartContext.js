"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agrega producto (si existe, aumenta qty)
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p
        );
      }
      return [...prev, { ...product, qty: product.qty ?? 1 }];
    });
  };

  // Aumenta cantidad
  const addQty = (id) => {
    setCart((prev) => prev.map((p) =>
      p.id === id ? { ...p, qty: (p.qty || 1) + 1 } : p
    ));
  };

  // Disminuye cantidad; si llega a 0 se elimina
  const minusQty = (id) => {
    setCart((prev) => {
      return prev.reduce((acc, p) => {
        if (p.id === id) {
          const newQty = (p.qty || 1) - 1;
          if (newQty <= 0) {
            // omitimos el producto (eliminado)
            return acc;
          }
          acc.push({ ...p, qty: newQty });
          return acc;
        }
        acc.push(p);
        return acc;
      }, []);
    });
  };

  // Remove item por id
  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const total = cart.reduce((acc, p) => acc + (p.price || 0) * (p.qty || 1), 0);

  const cartCount = cart.reduce((acc, p) => acc + (p.qty || 0), 0);

  // debug rápido (puedes quitarlo después)
  // console.log("CART STATE:", cart, "COUNT:", cartCount, "TOTAL:", total);

  return (
    <CartContext.Provider value={{ cart, addToCart, addQty, minusQty, removeItem, total, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}