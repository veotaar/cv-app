import React, { Component } from 'react';
import GeneralForm from './components/GeneralForm';
import GeneralPreview from './components/GeneralPreview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        phone: '',
      },
    };

    this.updateGeneral = this.updateGeneral.bind(this);
  }

  updateGeneral(target) {
    this.setState((prevState) => ({
      general: {
        ...prevState.general,
        [target.name]: target.value,
      },
    }));
  }

  render() {
    const { general } = this.state;

    return (
      <div className="app">
        <section className="input-section">
          <GeneralForm updateGeneral={this.updateGeneral} general={general} />
        </section>
        <section className="preview-section">
          <GeneralPreview general={general} />
        </section>
      </div>
    );
  }
}

export default App;
