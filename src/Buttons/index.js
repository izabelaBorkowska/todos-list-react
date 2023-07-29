import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="buttons">
 {tasks.length > 0 && (
    <> 
     
      <button onClick={toggleHideDone} 
      className="buttons__button">
        {hideDone ? "Show" : "Hide"} Done
      </button>
      <button
        className="buttons__button"
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Mark All Done
      </button>
    </>
 )}
 </div>
);
export default Buttons;
