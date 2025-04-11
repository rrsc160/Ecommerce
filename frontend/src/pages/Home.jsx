import Hero from '../compoents/Layout/Hero'; // adjust path as needed
import GenderCollectionSection from '../compoents/Products/GenderCollectionSection';
import NewArrivals from '../compoents/Products/NewArrivals';

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection/>
      <NewArrivals/>
    </div>
  );
};

export default Home;
