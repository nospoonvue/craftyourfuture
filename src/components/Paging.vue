<template>
 <div id="paging" style="clear:both;">
    <section class="">
        <div id="pages" style="text-align:center" v-show="dataObject&&(this.dataObject.offset != -1)" >
            <p><button  :disabled='backDisabled' v-on:click="backward">previous page</button> | <button  :disabled='forwardDisabled' v-on:click="forward">next page</button></p>
        </div>
    </section>
</div>
</template>


<style >

</style>

<script>
export default 
{
    name: "Paging",
    components: {},

    data() 
    {
    return {       
        offsetHistoryCursor: 0,        
        offsetHistory: []
        }
    },
    props: {
        dataObject: {offset:-1}
    },
    created() 
    {

    },

    methods:
    {
        forward: function() 
        {
            this.offsetHistoryCursor++;
            this.offsetHistory[this.offsetHistoryCursor] = this.dataObject.offset;
            this.dataObject.cursor++;
            this.$emit("changeCardDataObject",this.dataObject);
           
        },
        backward: function()
        {
            this.offsetHistoryCursor--;
            if(this.offsetHistoryCursor < 0) this.offsetHistoryCursor =0;
            this.dataObject.offset = this.offsetHistory[this.offsetHistoryCursor];          
            this.dataObject.cursor--;
            this.$emit("changeCardDataObject",this.dataObject);
        }
    },
    computed: {
  	    backDisabled: function(){

              if(this.offsetHistoryCursor>0)
                return false;
                else
    	        return true;
        },
        forwardDisabled: function(){
            return this.dataObject && this.dataObject.offset == -1;
        },
        isReady: function(){
            
            return  true;//this.show || (this.$parent.dataObject.offset >-1)
        }
  },
}


</script>


