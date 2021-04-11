<template>
 <div id="Discover">
    
    <DynamicWebText :parent="this" v-bind:label="dynamicLabel" v-bind:language="getLanguage" :key="'intro'+keyId"  />    
    <CardFlow :parent="this" v-bind:language="getLanguage" :key="'flow'+keyId" />
    <Cards :info="info" :key="'cards'+keyId"  />
    <Paging :paging="this.paging" :parent="this" :key="'paging'+keyId" />
</div>
</template>


<style >
@import url('https://use.typekit.net/mqh8lqg.css');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');


</style>

<script>

import Cards from '@/components/Cards.vue'
import CardFlow from '@/components/CardFlow.vue'
import DynamicWebText from '@/components/DynamicWebText.vue'
import DynamicLabel from '@/components/DynamicLabel.vue'
import Paging from '@/components/Paging.vue'


export default 
{
    name: "cards",
    components: { Cards, DynamicWebText, DynamicLabel, CardFlow, Paging},

    data() 
    {
    return {
        filter: null,
        zoomincolor: "#818892",
        dotscolor: "#818892",
        showallcardtypes:true,
        introtexts: null,
        cardtypes: null,
        info: null,
        ready: false,
        loading: false,
        status: "",
        offset: null,
        offsetHistoryCursor: 0,
        pageSize: 8,
        offsetHistory: [],  
        keyId:1,
        dynamicLabel: 'DiscoverIntro',
        paging: false,
        calls:2
        }
    },
    methods:
    {

        mouseOutSource: function(divId)
        {            
  
            return "document.getElementById('" + divId + "').innerHTML = '';";
        },
        mouseOverSource: function(divId, captionText)
        {            
            return "document.getElementById('" + divId +"').innerHTML = 'go to: " + captionText +"';";
        },  
        getTools: function()
        {
          
            //this.view = cardtype;
            //this.table = "Assignments";
            //this.offset = 0;
            //this.showallcardtypes = false; 
           //getData(this);

        },
        getAssignments: function(assignmenttype)
        {
          
      
            this.table = "Assignments";
            this.offset = 0;
            this.showallcardtypes = false; 
            this.filter = assignmenttype;
            this.filter = '{TypeName}="'+ assignmenttype + '"';
            this.dynamicLabel = assignmenttype;
            this.keyId++;
           getData(this);

        },
        getCardTypes: function()
        {
            this.table = "CardTypes";
            this.view = "Public";
            this.showallcardtypes = true;
       
            this.filter = '{TitleENG}!="Wildcards"';
            this.dynamicLabel = 'DiscoverIntro';
            this.keyId++;
            //alert(this.dynamicLabel);
            
        },
        getCards: function(cardtype) 
        {
            this.view = cardtype;
            this.table = "Cards";
            this.offset = 0;
            this.showallcardtypes = false;         
            this.dynamicLabel = cardtype +  'Intro';
            this.keyId++;
            getData(this);
           // alert(this.dynamicLabel);
           
        },    
        loadCards: function() 
        {
           // viewStatus.ready = false;      
           // this.table = cardtype;  
           
            getData(this);
           
        },
        forward: function() 
        {
            this.offsetHistoryCursor++;
            this.offsetHistory[this.offsetHistoryCursor] = this.offset;
            //getData(this);
            this.loadCards();
           
        },
        backward: function()
        {
            this.offsetHistoryCursor--;
            if(this.offsetHistoryCursor < 0) this.offsetHistoryCursor =0;
            this.offset = this.offsetHistory[this.offsetHistoryCursor];
            //getData(this);
            this.loadCards();
        }
    },
    computed: {

        getLabel: function (){
            this.dynamicLabel ='DiscoverOverview';
            this.keyId++;
            return this.dynamicLabel
        },

        getLanguage: function () {
            this.language = this.$store.state.language;
            this.keyId++;
            return this.language
        },
        selectedCardType: function()
        {
            alert(this.view);
            return this.view;
        }
        ,
  	    backDisabled: function(){
              if(this.offsetHistoryCursor == 0)
                return true;
                else
    	        return false;
        },
        forwardDisabled: function(){
           // if(this.offset)
    	    return  (this.offsetHistoryCursor >0 || this.offsetHistoryCursor ==0) && this.offset == "";
        }  
  },
    created() 
    {
        this.offsetHistory[0]="";
        this.table = "CardTypes";
        this.filter = '{TitleENG}!="Wildcards"';
        this.view = "Public";
       // getData(this);
    },
    mounted()
    {
        //while(this.calls>0){};
        
    }
}


</script>


