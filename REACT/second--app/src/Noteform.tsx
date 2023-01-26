import { AsyncResource } from "async_hooks";
import { useState } from "react";

export const NoteForm = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]); //reikia string tipa nurodyti, kadangi notes tipas:never
  const [areNotesShown, setAreNotesShown] = useState(true);

  //state settinimas pradinio lygio- nekartoti realiuose projektuose ir nenaudoti any tipo.

  console.log({ note, notes });

  return (
    <>
      {props.children}
      <input value={note} onChange={(event) => setNote(event.target.value)} />
      <input
        checked={areNotesShown}
        type="checkbox"
        onChange={(event) => setAreNotesShown(event.target.checked)}
      ></input>

      <button
        onClick={() => {
          setNotes([...notes, note]);
          setNote("");
        }}
      >
        Click
      </button>

      {areNotesShown && notes.map((curNote, i) => <p key={i}>{curNote}</p>)}
    </>
  );
};
