<template>
<section id="cardtypes" class="post" style="float: left;clear: both;width:100%;text-align:center;">
<DataConnection :dataObject="this.dataObject" :key="'data'+keyId" />     

    <div style="margin: auto;width:100%;">
        <div id="CardFlow">    
            <section id="ctypes" class="post" style=" ">
                <div style="float:left;">
                    <div  v-for="cardtype in info" :key="cardtype.Id" style="height:120px;" class="content">                        
                        <div class="circle" :id="cardtype.fields.Filter" @click="getCards(cardtype.fields.TitleENG)" v-bind:style="{background:cardtype.fields.Color}" >{{ getLabel(cardtype.fields)}} </div>
                        <div class="circle" :id="cardtype.fields.Filter+'Assignment'" @click="getAssignments(cardtype.fields.TitleENG)" v-bind:style="{background:cardtype.fields.Color}" >{{ 'Intro assignment'}} </div>                        
                    </div>
                </div>
                <div >
                <div style="float:left;padding-top:120px;">
                    <div @click="getZoomInAssignment" class="circle" v-bind:style="{background:'#2e2554'}" id="zoom" >{{ 'Zoom in '}}  <i v-if="!zoomInEnabled" class="fas fa-lock"></i></div>
                </div>
                <div style="float:left;padding-top:120px;">
                    <div @click="getConnectTheDotsAssignment" class="circle" v-bind:style="{background:'#2e2552'}" id="connect" >{{ 'Connect'}} <i v-if="!connectTheDotsEnabled" class="fas fa-lock"></i></div>
                </div>
                <div style="float:left;padding-top:120px;">
                    <div @click="getCertificate" class="circle" v-bind:style="{background:'#2e2550'}" id="certificate">{{ 'Certificate'}} <i v-if="!certificateEnabled" class="fas fa-lock"></i></div>
                </div>
                </div>
            </section>
        </div>
    </div>
<!--
    
    -->
    </section>
</template>

<style>
#line{
  position:absolute;
  width:5px;
  background-color:grey;
}  

.circle
    {
        float:left;
        cursor: pointer;
        width:100px;
        height:100px;
        border-radius:50%;
        font-size:10px;
        color:#ffffff;
        line-height:100px;
        text-align:center;
        margin: 5px;    
    }


@media only screen and (max-width: 950px) {
.circle
    {
        width:150px;
        height:150px;
        font-size:14px;
        line-height:150px;  
    }
}
@media only screen and (max-width: 630px) {
.circle
    {
        float:left;
        cursor: pointer;
        width:100px;
        height:100px;
        font-size:11px;
        line-height:100px;
    }
}

@media only screen and (max-width: 500px) {
.circle
    {
        width:50px;
        height:50px;
        font-size:8px;
        line-height:8px;
        margin: 5px;
        padding-top: 16px;
    }
}
</style>

<script>
   

import DataConnection from '@/components/DataConnection.vue'


export default {
  name: 'CardFlow',
  components: {DataConnection},
   data() 
    {
    return {
        info: null,
        dataObject: 
        {
            table: "CardTypes",
            view: "PublicDiscovery",
            filter: null,
            fields: null,    
            page: null,
            paging: true,
            offset:0,
            cursor:0,
            startLoading:true,
            ready:false
        },  

        keyId:1,
        cardId:1,
        eindscript: "",
        eindscriptfinal:""
        }
    },
  
  props: {
        viewMode: null,
        cardtypes: null,
        language: null,
        cardTypeLabel: null,
        zoomColor: '#2e2554',
        cardFilter:null,
        zoomInEnabled:false,
        connectTheDotsEnabled:false,
        certificateEnabled:false        
    },
    methods:
    {
  
        getCards: function(filter)
        {
      
            this.$emit("changeCardDataObject",
            {
                table: "Cards",
                view: "Public",
                filter: '{TypeName}="'+filter+'"',
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            });
            //this.dataObjectCards.startLoading = true;
            //this.cardId++;
          // alert('{TypeName}="'+filter+'"');
        },
        getAssignments: function(filter)
        {
            
            this.$emit("changeCardDataObject",
            {
                table: "Assignments",
                view: "Public",
                filter: '{AssignmentName}="'+filter+' - Intro assignment"',
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            });            
        },        
        getZoomInAssignment: function(filter)
        {
            if(this.$store.state.assignments.length<3)
            {
                alert('You have to have completed all intro assignments first')
                return;
            }
            this.$emit("changeCardDataObject",
            {
                table: "Assignments",
                view: "PublicZoomIn",
                filter: null,
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            });            
        },
        getConnectTheDotsAssignment: function(filter)
        {
            if(this.$store.state.assignments.length<4)
            {
                alert('You have to have completed all intro assignments and one Zoom-in assignment first')
                return;
            }

            this.$emit("changeCardDataObject",
            {
                table: "Assignments",
                view: "PublicDots",
                filter: null,
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            });            
        },
        getCertificate: function(filter)
        {
            if(this.$store.state.assignments.length<7)
            {
                alert('You have to have completed all intro assignments, all zoom-in assignments and the connect the dots assignment first')
                return;
            }

            this.$emit("changeCardDataObject",
            {
                table: "Assignments",
                view: "PublicCertificate",
                filter: null,
                fields: null,
                page: null,
                paging: true,
                pageSize:10,
                offset: 0,
                cursor: 0,
                startLoading: false,
                ready:false
            });            
        },
        getLabel: function(cardType)
        {
            switch (this.$store.state.language)
            {
                case "NL":
                    return cardType.TitleNL;
                case "ENG":                   
                    return cardType.TitleENG;
                case "ESP":
                    return cardType.TitleESP;
                case "BUL":
                    return cardType.TitleBUL;                
            }
        },

   
    },
    computed:
    {

    },
    created() 
    {
       this.$parent.zoomInEnabled = this.$store.state.assignments.length>2;
       this.$parent.connectTheDotsEnabled = this.$store.state.assignments.length>3;
       this.$parent.certificateEnabled = this.$store.state.assignments.length>6;

    },
    updated()
    {
        

    }

}
</script>

