<template>
  <div class="blog-card">
    <div class="blog-card-img">
      <img
        :src="require(`../assets/images/${this.blog.posterTitle}.svg`)"
        alt="Vue Blog"
      />
    </div>
    <div class="blog-card-content">
      <p class="title-lg">{{ this.blog.title }}</p>
      <div class="blog-card-categories">
        <div
          class="category"
          v-for="category in this.blog.categories"
          :key="category.id"
        >
          {{ category }}
        </div>
      </div>
      <p class="blog-card-info">{{ this.blog.info }}</p>
      <router-link to="/blog/2">Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    blog: Object,
  },
};
</script>
