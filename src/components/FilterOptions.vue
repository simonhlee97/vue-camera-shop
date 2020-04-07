<template>
<div>
	<div class="search-options">
		<div class="search-brands">
			<h4>Search by Brand</h4>
			<form>
				<input class="searchby" type="checkbox" id="brand1" name="brand1" value="Canon">
				<label for="brand1"> Canon</label><br>
				<input class="searchby" type="checkbox" id="brand2" name="brand2" value="Fujifilm">
				<label for="brand2"> Fujifilm</label><br>
				<input class="searchby" type="checkbox" id="brand3" name="brand3" value="Nikon">
				<label for="brand3"> Nikon</label><br>
				<input class="searchby" type="checkbox" id="brand4" name="brand4" value="Sony">
				<label for="brand4"> Sony</label><br>
			</form>
		</div>
		<div class="search-prices">
			<h4>Search by Price</h4>
			<form>
				<input type="checkbox" id="price1" name="price1" value="0 - $299">
				<label for="price1">0 - $199</label><br>
				<input type="checkbox" id="price2" name="price2" value="$300 - $599">
				<label for="price2">$200 - $499</label><br>
				<input type="checkbox" id="price3" name="price3" value="$600 - $899">
				<label for="price3">$500 - $799</label><br>
				<input type="checkbox" id="price3" name="price3" value="$900 - $1199">
				<label for="price3">$900 - $1199</label><br>
				<input type="checkbox" id="price3" name="price3" value="$900 - $1199">
				<label for="price3">$1200 + </label><br><br>
			</form>
		</div>
		<div class="search-pixels">

			<h4>Search by Pixels</h4>

			<form>
				<input type="checkbox" id="pixel1" name="pixel1" value="< 10mp">
				<label for="pixel1">less than 10mp</label><br>
				<input type="checkbox" id="pixel2" name="pixel2" value="10.1 - 16.0 MP">
				<label for="pixel2">10.2 - 16.0 MP</label><br>
				<input type="checkbox" id="pixel3" name="pixel3" value="16.1 - 24 MP">
				<label for="pixel3">16.1 - 24 MP</label><br><br>
			</form>
		
		</div>

		<div class="search-weight">
			<h4>Search by Weight</h4>
			
			<form>
				<input type="checkbox" id="weight1" name="weight1" value="0 - 199 grams">
				<label for="weight1">0 - 199 grams</label><br>
				<input type="checkbox" id="weight2" name="weight2" value="200 - 400 grams">
				<label for="weight2">200 - 400 grams</label><br>
				<input type="checkbox" id="weight3" name="weight3" value="401 - 600 grams">
				<label for="weight3">401 - 600 grams</label><br><br>
			</form>
		</div>
	
	</div>

	<p><a href="#">Clear</a></p>

</div>
</template>

<script>
export default {

  name: 'FilterOptions',

  data () {
    return {
    	
    }
  }
}
</script>

<style scoped>

input[type=checkbox] {
    display: inline;
    margin-bottom: 0;
}
label {
    display: inline;
}
.search-options {
	display: flex;
	flex-wrap: wrap;
}
.search-options > div {
	flex-grow: 1;
	flex-basis: 200px;
}
</style>