<template>
 <div id="Knowledgebase">
    
    <Status class="StatusShow" v-bind:img="status" v-show="loading" />
    <DynamicWebText :label="'KBIntro'" v-bind:language="getLanguage" :key="keytest"/>
    <CardTypes :cardtypes="cardtypes" v-bind:language="getLanguage"/>
    <Cards :info="info" />
   
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

.circle
    {
    cursor: pointer;
    width:250px;
    height:250px;
    border-radius:50%;
    font-size:20px;
    color:#ffffff;
    line-height:250px;
    text-align:center;
    margin: 5px;    
    }


</style>

<script>
import axios from 'axios';
import Status from '@/components/Status.vue'
import CardTypes from '@/components/CardTypes.vue'
import Cards from '@/components/Cards.vue'
import DynamicWebText from '@/components/DynamicWebText.vue'

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
    'pageSize': viewStatus.pageSize,
    'offset': viewStatus.offset,
    'fields': viewStatus.fields
    
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
    components: {Status, VueMarkdown, CardTypes, Cards, DynamicWebText},

    data() 
    {
    return {
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
        language: null,
        keytest:1,
        cardTypeLable: ""        
        }
    },
    methods:
    {

        getCardTypes: function()
        {
            this.table = "CardTypes";
            this.view = "Public";
          // this.fields = ['Name','Color'];
        },
        getCards: function(cardtype) 
        {
            this.view = cardtype;
            this.table = "Cards";
            //this.cardTypeLable = cardTypeLable
            //this.fields = ['Id','Title','Subtitle','TextENG','BackText','TypeName','css','Photos','Hash tags','SourcesUrls','YoutubeMovie','SourceTitles'];
            this.offset = 0;
            getData(this);
           
        },    
        loadCards: function() 
        {
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
        getLanguage: function () {
            this.language = this.$store.state.language;
            this.keytest++;
            return this.language
        },
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
        this.view = "Public";       
        getData(this);
    },
}


</script>


