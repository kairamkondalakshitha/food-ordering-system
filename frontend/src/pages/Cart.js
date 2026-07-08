import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="text-center mb-4">🛒 My Cart</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center align-middle">

            <thead className="table-dark">
              <tr>
                <th>Food Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>🍕 Pizza</td>
                <td>₹299</td>
                <td>1</td>
                <td>₹299</td>
              </tr>

              <tr>
                <td>🍔 Burger</td>
                <td>₹199</td>
                <td>2</td>
                <td>₹398</td>
              </tr>

              <tr>
                <td>🍗 Chicken Biryani</td>
                <td>₹249</td>
                <td>1</td>
                <td>₹249</td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="text-end mt-4">

          <h4 className="mb-3">
            Grand Total: <span className="text-success">₹946</span>
          </h4>

          <button className="btn btn-success me-3">
            ✅ Place Order
          </button>

          <button className="btn btn-danger">
            🗑️ Clear Cart
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Cart;