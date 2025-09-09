import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function TodoInput({ setTask, task, setTasks, tasks }) {
  function addTask(e) {
    e.preventDefault();
    if (task.trim() === "") return; // empty input will not be added
    // setTasks([...tasks, task.trim()]); // trims spaces from before or after
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task.trim(),
        completed: false,
      },
    ]);
    setTask("");
  }

  // ✅ log whenever tasks change
  //   useEffect(() => {
  //     console.log("Updated tasks:", tasks);
  //   }, [tasks]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="row">
            <div className="col-10">
              <Form.Control
                type="text"
                placeholder="Enter A Task"
                onChange={(e) => setTask(e.target.value)}
                value={task}
              />
            </div>
            <div className="col-2">
              <Button
                type="submit"
                variant="primary"
                onClick={(e) => addTask(e)}
                className="btn"
              >
                <span className="align-items-center">
                  <FaPlus />
                </span>
              </Button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </>
  );
}
