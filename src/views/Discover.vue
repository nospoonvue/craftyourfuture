<template>
    <div id="blog">    
                  
        <DynamicWebText v-bind:label="dynamicLabel" :key="'intro'+keyId"  />       
        <CardFlow :key="'flow'+keyId" @changeCardDataObject="onChangeCardObject" :viewMode="cardViewMode" :zoomInEnabled="zoomInEnabled" :connectTheDotsEnabled="connectTheDotsEnabled" :certificateEnabled="certificateEnabled" />  

        <!-- intro assignment text -->
        <DynamicWebText v-if="dataObjectCards&&dataObjectCards.filter&&dataObjectCards.filter.indexOf('Intro assignment')>-1" v-bind:label="'Intro assignment'" :key="'assignmentintro'+keyId"  /> 
        <!-- zoom in assignment text -->
        <DynamicWebText v-if="dataObjectCards&&dataObjectCards.view&&dataObjectCards.view.indexOf('Zoom')>-1" v-bind:label="'Zoom in assignment'" :key="'assignmentzoom'+keyId"  /> 
        <!-- connect the dots assignment text -->
        <DynamicWebText v-if="dataObjectCards&&dataObjectCards.view&&dataObjectCards.view.indexOf('Dots')>-1" v-bind:label="'Connect the dots'" :key="'assignmentdots'+keyId"  /> 
        <!-- certificate text -->
        <DynamicWebText v-if="dataObjectCards&&dataObjectCards.view&&dataObjectCards.view.indexOf('Certificate')>-1" v-bind:label="'Certificate'" :key="'assignmentcert'+keyId"  /> 

        <Cards :key="'cards'+this.cardId" :dataObject="dataObjectCards" @enableZoomIn="onZoomInEnabled" @enableConnectTheDots="onEnableConnectTheDots" @enableCertificate="onEnableCertificate"/>       
        
        <Paging :key="'paging'+keyId" :dataObject="dataObjectCards" @changeCardDataObject="onChangeCardObject"/>
        <!--<Padlet v-if="padletVisible" :padletKey="'24llttnhkg8s'" />-->
         
    </div>
</template>


<style >

</style>

<script>

import DynamicWebText from '@/components/DynamicWebText.vue'
import CardFlow from '@/components/CardFlow.vue'
import Cards from '@/components/Cards.vue'
import Paging from '@/components/Paging.vue'
//import Padlet from '@/components/Padlet.vue'

export default 
{
    name: "genericPage",
    components: {DynamicWebText, CardFlow, Cards, Paging},

    data() 
    {
        return {
        page: "Home",
        pageSize: 10,
        paging: true,
        translateTitle: false,
        dynamicLabel: "DiscoverIntro",
        cardFilter: "",
        keyId:1,
        cardId:1,
        dataObjectCards: null,
        padletVisible:false,
        cardViewMode:"discovery",
        zoomInEnabled:false,
        connectTheDotsEnabled:false,
        certificateEnabled:false
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
        onZoomInEnabled()
        {
            this.zoomInEnabled = true;
        },
        onEnableConnectTheDots()
        {
            this.connectTheDotsEnabled = true;
            //alert('dots');
        },
        onEnableCertificate()
        {
            this.certificateEnabled = true;
        },
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


