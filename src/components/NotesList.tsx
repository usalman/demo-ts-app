import * as React from "react";
import { Note } from "../models/NoteModel";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
  const renderNotes = () => {
    notes.map((note) => <Notes note={note}/>);
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
