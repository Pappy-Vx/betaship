import Banner from './layout/Banner';
import Categories from './layout/Categories';
import FeaturedProducts from './layout/FeaturedProducts';
import Header from '../../components/Header';

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
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Banner */}
        <Banner {...bannerData} />

        {/* Categories Section */}
        <Categories />

        {/* Featured Products Section */}
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
