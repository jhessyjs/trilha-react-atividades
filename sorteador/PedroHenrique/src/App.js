import './App.css';
import { useState } from 'react';
import { Ol, Li, Remove } from "./word/word";


function App() {
  const [word, setWord] = useState("");
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("sorteador") || "[]")
  );
  const [sorted, setSorted] = useState("");


  const handleChange = (event) => {
    setWord(event.target.value);
  }


  const addWord = () => {

    if (word !== "")
      setWords((prevstate) => {
        const newWord = prevstate.concat([{ "id": new Date().getTime(), "word": word }]);
        localStorage.setItem("sorteador", JSON.stringify(newWord));
        setWord("");
        return newWord;
      })

  }


  const sortWord = () => {
    if (words.length !== 0) setSorted(words[Math.floor(Math.random() * words.length)].word);
  }


  const removeWord = (props) => {

    setWords(() => {
      const removeWord = words.filter((word) => {
        // console.log(word); console.log(props.target.id); console.log(word.id !== Number(props.target.id))
        return word.id !== Number(props.target.id);
      })
      localStorage.setItem("sorteador", JSON.stringify(removeWord));
      return removeWord;
    })

  }


  return (
    <div className="App">
      <div className="title">
        <span className="title">SORTEADOR</span>
      </div>

      <div className="word">
        <div className="word-insert">
          <span className="word-label">PALAVRA</span>
          <input className="word-input" type="text" value={word} onChange={handleChange} />
          <button className="word-button" onClick={addWord}>+</button>
        </div>
      </div>

      <div className="select-word">
        <button className="select-button" onClick={sortWord}>SORTEAR</button>
        <p className="selected-word">{sorted}</p>
      </div>

      <div>
        <Ol type="column">
          {
            words.map((word) => (
              <Li key={word.id}>{word.word} <Remove id={word.id} onClick={removeWord} /></Li>
            ))
          }
        </Ol>
      </div>

    </div>
  );


}


export default App;
