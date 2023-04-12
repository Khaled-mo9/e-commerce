import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  category: [],
  cartItems: [],
  totalPrice: 0,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategory = createAsyncThunk(
  "products/getCategory",
  async (cat, { getState, rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarts = createAsyncThunk(
  "products/getCarts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/carts");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCartItems: (state, { payload }) => {
      if (!state.cartItems.some((item) => item.id === payload.id)) {
        state.cartItems = [...state.cartItems, payload];
      }
    },
    updateTotalPrice: (state, _) => {
      state.totalPrice = state.cartItems
        .reduce((total, product) => total + product.price * product.count, 0)
        .toFixed(2);
    },
    deleteCartItem: (state, { payload }) => {
      const cartItems = state.cartItems;
      const newCartItems = cartItems.filter((item) => item.id !== payload);
      state.cartItems = [...newCartItems];
    },
    increaseCartItem: (state, { payload }) => {
      state.cartItems.map((obj) => {
        if (obj.id === payload.id) {
          obj.count += 1;
          return obj;
        }
      });
    },
    decreaseCartItem: (state, { payload }) => {
      state.cartItems.map((obj) => {
        if (obj.id === payload.id) {
          if (obj.count === 1) {
            obj.count = 1;
            return obj;
          }
          obj.count -= 1;
          return obj;
        }
      });
    },
  },
  extraReducers: (builder) => {
    // get posts ----------------------------------------------------------------------------------------
    // get posts ----------------------------------------------------------------------------------------
    builder.addCase(getProducts.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      const count = 1;
      state.products = payload?.map((item) => ({ ...item, count }));
      console.log(state.products);
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      console.log(payload);
    });
    // get posts ----------------------------------------------------------------------------------------
    // get posts ----------------------------------------------------------------------------------------
    builder.addCase(getCarts.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(getCarts.fulfilled, (state, action) => {
      console.log(action);
      //   state.products = payload;
    });
    builder.addCase(getCarts.rejected, (state, { payload }) => {
      console.log(payload);
    });
    // get posts ----------------------------------------------------------------------------------------
    // get posts ----------------------------------------------------------------------------------------
    builder.addCase(getCategory.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      console.log(action);
      state.category = action.payload;
      console.log(state.category);
    });
    builder.addCase(getCategory.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const {
  setCategory,
  setCartItems,
  deleteCartItem,
  decreaseCartItem,
  increaseCartItem,
  updateTotalPrice,
} = ProductSlice.actions;
export default ProductSlice.reducer;
