<template>
  <Navbar />
  <div class="main-wrapper">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
