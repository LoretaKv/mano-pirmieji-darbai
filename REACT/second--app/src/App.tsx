import "./App.css";
import { RandomNumberGenerator } from "./components/RandomNumberGenerator";
import { Form } from "./Form";
import { NoteForm } from "./Noteform";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        {/* <Form />*/}
        {/* <NoteForm>
          <h1>Notes App</h1>
          <h2>Welcome</h2>
        </NoteForm> */}
        <RandomNumberGenerator />
      </main>
    </div>
  );
}

export default App;
