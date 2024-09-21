import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductCard from './components/Card';
import {product_1,product_2,product_3,product_4,product_5} from './products'
import HorizontalExample from './components/Cards';

function App() {
  return (
    <div className="App">
      <HorizontalExample/>
    </div>
  );
}

export default App;
