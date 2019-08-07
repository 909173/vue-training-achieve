<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld v-if="view === 'hello'"/>
    <Hogehoge v-else/>
    <button @click="changePage">change view</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Hogehoge from "./components/Hogehoge.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Hogehoge
  },
  data() {
    return {
      view: "hello"
    };
  },
  methods: {
    changePage() {
      this.view = this.view === "hello" ? "hogehoge" : "hello";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
