import { useState } from "react";

export const Form = () => {
  const [note, setNote] = useState("");
  let [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedNotes((prevSavedNotes) => [...prevSavedNotes, note]);

    setNote("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "yellow" }}>
        <input value={note} onChange={handleChange} />
        <button>Submit</button>

        {savedNotes.map((curNote, i) => {
          return <p key={i}>{curNote}</p>;
        })}
      </form>
    </>
  );
};
