import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookTable from "../components/BookTable";

function Home() {
  const { books, setBooks } = useContext(BookContext);


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [publisher, setPublisher] = useState("");


  const handleAddBook = () => {
    if (!title.trim() || !author.trim()) {
      alert("Title dan Author wajib diisi!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      pubDate,
      publisher,
    };

    setBooks([...books, newBook]);


    setTitle("");
    setAuthor("");
    setPubDate("");
    setPublisher("");
  };

  const handleDelete = (id) => {
    const filtered = books.filter((b) => b.id !== id);
    setBooks(filtered);
  };

  return (
    <>
      <Navbar />

      <h1 className="page-title">Book Manager</h1>
      <p className="page-subtitle">Manage your book collection</p>

      <div className="main-wrapper">

        {/* Card Form */}
        <div className="card">
          <h2>Add New Book</h2>

          <label>Title</label>
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Author</label>
          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label>Publication Date (YYYY-MM-DD)</label>
          <input
            type="text"
            placeholder="Publication date"
            value={pubDate}
            onChange={(e) => setPubDate(e.target.value)}
          />

          <label>Publisher</label>
          <input
            type="text"
            placeholder="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />

          <button className="btn-primary" onClick={handleAddBook}>
            + Add Book
          </button>
        </div>


        <div className="card">
          <h2>Your Books</h2>
          <BookTable books={books} onDelete={handleDelete} />
        </div>

      </div>
    </>
  );
}

export default Home;
