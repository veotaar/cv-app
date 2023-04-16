import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GeneralForm from './components/GeneralForm';
import GeneralPreview from './components/GeneralPreview';
import SummaryForm from './components/SummaryForm';
import SummaryPreview from './components/SummaryPreview';
import EducationForm from './components/EducationForm';
import EducationPreview from './components/EducationPreview';
import WorkForm from './components/WorkForm';
import WorkPreview from './components/WorkPreview';
import './App.css';

const initialGeneral = {
  name: '',
  title: '',
  email: '',
  phone: '',
};

const initialSummary = '';
const initialEducation = [
  {
    key: uuidv4(),
    schoolName: '',
    degreeType: '',
    field: '',
    startDate: '',
    endDate: '',
  },
];
const initialWork = [
  {
    key: uuidv4(),
    companyName: '',
    position: '',
    tasks: '',
    startDate: '',
    endDate: '',
  },
];

function App() {
  const [general, setGeneral] = useState(initialGeneral);
  const [summary, setSummary] = useState(initialSummary);
  const [education, setEducation] = useState(initialEducation);
  const [work, setWork] = useState(initialWork);

  function updateGeneral(target) {
    setGeneral({
      ...general,
      [target.name]: target.value,
    });
  }

  function updateSummary(target) {
    setSummary(target.value);
  }

  function updateEducation(target) {
    setEducation(education.map((el) => (target.id.includes(el.key) ? { ...el, [target.name]: target.value } : el)));
  }

  function updateWork(target) {
    setWork(work.map((el) => (target.id.includes(el.key) ? { ...el, [target.name]: target.value } : el)));
  }

  function addEducationEntry() {
    setEducation(
      education.concat({
        key: uuidv4(),
        schoolName: '',
        degreeType: '',
        field: '',
        startDate: '',
        endDate: '',
      })
    );
  }

  function addWorkEntry() {
    setWork(
      work.concat({
        key: uuidv4(),
        companyName: '',
        position: '',
        tasks: '',
        startDate: '',
        endDate: '',
      })
    );
  }

  function deleteEducationEntry(key) {
    const index = education.findIndex((el) => el.key === key);
    const newEducationState = [...education];

    newEducationState.splice(index, 1);
    setEducation((prevState) =>
      prevState.length > 1
        ? newEducationState
        : [
            {
              key: uuidv4(),
              schoolName: '',
              degreeType: '',
              field: '',
              startDate: '',
              endDate: '',
            },
          ]
    );
  }

  function deleteWorkEntry(key) {
    const index = work.findIndex((el) => el.key === key);
    const newWorkState = [...work];

    newWorkState.splice(index, 1);
    setWork((prevState) =>
      prevState.length > 1
        ? newWorkState
        : [
            {
              key: uuidv4(),
              companyName: '',
              position: '',
              tasks: '',
              startDate: '',
              endDate: '',
            },
          ]
    );
  }

  function clearState() {
    setGeneral(initialGeneral);
    setSummary(initialSummary);
    setEducation(initialEducation);
    setWork(initialWork);
  }

  function loadExample() {
    setGeneral({
      name: 'Jane Doe',
      title: 'Software Engineer',
      email: 'jane.doe@example.com',
      phone: '+123456789',
    });
    setSummary(
      'As a highly skilled software engineer with over 5 years of experience, I am proficient in multiple programming languages and have a deep understanding of software development life cycle. I have a strong track record of delivering high-quality software projects on time and within budget, and I am adept at collaborating with cross-functional teams. My technical skills include expertise in front-end development, back-end development, and database design. Additionally, I have experience with cloud computing and have worked extensively with AWS and Azure. My passion for technology, attention to detail, and problem-solving abilities make me an asset to any software development team.'
    );
    setEducation([
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
    ]);
    setWork([
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
    ]);
  }

  return (
    <div className="app">
      <section className="input-section">
        <h2 className="app-title">CV Creator</h2>
        <div className="control-buttons">
          <button className="button" type="button" onClick={clearState}>
            CLEAR
          </button>
          <button className="button" type="button" onClick={loadExample}>
            LOAD EXAMPLE
          </button>
        </div>
        <GeneralForm updateGeneral={updateGeneral} general={general} />
        <SummaryForm updateSummary={updateSummary} summary={summary} />
        <WorkForm work={work} updateWork={updateWork} addWorkEntry={addWorkEntry} deleteWorkEntry={deleteWorkEntry} />
        <EducationForm
          education={education}
          updateEducation={updateEducation}
          addEducationEntry={addEducationEntry}
          deleteEducationEntry={deleteEducationEntry}
        />
      </section>
      <section className="preview-section">
        <GeneralPreview general={general} />
        <SummaryPreview summary={summary} />
        <WorkPreview work={work} />
        <EducationPreview education={education} />
      </section>
    </div>
  );
}

export default App;
