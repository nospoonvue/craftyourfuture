<template>
  <div class="status">
    EventTest
     <button v-on:click="tryThis">Enlarge text</button>
  </div>
</template>

<script>
export default {
  name: 'EventTest',
  props: {

  },
  methods: {
    tryThis() {
      console.log("trying");
      this.$emit("enlargeText", {name:"frank",title:"blaat"});
    },
  }
}
</script>

