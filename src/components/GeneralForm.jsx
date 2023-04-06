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
    const { general } = this.props;

    return (
      <div className="form-container">
        <h2 className="form-title">Contact Info</h2>
        <div>
          <form className="form">
            <div className="form-section">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={general.name} onChange={this.handleChange} />
            </div>
            <div className="form-section">
              <label htmlFor="email">e-mail</label>
              <input type="email" id="email" name="email" value={general.email} onChange={this.handleChange} />
            </div>
            <div className="form-section">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" value={general.phone} onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GeneralForm;
