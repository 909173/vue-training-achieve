<template>
  <div class="hello">
    {{counter}}
    <button @click="addCounter">add</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    counter() {
      return this.$store.getters.counter;
    }
  },
  data() {
    return {
      unwatchFunctions: []
    };
  },
  methods: {
    addCounter() {
      this.$store.dispatch("increment", this.counter + 1);
    }
  },
  mounted() {
    this.unwatchFunctions.push(
      this.$store.watch(
        state => state.counter,
        newValue => {
          console.log(newValue);
        }
      )
    );
    console.log(this.unwatchFunctions);
  },
  beforeDestroy() {
    this.unwatchFunctions.forEach(x => x());
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
