import photoApples from './assets/photo-apples.jpeg';
import photoBananas from './assets/photo-bananas.jpg';
import photoBread from './assets/photo-bread.jpeg';
import photoMilk from './assets/photo-milk.jpeg';
import photoCheese from './assets/photo-cheese.jpeg';
import photoCherries from './assets/photo-cherries.jpeg';
import photoPotatoes from './assets/photo-potatoes.jpeg';
import photoOranges from './assets/photo-oranges.jpeg';
import photoEggs from './assets/photo-eggs.jpeg';
import photoYogurt from './assets/photo-yogurt.jpeg';
import photoRice from './assets/photo-rice.jpeg';
import photoPasta from './assets/photo-pasta.jpeg';
import photoCoffee from './assets/photo-coffee.jpeg';
import photoWater from './assets/photo-water.jpeg';
import photoChicken from './assets/photo-chicken.jpeg';

const products = [
  { id: 'apples', name: 'Manzanas', price: '€2.5/kg', image: photoApples, color: 'red' },
  { id: 'bananas', name: 'Platanos', price: '€1.9/kg', image: photoBananas, color: 'yellow' },
  { id: 'bread', name: 'Pan', price: '€1.2', image: photoBread, color: 'orange' },
  { id: 'milk', name: 'Leche', price: '€1.5', image: photoMilk, color: 'blue' },
  { id: 'cheese', name: 'Queso', price: '€12/kg', image: photoCheese, color: 'amber' },
  { id: 'tomatoes', name: 'Tomates', price: '€2.2/kg', image: photoCherries, color: 'red' },
  { id: 'potatoes', name: 'Patatas', price: '€1.4/kg', image: photoPotatoes, color: 'yellow' },
  { id: 'oranges', name: 'Naranjas', price: '€2.1/kg', image: photoOranges, color: 'orange' },
  { id: 'eggs', name: 'Huevos', price: '€2.8', image: photoEggs, color: 'amber' },
  { id: 'yogurt', name: 'Yogur', price: '€0.9', image: photoYogurt, color: 'purple' },
  { id: 'rice', name: 'Arroz', price: '€1.7', image: photoRice, color: 'gray' },
  { id: 'pasta', name: 'Pasta', price: '€1.3', image: photoPasta, color: 'yellow' },
  { id: 'coffee', name: 'Cafe', price: '€3.9', image: photoCoffee, color: 'brown' },
  { id: 'water', name: 'Agua', price: '€0.8', image: photoWater, color: 'blue' },
  { id: 'chicken', name: 'Pollo', price: '€7.5/kg', image: photoChicken, color: 'pink' },
];

function App() {
  return (
    <div className="pos-container">
      <div className="products-panel">
        <h1>Punto de Venta</h1>

        <div className="weight-input">
          <label htmlFor="peso">Peso (kg)</label>
          <input id="peso" type="number" step="0.1" defaultValue={1} />
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <button key={product.id} type="button" className={`product-button ${product.color}`}>
              <img src={product.image} alt={product.name} />
              <div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="cart-panel">
        <h2>Carrito</h2>

        <div className="cart-items" />

        <div className="totals">
          <div className="row">
            <span>Subtotal</span>
            <span>€0.00</span>
          </div>
          <div className="row discount">
            <span>Descuento</span>
            <span>-€0.00</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span>€0.00</span>
          </div>
        </div>

        <div className="coupon-area">
          <input type="text" placeholder="Codigo de cupon" defaultValue="" />
          <button type="button">Aplicar Cupon</button>
        </div>

        <button type="button" className="checkout">
          Cobrar / Reset
        </button>
      </div>
    </div>
  );
}

export default App;
