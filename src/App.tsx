import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState<{
    id: string,
    title: string,
    text: string,
    color: string,
    date: string,
  }[]>([{
    id: (new Date).toString(),
    title: 'meetings',
    text: 'schedule meeting',
    color: '#dfdfdf',
    date: (new Date).toString()
  }])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
