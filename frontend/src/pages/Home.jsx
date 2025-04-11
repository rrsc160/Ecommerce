import Hero from '../compoents/Layout/Hero'; // adjust path as needed
import GenderCollectionSection from '../compoents/Products/GenderCollectionSection';
import NewArrivals from '../compoents/Products/NewArrivals';
import ProductsDetails from '../compoents/Products/ProductsDetails';

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection/>
      <NewArrivals/>
      {/* Best Seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductsDetails/>
    </div>
  );
};

export default Home;
