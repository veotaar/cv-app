import React, { Component } from 'react';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const { updateWork } = this.props;
    updateWork(e.target);
  }

  handleDelete(e) {
    const { deleteWorkEntry } = this.props;
    deleteWorkEntry(e.target.id);
  }

  handleAdd() {
    const { addWorkEntry } = this.props;
    addWorkEntry();
  }

  render() {
    const { work } = this.props; // array of objects

    return (
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
                onChange={this.handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor={`position-${item.key}`}>Position</label>
              <input
                type="text"
                id={`position-${item.key}`}
                name="position"
                value={item.position}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor={`tasks-${item.key}`}>Tasks</label>
              <textarea
                name="tasks"
                id={`tasks-${item.key}`}
                value={item.tasks}
                cols="30"
                rows="5"
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
            <button type="button" onClick={this.handleDelete} id={item.key}>
              Delete
            </button>
          </form>
        ))}
        <button type="button" onClick={this.handleAdd}>
          ADD Work
        </button>
      </div>
    );
  }
}

export default WorkForm;
