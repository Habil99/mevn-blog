<template>
  <div class="main-wrapper-p backdrop-blur">
    <div class="register-layout">
      <div class="row">
        <div class="col-lg-6">
          <div class="svg-wrapper">
            <img src="@/assets/images/auth.svg" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <h1 class="title-xl">Welcome back!</h1>
          <h4 class="subtitle">
            Do not have an account,
            <router-link to="/sign-up">Sign up</router-link>
          </h4>
          <div class="form-wrapper">
            <form
              action=""
              @submit.prevent="AUTH_USER"
              @input="VALIDATE_FIELDS"
            >
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  class="form-control form-input"
                  type="email"
                  id="email"
                  v-model="auth.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input
                  class="form-control form-input"
                  type="password"
                  id="password"
                  v-model="auth.password"
                  required
                />
              </div>
              <transition name="slide-fade">
                <div class="error alert-danger p-2" v-if="errors">
                  <p
                    :class="errors.length > 1 ? 'mb-2' : 'm-0'"
                    v-for="error in errors"
                    :key="error.id"
                  >
                    {{ errors.indexOf(error) + 1 }}.{{ error.msg }}
                  </p>
                </div>
              </transition>
              <button class="auth-btn" :disabled="!auth.valid">
                <img
                  class="loader-img"
                  v-if="status === 'loading'"
                  src="@/assets/images/loader.svg"
                  alt="Vue blog loader"
                />
                <p class="m-0" v-else>Sign in</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { types } from "@/store/types";

export default {
  name: "Register",
  data() {
    return {
      auth: {
        email: null,
        password: null,
        valid: false,
      },
    };
  },
  methods: {
    AUTH_USER() {
      this.REGISTER_USER({ data: this.auth, router: this.$router });
    },
    ...mapActions("user", {
      REGISTER_USER: types.REGISTER_USER,
    }),
    VALIDATE_FIELDS() {
      if (
        !this.auth.email ||
        !this.auth.password
      ) {
        this.auth.valid = false;
      } else {
        this.auth.valid = true;
      }
    },
  },
  computed: {
    ...mapState("user", {
      user: (state) => state.user,
      status: (state) => state.status,
      errors: (state) => state.error,
    }),
  },
};
</script>
