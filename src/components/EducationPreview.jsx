import React, { Component } from 'react';

class EducationPreview extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="education-cv">
        {education.map((item) => (
          <div key={item.key}>
            <p>{item.schoolName}</p>
            <p>{item.degreeType}</p>
            <p>{item.field}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default EducationPreview;
