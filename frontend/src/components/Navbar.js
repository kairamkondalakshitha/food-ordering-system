import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Food Ordering
        </Link>

        <div>

          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/restaurants">
            Restaurants
          </Link>

          <Link className="btn btn-outline-light me-2" to="/cart">
            Cart
          </Link>

          <Link className="btn btn-outline-light me-2" to="/orders">
            Orders
          </Link>

          <Link className="btn btn-success me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-warning" to="/register">
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;