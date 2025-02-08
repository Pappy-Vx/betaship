import { useState } from 'react';
import ProductCard from './ProductCard';
import all_product from '../../../assets/items/all_product';
import { ProductCardProps } from '../../../types/home.types';
import { AllProduct } from '../../../types/product.types';

const NewCollections = () => {
  const [visibleProducts] = useState<ProductCardProps[]>(() => {
    // Get the latest 6 products from all_product
    return all_product.slice(-6).map((product: AllProduct) => ({
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
          New Collections
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewCollections;
