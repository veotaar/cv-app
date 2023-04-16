export default function WorkForm({ work, updateWork, addWorkEntry, deleteWorkEntry }) {
  function handleChange(e) {
    updateWork(e.target);
  }

  function handleDelete(e) {
    deleteWorkEntry(e.target.id);
  }

  function handleAdd() {
    addWorkEntry();
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Work Experience</h2>

      <div>
        {work.map((item) => (
          <form className="form" key={item.key}>
            <div className="form-section">
              <label htmlFor={`companyName-${item.key}`}>Company</label>
              <input
                type="text"
                id={`companyName-${item.key}`}
                name="companyName"
                value={item.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor={`position-${item.key}`}>Position</label>
              <input
                type="text"
                id={`position-${item.key}`}
                name="position"
                value={item.position}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor={`tasks-${item.key}`}>Tasks</label>
              <textarea name="tasks" id={`tasks-${item.key}`} value={item.tasks} onChange={handleChange} />
            </div>
            <div className="form-section">
              <label htmlFor={`startDate-${item.key}`}>Start</label>
              <input
                type="text"
                id={`startDate-${item.key}`}
                name="startDate"
                value={item.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor={`endDate-${item.key}`}>End</label>
              <input
                type="text"
                id={`endDate-${item.key}`}
                name="endDate"
                value={item.endDate}
                onChange={handleChange}
              />
            </div>
            <button className="button button-delete" type="button" onClick={handleDelete} id={item.key}>
              Delete
            </button>
          </form>
        ))}
      </div>
      <button className="button button-add" type="button" onClick={handleAdd}>
        + Add More
      </button>
    </div>
  );
}
