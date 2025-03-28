import '../css/product.css'

export default function ProductSection() {
    const products = [
      {
        icon: "leaderboard",
        title: "Business Management",
        description: 'Streamline operations and manage resources efficiently',
      },
      {
        icon: "group",
        title: "Team Collaboration",
        description: 'Keep your team aligned and productive',
      },
      {
        icon: "query_stats",
        title: "Analytics & Insights",
        description: 'Make data-driven decisions with powerful analytics',
      },
      {
        icon: "local_mall",
        title: "Online Marketplace",
        description: 'Expand your reach with integrated ecommerce',
      },
    ];
  
    // Define productsRender function
    function ProductsRender({ products }) {
      return (
        <div className="products__container">
          {products.map((product, index) => (
            <div key={index} className="product_holder">
              <span className="material-symbols-outlined">
                {product.icon}
              </span>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      );
    }
  
    // Call productsRender with products data
    return (
    <div className='products__section__container'>
    <h1 className="product__motive">Everything You Need to Succeed</h1>


    <ProductsRender products={products} />;

    </div> )
  }
  
