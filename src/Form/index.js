import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) =>  {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

      const trimmedNewTaskContent = newTaskContent.trim();
      if (trimmedNewTaskContent === ""){
        return;
      }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    
  };

  return (
    <form className="form"
          onSubmit={onFormSubmit}>
      <input 
      value={newTaskContent}
      className="form__input" 
      placeholder="Tasks I need to do" 
      onChange={({target}) => setNewTaskContent(target.value)}
      autoFocus 
      />
      <button className="form__button">Add task</button>
    </form>
  );
};

export default Form;
