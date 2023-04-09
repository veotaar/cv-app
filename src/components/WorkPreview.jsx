import React, { Component } from 'react';
import '../styles/WorkPreview.css';

class WorkPreview extends Component {
  render() {
    const { work } = this.props;
    return (
      <div className="work-cv">
        <h2 className="work-title">Work Experience</h2>
        {/* <hr /> */}
        {work.map(({ key, companyName, position, tasks, startDate, endDate }) => (
          <div className="company-container" key={key}>
            <div className="company-details">
              <p className="company-name">{companyName}</p>
              <p className="company-dates">
                {startDate} - {endDate}
              </p>
            </div>

            <p className="company-position">{position}</p>
            <p className="company-tasks">{tasks}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default WorkPreview;
