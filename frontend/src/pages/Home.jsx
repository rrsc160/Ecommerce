import Hero from '../compoents/Layout/Hero';
import FeaturedCollection from '../compoents/Products/FeaturedCollection';
import FeaturesSection from '../compoents/Products/FeaturesSection';
import GenderCollectionSection from '../compoents/Products/GenderCollectionSection';
import NewArrivals from '../compoents/Products/NewArrivals';
import ProductGrid from '../compoents/Products/ProductGrid';
import ProductsDetails from '../compoents/Products/ProductsDetails';

const placeholderProducts = [{
  _id: 1,
  name: "Product 1",
  price: 250,
  images: [{ url: "https://picsum.photos/500/500?random=6" }],
},
{
  _id: 6,
  name: "Product 1",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=7" }],
},
{
  _id: 7,
  name: "Product 3",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=8" }],
},
{
  _id: 8,
  name: "Product 4",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=9" }],
},
{
  _id: 7,
  name: "Product 3",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=10" }],
},
{
  _id: 8,
  name: "Product 4",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=11" }],
},
{
  _id: 7,
  name: "Product 3",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=12" }],
},
{
  _id: 8,
  name: "Product 4",
  price: 100,
  images: [{ url: "https://picsum.photos/500/500?random=13" }],
},
]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductsDetails />
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
