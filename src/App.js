import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  
  const handleOnAdd = (cantidad) => {
    console.log(cantidad )
  }
  
  
  
  
  
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer bienvenida='Aca estan las mejores ofertas'/>
        <Counter stock={10} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
