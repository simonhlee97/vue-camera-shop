<template>
  <div id="single-product">
    
    <article>
    	<div v-for="product in getData($route.params.id)" :key="product.id">
			<table class='camera-specs'>
				<tr>
					<th>Leica {{ product.Model }}</th>
					<th><img id="leica-cam" :src="product.image" alt="image" /></th>
				</tr>
				<tr>
					<td>Year: {{ product.Year }}</td>
					<td>Weight: {{ product.Weight }}</td>

				</tr>
				<tr>
					<td>Viewfinder: {{ product.Viewfinder }}</td>
					<td>Screen size: {{ product.screen_size }}</td>
				</tr>
				<tr>
					<td>Screen Resolution: {{ product.screen_resolution }}</td>
					<td>Max Shutter Speed: {{ product.max_shutter_speed }}</td>
				</tr>
				<tr>
					<td>ISO: {{ product.ISO }}</td>
					<td>Metering: {{ product.Metering }}</td>
				</tr>
			</table>

	      <p><router-link to="/products">back to list</router-link></p>

	      



	    </div>


    	<!-- <h1>{{ item.brand }}</h1>
    	<h3>{{ item.model }}</h3>
    	<p>pixels: {{ item.pixels }}</p> -->
    </article>
    
  </div>
</template>



<script>
import products from '../../public/leica.json';

export default {
	name: 'SingleProduct',
	data() {
		return {
		  products: products
		}
	},
	methods: {
		getData(id) {
		  let data = this.products
		  return data.filter(item => {
		    return item.id == id
		  })
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.camera-specs {
	border: 1px solid black;
	border-collapse: collapse;
	width: 80%;
	margin: 0 auto;
	text-align: left;
}

th, td {
	padding: 8px;
	border: 1px solid black;

}
tr:nth-child(even) {background-color: #f2f2f2;}
h3 {
  margin: 40px 0 0;
}
#leica-cam {
	max-width: 360px;
	height: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
