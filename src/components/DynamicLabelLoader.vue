<template>
 <div>
    
</div>
</template>

<style >

</style>
<script>
import axios from 'axios';

async function getData(viewStatus)
{

    const config = 
    {
        headers: 
        {
        
        
        }
    }

var settings = {
    'application': viewStatus.$appName,
    'table': "WebTexts",
    'view': "PublicLabels",
       
}
//'fields': viewStatus.fields

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');

viewStatus.loading = true;
viewStatus.info = null;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
 
            //viewStatus.info = response.data.records;
           
            viewStatus.$store.state.labels = response.data.records;
            viewStatus.loading = false;
            viewStatus.state.keyId++;

        }).catch
        (
            function (error) 
            {
                console.log(error)
                //viewStatus.status = error;
                viewStatus.loading = false;
            }
        )
}

export default {
  name: 'DynamicLabelLoader',
   components: {},
  data()
  {
      return{   
          info: null,
          translatedLabel: "not available",
          translatedLabels: null
      }
  },
  props: {
        label: "null",
        css: "",
        id: "dynamicLabel",    
        state: null
    },
    methods:
    {
        getLabel: function()
        {
            if(!this.$store.state.labels)
            {
                //load labels and store in state
                
            }
            else
            {
                //read label translation from state

            }
            return "to implement, get from dict";
        }
    }
    ,
    created()
    {
        getData(this);
    }
}
</script>
