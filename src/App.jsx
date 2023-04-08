import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GeneralForm from './components/GeneralForm';
import GeneralPreview from './components/GeneralPreview';
import EducationForm from './components/EducationForm';
import EducationPreview from './components/EducationPreview';
import WorkForm from './components/WorkForm';
import WorkPreview from './components/WorkPreview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        title: '',
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
      work: [
        {
          key: uuidv4(),
          companyName: '',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
        },
      ],
    };

    this.updateGeneral = this.updateGeneral.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.deleteEducationEntry = this.deleteEducationEntry.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.addWorkEntry = this.addWorkEntry.bind(this);
    this.deleteWorkEntry = this.deleteWorkEntry.bind(this);
    this.clearState = this.clearState.bind(this);
    this.loadExample = this.loadExample.bind(this);
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

  updateWork(target) {
    this.setState((prevState) => ({
      work: prevState.work.map((el) => (target.id.includes(el.key) ? { ...el, [target.name]: target.value } : el)),
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

  addWorkEntry() {
    this.setState((prevState) => ({
      work: prevState.work.concat({
        key: uuidv4(),
        companyName: '',
        position: '',
        tasks: '',
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
            education: [
              {
                key: uuidv4(),
                schoolName: '',
                degreeType: '',
                startDate: '',
                endDate: '',
              },
            ],
          }
    );
  }

  deleteWorkEntry(key) {
    const { work } = this.state;
    const index = work.findIndex((el) => el.key === key);
    const newWorkState = [...work];

    newWorkState.splice(index, 1);
    this.setState((prevState) =>
      prevState.work.length > 1
        ? { work: newWorkState }
        : {
            work: [
              {
                key: uuidv4(),
                companyName: '',
                position: '',
                tasks: '',
                startDate: '',
                endDate: '',
              },
            ],
          }
    );
  }

  clearState() {
    this.setState({
      general: {
        name: '',
        title: '',
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
      work: [
        {
          key: uuidv4(),
          companyName: '',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
        },
      ],
    });
  }

  loadExample() {
    this.setState({
      general: {
        name: 'Jane Doe',
        title: 'Full-stack developer',
        email: 'jane.doe@example.com',
        phone: '+123456789',
      },
      education: [
        {
          key: uuidv4(),
          schoolName: 'University of Example',
          degreeType: 'PhD',
          startDate: 'fall 2019',
          endDate: 'spring 2023',
        },
        {
          key: uuidv4(),
          schoolName: 'Example University',
          degreeType: 'MSc',
          startDate: 'spring 2017',
          endDate: 'fall 2019',
        },
        {
          key: uuidv4(),
          schoolName: 'Example University',
          degreeType: 'BSc',
          startDate: 'fall 2013',
          endDate: 'fall 2017',
        },
      ],
      work: [
        {
          key: uuidv4(),
          companyName: 'Good Engineering',
          position: 'Software Engineer',
          tasks: 'Software Engineering stuff',
          startDate: '01.2023',
          endDate: '-',
        },
        {
          key: uuidv4(),
          companyName: 'Nice LLC',
          position: 'Software Developer',
          tasks: 'Developing things',
          startDate: '01.2020',
          endDate: '01.2023',
        },
        {
          key: uuidv4(),
          companyName: 'Best Studios',
          position: 'UI/UX Engineer',
          tasks: 'UI stuff',
          startDate: '01.2018',
          endDate: '01.2020',
        },
      ],
    });
  }

  render() {
    const { general, education, work } = this.state;

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
          <WorkForm
            work={work}
            updateWork={this.updateWork}
            addWorkEntry={this.addWorkEntry}
            deleteWorkEntry={this.deleteWorkEntry}
          />
          <button className="button" type="button" onClick={this.clearState}>
            CLEAR
          </button>
          <button className="button" type="button" onClick={this.loadExample}>
            LOAD EXAMPLE
          </button>
        </section>
        <section className="preview-section">
          <GeneralPreview general={general} />
          <EducationPreview education={education} />
          <WorkPreview work={work} />
        </section>
      </div>
    );
  }
}

export default App;
