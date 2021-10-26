
<template>
     <div id="app">
		 <DynamicLabelLoader :state="this" />
      <div id="wrapper">
				<!-- Main -->
					<div id="main">
						<div class="inner">
							
							<!-- Header -->
								<header id="header">
									<a href="index.html" class="logo"><strong><DynamicLabel label="Craft Your Future - Student and Teacher platform"  :key="'main'+getKey"/></strong></a>
									<ul class="icons">
										<!-- <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>-->
										<li><a href="https://www.facebook.com/craftyourfuture21" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
						
										<li><a href="https://www.instagram.com/craftyourfuture21/" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<!-- <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>		-->
                   						<!--<li><nav id="nav"><router-link to="/login"><div id="un">{{loginLabel}}</div></router-link></nav></li>-->
										<li>
											<a @click="setLanguage('ENG')" ><img src="images/united-kingdom.svg" class="flag"></a>
											<a @click="setLanguage('NL')" ><img src="images/netherlands.svg" class="flag"></a>
											<a @click="setLanguage('ESP')" ><img src="images/spain.svg" class="flag"></a>
											<a @click="setLanguage('BUL')" ><img src="images/bulgaria.svg" class="flag"></a>
										</li>
									</ul>
								</header>

              					<router-view/>
								  <div id="wrap">
								<footer id="footer"  style="float:left; clear: both;width:100%;">
									<div style="width:100%;text-align:center;padding:50px;">
									<p class="copyright">&copy; Craft Your Future</p>
									</div>
								</footer>
								</div>
						</div>


					</div>

				<!-- Sidebar -->
				<section>
					<div id="sidebar">
						<div class="inner">
							<div id="logo" style="width:100%;text-align:center">
							<img src="images/cyf-logo.png" style="max-width:100px; ">
							</div>
							<!-- Search 
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>
							-->
							<div id="cMenu" style="display:none;">

							</div>

							<!-- Menu -->
              				<div id="nav">
								<nav id="menu">
									<header class="major">
										<h2><DynamicLabel label="Menu"  :key="'menu'+getKey"/></h2>
									</header>
									<ul>
                        
										<li><router-link to="/"><DynamicLabel label="Home"  :key="'home'+getKey"/></router-link></li>
										<li><router-link to="/discover"><DynamicLabel label="Get started"  :key="'started'+getKey"/></router-link></li>							
										<li><router-link to="/knowledgebase" ><DynamicLabel label="Knowledge base"  :key="'base'+getKey"/></router-link></li>
										<li><router-link to="/tools" ><DynamicLabel label="Tools"  :key="'tools'+getKey"/></router-link></li>
										<li><router-link to="/teacher" ><DynamicLabel label="Teacher manual"  :key="'teacher'+getKey"/></router-link></li>
										<li><router-link to="/alliance" ><DynamicLabel label="Alliance"  :key="'alliance'+getKey"/></router-link></li>
										<li><router-link to="/blog" ><DynamicLabel label="Blog"  :key="'blog'+getKey"/></router-link></li>
									</ul>
								</nav>
              				</div>
						</div>
                	</div>
					</section>		

						</div>
            							<!-- Footer -->

					</div>

</template>
<style scoped>
.flag
{
	width:20px;
	height:20px;
	padding:1px;
}
</style>
<script>
//import something from "./assets/js/something.js"
//import "./assets/js/jquery.min.js"
import sideBar from "./assets/js/main.js"
import "./assets/css/main.css?fds=fsf"
import DynamicLabelLoader from '@/components/DynamicLabelLoader.vue'
import DynamicLabel from '@/components/DynamicLabel.vue'
//import "./assets/css/sss.css"


//import AccountInfo from "@/components/AccountInfo.vue";

export default {
	 data() {
		 return {
			 user: {},
			 loginLabel:'Login',
			 keyId:1,
		
		 }
   	},	   

  	mounted() {
    
    //alert('hier');
	sideBar();
  },
 components: {
   DynamicLabelLoader,
   DynamicLabel
 },

   methods: {
      	sideBar,
		setLanguage: function(lang)
		{
			this.$store.commit('setLanguage',lang);		
			this.keyId++;
			location.reload();
		}      
   },
   computed:
   {
	   getKey: function()
	   {
		return this.keyId;
	   }
   },
   created() 
    {
		
	if(localStorage.user)
    {
	  this.user = JSON.parse(localStorage.user);

	  if(this.user.Name)
	  {
		  this.loginLabel = this.user.Name;
	  }
    }
		
    }
}

</script>


