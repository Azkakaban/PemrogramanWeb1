import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function EditBook() {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const selected = books.find((b) => b.id == id);

  const handleEdit = (updated) => {
    const newBooks = books.map((b) =>
      b.id == id ? { ...b, ...updated } : b
    );

    setBooks(newBooks);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="page-title">Edit Buku</h2>
        <BookForm onSubmit={handleEdit} defaultValue={selected} />
      </div>
    </>
  );
}

export default EditBook;
