<template>
  <div class="home">
							
<DynamicWebText :label="'Teachers manual'" v-bind:language="this.$store.state.language" :key="getKey+this.$store.state.language"/>

  </div>
</template>

<script>
import DynamicWebText from '@/components/DynamicWebText.vue'



export default 
{
    name: "teachers",
    components: {DynamicWebText},

    data() 
    {
    return {
        keyId:1   
        }
    },
    computed: {
        getKey: function () {
            
            return this.keyId++;
        }
  },
    created() 
    {
       
    },
}


</script>
