import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Note } from "./models/NoteModel";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "meetings",
      text: "schedule meeting",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
