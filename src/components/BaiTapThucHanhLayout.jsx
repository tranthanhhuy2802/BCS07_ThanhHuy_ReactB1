import React, { Component } from "react";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5">
              <a className="navbar-brand" href="#!">
                Start Bootstrap
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#!"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="body container">
          <header class="py-5">
            <div class="container px-lg-5">
              <div class="p-4 p-lg-5 bg-light text-left border border-primary border-4">
                <div class="m-4 m-lg-5">
                  <h1 class="display-5 fw-bold">A warm welcome!</h1>
                  <p class="fs-4">
                    Bootstrap utility classes are used to create this jumbotron
                    since the old component has been removed from the framework.
                    Why create custom CSS when you can use utilities?
                  </p>
                  <a class="btn btn-primary btn-lg" href="#!">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- Page Content--> */}
          <section className="pt-4">
            <div className="container px-lg-5">
              {/* Page Features*/}
              <div className="row gx-lg-5">
                <div className="col-lg-6 col-xxl-3 mb-5">
                  <div className="card border-danger border-3 border rounded-0 h-100">
                    <div className="img py-5 text-center text-body-tertiary bg-body-secondary">
                      <p className="fs-1">500 x 325</p>
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-collection" />
                      </div>
                      <h2 className="fs-4 fw-bold">Card Title</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto est ratione minima repudiandae
                        numquam!
                      </p>
                    </div>
                    <div className="button bg-body-secondary border-1 border-top py-3 text-center">
                      <button className=" btn bg-primary rounded-1 text-white ">
                        Find Out More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3 mb-5">
                  <div className="card border-danger border-3 border rounded-0 h-100">
                    <div className="img py-5 text-center text-body-tertiary bg-body-secondary">
                      <p className="fs-1">500 x 325</p>
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-collection" />
                      </div>
                      <h2 className="fs-4 fw-bold">Card Title</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto est ratione minima repudiandae
                        numquam!
                      </p>
                    </div>
                    <div className="button bg-body-secondary border-1 border-top py-3 text-center">
                      <button className=" btn bg-primary rounded-1 text-white ">
                        Find Out More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3 mb-5">
                  <div className="card border-danger border-3 border rounded-0 h-100">
                    <div className="img py-5 text-center text-body-tertiary bg-body-secondary">
                      <p className="fs-1">500 x 325</p>
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-collection" />
                      </div>
                      <h2 className="fs-4 fw-bold">Card Title</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto est ratione minima repudiandae
                        numquam!
                      </p>
                    </div>
                    <div className="button bg-body-secondary border-1 border-top py-3 text-center">
                      <button className=" btn bg-primary rounded-1 text-white ">
                        Find Out More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3 mb-5">
                  <div className="card border-danger border-3 border rounded-0 h-100">
                    <div className="img py-5 text-center text-body-tertiary bg-body-secondary">
                      <p className="fs-1">500 x 325</p>
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-collection" />
                      </div>
                      <h2 className="fs-4 fw-bold">Card Title</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto est ratione minima repudiandae
                        numquam!
                      </p>
                    </div>
                    <div className="button bg-body-secondary border-1 border-top py-3 text-center">
                      <button className=" btn bg-primary rounded-1 text-white ">
                        Find Out More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2023
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
