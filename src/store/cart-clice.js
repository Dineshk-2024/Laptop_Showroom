import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [], // Ensure itemsList starts as an empty array
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity || 0; // Add fallback in case totalQuantity is undefined
      state.itemsList = action.payload.itemsList || []; // Ensure itemsList is an array
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;

      console.log("Adding item:", newItem);
      console.log("Current itemsList:", state.itemsList);

      // Ensure itemsList is defined as an array before calling find
      const existingItem = state.itemsList.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If it exists, increase the quantity and total price
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        // If it doesn't exist, create a new item object and safely push to itemsList
        const newItemToAdd = {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        };

        state.itemsList.push(newItemToAdd);
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      // Find the existing item in itemsList
      const existingItem = state.itemsList.find((item) => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item if quantity is 1
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
          state.totalQuantity--;
        } else {
          // Decrease quantity and total price
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    resetCart(state) {
      state.itemsList = [];
      state.totalQuantity = 0;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
