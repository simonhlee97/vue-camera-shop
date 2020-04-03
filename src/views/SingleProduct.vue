<template>
  <div id="single-product">
    
    <article>
    	<div v-for="product in getData($route.params.id)" :key="product.id">
	      <p>{{ product.brand }}</p>
	      <p>{{ product.model }}</p>
	      <p>{{ product.sensor }}</p>
	      <p>{{ product.pixels }}</p>

	    </div>


    	<!-- <h1>{{ item.brand }}</h1>
    	<h3>{{ item.model }}</h3>
    	<p>pixels: {{ item.pixels }}</p> -->
    </article>
    
  </div>
</template>



<script>
import products from '../../public/db.json';

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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
