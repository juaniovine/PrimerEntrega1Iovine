import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Productos from './components/productos/Productos';
import Cards from './components/cards-productos/Cards';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/itemlist/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="¡ Bienvenidos a BazarTech !" />
      {/* <Productos/> */}
    </div>
  );
}

export default App;
