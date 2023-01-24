import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <img
                  src="https://i.postimg.cc/s2R2btj5/me.jpg"
                  alt="me"
                  className="rounded img-fluid"
                />
                <p className="card-text">
                  Nicolette. Food and mountain enthusiast. Baby coder.
                  University of Denver alumni.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
