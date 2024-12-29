const LandingPage = () => {
  return (
    <div className="container">
      <div className="landingpage-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES
        </p>
        <div className="shopping-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-logo">
            <img src="./src/assets/amazon.png" alt="amazon-logo"></img>
            <img src="./src/assets/flipkart.png" alt="flipkart-logo"></img>
          </div>
        </div>
      </div>
      <div className="landingpage-image">
        <img src="./src/assets/shoe_image.png" alt="shoe-logo"></img>
      </div>
    </div>
  );
};

export default LandingPage;
