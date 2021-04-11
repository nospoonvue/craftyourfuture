<template>
 <div id="dataConnection">
    <Status class="StatusShow" v-show="loading" />
    </div>
</template>

<style >
</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'

async function getData(viewStatus)
{

    const config = 
    {
        headers: 
        {            
        }
    }

    var settings = {
        'application': viewStatus.application,
        'table': viewStatus.dataObject.table,
        'view': viewStatus.dataObject.view                                   
    }

if(viewStatus.dataObject.filter) settings.filter = viewStatus.dataObject.filter;
if(viewStatus.dataObject.fields) settings.fields = viewStatus.dataObject.fields;
if(viewStatus.dataObject.paging)
    {
         settings.offset = viewStatus.dataObject.offset;
         settings.pageSize = viewStatus.dataObject.pageSize;
    }

 if(viewStatus.$route.query.staging) settings.view = "Staging";

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');
//alert(viewStatus.fields);
//alert("settings: " + JSON.stringify(settings));
//console.log(JSON.stringify(settings));
viewStatus.loading = true;
viewStatus.ready = false;
viewStatus.dataObject.ready = false;

await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
            viewStatus.$parent.info = response.data.records;
            //alert(JSON.stringify(response.data.records));
            //console.log(JSON.stringify(response.data.records));
            if(response.data.offset)
            {
                viewStatus.dataObject.offset = response.data.offset;
                viewStatus.ready = true;   
                viewStatus.dataObject.ready = true;          
            }
            else
            {
               viewStatus.dataObject.offset = -1;    
                         
            }
            
            viewStatus.loading = false;

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

export default 
{
    name: "DataConnection",
    components: {Status},

    data() 
    {
    return {
        info: null,
        application:this.$appName,
        ready: false,
        loading: false,
        offsetHistoryCursor: 0,
        offsetHistory: []        
        }
    },
    props: {
        dataObject: null,
    },
    created() 
    {    
        this.offsetHistory[0]="";
        getData(this);
    },
}


</script>


