<template>
  <div class="store">
    
    <h1>Search Camera Database</h1>
    <input type="text" placeholder="Search Cameras" v-model="search" />
	<hr>

	<div class="flex-container">
		<FilterOptions style="margin:0 auto;" />
	    <div class="list-container">
	    	<table>
				<tr>
					<th>Brand</th>
					<th>Model</th>
					<th>Sensor</th>
					<th>Megapixels</th>
					<th>Price</th>
					<th>image</th>
				</tr>

				<tr v-for="item in filteredItems"  :key="item.id">
					<td><h4 v-rainbow>{{ item.brand | uppercase}}</h4></td>
				
			        <td><router-link :to="'product/' + item.id">{{ item.model }}</router-link></td>
			        
					<td>{{ item.sensor }}</td>
					<td>{{ item.pixels }}</td>
					<td>{{ item.price }}</td>
					<td><img src="https://picsum.photos/300/150" alt="cam" /></td>
				</tr>
	    		
	    	</table>

			
	    </div>
    </div>
    
  </div>
</template>


<script>
// import searchMixin from '../mixins/searchMixin'
import FilterOptions from '@/components/FilterOptions.vue'
import products from '../../public/db.json';

	export default {
		data() {
			return {
				items: products,
				search: ''
			}
		},
		components: {
			FilterOptions
		},
		computed: {
			filteredItems: function() {
				return this.items.filter((item) => {
					return item.brand.match(this.search)
				});
			}
		}
	}
			
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.flex-container {
	display: flex;
	flex-wrap: wrap;
}
.list-container {
	flex-basis: 720px;
	flex-grow: 1;
}
/*
.single-product {
	padding: 9px;
	margin: 10px 0;
	box-sizing: border-box;
	background: #eee;
	display: flex;
}  */

.background-image {
	width: 400px;
	height: 300px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 3px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
