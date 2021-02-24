<template>
   <section id="allcards" class="post" style="clear: both;">        
        <div id="" class="post" v-for="item in info" :key="item.id" style="float: left;">
            <div class="content"  >
                <br/>
               <div class="flip-card">
                    <div class="flip-card-inner">
                        <div  v-bind:class="item.fields.css + ' flip-card-front'" >
                            <div class="head-and-text">
                            <div v-bind:class="item.fields.css + ' card-content front-card'">
                                <div style="text-align:right;padding-right:10px;padding-top:5px;font-size:1.8em;color:#000000;">                   
                                    {{ item.fields.TypeName[0] }}
                                </div>
                                <div style="text-align:left;padding-top:52px;padding-left:10px;font-size:2em;color:#ffffff; line-height: 90%;">                    
                                {{ item.fields.TitleNL }}
                                </div>
                            </div>
                            <img v-bind:src="item.fields.Photos[0].url" v-bind:alt="item.fields.Title" style="width:100%" />
                        
                            </div>
                            <div v-bind:class="item.fields.css" style="text-align:left;padding-left:15px;padding-top:8px;font-size:1em;"> 
                                {{ item.fields.Id }}
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="head-and-text-back">
                                <div v-bind:class="item.fields.css + ' card-content back-card'" style="display: table; overflow: hidden;width:100%">
                                    <div style="display: table-cell; vertical-align: middle;text-align:center;padding-top:3px;padding-left:3px;font-size:1.8em;color:#ffffff; line-height: 85%;">                    
                                    {{ item.fields.TitleNL }}
                                    </div>
                                </div>
                                <div style="text-align:left;padding-top:5px;padding-left:5px;padding-right:5px;font-size:.9em;color:#000000; font-family:'Comfortaa';height:150px; word-break: normal;">                    
                                    {{ item.fields.TextNL }}
                                </div>

                                <iframe width="100%" height="137px" v-bind:src="item.fields.YoutubeMovie" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
                                <div style="padding:12px;" >
                                    <div class="" v-for="(source, index) in item.fields.SourcesUrls" :key="source.Title" style="float:left;" >                         
                                        <a v-bind:href="item.fields.SourcesUrls[index]"  target="_blank" style="text-decoration: none;border:0;" > <img src="images/link.png" :onmouseout="mouseOutSource(item.fields.Title)" :onmouseover="mouseOverSource(item.fields.Title, item.fields.SourceTitles[index])"  v-bind:alt="item.fields.SourceTitles[index]" style="margin:1px;" /></a>
                                    </div>
                                </div>
                                <div v-bind:class="item.fields.css" style="margin-top:55px;height:35px; border-radius: 0 0 15px 15px;padding:6px;" :id="item.fields.Title" > </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped>

@import url('https://use.typekit.net/mqh8lqg.css');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
.circle
    {
        float:left;
        cursor: pointer;
        width:200px;
        height:200px;
        border-radius:50%;
        font-size:18px;
        color:#ffffff;
        line-height:200px;
        text-align:center;
        margin: 5px;    
    }

.flip-card {

  margin: 10px;
  width: 300px;
  max-width: 100%;
  height: 455px;
  font-size: .7em;
  border-radius: 0 0 15px 15px;
  
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}    

@media only screen and (max-width: 500px) {

.flip-card 
    {
        margin: 5px;
        width: 270px;
        max-width: 100%;
        height: 455px;
        font-size: .7em;
        border-radius: 0 0 15px 15px;

        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }  

}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.front-card{
    height: 148px;
 
    padding-top: 3px;;
}
.back-card{
    height: 48px;

    padding-top: 3px;;
}

.card-content{
    border-radius: 15px 15px 0 0;
    font-family: "sui-generis",sans-serif;;
}
.head-and-text{
    height: 410px;
}
.head-and-text-back{
    height: 380px;
}
.craft{

    background-color:#8e4e9d;
}
.tech-trend{
    background-color:#f39322;
}
.circular{
    background-color:#95b535;
}
.wild{
    background-color:#445269;
}
.front-text{
padding: 1em;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
    border-radius: 25px;
  position: absolute;
  width: 100%;
  height: 100%;
  
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {

}

/* Style the back side */
.flip-card-back {
  background-color: rgb(212, 209, 209);
  color: white;
  transform: rotateY(180deg);
}
</style>
<script>
export default {
  name: 'Cards',
  props: {
    info: null
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
        }  
    }
}
</script>
