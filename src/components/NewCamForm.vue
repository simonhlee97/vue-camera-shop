<template>
	
	<div id="add-camera">
		<form v-if="!submitted">
			<div class="col-sm-8">
				<label>Brand:</label>
				<input type="text" placeholder="brand" v-model.lazy="camera.brand" />
				<label>Model:</label>
				<input type="text" placeholder="model" v-model.lazy="camera.model" />
				<label>Megapixels:</label>
				<input type="text" placeholder="megapixels" v-model.lazy="camera.megapixels" />
				<label>Sensor:</label>
				<input type="text" placeholder="sensor type" v-model.lazy="camera.sensor" />
			</div>

			<!-- <label for="author">Author</label>
			<select v-model="blog.author">
				<option value="Orwell">Orwell</option>
				<option value="Hemingway">Hemingway</option>
				<option value="Gladwell">Gladwell</option>

			</select> -->

			<div>
				<button v-on:click.prevent="submit">Add Camera</button>
			</div>
		</form>

		<div v-if="submitted">
			<h3>Thanks for adding a Camera</h3>
		</div>

		<div id="preview">
			<h3>Preview Camera</h3>
			<p>Brand: {{camera.brand}}</p>
			<p>Model: {{camera.model}}</p>
			<p>Megapixels: {{camera.megapixels}}</p>
			<p>Sensor: {{camera.sensor}}</p>
		</div>
		
	</div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
    	camera: {
    		brand: '',
    		model: '',
    	},
		errors: [],
		submitted: false
    }
  },
	methods: {
	  	submit() {
	  		axios.post(`http://jsonplaceholder.typicode.com/posts`, {
				title: this.camera.brand,
				body: this.camera.model,
				userId: 1,
	    	})
	    	.then(response => {
	    		console.log(response.data);
				this.submitted = true;
	    	})
	    	.catch(e => {
	      		this.errors.push(e)
	    	})
	  	}

	// methods: {
	// 	submit: function() {
	// 		this.$http.post('http://jsonplaceholder.typicode.com/posts', {
	// 			title: this.camera.brand,
	// 			body: this.camera.model,
	// 			userId: 1,
	// 		}).then(function(data) {
	// 			console.log(data);
	// 			this.submitted = true;
	// 		})
	// 	}
	}
}
</script>





<style>
	#add-camera {
		margin: 20px auto;

	}
	label {
		display: block;
		margin: 20px 0 10px;
	}
	input[type="text"] {
		display: block;
		width: 50%;
		margin: 0 auto;
		padding: 8px;
	}
	#preview {
		padding: 10px 20px;
		border: 1px dotted #ccc;
		margin: 30px 0;
	}
	h3 {
		margin-top: 10px;
	}
</style>