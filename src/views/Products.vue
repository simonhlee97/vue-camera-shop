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
					<th>Model</th>
					<th>Total MegaPixels</th>
					<th>Sensor Type</th>
					<th>Max Resolution</th>
					<th>Crop Factor</th>
					<th>Optical Zoom</th>
					<th>photo</th>
				</tr>

				<tr v-for="item in filteredItems"  :key="item.id">
					<td><router-link :to="'product/' + item.id"><h4 v-rainbow>{{ item.Model}}</h4></router-link></td>
			        <td>{{ item.Totalmegapixels }}</td>
					<td>{{ item.sensor_type }}</td>
					<td>{{ item.max_image_res }}</td>
					<td>{{ item.crop_factor }}</td>
					<td>{{ item.optical_zoom }}</td>
					<td><img :src="item.image" alt="image" /></td>

				</tr>
	    	</table>
	    </div>
	    
    </div>
    <div class="pagination">
	    <span style='font-size:30px;'>&#8701; prev</span> <span style='font-size:30px;'>next &#8702;</span>
	</div>
    
  </div>
</template>


<script>
// import searchMixin from '../mixins/searchMixin'
import FilterOptions from '@/components/FilterOptions.vue'
import products from '../../public/leica.json';

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
					return item.Model.match(this.search)
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
#camThumb {
	height: 48px;
	width: auto;
}


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
  border: 1px solid #000;
  text-align: left;
  padding: 3px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
