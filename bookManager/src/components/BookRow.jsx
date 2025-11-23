import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function BookRow({ book, onDelete }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{book.date}</td>
      <td>
        <div className="row-actions">
          <Link to={`/edit/${book.id}`} style={{ color: "blue" }}>
            <FiEdit />
          </Link>

          <span onClick={() => onDelete(book.id)} style={{ color: "red" }}>
            <FiTrash2 />
          </span>
        </div>
      </td>
    </tr>
  );
}

export default BookRow;
