<template>
  <nav class="main-nav">
    <div class="row">
      <div class="col-lg-3">
        <div class="navbar-brand">
          <router-link to="/">
            <img src="@/assets/images/medium-2.svg" alt="Vue Blog (HK)" />
          </router-link>
        </div>
      </div>
      <div class="col-lg">
        <ul class="nav-links">
          <li class="nav-link">
            <router-link to="">Stories</router-link>
          </li>
          <li class="nav-link">
            <router-link to="">Write a story</router-link>
          </li>
          <li class="nav-link">
            <router-link to="">Settings</router-link>
          </li>
          <li class="nav-link">
            <router-link to="">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>