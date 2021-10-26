<template>
    <div id="alliane">    
                  
        <DynamicWebText v-bind:label="dynamicLabel" :key="'intro'+keyId"  />       
        <Cards :key="'cards'+this.cardId" :dataObject="dataObjectCards"/>               
      <!--  <Paging :key="'paging'+keyId" :dataObject="dataObjectCards" @changeCardDataObject="onChangeCardObject"/>-->
        <!--<Padlet v-if="padletVisible" :padletKey="'24llttnhkg8s'" />-->
         
    </div>
</template>


<style >

</style>

<script>

import DynamicWebText from '@/components/DynamicWebText.vue'
import Cards from '@/components/Cards.vue'
import Paging from '@/components/Paging.vue'
//import Padlet from '@/components/Padlet.vue'

export default 
{
    name: "alliance",
    components: {DynamicWebText, Cards, Paging},

    data() 
    {
        return {
        page: "Alliance",
        pageSize: 10,
        paging: true,
        translateTitle: false,
        dynamicLabel: "Alliance",
        cardFilter: "",
        keyId:1,
        cardId:1,
        dataObjectCards:    {
                table: "Tools",
                view: "Alliance",
                filter: null,
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            },
        padletVisible:false,
        cardViewMode:"alliance",
        }
    },
    metaInfo() {
        return {
            title: 'Craft Your Future - ' + this.page,
            meta:[
                {
                    name: "Craft Your Future",
                    content: "Craft Your Future"
                }
            ]
      }
    },
    methods:{
        onChangeCardObject(dataObject) 
        {
            this.dataObjectCards = dataObject;
            this.cardId++
            console.log(dataObject.table);
            console.log(dataObject.view);
            //this.padletVisible = this.dataObjectCards.filter.indexOf('assignment')>-1;
           // alert(this.dataObjectCards.filter.indexOf('Assingment')>-1);
           // console.log("enlarging hierso");
           // alert(dataObject.filter);
        },
        onPageChanged(dataObject)
        {
            this.dataObjectCards = dataObject

        }
    },

    computed: {

    },
    created(){
      
     
    },
}


</script>


