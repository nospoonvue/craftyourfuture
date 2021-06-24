<template>
 <div class="labelclass">{{ translatedLabel }}</div>
</template>

<style >
.labelclass
{
    font-family:'Comfortaa';
}
</style>
<script>

import VueMarkdown from 'vue-markdown';

export default {
  name: 'DynamicLabel',
   components: {VueMarkdown},
  data()
  {
      return{   
          info: null,
          translatedLabel: "",
          translatedLabels: null
      }
  },
  props: {
    id: 1,  
    label: null,
    css: "labelclass",
    },
    methods:
    {
        
        getLabel: function()
        {
            if(!this.$store.state.labels)
            {
                //load labels and store in state
               return this.label;
            }
            else
            {
                //read label translation from state
                let index = this.$store.state.labels.findIndex(item => item.fields.Label === this.label );
                
                switch(this.$store.state.language)
                {
                    case "ENG":
                        this.translatedLabel = this.$store.state.labels[index].fields.TextENG;                        
                        break;
                    case "NL":
                        this.translatedLabel = this.$store.state.labels[index].fields.TextNL;
                        break;
                    case "ESP":
                        this.translatedLabel = this.$store.state.labels[index].fields.TextESP;
                        break;
                    case "BUL":
                        this.translatedLabel = this.$store.state.labels[index].fields.TextBUL;
                        break;                    
                }
                //this.id++;
            //alert(index);
            // alert(JSON.stringify(viewStatus.$store.state.labels[1]));
                //return "to implement, get from dict";

            }
            
        }
        
    },
    computed:
    {
        getId: function()
        {
            return this.id;
        }
    },
    created()
    {
        this.getLabel();
    }
}
</script>
