import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card p-4 mx-auto shadow" style={{maxWidth:"500px"}}>

          <h2 className="text-center mb-4">Create Account</h2>

          <input className="form-control mb-3" placeholder="Full Name"/>

          <input className="form-control mb-3" placeholder="Email"/>

          <input type="password" className="form-control mb-3" placeholder="Password"/>

          <button className="btn btn-primary">
            Register
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Register;