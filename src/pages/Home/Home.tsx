import Banner from './layout/Banner';
import Categories from './layout/Categories';
import FeaturedProducts from './layout/FeaturedProducts';
import NewCollections from './layout/NewCollections';
import RecentlyViewed from './layout/RecentlyViewed';
import Header from '../../components/Header';
import HomeFooter from './layout/HomeFooter';
import Footer from '../../components/Footer';

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

        {/* New Collections Section */}
        <NewCollections />

        {/* Recently Viewed Section */}
        <RecentlyViewed />

        <HomeFooter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
