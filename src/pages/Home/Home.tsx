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
    title: "Get Your Medical Products Here",
    subtitle: "Experience quality medical products at affordable rates",
    imageUrl: "https://via.placeholder.com/1200x400",
    buttonText: "Shop Now",
    buttonLink: "/product",
    discount: "Up to 5% Off"
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
