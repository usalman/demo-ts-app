import * as React from "react";
import { Note } from "../models/NoteModel";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (noteId: string): void => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <Notes key={note.id} note={note} handleDelete={handleDelete} />
    ));
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
