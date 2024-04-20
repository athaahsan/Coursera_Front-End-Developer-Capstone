import './App.css';
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

function App() {
  return (
    <>
      <MyNav />
      <MyHeader/>
      <MyMain/>
      <MyFooter/>
    </>
  );
}

export default App;
