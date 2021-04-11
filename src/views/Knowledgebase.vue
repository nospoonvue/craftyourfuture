<template>
    <div id="blog">    
                  
        <DynamicWebText v-bind:label="dynamicLabel" :key="'intro'+keyId"  />       
        <CardTypes :key="'cardType'+keyId" @changeCardDataObject="onChangeCardObject"/>
        <Cards :key="'cards'+this.cardId" :dataObject="dataObjectCards"/>               
        <Paging :key="'paging'+keyId" :dataObject="dataObjectCards" @changeCardDataObject="onChangeCardObject"/>
        <!--<Padlet v-if="padletVisible" :padletKey="'24llttnhkg8s'" />-->
         
    </div>
</template>


<style >

</style>

<script>

import DynamicWebText from '@/components/DynamicWebText.vue'
import CardTypes from '@/components/CardTypes.vue'
import Cards from '@/components/Cards.vue'
import Paging from '@/components/Paging.vue'
//import Padlet from '@/components/Padlet.vue'

export default 
{
    name: "genericPage",
    components: {DynamicWebText, CardTypes, Cards, Paging},

    data() 
    {
        return {
        page: "Home",
        pageSize: 10,
        paging: true,
        translateTitle: false,
        dynamicLabel: "KBIntro",
        cardFilter: "",
        keyId:1,
        cardId:1,
        dataObjectCards: null,
        padletVisible:false,
        cardViewMode:"knowledgebase",
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


