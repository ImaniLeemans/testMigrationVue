<template>
  <div class="home">
    <h1 class="title">Welcome to Our Club Website with VUE 2!</h1>
    <p class="description"> Vue2 might be end of life, but our club certainly is not.</p>
    <div class="animal-gallery">
      <div v-for="animal in animals" :key="animal.id" class="animal-card">
        <p>{{ animal.name }}</p>

        <img :src="animal.imageUrl" alt="Cute Animal">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      animals: [
        { id: 1, name: 'Fluffy Fox', imageUrl: 'https://randomfox.ca/images/1.jpg' },
        { id: 2, name: 'Playful Fox', imageUrl: 'https://randomfox.ca/images/2.jpg' },
        { id: 3, name: 'Curious Fox', imageUrl: 'https://randomfox.ca/images/3.jpg' },
        { id: 4, name: 'Alert Fox', imageUrl: 'https://randomfox.ca/images/4.jpg' },
        // Add more adorable foxes here!
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
}

.description {
  font-style: italic;
  color: #555;
}

.animal-gallery {
  display: flex;
  flex-wrap: wrap;
}

.animal-card {
  height: fit-content;
  flex: 1;
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.animal-card img {
  max-width: 100%;
  max-height: 70%;
  border-radius: 4px;
}

.animal-card p {
  margin-top: 8px;
}
</style>
