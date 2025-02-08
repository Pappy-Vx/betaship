import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// Mock data - replace with API call later
const mockProduct = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
  description: 'High-quality wireless headphones with noise cancellation feature. Perfect for music lovers and professionals alike.',
  images: [
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/600'
  ],
  features: [
    'Active Noise Cancellation',
    'Bluetooth 5.0',
    '30-hour battery life',
    'Quick charging'
  ],
  specs: {
    'Brand': 'BetaAudio',
    'Model': 'BA-2000',
    'Color': 'Black',
    'Connectivity': 'Wireless',
    'Battery': '500mAh'
  }
};

const ProductDetails = () => {
  // const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // In a real app, fetch product details using the id

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={mockProduct.images[selectedImage]}
            alt={mockProduct.name}
            className="w-full rounded-lg shadow-md"
          />
          <div className="grid grid-cols-3 gap-4">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-purple-600' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${mockProduct.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{mockProduct.name}</h1>
          <p className="text-2xl text-purple-600">${mockProduct.price.toFixed(2)}</p>
          <p className="text-gray-600">{mockProduct.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-semibold">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="p-2 border rounded-md"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {mockProduct.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockProduct.specs).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
