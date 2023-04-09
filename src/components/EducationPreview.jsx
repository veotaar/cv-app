import React, { Component } from 'react';
import '../styles/EducationPreview.css';

class EducationPreview extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="education-cv">
        <h2 className="education-title">Education</h2>
        {/* <hr /> */}
        {education.map(({ key, schoolName, degreeType, field, startDate, endDate }) => (
          <div className="education-container" key={key}>
            <div className="education-details">
              <p className="education-name">{schoolName}</p>
              <p className="education-dates">
                {startDate} - {endDate}
              </p>
            </div>

            <p className="education-field">
              {degreeType}, {field}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default EducationPreview;
