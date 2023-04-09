import React, { Component } from 'react';
import '../styles/SummaryPreview.css';

class SummaryPreview extends Component {
  render() {
    const { summary } = this.props;
    return (
      <div className="summary-cv">
        <h2 className="summary-title">Summary</h2>
        {/* <hr /> */}
        <div className="summary-container">
          <p>{summary}</p>
        </div>
      </div>
    );
  }
}

export default SummaryPreview;
