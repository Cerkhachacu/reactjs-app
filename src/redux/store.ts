import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

let middleware: any[] = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
}

const store: any = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

const persistor = persistStore(store);

export { store, persistor };
