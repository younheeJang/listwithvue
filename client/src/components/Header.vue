<template>
<!--
	<div class="header">
    <h6>{{ msg }}</h6>
		<b-button>Button</b-button>
		<b-button variant="danger">Button</b-button>
		<b-button variant="success">Button</b-button>
		<b-button variant="outline-primary">Button</b-button>
    </div>
-->	
	<div id="header" class="jumbotron text-center">
		<h6>{{msg}}</h6>
		<router-link to="/home" class="btn btn-info menu">Home</router-link>
        <router-link to="/lists" class="btn btn-info menu">Lists</router-link>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style></style>