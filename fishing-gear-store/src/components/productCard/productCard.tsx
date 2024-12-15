import "./productCard.css";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Fishing Rod",
    description: "High-quality rod for deep-sea fishing.",
    price: "$50.00",
    imageUrl: "https://i.ebayimg.com/images/g/Gg0AAOSwW55k77ab/s-l400.jpg",
  },
  {
    id: 2,
    name: "Fishing Reel",
    description: "Smooth and durable reel for long-lasting use.",
    price: "$30.00",
    imageUrl:
      "https://cdn.ready-market.com.tw/6870faaa/Templates/pic/Tesoro-spin.png?v=506fa658",
  },
  {
    id: 3,
    name: "Bait Set",
    description: "Assorted bait for various types of fish.",
    price: "$15.00",
    imageUrl: "https://m.media-amazon.com/images/I/81pnIglAAUL.jpg",
  },
  {
    id: 4,
    name: "Fishing Line",
    description: "Strong and reliable fishing line for all conditions.",
    price: "$10.00",
    imageUrl:
      "https://i5.walmartimages.com/seo/Berkley-Trilene-Big-Game-10-lb-Fishing-Line-Clear_f4d1ea71-87bc-4875-afb5-34e85c230c1c_2.24c85b82b632b87a64d2ab9f88a9febb.jpeg",
  },
];

const ProductCard = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{product.price}</strong>
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
