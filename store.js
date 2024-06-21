import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const isAlreadyInCart = state.cart.find((i) => i.id === item.id);
      if (isAlreadyInCart) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => {
        const item = state.cart.find((i) => i.id === id);
        if (item.quantity > 1) {
            return {
            cart: state.cart.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
            };
        }
        return { cart: state.cart.filter((i) => i.id !== id) };
    }),
    clearCart: () => set({ cart: [] }),
    cartLength: () => get().cart.length,
    cartTotal: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));
