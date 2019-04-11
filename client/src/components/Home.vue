<template>
	<div id="home" class="container">
		<div class="row">
			<div class="col-sm-4">
			<h3>{{msg}}</h3>
			<p>Lorem ipsum dolor..</p>
			<p>Ut enim ad..</p>
			</div>
			<div class="col-sm-4">
			<h3>{{msg}}</h3>
			<p>Lorem ipsum dolor..</p>
			<p>Ut enim ad..</p>
			</div>
			<div class="col-sm-4">
			<h3>{{msg}}</h3> 
			<p>Lorem ipsum dolor..</p>
			<p>Ut enim ad..</p>
			</div>
		</div>
	</div>
<!--	
  <div class="hello">
    <h6>{{ msg }}</h6>
  </div>
-->  
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>