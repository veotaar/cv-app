import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const { updateEducation } = this.props;
    updateEducation(e.target);
  }

  handleDelete(e) {
    const { deleteEducationEntry } = this.props;
    deleteEducationEntry(e.target.id);
  }

  handleAdd() {
    const { addEducationEntry } = this.props;
    addEducationEntry();
  }

  render() {
    const { education } = this.props; // array of objects

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
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor={`degreeType-${item.key}`}>Degree</label>
                <input
                  type="text"
                  id={`degreeType-${item.key}`}
                  name="degreeType"
                  value={item.degreeType}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor={`startDate-${item.key}`}>Start</label>
                <input
                  type="text"
                  id={`startDate-${item.key}`}
                  name="startDate"
                  value={item.startDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor={`endDate-${item.key}`}>End</label>
                <input
                  type="text"
                  id={`endDate-${item.key}`}
                  name="endDate"
                  value={item.endDate}
                  onChange={this.handleChange}
                />
              </div>
              <button className="button button-delete" type="button" onClick={this.handleDelete} id={item.key}>
                Delete
              </button>
            </form>
          ))}
        </div>
        <button className="button button-add" type="button" onClick={this.handleAdd}>
          + Add More
        </button>
      </div>
    );
  }
}

export default EducationForm;
