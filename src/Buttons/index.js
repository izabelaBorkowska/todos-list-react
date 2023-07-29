import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button onClick={toggleHideDone} 
      className="buttons__button">
        {hideDone ? "Show" : "Hide"} Done
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Mark All Done
      </button>
    </div>
  );

export default Buttons;
