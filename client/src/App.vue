<template>
  <div id="app">
    <Header msg="header"></Header>
    <Home msg="home"></Home>
    <Footer msg="footer"></Footer>
  </div>
</template>

<script>
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

export default {
    'Header':Header,
    'Home':Home,
    'Footer':Footer
}
</script>

<style>
#app {
  margin:0;
  padding:0;
}
</style>
