import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* Main content of your app */}
      <div className="flex-grow-1">{/* Your main content here */}</div>
      <Footer />
    </div>
  );
};

export default App;
