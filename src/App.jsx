import './App.css';
import Header from './components/header/Header'
import Body from './components/body/Body'
import Add from './components/add/Add'
import Items from './components/items/Items';

function App() {
  return (
      <div className="App">
         <div className="content-box">
           <Header />
           <Body />
           <Add />
           <Items />
         </div>
      </div>
  );
}

export default App;
