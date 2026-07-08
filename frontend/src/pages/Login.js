import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card p-4 mx-auto shadow" style={{maxWidth:"450px"}}>

          <h2 className="text-center mb-4">Login</h2>

          <input className="form-control mb-3" placeholder="Email"/>

          <input type="password" className="form-control mb-3" placeholder="Password"/>

          <button className="btn btn-success">
            Login
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Login;