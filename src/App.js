import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "take dogs out", done: false },
  { id: 2, content: "clean the car", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new tasks" body={<Form />} />
      <Section
        title="List of tasks"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
