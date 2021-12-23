import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { Note } from "../models/NoteModel";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        // e parametresini any tipinde alırsak hata çözülüyor
        title: e.currentTarget.title.value,
        text: e.currentTarget.text.value,
        color: e.currentTarget.color.value,
        date: new Date().toString(),
      },
    ]);
  };
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            name="title"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            name="text"
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            name="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
