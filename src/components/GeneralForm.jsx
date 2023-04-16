export default function GeneralForm({ updateGeneral, general }) {
  function handleChange(e) {
    updateGeneral(e.target);
  }

  return (
    <div className="form-container">
      <h2 className="form-title">General Info</h2>
      <div>
        <form className="form">
          <div className="form-section">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={general.name} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={general.title} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name="email" value={general.email} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" value={general.phone} onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  );
}
