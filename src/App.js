import Header from './Components/Header'
import Meme from './Components/Meme'
import './App.css';

function App() {



  return (
    <div className="wrapper">

      <Header />

      <div className="content-container">
        <Meme />
      </div>

    </div>
  );
}

export default App;
