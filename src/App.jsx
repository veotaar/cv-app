import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GeneralForm from './components/GeneralForm';
import GeneralPreview from './components/GeneralPreview';
import SummaryForm from './components/SummaryForm';
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
      summary: '',
      education: [
        {
          key: uuidv4(),
          schoolName: '',
          degreeType: '',
          field: '',
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
    this.updateSummary = this.updateSummary.bind(this);
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

  updateSummary(target) {
    this.setState({
      summary: target.value,
    });
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
        field: '',
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
                field: '',
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
      summary: '',
      education: [
        {
          key: uuidv4(),
          schoolName: '',
          degreeType: '',
          field: '',
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
      summary:
        'As a highly skilled software engineer with over 5 years of experience, I am proficient in multiple programming languages and have a deep understanding of software development life cycle. I have a strong track record of delivering high-quality software projects on time and within budget, and I am adept at collaborating with cross-functional teams. My technical skills include expertise in front-end development, back-end development, and database design. Additionally, I have experience with cloud computing and have worked extensively with AWS and Azure. My passion for technology, attention to detail, and problem-solving abilities make me an asset to any software development team.',
      education: [
        {
          key: uuidv4(),
          schoolName: 'Massachusetts Institute of Technology (MIT)',
          degreeType: 'MSc',
          field: 'Computer Science',
          startDate: '2019',
          endDate: '2023',
        },
        {
          key: uuidv4(),
          schoolName: 'University of California, Berkeley',
          degreeType: 'BSc',
          field: 'Computer Science',
          startDate: '2015',
          endDate: '2019',
        },
      ],
      work: [
        {
          key: uuidv4(),
          companyName: 'SynapseTech Solutions',
          position: 'DevOps Engineer',
          tasks:
            'Cras sit amet massa vel turpis pretium dictum a et ante. Suspendisse potenti. Duis vel tellus sed tortor faucibus aliquet nec sit amet risus. Sed gravida nunc sed enim consequat, vel suscipit ipsum ullamcorper.',
          startDate: '01.2023',
          endDate: 'present',
        },
        {
          key: uuidv4(),
          companyName: 'QuantumCode Technologies',
          position: 'Full-Stack Developer',
          tasks:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus eget velit sed magna vehicula placerat. Sed blandit tristique sapien, a consectetur arcu lacinia eget.',
          startDate: '01.2021',
          endDate: '01.2023',
        },
        {
          key: uuidv4(),
          companyName: 'NexaNova Labs',
          position: 'Machine Learning Engineer',
          tasks:
            'In hac habitasse platea dictumst. Pellentesque fermentum quam vel velit blandit, eu ullamcorper dolor consectetur. Fusce eget turpis nec eros bibendum sagittis. Sed non purus non sapien congue maximus.',
          startDate: '10.2019',
          endDate: '01.2021',
        },
      ],
    });
  }

  render() {
    const { general, summary, education, work } = this.state;

    return (
      <div className="app">
        <section className="input-section">
          <div className="control-buttons">
            <button className="button" type="button" onClick={this.clearState}>
              CLEAR
            </button>
            <button className="button" type="button" onClick={this.loadExample}>
              LOAD EXAMPLE
            </button>
          </div>
          <GeneralForm updateGeneral={this.updateGeneral} general={general} />
          <SummaryForm updateSummary={this.updateSummary} summary={summary} />
          <WorkForm
            work={work}
            updateWork={this.updateWork}
            addWorkEntry={this.addWorkEntry}
            deleteWorkEntry={this.deleteWorkEntry}
          />
          <EducationForm
            education={education}
            updateEducation={this.updateEducation}
            addEducationEntry={this.addEducationEntry}
            deleteEducationEntry={this.deleteEducationEntry}
          />
        </section>
        <section className="preview-section">
          <GeneralPreview general={general} />
          <WorkPreview work={work} />
          <EducationPreview education={education} />
        </section>
      </div>
    );
  }
}

export default App;
