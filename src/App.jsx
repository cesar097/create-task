import TaskList from "./componets/TaksList";
import TaskForm from "./componets/taskForm";

function App() {


  return (
    <main className="bg-red-900 h-screen w-screen">
    <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
    </div>
    </main>
  );
}

export default App;
