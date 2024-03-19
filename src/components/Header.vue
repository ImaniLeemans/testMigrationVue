<template>
  <div class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/books" class="nav-link">Books</router-link>
    <router-link to="/education" class="nav-link">Education</router-link>
    <router-link to="/club" class="nav-link">Club</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.navbar {
  background-color: #378885;
  overflow: hidden;
}

.nav-link {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #ddd;
  color: black;
}
</style>
