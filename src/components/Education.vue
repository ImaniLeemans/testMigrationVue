<template>
  <div class="education">
    <h1 class="title">School Education</h1>
    <p class="description">Look at our subjects and enroll in a special workshop if you so desire :)</p>
    <div class="subjects">
      <div v-for="subject in subjects" :key="subject.id" class="subject-card">
        <div class="subject-header" @click="toggleCollapse(subject)">
          <h2>{{ subject.name }}</h2>
          <button class="learn-more-button">{{ subject.collapsed ? 'Learn More' : 'Collapse' }}</button>
        </div>
        <div v-if="!subject.collapsed" class="subject-details">
          <p>{{ subject.description }}</p>
          <button v-if="!subject.enrolled" @click="enroll(subject.id)" class="enroll-button">Enroll</button>
          <p v-if="subject.enrolled" class="enrolled-message">You are enrolled in {{ subject.name }}!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationPage',
  data() {
    return {
      subjects: [
        { id: 1, name: 'Mathematics', description: 'Explore the world of numbers and equations. Mathematics, the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects. It deals with logical reasoning and quantitative calculation, and its development has involved an increasing degree of idealization and abstraction of its subject matter. Since the 17th century, mathematics has been an indispensable adjunct to the physical sciences and technology, and in more recent times it has assumed a similar role in the quantitative aspects of the life sciences.', collapsed: true, enrolled: false },
        { id: 2, name: 'Science', description: 'Discover the wonders of the natural world. Science, any system of knowledge that is concerned with the physical world and its phenomena and that entails unbiased observations and systematic experimentation. In general, a science involves a pursuit of knowledge covering general truths or the operations of fundamental laws.\n' +
              '\n' +
              'Science can be divided into different branches based on the subject of study. The physical sciences study the inorganic world and comprise the fields of astronomy, physics, chemistry, and the Earth sciences. The biological sciences such as biology and medicine study the organic world of life and its processes. Social sciences like anthropology and economics study the social and cultural aspects of human behaviour.', collapsed: true, enrolled: false },
        { id: 3, name: 'History', description: 'Learn about past events and civilizations. History (derived from Ancient Greek ἱστορία (historía) \'inquiry; knowledge acquired by investigation\')[1] is the systematic study and documentation of the human past.[2][3]\n' +
              '\n' +
              'The period of events before the invention of writing systems is considered prehistory.[4] "History" is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events. Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts, and ecological markers.[5] History is incomplete and still has debatable mysteries.\n' +
              '\n' +
              'History is an academic discipline which uses a narrative to describe, examine, question, and analyze past events, and investigate their patterns of cause and effect.[6][7] Historians debate which narrative best explains an event, as well as the significance of different causes and effects. Historians debate the nature of history as an end in itself, and its usefulness in giving perspective on the problems of the present.', collapsed: true, enrolled: false },
        // Add more educational subjects here!
      ],
    };
  },
  methods: {
    toggleCollapse(subject) {
      subject.collapsed = !subject.collapsed;
    },
    enroll(subjectId) {
      const subject = this.subjects.find(s => s.id === subjectId);
      subject.enrolled = true;
    },
  },
};
</script>

<style scoped>
/* Styles for collapsed cards */
.subject-card {
  margin-bottom: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.subject-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.enroll-button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

.enrolled-message {
  font-style: italic;
  color: #27ae60;
}

.subject-details {
  padding: 16px;
}

/* Additional styling as needed */
</style>
