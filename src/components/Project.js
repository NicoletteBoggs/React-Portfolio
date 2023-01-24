import React from "react";

function Project() {
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Projects</h5>
              <p className="card-text">
                <img
                  src="https://i.postimg.cc/7Ydhn5js/login.gif"
                  alt="holiday wishlist"
                  max-width="200"
                  height="200"
                />
              </p>
              <a
                href="https://github.com/Darin1027/Holiday-Wishlist-App"
                className="submit"
              >
                Holiday Wishlist App
              </a>
              <br />
              <br />
              <img
                src="https://i.postimg.cc/8cskhG4g/reservation.png"
                alt="the malie"
                max-width="200"
                height="200"
              />
              <br />
              <br />
              <a
                href="https://github.com/BluSkreen/malie-hotel"
                className="submit"
              >
                The Malie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
