<template>
  <component :is="layout" />
</template>

<script>
import Layout from "@/components/Layout/Index";
import EmptyLayout from "@/components/EmptyLayout";
import { mapActions } from "vuex";

export default {
  components: {
    Layout,
    EmptyLayout,
  },
  methods: {
    ...mapActions({ SET_BLOGS: "SET_BLOGS" }),

    layout() {
      const meta = this.$route.meta;

      if (meta.layout === "main") {
        return <Layout />;
      } else {
        return <EmptyLayout />;
      }
    },
  },
};
</script>

<style lang="scss"></style>
