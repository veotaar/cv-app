import React, { Component } from 'react';

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { updateGeneral } = this.props;
    updateGeneral(e.target);
  }

  render() {
    const { generalState } = this.props;

    return (
      <form className="form">
        <h2 className="form-title">Contact Info</h2>

        <div className="form-section">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={generalState.name} onChange={this.handleChange} />
        </div>

        <div className="form-section">
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email" name="email" value={generalState.email} onChange={this.handleChange} />
        </div>

        <div className="form-section">
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone" name="phone" value={generalState.phone} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default GeneralForm;
