<template>
  <component :is="layout" />
</template>

<script>
import Layout from "@/components/Layout/Index";
import EmptyLayout from "@/components/EmptyLayout";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Layout,
    EmptyLayout,
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: "sign-in" });
    }
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
  computed: {
    ...mapState("user", { user: (state) => state.user }),
  },
};
</script>

<style lang="scss"></style>
