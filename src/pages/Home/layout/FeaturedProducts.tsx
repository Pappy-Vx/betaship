import { useProducts } from '../../../hooks/useProducts';
import ProductCard from './ProductCard';
import { ProductCardProps } from '../../../types/home.types';

// Mock data - replace with actual API call
const mockProducts: ProductCardProps[] = [
  {
    id: '1',
    name: 'Wireless Earbuds IPX8',
    price: 19999,
    originalPrice: 29999,
    imageUrl: 'https://via.placeholder.com/300',
    rating: 4.5,
    reviews: 128,
    discount: 33
  },
  {
    id: '2',
    name: 'AirPods Max',
    price: 89999,
    imageUrl: 'https://via.placeholder.com/300',
    rating: 4.8,
    reviews: 256
  },
  // Add more mock products
];

const FeaturedProducts = () => {
  const { products, sortBy, setSortBy } = useProducts(mockProducts);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Featured Products
        </h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'newest')}
          className="px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:border-[#330066]"
        >
          <option value="newest">Newest</option>
          <option value="price">Price: Low to High</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
