<template>
 <div id="dynamicWebText">
    
    <Status class="StatusShow" v-bind:img="status" v-show="loading" />
    

    <section id="introtext" class="post" style="float: left;clear: both;width:100%">
            <div id="" class="post" v-for="item in info" :key="item.id" style="float: left;">
                <vue-markdown>{{ Object.values(item.fields)[0] }}</vue-markdown>
            </div>
    </section>
</div>
</template>

<style >

</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'
import VueMarkdown from 'vue-markdown'

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
        'table': viewStatus.table,
        'view': viewStatus.view,
        'fields': ['Text'+viewStatus.textLanguage],
        'filter': '{Label}="'+ viewStatus.label + '"'
    }

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');

viewStatus.loading = true;
viewStatus.info = null;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
           // alert(viewStatus.language);
           // alert(viewStatus.label);
            viewStatus.info = response.data.records;       
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
    name: "dynamicWebText",
    components: {Status, VueMarkdown},

    data() 
    {
    return {
        table: "WebTexts",
        view: "PublicTexts",        
        info: null,
        ready: false,
        loading: false,
        status: "",
        textLabel: "",
        textLanguage: this.language,
        dynamicText: ""
        }
    },
    props: {
        label: "",
        language: ""
    },
    methods:
    {

    },
    computed: {
    
    

  },
    created() 
    {
        getData(this);
    },
}


</script>


