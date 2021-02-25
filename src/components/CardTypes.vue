<template>
 <div id="CardTypes">    
    <section id="cardtypes" class="post" style="">
        <div  v-for="cardtype in cardtypes" :key="cardtype.Id" style="float: left;height:250px;" class="content">
            <div v-if="language=='NL'" class="circle" @click="parent.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleNL}} </div>
            <div v-if="language=='ENG'" class="circle" @click="parent.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleENG}} </div>
            <div v-if="language=='ESP'" class="circle" @click="parent.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleESP}} </div>
            <div v-if="language=='BUL'" class="circle" @click="parent.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleBUL}} </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'CardTypes',
  props: {
    parent: null,  
    cardtypes: null,
    language: null,
    },
    methods:
    {
   
    }
}
</script>

