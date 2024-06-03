import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const bodypart = [
  "Tetas", "Pito", "Toto", "Nalgas","Pies","Dedos de las manos", "Dedos de los pies","Cuello", "Espalda", "Barriga", "Muslos", "Orejas",
  "Boca", "Ojitos", "Huevos", "Culo"
];

const playpart = [
  "Mamar", "Chupar", "Lamer", "Besar", "Acariciar", "Escupir", "Olvida lo demas, masturbarse juntos", "Olvida lo demas, follar"
];

const timeGame = [
  "5s", "10s", "15s", "20s"
];


function App() {
  const [body, setBody] = useState(bodypart[Math.floor(Math.random() * bodypart.length)]);

  const [play, setPlay] = useState(playpart[Math.floor(Math.random() * playpart.length)]);

  const [time, setTime] = useState(timeGame[Math.floor(Math.random() * timeGame.length)]);

  const changeQuote = () => {
    const newBody = bodypart[Math.floor(Math.random() * bodypart.length)];
    const newPlay = playpart[Math.floor(Math.random() * playpart.length)];
    const newTime = timeGame[Math.floor(Math.random() * timeGame.length)];
    setBody(newBody);
    setPlay(newPlay);
    setTime(newTime);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <h3>Thaly & Ernesto</h3>
            <p>Made with love ❤️</p>
          </div>

          <Card style={{ width: '18rem', margin: '2rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{play}</ListGroup.Item>
              <ListGroup.Item>{body}</ListGroup.Item>
              <ListGroup.Item>{`During ${time}`}</ListGroup.Item>
            </ListGroup>
          </Card>
          <Button as="a" variant="danger" onClick={changeQuote}>Roll and play</Button>
        </header>
      </div>
    </>
  )
}

export default App
