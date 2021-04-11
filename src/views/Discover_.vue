<template>
 <div id="Discover">
    
    <Status class="StatusShow" v-bind:img="status" v-show="loading" />

    <DynamicWebText :parent="this" v-bind:label="dynamicLabel" v-bind:language="getLanguage" :key="'intro'+keyId"  />

    <section id="cardtypes" class="post" style="float: left;clear: both;width:100%;text-align:center;">
        <div style="margin: auto;width:100%;">
             <CardFlow :cardtypes="cardtypes" :parent="this" v-bind:language="getLanguage"/>
            <!--
        <div  v-for="cardtype in cardtypes" :key="cardtype.Id" style="float: left;" >
            <div v-if="showallcardtypes && getLanguage == 'NL'" class="circle" @click="getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleNL}} </div>
            <div v-if="showallcardtypes && getLanguage == 'ENG'" class="circle" @click="getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleENG}} </div>
            <div v-if="showallcardtypes && getLanguage == 'ESP'" class="circle" @click="getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleESP}} </div>
            <div v-if="showallcardtypes && getLanguage == 'BUL'" class="circle" @click="getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleBUL}} </div>
            -->
           <!-- <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getCards(cardtype.fields.Filter)"          v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.Name}} </div>-->
           <!--
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getCardTypes()"    v-bind:style="{background:cardtype.fields.Color}" ><DynamicLabel :label="'All card types'" :key="'key1'+keyId" /></div>
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getAssignments('Intro assignment')"    v-bind:style="{background:cardtype.fields.Color}" ><DynamicLabel :label="'Intro assignments'" :key="'key2'+keyId" /></div>            
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getAssignments('Zoom in assignment')"    v-bind:style="{background:zoomincolor}" ><DynamicLabel :label="'Zoom in'" :key="'key3'+keyId" /><br/></div>
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getAssignments('Connect the dots')"    v-bind:style="{background:dotscolor}" ><DynamicLabel :label="'Connect the dots'" :key="'key4'+keyId" /><br/></div>
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getTools()"    v-bind:style="{background:cardtype.fields.Color}" ><DynamicLabel :label="'Tools'" :key="'key5'+keyId" />Tools</div>
            <div v-if="cardtype.fields.Filter==view"  class="circle" @click="getTools()"    v-bind:style="{background:cardtype.fields.Color}" ><DynamicLabel :label="'Knowledge base'" :key="'key6'+keyId" /></div>
        </div>
        -->
        </div>
    </section>

    <Cards :info="info" :key="keyId" />
    
    <section class="post">
    <div class="content"  style="float: left;clear: both;width:100%;text-align:center;padding:20px;" v-if="info">     
        <p><button  :disabled='backDisabled' v-on:click="backward">previous page</button> | <button  :disabled='forwardDisabled' v-on:click="forward">next page</button></p>
    </div>
    </section>
</div>
</template>


<style >
/*@import url('https://fonts.googleapis.com/css2?family=Goldman&display=swap');*/
@import url('https://use.typekit.net/mqh8lqg.css');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');


</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'
import Cards from '@/components/Cards.vue'
import CardFlow from '@/components/CardFlow.vue'
import DynamicWebText from '@/components/DynamicWebText.vue'
import DynamicLabel from '@/components/DynamicLabel.vue'
import VueMarkdown from 'vue-markdown'

     function adjustLine(fromId, toId, lineId){
        var from = document.getElementById(fromId);    
        var to = document.getElementById(toId);
        var line = document.getElementById(lineId);

        var fT = from.offsetTop  + from.offsetHeight/2;
        var tT = to.offsetTop    + to.offsetHeight/2;
        var fL = from.offsetLeft + from.offsetWidth/2;
        var tL = to.offsetLeft   + to.offsetWidth/2;
        
        var CA   = Math.abs(tT - fT);
        var CO   = Math.abs(tL - fL);
        var H    = Math.sqrt(CA*CA + CO*CO);
        var ANG  = 180 / Math.PI * Math.acos( CA/H );

        if(tT > fT){
            var top  = (tT-fT)/2 + fT;
        }else{
            var top  = (fT-tT)/2 + tT;
        }
        if(tL > fL){
            var left = (tL-fL)/2 + fL;
        }else{
            var left = (fL-tL)/2 + tL;
        }

        if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
            ANG *= -1;
        }
        top-= H/2;

        line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
        line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
        line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
        line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
        line.style["-transform"] = 'rotate('+ ANG +'deg)';
        line.style.top    = top+'px';
        line.style.left   = left+'px';
        line.style.height = H + 'px';
        }

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
    'pageSize': viewStatus.pageSize,
    'offset': viewStatus.offset
}

if(viewStatus.filter)
{    
    settings.filter  = viewStatus.filter; 
}

const formData = new FormData();
formData.append('data', JSON.stringify(settings));
formData.append('action', 'view');

viewStatus.loading = true;
viewStatus.info = null;
await axios.post (viewStatus.$baseUrl, formData, config)
        .then(response => 
        {
            //alert('hi');
            if(viewStatus.table == "CardTypes")
            {
                viewStatus.cardtypes = response.data.records;
            }
            else
            {
                 viewStatus.info = response.data.records;
                
            }
           
            if(response.data.offset)
            {
                viewStatus.offset = response.data.offset;
                viewStatus.ready = true;
            
            }
            else
            {
                viewStatus.offset = "";
                
            }
            viewStatus.loading = false;
            viewStatus.callReceived();
           
  

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
    name: "cards",
    components: {Status, VueMarkdown, Cards, DynamicWebText, DynamicLabel, CardFlow},

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
        offset: "",
        offsetHistoryCursor: 0,
        pageSize: 8,
        offsetHistory: [],  
        keyId:1,
        dynamicLabel: 'DiscoverIntro',
        calls:2
        }
    },
    methods:
    {
        callReceived: function()
        {
            this.calls--;
            if(calls==0)adjustLine("zoom", "connect","line");
             
        },
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
        getData(this);
    },
    mounted()
    {
        //while(this.calls>0){};
        
    }
}


</script>


