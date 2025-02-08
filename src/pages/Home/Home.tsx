import { Link } from 'react-router-dom';
import Header from '../../components/Header';
const Home = () => {
  return (
    <>
    <Header />
    <div className="space-y-8 ">
      <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to BetaShip
        </h1>
        <p className="text-xl text-white mb-8">
          Your one-stop shop for all your needs
        </p>
        <Link
          to="/products"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Get your items delivered quickly and securely</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">Shop with confidence using our secure payment system</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Our customer service team is always here to help</p>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default Home;
