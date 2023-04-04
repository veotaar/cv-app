import React, { Component } from 'react';

class WorkPreview extends Component {
  render() {
    const { work } = this.props;
    return (
      <div className="work-cv">
        {work.map((item) => (
          <div key={item.key}>
            <p>{item.companyName}</p>
            <p>{item.position}</p>
            <p>{item.tasks}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default WorkPreview;
