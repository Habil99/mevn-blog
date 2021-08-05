import { createStore } from "vuex";
import Blogs from "./modules/Blogs";
import User from "./modules/User";

const store = createStore({
  state: {},
  actions: {},
  modules: {
    blogs: Blogs,
    user: User,
  },
});

export default store;
