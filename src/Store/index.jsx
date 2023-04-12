import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  products: ProductSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
