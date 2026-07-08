import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Orders() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="text-center mb-4">📦 Order History</h2>

        <div className="card p-3 mb-3 shadow">
          <h5>🍕 Pizza</h5>
          <p>Amount : ₹299</p>
          <span className="badge bg-success">Delivered</span>
        </div>

        <div className="card p-3 mb-3 shadow">
          <h5>🍔 Burger</h5>
          <p>Amount : ₹199</p>
          <span className="badge bg-warning text-dark">Preparing</span>
        </div>

        <div className="card p-3 shadow">
          <h5>🍗 Chicken Biryani</h5>
          <p>Amount : ₹249</p>
          <span className="badge bg-primary">On the Way</span>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Orders;