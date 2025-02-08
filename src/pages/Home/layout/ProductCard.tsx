import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../../types/home.types';
import { FiStar } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/features/cartSlice';
import { toast } from 'react-toastify';
import { useRecentlyViewed } from '../../../hooks/useRecentlyViewed';
import { routePath } from '../../../utils/routePath';

const ProductCard = ({ id, name, price, originalPrice, imageUrl, rating, reviews, discount }: ProductCardProps) => {
  const dispatch = useDispatch();
  const { addToRecentlyViewed } = useRecentlyViewed();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    dispatch(addToCart({ id, name, price, originalPrice, imageUrl, rating, reviews, discount }));
    toast.success('Added to cart!');
  };

  const handleProductClick = () => {
    addToRecentlyViewed({ id, name, price, originalPrice, imageUrl, rating, reviews, discount });
  };

  return (
    <Link 
      to={routePath.PRODUCT_DETAILS.replace(':id', id)} 
      className="block group"
      onClick={handleProductClick}
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-w-1 aspect-h-1">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {discount && discount > 0 && (
            <span className="absolute top-2 right-2 bg-[#330066] text-white px-2 py-1 rounded-full text-xs font-medium">
              -{discount}%
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-gray-800 font-medium mb-2 group-hover:text-[#330066] transition-colors line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex-1">
              <span className="text-lg font-bold text-[#330066]">
                ₦{price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₦{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, index) => (
              <FiStar
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(rating)
                    ? 'text-[#330066] fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({reviews})
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#330066] text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
