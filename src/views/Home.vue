<template>
  <div class="home">
							<!-- Banner -->
								<section id="banner" class="banner">
									<div class="content">
										<header>											
											 <DynamicWebText :label="'Home page'" v-bind:language="this.$store.state.language" :key="getKey+this.$store.state.language"/>
										</header>

									</div>
								</section>
  </div>
</template>

<script>
import DynamicWebText from '@/components/DynamicWebText.vue'



export default 
{
    name: "home",
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
