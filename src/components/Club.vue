<template>
  <div class="club-events">
    <h1 class="title">🎉 Exciting Club Events 🎊</h1>
    <p class="description">Discover fun activities, workshops, and gatherings!</p>
    <div class="event-list">
      <div v-for="event in clubEvents" :key="event.id" class="event-card">
        <img :src="event.imageUrl" alt="Club Event">
        <h2>{{ event.name }}</h2>
        <p>{{ event.description }}</p>
        <button @click="toggleDetails(event)" class="learn-more-button">{{ event.showDetails ? 'Collapse' : 'Learn More' }}</button>
        <div v-if="event.showDetails" class="event-details">
          <p>{{ event.details }}</p>
          <!-- Add more event-specific details here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClubEventsPage',
  data() {
    return {
      clubEvents: [
        {
          id: 1,
          name: 'Dance Night',
          description: 'Get your groove on with JustDance!',
          details: 'Join us for a night of dancing, music, and good vibes.',
          imageUrl: 'https://www.theloadout.com/wp-content/uploads/2021/07/just-dance-unlimited-song-list.jpeg',
          showDetails: false,
        },
        {
          id: 2,
          name: 'Art Workshop',
          description: 'Unleash your creativity!',
          details: 'Learn painting, sculpture, and more from local artists.',
          imageUrl: 'https://i.pinimg.com/originals/22/c7/3b/22c73be30ab4d19715e07f9c404b6be6.jpg',
          showDetails: false,
        },
        // Add more exciting club events here!
      ],
    };
  },
  methods: {
    toggleDetails(event) {
      event.showDetails = !event.showDetails;
    },
  },
};
</script>

<style scoped>
.club-events {
  padding: 20px;
  background-color: #eeebeb;
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

.event-list {
  display: flex;
  flex-wrap: wrap;
}

.event-card {
  flex: 1;
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.event-card img {
  max-width: 100%;
  border-radius: 4px;
}

.event-card h2 {
  margin-top: 8px;
}

.event-details {
  padding: 16px;
}

.learn-more-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* Additional styling as needed */
</style>
