import { writable } from "svelte/store";
import commerce from "../lib/commerce";

interface Cart {
  id: string;
  line_items: any[]; // You can replace 'any' with a more specific type if needed
}

const emptyCart: Cart = {
  id: "",
  line_items: [],
};

const createCart = () => {
  const { subscribe, set, update } = writable<Cart>(emptyCart);

  return {
    subscribe,
    fetch: async () => {
      const cartData = await commerce.cart.retrieve();
      set(cartData);
    },
    addItem: async (productId: string, quantity: number) => {
      const response = await commerce.cart.add(productId, quantity);
      set(response.cart);
    },
    // Add other cart-related functions here
  };
};

const cart = createCart();
export default cart;
