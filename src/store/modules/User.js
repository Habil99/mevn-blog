// import axios from 'axios';

import axios from "axios";
import { types } from "../types";

const User = {
  namespaced: true,
  state: {
    user: null,
    status: "idle",
    error: null,
  },
  mutations: {
    SET_USER(state, { data, router }) {
      if (data.error) {
        this.commit("user/" + types.SET_ERROR, {
          status: data.status_code,
          error: data.error,
        });
      } else {
        state.user = data;
        state.status = "fulfilled";
        state.error = null;
        router.push({ name: "home" });
      }
    },
    UPDATE_STATUS(state, { status }) {
      state.status = status;
    },
    SET_ERROR(state, { status, error }) {
      state.status = status;
      state.error = error;
    },
  },
  actions: {
    async REGISTER_USER({ commit }, { data: auth, router }) {
      commit(types.UPDATE_STATUS, { status: "loading" });

      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            username: auth.username,
            email: auth.email,
            password: auth.password,
            password2: auth.repeat_password,
          }
        );

        const data = res.data;

        commit(types.SET_USER, { data, router });
      } catch (error) {
        commit(types.SET_ERROR, { status: "has-error", error });
      }
    },
  },
};

export default User;
