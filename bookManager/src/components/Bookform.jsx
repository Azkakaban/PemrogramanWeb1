import { useState } from "react";

function BookForm({ onSubmit, defaultValue }) {
  const [form, setForm] = useState(
    defaultValue || {
      title: "",
      author: "",
      publisher: "",
      date: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <div className="input-group">
        <label>Judul Buku</label>
        <input name="title" value={form.title} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Penulis</label>
        <input name="author" value={form.author} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Penerbit</label>
        <input name="publisher" value={form.publisher} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Tanggal Publikasi</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
      </div>

      <button className="btn" onClick={() => onSubmit(form)}>
        Simpan
      </button>
    </div>
  );
}

export default BookForm;
