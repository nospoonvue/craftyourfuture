<template>
 <div id="CardTypes">    
   <DataConnection  :dataObject="this.dataObject" :key="key" />     
    <section id="cardtypes" class="post" style="">
                 <div  v-for="cardtype in info" :key="cardtype.Id" style="float: left;height:250px;" class="content">
            
            <div v-if="this.$store.state.language=='NL'" class="circle" @click="this.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleNL}} </div>
            <div v-if="this.$store.state.language=='ENG'" class="circle" @click="this.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleENG}} </div>
            <div v-if="this.$store.state.language=='ESP'" class="circle" @click="this.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleESP}} </div>
            <div v-if="this.$store.state.language=='BUL'" class="circle" @click="this.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleBUL}} </div>
     </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'CardTypes',
 data()
  {
      
 
      return{   
          info,
          keyId: 1,
          table: "CardTypes",
          view: "Public",
          page: null,
          paging: true,
          pageSize: 5,
          offset:0,        
          filter: null
      }
  },
  props: {
    parent: null,  
    cardtypes: null,
    language: null,
    },
    methods:
    {
      getCards : function(filter)
      {

      }
   
    }
}
</script>

