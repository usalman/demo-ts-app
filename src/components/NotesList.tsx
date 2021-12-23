import * as React from "react";
import { Note } from "../models/NoteModel";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
  return (
    <>
      <h2 className="mt-3">Notes</h2>
    </>
  );
};

export default NotesList;
