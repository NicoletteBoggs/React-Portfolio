import React from "react";
function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="container">
          <div className="row">
            <div className="mt-5">
              <div className="card">
                <div className="card-body">
                  <p>
                    Check out my resume
                    <br />
                    <a href="/googledoc/resumepath" className="navitem">
                      here
                    </a>
                    <br /> Or download
                    <br />
                    <a
                      href="/relative/path/to/pdf"
                      className="navitem"
                      download
                    >
                      here
                    </a>
                  </p>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4">
                        <h3>Front-end Proficiencies</h3>
                        <ul className="skills">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>jQuery</li>
                          <li>responsive design</li>
                          <li>React</li>
                          <li>Bootstrap</li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <h3>Back-end Proficiencies</h3>
                        <ul className="skills">
                          <li>APIs</li>
                          <li>Node</li>
                          <li>Express</li>
                          <li>MySQL, Sequelize</li>
                          <li>MongoDB, Mongoose</li>
                          <li>REST</li>
                          <li>GraphQL</li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <img
                          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          alt="typing"
                          max-width="180"
                          height="180"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
