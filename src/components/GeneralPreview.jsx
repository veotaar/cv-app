import React, { Component } from 'react';

class GeneralPreview extends Component {
  render() {
    const { general } = this.props;
    return (
      <div className="general-info-cv">
        <h1 className="general-info-name">{general.name}</h1>

        <div className="general-info-contact">
          <p>{general.email}</p>
          <p>{general.phone}</p>
        </div>
      </div>
    );
  }
}

export default GeneralPreview;
