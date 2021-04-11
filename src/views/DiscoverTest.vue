<template>
    <div id="discover">    
          <EventTest @enlargeText="onEnlargeText" />
    </div>
</template>

<style >
</style>

<script>
import EventTest from '@/components/EventTest.vue'

export default 
{
    name: "genericPage",
    components: {EventTest},

    data() 
    {
        return {
        page: "discover",

        }
    },
    methods: {
    onEnlargeText(txtChange) {
      console.log("enlarging textjkl");
      alert(txtChange.title);
    },
  }
}


</script>


