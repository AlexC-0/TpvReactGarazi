import { useState } from 'react';
import CartPanel from './components/CartPanel.jsx';
import ProductsPanel from './components/ProductsPanel.jsx';
import { products } from './data/products.js';

const coupons = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  VIP: 0.3,
};

function formatCurrency(value) {
  return `€${value.toFixed(2)}`;
}

function normalizeAmount(product, value) {
  const parsedValue = Number.parseFloat(value);

  if (Number.isNaN(parsedValue) || parsedValue <= 0) {
    return 1;
  }

  if (product.measurement === 'unit') {
    return Math.max(1, Math.round(parsedValue));
  }

  return parsedValue;
}

function formatQuantity(product, amount) {
  if (product.measurement === 'weight') {
    return `${amount.toFixed(1)} kg`;
  }

  if (Number.isInteger(amount)) {
    return `${amount} uds`;
  }

  return `${amount.toFixed(1)} uds`;
}

function App() {
  const [quantityValue, setQuantityValue] = useState('1');
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Introduce un cupon y pulsa el boton para aplicarlo.');

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  const handleQuantityChange = (event) => {
    setQuantityValue(event.target.value);
  };

  const handleProductSelect = (product) => {
    const amount = normalizeAmount(product, quantityValue);
    const newItem = {
      id: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      name: product.name,
      quantityLabel: formatQuantity(product, amount),
      total: product.unitPrice * amount,
    };

    setCartItems((currentItems) => [...currentItems, newItem]);
    setQuantityValue(product.measurement === 'unit' ? `${Math.max(1, Math.round(amount))}` : `${amount}`);
    setStatusMessage(`${product.name} se ha añadido al carrito.`);
  };

  const handleApplyCoupon = () => {
    const normalizedCoupon = couponCode.trim().toUpperCase();

    if (cartItems.length === 0) {
      setDiscountRate(0);
      setStatusMessage('Debes añadir productos antes de aplicar un cupon.');
      return;
    }

    if (!normalizedCoupon) {
      setDiscountRate(0);
      setStatusMessage('Escribe un codigo de cupon antes de aplicarlo.');
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(coupons, normalizedCoupon)) {
      setDiscountRate(0);
      setStatusMessage('El codigo introducido no es valido.');
      return;
    }

    setCouponCode(normalizedCoupon);
    setDiscountRate(coupons[normalizedCoupon]);
    setStatusMessage(`Cupon ${normalizedCoupon} aplicado correctamente.`);
  };

  const handleReset = () => {
    if (cartItems.length === 0) {
      setStatusMessage('El TPV ya esta vacio y listo para una nueva compra.');
      return;
    }

    setCartItems([]);
    setCouponCode('');
    setDiscountRate(0);
    setQuantityValue('1');
    setStatusMessage('Compra finalizada. El TPV vuelve a estar listo.');
  };

  return (
    <div className="pos-container">
      <ProductsPanel
        products={products}
        quantityValue={quantityValue}
        onQuantityChange={handleQuantityChange}
        onProductSelect={handleProductSelect}
      />
      <CartPanel
        cartItems={cartItems}
        subtotal={subtotal}
        discount={discount}
        total={total}
        couponCode={couponCode}
        onCouponChange={(event) => setCouponCode(event.target.value)}
        onApplyCoupon={handleApplyCoupon}
        onReset={handleReset}
        statusMessage={statusMessage}
        formatCurrency={formatCurrency}
      />
    </div>
  );
}

export default App;
