import { useState } from 'react';
import ProductCard from './ProductCard';
import { ProductCardProps } from '../../../types/home.types';
import all_product from '../../../assets/items/all_product';

const FeaturedProducts = () => {
  const [products] = useState<ProductCardProps[]>(() => {
    // Get 6 random products from all_product
    return all_product
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .map(product => ({
        id: String(product.id),
        name: product.name,
        price: product.new_price || 0,
        originalPrice: product.old_price || undefined,
        imageUrl: product.image || '',
        rating: 4.5, // Default rating
        reviews: Math.floor(Math.random() * 200) + 50, // Random review count
        discount: product.old_price && product.new_price
          ? Math.floor(((product.old_price - product.new_price) / product.old_price) * 100)
          : undefined
      }));
  });

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
