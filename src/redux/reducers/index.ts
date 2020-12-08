import { combineReducers } from "redux";

import home from "./home";
import detail from "./detail";
import user from "./user";
import auth from "./auth";

export default combineReducers({ home, detail, user, auth });
