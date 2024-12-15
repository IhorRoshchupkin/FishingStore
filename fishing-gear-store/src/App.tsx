import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductCard from "./components/productCard/productCard";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* Product Grid */}
      <ProductCard />
      <Footer />
    </div>
  );
};

export default App;
