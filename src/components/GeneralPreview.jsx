import '../styles/GeneralPreview.css';

export default function GeneralPreview({ general }) {
  return (
    <div>
      <div className="general-cv">
        <div className="general-heading">
          <h1 className="general-name">{general.name}</h1>
          <h2 className="general-title">{general.title}</h2>
        </div>
        <div className="general-contact">
          <p>{general.email}</p>
          <p>{general.phone}</p>
        </div>
      </div>
      <hr className="general-hr" />
    </div>
  );
}
