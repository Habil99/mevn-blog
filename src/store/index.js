import { createStore } from "vuex";
import Blogs from "./modules/blogs";

const store = createStore({
  state: {},
  actions: {},
  modules: {
    blogs: Blogs
  },
});

export default store;
