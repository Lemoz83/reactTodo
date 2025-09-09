import { useState } from "react";
import { Card, Navbar, Container } from "react-bootstrap";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Counter from "./Counter";

function App() {
  const [task, setTask] = useState(""); //single task
  const [tasks, setTasks] = useState([]); // store all single task in array
  return (
    <>
      <Navbar className="bg-primary fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white mx-auto">
            <h1 className="m-0">MY TO-DO LIST APP</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Wrapper for card, centered below navbar */}
      <div
        className="d-flex justify-content-center"
        style={{ minHeight: "calc(100vh - 70px)", marginTop: "80px" }}
      >
        <Card style={{ width: "50rem", height: "10vh" }}>
          <Card.Body className="d-flex flex-column">
            {/* Input fixed at top */}
            <div className="mb-3">
              <TodoInput
                setTask={setTask}
                task={task}
                setTasks={setTasks}
                tasks={tasks}
              />
            </div>

            {/* Task list scrollable */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              <TodoList
                tasks={tasks}
                task={task}
                setTask={setTask}
                setTasks={setTasks}
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <Counter tasks={tasks} />
    </>
  );
}

export default App;
