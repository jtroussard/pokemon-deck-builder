<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavigationBar'
    }
</script>

<style scoped>
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #a88383;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #db4141;
  text-decoration: underline;
}
</style>