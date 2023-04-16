export default function EducationForm({ education, updateEducation, addEducationEntry, deleteEducationEntry }) {
  function handleChange(e) {
    updateEducation(e.target);
  }

  function handleDelete(e) {
    deleteEducationEntry(e.target.id);
  }

  function handleAdd() {
    addEducationEntry();
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Education</h2>

      <div>
        {education.map((item) => (
          <form className="form" key={item.key}>
            <div className="form-section">
              <label htmlFor={`schoolName-${item.key}`}>School</label>
              <input
                type="text"
                id={`schoolName-${item.key}`}
                name="schoolName"
                value={item.schoolName}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor={`degreeType-${item.key}`}>Degree</label>
              <input
                type="text"
                id={`degreeType-${item.key}`}
                name="degreeType"
                value={item.degreeType}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor={`field-${item.key}`}>Field</label>
              <input type="text" id={`field-${item.key}`} name="field" value={item.field} onChange={handleChange} />
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
