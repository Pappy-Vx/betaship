import Banner from '../layouts/home/Banner';
import Categories from '../layouts/home/Categories';
import FeaturedProducts from '../layouts/home/FeaturedProducts';

const Home = () => {
  const bannerData = {
    title: "Grab Upto 50% Off On Selected Headphone",
    subtitle: "Experience premium sound quality with our wide selection of headphones",
    imageUrl: "https://via.placeholder.com/1200x400",
    buttonText: "Shop Now",
    buttonLink: "/category/headphones",
    discount: "Up to 50% Off"
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Banner */}
      <Banner {...bannerData} />

      {/* Categories Section */}
      <Categories />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* You can add more sections here */}
    </div>
  );
};

export default Home;
