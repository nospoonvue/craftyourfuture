<template>
 <div id="dynamicWebText">
    
  <DataConnection :dataObject="this.dataObject" :key="'data'+keyId" />

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

import VueMarkdown from 'vue-markdown'
import DataConnection from '@/components/DataConnection.vue'

export default 
{
    name: "dynamicWebText",
    components: {VueMarkdown, DataConnection},
    methods:
    {

    },
    data() 
    {
    return {
        info: null,
        dataObject: 
        {
            table: "WebTexts",
            view: "PublicTexts",
            filter: '{Label}="'+ this.label + '"',
            fields: ['Text'+this.$store.state.language],    
            page: null,
            paging: true,
            offset:0,
            cursor:0,
            startLoading:true,
            ready:false
        },        
        textLabel: "",
        textLanguage: this.language,
        dynamicText: "",            
        keyId:1
        
        }
    },
    props: {
        label: ""
    },

    computed: {

  },
    created() 
    {
    
    },
}


</script>


