
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "take dogs out", done: true },
  { id: 2, content: "clean the car", done: false },
];

 

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new tasks" body={<Form />} />
      <Section
        title="List of tasks"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons 
          tasks={tasks} 
          hideDone={hideDone}
          toggleHideDone={toggleHideDone} />
        }
      />
    </Container>
  );
}

export default App;
