import { Navbar, Container } from "react-bootstrap";
export default function Counter({ tasks }) {
  // count total tasks
  const totalTasks = tasks.length - tasks.filter((t) => t.completed).length;

  // count completed tasks
  const completedTasks = tasks.filter((t) => t.completed).length;
  return (
    <>
      <Navbar className="bg-primary fixed-bottom" variant="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Completed Tasks: {completedTasks}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Brand href="#home" className="text-white">
            Incompleted Tasks: {totalTasks}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
