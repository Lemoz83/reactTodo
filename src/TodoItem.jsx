import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { FaTrash, FaPen } from "react-icons/fa"; // FontAwesome icons
import height from "./../node_modules/dom-helpers/esm/height";

export default function TodoItem({ item, tasks, setTasks }) {
  //   const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  function handleToggle() {
    const updatedTasks = tasks.map((t) =>
      t.id === item.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  }

  function handlEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    if (editedText.trim() === "") {
      // reset input to original value
      setEditedText(item.text);
      setIsEditing(false);
      return; //stop here so tasks don’t get updated
    } // prevent empty edits

    const updatedTasks = tasks.map((t) =>
      t.id === item.id ? { ...t, text: editedText.trim() } : t
    );

    setTasks(updatedTasks);
    setIsEditing(false);
  }

  function handleDelete() {
    const updatedTask = tasks.filter((t) => t.id !== item.id);
    setTasks(updatedTask);
  }
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <div className="row">
            <div className="col-1">
              <Form.Check // prettier-ignore
                type={"checkbox"}
                // id={`check - ${item.id}`}
                onChange={handleToggle}
                checked={item.completed}
              />
            </div>
            {isEditing ? (
              <div className="col-9">
                <Form.Control
                  type="text"
                  value={editedText}
                  autoFocus
                  onChange={(e) => setEditedText(e.target.value)}
                  onBlur={handleSave} // save when clicking outside
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave();
                  }}
                ></Form.Control>
              </div>
            ) : (
              <div className="col-9">
                <Card.Text
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    color: item.completed ? "red" : "",
                  }}
                >
                  {item.text}
                </Card.Text>
              </div>
            )}

            <div className="col-1">
              <FaPen style={{ cursor: "pointer" }} onClick={handlEdit} />
            </div>
            <div className="col-1">
              <FaTrash style={{ cursor: "pointer" }} onClick={handleDelete} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
