<template>
  <div class="books">
    <h1 class="title">My Book Collection</h1>
    <ul class="book-list">
      <li v-for="(book, index) in books" :key="book.id" class="book-item">
        {{ book.title }}
        <button @click="removeBook(index)" class="remove-button">Remove</button>
      </li>
    </ul>
    <input v-model="newBookTitle" @keyup.enter="addBook" placeholder="Add a new book" class="input-field">
    <button @click="addBook" class="add-button">Add Book</button>
    <p v-if="books.length === 0" class="empty-message">No books in the collection.</p>
  </div>
</template>

<script>
export default {
  name: 'BooksPage',
  data() {
    return {
      books: [
        { id: 1, title: 'Twin Crowns' },
        { id: 2, title: 'A court of thorns and roses' },
        { id: 3, title: 'Night bane' },
        { id: 4, title: 'A whole new world' },
        { id: 5, title: 'Fourth Wing' },
        { id: 6, title: 'Lost Souls' },
        { id: 7, title: 'A throne of glass' },
      ],
      newBookTitle: '', // For adding new books
    };
  },
  methods: {
    addBook() {
      if (this.newBookTitle.trim()) {
        this.books.push({
          id: Date.now(),
          title: this.newBookTitle.trim(),
        });
        this.newBookTitle = ''; // Clear input
      }
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.books {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
}

.book-list {
  list-style: none;
  padding: 0;
}

.book-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.remove-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}

.add-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.empty-message {
  font-style: italic;
  color: #888;
}
</style>
