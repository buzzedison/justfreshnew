import { writable } from "svelte/store";
import commerce from "../lib/commerce";

interface Cart {
  id: string;
  line_items: any[]; // You can replace 'any' with a more specific type if needed
}

interface Commerce {
  // Add a property 'cart' with a type of string
  cart: string;
  // Add any other properties you need
}

// Create an object of type Commerce
let myCommerce: Commerce = {
  // Assign a value to the property 'cart'
  cart: "some value",
  // Assign values to any other properties
};

// Access the property 'cart' on the object
console.log(myCommerce.cart);

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

export default createCart();
