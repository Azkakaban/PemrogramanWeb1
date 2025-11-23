import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function DetailBook() {
  const { id } = useParams();
  const { books } = useContext(BookContext);

  const book = books.find((b) => b.id == id);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="page-title">Detail Buku</h2>

        <div className="card">
          <p><b>Judul:</b> {book.title}</p>
          <p><b>Penulis:</b> {book.author}</p>
          <p><b>Penerbit:</b> {book.publisher}</p>
          <p><b>Tanggal:</b> {book.date}</p>
        </div>
      </div>
    </>
  );
}

export default DetailBook;
