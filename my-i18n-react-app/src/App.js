import i18n from 'i18next';import k from "./i18n/keys";import logo from './logo.svg';
import './App.css';

function App() {
  return <h1>{i18n.t(k.WELCOME_TO_OUR_PLATFORM)}
    <p>{i18n.t(k.HELLO_HIIE)}</p>
  </h1>;
}

// const message = "Welcome to our platform!";
// function App() {
//   return <h1>{message}</h1>;
// }


export default App;