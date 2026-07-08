function Restaurants() {
  return (
    <div className="container mt-5">

      <h2>Restaurants</h2>

      <div className="row">

        <div className="col-md-4">

          <div className="card p-3">

            <h4>Pizza Hut</h4>

            <p>Italian Food</p>

            <button className="btn btn-primary">
              View Menu
            </button>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-3">

            <h4>KFC</h4>

            <p>Fast Food</p>

            <button className="btn btn-primary">
              View Menu
            </button>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-3">

            <h4>Paradise Biryani</h4>

            <p>Hyderabadi Biryani</p>

            <button className="btn btn-primary">
              View Menu
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Restaurants;