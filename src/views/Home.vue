<template>
  <p class="title-md">Recent posts</p>
  <div class="blog-cards">
      <Card v-for="blog in blogs" :key="blog.title" :blog="blog" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    ...mapState({
      blogs: (state) => state.blogs.data,
    }),
  },
};
</script>

