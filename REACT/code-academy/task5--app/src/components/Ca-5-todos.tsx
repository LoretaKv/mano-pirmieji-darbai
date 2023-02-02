import { useState } from "react";

export const GetToDos = () => {
  const [toDos, setToDos] = useState<any[]>([]);
  const [toDo, setToDo] = useState("");

  const addToDo = () => {
    const newTodos = [...toDos, toDo];

    setToDos(newTodos);
  };

  const deleteToDo = (i: any) => {
    const newToDos = [...toDos];
    newToDos.splice(i - 1, 1);
    setToDos(newToDos);
  };

  return (
    <div>
      <h1> You have {toDos.length} To Do's</h1>
      <button onClick={addToDo}>Add To Do</button>
      <input
        placeholder="Create a new to do"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />

      {toDos.map((toDo, i) => (
        <li key={i}>
          {toDo}
          <button onClick={deleteToDo}>Delete To Do</button>
        </li>
      ))}
    </div>
  );
};
