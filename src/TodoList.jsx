// import { useState } from "react";
// import { Card } from "react-bootstrap";
// import TodoItem from "./TodoItem";
// export default function TodoList({ tasks, task, setTask, setTasks }) {
//   const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
//   return (
//     <>
//       {sortedTasks.map((item) => (
//         <TodoItem
//           key={item.id} // id from object key in TodoInput
//           item={item}
//           tasks={tasks}
//           task={task}
//           setTask={setTask}
//           setTasks={setTasks}
//         />
//       ))}
//     </>
//   );
// }

import { useState } from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ tasks, task, setTask, setTasks }) {
  const sortedTasks = tasks.slice().sort((a, b) => a.completed - b.completed);

  return (
    <>
      {sortedTasks.map((item) => (
        <TodoItem
          key={item.id} // id from object key in TodoInput
          item={item}
          tasks={tasks}
          task={task}
          setTask={setTask}
          setTasks={setTasks}
        />
      ))}
    </>
  );
}
