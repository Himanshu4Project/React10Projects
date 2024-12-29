const Navigation = () => {
  return (
    <nav className="container">
      <div>
        <img src="../src/assets/brand_logo.png" alt="logo"></img>
      </div>

      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="btn btn-primary">Login</button>
    </nav>
  );
};

export default Navigation;
