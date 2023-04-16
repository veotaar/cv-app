export default function SummaryForm({ updateSummary, summary }) {
  function handleChange(e) {
    updateSummary(e.target);
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Summary</h2>
      <div>
        <form className="form">
          <div className="form-section">
            <label htmlFor="summary">Summary Text</label>
            <textarea name="summary" id="summary" value={summary} onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  );
}
