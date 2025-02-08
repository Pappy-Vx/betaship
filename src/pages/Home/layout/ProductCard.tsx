import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../../types/home.types';
import { FiStar } from 'react-icons/fi';

const ProductCard = ({ id, name, price, originalPrice, imageUrl, rating, reviews, discount }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-48 object-cover"
          />
          {discount && (
            <span className="absolute top-2 right-2 bg-[#f68b1e] text-white px-2 py-1 rounded-full text-sm">
              -{discount}%
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-gray-800 font-medium mb-2 group-hover:text-[#330066] transition-colors line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg font-bold text-[#330066]">
              ₦{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₦{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FiStar
                key={index}
                className={`w-4 h-4 ${
                  index < rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
