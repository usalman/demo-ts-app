import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
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
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
