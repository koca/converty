<template>
  <div id="app" class="app font-sans min-h-screen flex flex-col bg-grey-light overflow-hidden">
    <Header />
    <Examples />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Examples from "./components/Examples.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Content,
    Examples,
    Footer,
    Header
  }
};
</script>

<style>
#appp {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
