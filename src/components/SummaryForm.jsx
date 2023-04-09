import React, { Component } from 'react';

class SummaryForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { updateSummary } = this.props;
    updateSummary(e.target);
  }

  render() {
    const { summary } = this.props;
    return (
      <div className="form-container">
        <h2 className="form-title">Summary</h2>
        <div>
          <form className="form">
            <div className="form-section">
              <label htmlFor="summary">Summary Text</label>
              <textarea name="summary" id="summary" value={summary} onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SummaryForm;
