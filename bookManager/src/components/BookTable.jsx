import BookRow from "./BookRow";

function BookTable({ books, onDelete }) {
  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5">Belum ada buku.</td>
            </tr>
          ) : (
            books.map((b) => <BookRow key={b.id} book={b} onDelete={onDelete} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
