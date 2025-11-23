import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import { BookContext } from "../context/BookContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const newBook = {
      id: Date.now(),
      ...data,
    };

    setBooks([...books, newBook]);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="page-title">Tambah Buku</h2>
        <BookForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default AddBook;
