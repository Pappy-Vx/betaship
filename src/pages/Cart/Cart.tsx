import {TrashIcon} from '@radix-ui/react-icons'

// Mock data - replace with Redux state later
const mockCartItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    quantity: 2,
    image: 'https://via.placeholder.com/100'
  }
];

const Cart = () => {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {mockCartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {mockCartItems.map((item) => (
              <div key={item.id} className="p-6 border-b last:border-b-0">
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      value={item.quantity}
                      onChange={() => {}}
                      className="p-2 border rounded-md"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {}}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
