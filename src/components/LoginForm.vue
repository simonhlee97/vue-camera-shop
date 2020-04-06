<template>
	
	<div id="login-form-wrapper">
		<form id='loginform'>
			<div>
				<h1 class="formlabels" id='signin'>Sign in</h1>

				<label class="formlabels">U S E R N A M E:</label>
				<input class="login-input" id="username" type="text" placeholder="username" />

				<label class="formlabels">P A S S W O R D:</label>
				<input class="login-input" id="password" type="password" placeholder="password" />
			
				<br>
				
				<a href="#"><input class="login-input" id="btn-submit" type="submit" value="Sign in" /></a>
			</div>

			<p><a href="#" style="color:white;" >No Account?</a></p>
			<p><a href="#" style="color:white;" >Forgot Password?</a></p>


		</form>
		
	</div>
</template>


<script>
import axios from 'axios';

export default {
	data() {
		return {
			
		}
	}
}
</script>





<style>
	#loginform {
		padding-top: 200px;
		border-radius: 10px;
		margin: 20px auto;
		background-image: url('https://images.unsplash.com/photo-1523867841548-54f0cf07f3d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
		background-repeat: no-repeat;
		background-position: center;
  		background-size: cover;
  		height: 70vh;
  		color: white;
  		width: 67%;
	}
	
	#signin {
		background-color: rgba(0, 9, 26, 0.5);
		width: 90%;
		margin: 1em auto;
	}
	label.formlabels {
		display: inline-block;
		background-color: rgba(0, 9, 26, 0.5);
		margin: 10px 0 10px;
	}
	.login-input {
		display: block;
		width: 21em;
		margin: auto;
		border-radius: 10px;
		padding: 8px;
	}
	#btn-submit {
		width: 21em;
		background-color: rgba(0, 9, 26);
		color: white;
		border: 0px;
		border-radius: 10px;
	}
	#btn-submit:hover {
		cursor: pointer;
		background-color:white;
		color: black;
	}

	
	h3 {
		margin-top: 10px;
	}
	input {
		margin-bottom: 5em;
	}
</style>