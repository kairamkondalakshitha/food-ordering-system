import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center fw-bold">
          🍔 Online Food Ordering System
        </h1>

        <p className="text-center text-muted">
          Order delicious food from your favourite restaurants.
        </p>

        {/* Search Bar */}
        <div className="row mt-4 mb-5">
          <div className="col-md-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search Food Items..."
            />
          </div>
        </div>

        <div className="row g-4">

          {/* Pizza */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                className="card-img-top"
                alt="Pizza"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Pizza</h5>
                <p className="text-success fw-bold">₹299</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

          {/* Burger */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                className="card-img-top"
                alt="Burger"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Burger</h5>
                <p className="text-success fw-bold">₹199</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

          {/* Biryani */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
                className="card-img-top"
                alt="Chicken Biryani"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Chicken Biryani</h5>
                <p className="text-success fw-bold">₹249</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

          {/* Veg Pizza */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                className="card-img-top"
                alt="Veg Pizza"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Veg Pizza</h5>
                <p className="text-success fw-bold">₹229</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

          {/* Paneer Burger */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                className="card-img-top"
                alt="Paneer Burger"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Paneer Burger</h5>
                <p className="text-success fw-bold">₹179</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

          {/* Noodles */}
          <div className="col-md-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
                className="card-img-top"
                alt="Veg Noodles"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>Veg Noodles</h5>
                <p className="text-success fw-bold">₹189</p>

                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;