<template>
 <div id="CardTypes">    
    <section id="cardtypes" class="post" style="">
        <div  v-for="cardtype in cardtypes" :key="cardtype.Name" style="float: left;height:250px;" class="content">
            <div class="circle" @click="parent.getCards(cardtype.fields.Filter)" v-bind:style="{background:cardtype.fields.Color}" >{{ cardtype.fields.TitleNL}} </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'CardTypes',
  props: {
    parent: null,  
    cardtypes: null
    },
    methods:
    {
   
    }
}
</script>

