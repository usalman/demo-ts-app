import * as React from "react";
import { Note } from "../models/NoteModel";

interface INotesProps {
  note: Note;
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return <>{note.title}</>;
};

export default Notes;
