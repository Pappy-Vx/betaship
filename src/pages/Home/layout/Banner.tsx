import { Link } from 'react-router-dom';
import { BannerProps } from '../../../types/home.types';

const Banner = ({ title, subtitle, imageUrl, buttonText, buttonLink, discount }: BannerProps) => {
  return (
    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#330066]/80 to-transparent flex items-center">
        <div className="max-w-xl px-6 md:px-12">
          {discount && (
            <span className="inline-block bg-[#f68b1e] text-white px-4 py-1 rounded-full text-sm mb-4">
              {discount}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-white/90 text-lg mb-6">
            {subtitle}
          </p>
          <Link 
            to={buttonLink}
            className="inline-block bg-[#f68b1e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67e15] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
