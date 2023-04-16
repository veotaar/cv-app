import '../styles/SummaryPreview.css';

export default function SummaryPreview({ summary }) {
  return (
    <div className="summary-cv">
      <h2 className="summary-title">Summary</h2>
      {/* <hr /> */}
      <div className="summary-container">
        <p>{summary}</p>
      </div>
    </div>
  );
}
