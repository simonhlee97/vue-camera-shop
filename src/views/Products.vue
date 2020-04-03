<template>
  <div class="store">
    
    <h1>Search Camera Database</h1>
    <input type="text" placeholder="Search Cameras" v-model="search" />
	<hr>
    <div class="cameras-listing">
		<h1>All Cameras</h1>

		<div v-for="item in filteredItems" class="single-product" :key="item.id">
		        <router-link :to="'product/' + item.id">
					<h2 v-rainbow>{{ item.brand | uppercase}}</h2>
		        </router-link>



			<p>{{ item.model }}</p>
			<p>{{ item.sensor }}</p>
			<p>{{ item.pixels }}</p>
			<p>{{ item.price }}</p>
			<img src="https://picsum.photos/400/300" alt="cam" />
			
		</div>

    	<!-- <SingleProduct /> -->
    </div>
    
    <!-- <li v-for="ninja in ninjas">
    	<h2>{{ninja.name}} - {{ninja.specialty}}</h2>
    </li> -->
    
  </div>
</template>


<script>
// import searchMixin from '../mixins/searchMixin'

// import axios from 'axios';
import products from '../../public/db.json';

	// import SingleProduct from '@/views/SingleProduct.vue';

	export default {
		// props: ['cameras', 'ninjas'],
		data() {
			return {
				items: products,
				search: ''
			}
		},
		computed: {
			filteredItems: function() {
				return this.items.filter((item) => {
					return item.brand.match(this.search)
				});
			}
		}
// https://github.com/simonhlee97/demo/blob/master/db.json
		// created() {
		// 	axios.get('https://github.com/simonhlee97/demo/db.json')
			
		// 	.then( res => {
		// 	// // console.log( res.data.slice(0,10) );
		// 	console.log(res);
		// 	// // JSON responses are automatically parsed.
		// 	// // this.posts = res.data.slice(0,10);
		// 	this.posts = res.data;
		// 	})
		//     .catch(e => {
		// 		this.errors.push(e)
		//     })
		// }
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
