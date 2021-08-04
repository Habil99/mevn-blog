<template>
  <div class="main-wrapper">
    <div class="register-layout">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="title-xl">Welcome back!</h1>
          <h4>
            Already have a account,
            <router-link to="/sign-in">Sign in</router-link>
          </h4>
          <div class="form-wrapper">
            <form action="">
              <div class="form-group">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" />
              </div>
              <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" />
              </div>
              <div class="form-group">
                <label for="password-confirm" class="form-label"
                  >Repeat password</label
                >
                <input type="password" id="password-confirm" />
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="svg-wrapper">
            <img src="@/assets/images/auth.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
