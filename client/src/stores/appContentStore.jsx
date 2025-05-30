import { create } from 'zustand'

export const appContentStore = create((set, get) => ({
  cart: [],
  numberOfItems: () => {
    const cart = get().cart
    if (cart.length === 0) {
      return 0
    } else {
      return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
  },
  totalPrice: () => {
    const cart = get().cart
    if (cart.length === 0) {
      return 0
    } else {
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
  },

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        }
      }
    }),
  removeFromCart: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === itemId)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return {
            cart: state.cart.map((i) =>
              i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
            ),
          }
        } else {
          return {
            cart: state.cart.filter((i) => i.id !== itemId),
          }
        }
      }
    }),
  clearCart: () => set({ cart: [] }),
}))
