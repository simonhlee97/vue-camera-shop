<template>
  <div class="about">
  		<h1 class="about-content">About SimonLeicaShop</h1>
	    <p class="about-content">I love cameras and photography. I enjoy building projects related to photography.</p>
	    <p class="about-content">I used a javaScript framework called <a href="https://vuejs.org/" target="_blank">VueJS</a> to build this website.</p>
	    <p class="about-content">I used the sample spreadsheet from <a href="https://www.teoalida.com/database/digitalcameras/" target="_blank">Teoalida's website</a>, and used this <a href="http://beautifytools.com/excel-to-json-converter.php" target="_blank">converter</a> to convert the .xls file to JSON.</p>

	    <p class="about-content">I used the ridiculously easy <a href="https://surge.sh/">Surge.sh</a> to deploy this site.</p>

		<p class="about-content">Feel free to check out the <a href="https://github.com/simonhlee97/vue-camera-shop" target="_blank">Github repo</a> to see my code.</p>
  </div>
</template>

<style>
	.about {
		background-image: url('https://images.unsplash.com/photo-1579806159479-0a79dc3643ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');
		background-repeat: no-repeat;
  		background-size: cover;
  		height: 100vh;
	}
	.about-content {
		padding: 12px;
		/*width: 40%;*/
		/*margin: 10px 70% 10px 30%;*/
		color: white;
		background-color: rgba(0, 9, 26, 0.5);
	}
</style>