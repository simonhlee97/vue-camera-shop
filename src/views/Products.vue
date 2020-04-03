<template>
  <div class="store">
    
    <h1>Search Camera Database</h1>
    <input type="text" placeholder="Search" />
	<hr>
    <div class="cameras-listing">
		<h1>All Cameras</h1>
		<div v-for="post in posts" class="single-product">
			<h2 v-rainbow>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>

    	<!-- <SingleProduct /> -->
    </div>
    <hr>
    
    <!-- <li v-for="ninja in ninjas">
    	<h2>{{ninja.name}} - {{ninja.specialty}}</h2>
    </li> -->
    
  </div>
</template>


<script>
import axios from 'axios';

	// import SingleProduct from '@/views/SingleProduct.vue';

	export default {
		// props: ['cameras', 'ninjas'],
		data() {
			return {
				posts: [],
				errors: []
				// ninjas: [
				// 	{name: 'Ryu', specialty: 'Vuetify'},
				// 	{name: 'Ken', specialty: 'Uppercuts'},
				// 	{name: 'Chun Li', specialty: 'Hurricane Kicks'}
				// ]
			}
		},
		created() {
			// axios.get('http://jsonplaceholder.typicode.com/posts')
			axios.get('https://github.com/simonhlee97/vue-camera-shop/blob/master/src/assets/cameras.json')
			.then( res => {
				// console.log( res.data.slice(0,10) );
				console.log(res);
				// JSON responses are automatically parsed.
				// this.posts = res.data.slice(0,10);
				this.posts = res.data;

		    })
		    .catch(e => {
				this.errors.push(e)
		    })
		}
	}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.single-product {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>
