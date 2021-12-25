import logo from './logo.svg';
import './App.css';
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
// import Input from './Input';
import { useEffect } from 'react';
// import { getSecretWord } from './actions';

function App() {
  useEffect(() => {
    getSecretWord();
  }, []);
  
  const getSecretWord = () => {
    return 1 + 1;
  }
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats success={success} />
      {/* <Input success={success} secretWord={secretWord}/> */}
      <GuessedWords guessedWords={guessedWords}/>
    </div>
  );
}

export default App;
