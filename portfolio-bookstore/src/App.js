import BookCard from "./BookCard";

const booksList = [
  {
    id: 0,
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    genre: "Fiction"
  },
  {
    id: 1,
    title: "Prophet Song",
    author: "Paul Lynch",
    genre: "Dystopian"
  },
  {
    id: 2,
    title: "The Goldfinch",
    author: "Donna Tart",
    genre: "Fiction"
  },
]

function App() {
  return (
    <div>
      <h1>My Bookstore</h1>
      { booksList.map( book => (<BookCard book={book} />))}
    </div>
  );
}

export default App;
