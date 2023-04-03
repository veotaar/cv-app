import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GeneralForm from './components/GeneralForm';
import GeneralPreview from './components/GeneralPreview';
import EducationForm from './components/EducationForm';
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
      education: [
        {
          key: uuidv4(),
          schoolName: '',
          degreeType: '',
          startDate: '',
          endDate: '',
        },
      ],
    };

    this.updateGeneral = this.updateGeneral.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.deleteEducationEntry = this.deleteEducationEntry.bind(this);
  }

  updateGeneral(target) {
    this.setState((prevState) => ({
      general: {
        ...prevState.general,
        [target.name]: target.value,
      },
    }));
  }

  updateEducation(target) {
    this.setState((prevState) => ({
      education: prevState.education.map((el) =>
        target.id.includes(el.key) ? { ...el, [target.name]: target.value } : el
      ),
    }));
  }

  addEducationEntry() {
    this.setState((prevState) => ({
      education: prevState.education.concat({
        key: uuidv4(),
        schoolName: '',
        degreeType: '',
        startDate: '',
        endDate: '',
      }),
    }));
  }

  deleteEducationEntry(key) {
    const { education } = this.state;
    const index = education.findIndex((el) => el.key === key);
    const newEducationState = [...education];

    newEducationState.splice(index, 1);
    this.setState((prevState) =>
      prevState.education.length > 1
        ? { education: newEducationState }
        : {
            education: [{ key: uuidv4(), schoolName: '', degreeType: '', startDate: '', endDate: '' }],
          }
    );
  }

  render() {
    const { general, education } = this.state;

    return (
      <div className="app">
        <section className="input-section">
          <GeneralForm updateGeneral={this.updateGeneral} general={general} />
          <EducationForm
            education={education}
            updateEducation={this.updateEducation}
            addEducationEntry={this.addEducationEntry}
            deleteEducationEntry={this.deleteEducationEntry}
          />
        </section>
        <section className="preview-section">
          <GeneralPreview general={general} />
        </section>
      </div>
    );
  }
}

export default App;
