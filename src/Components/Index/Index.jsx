import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IngenieriaDeNegocios from "../IngenieriaDeNegocios/IngenieriaDeNegocios";
const Index = () => {
  //Estados del formulario
  const { register, handleSubmit } = useForm();

  //Login
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [banLogin, setBanLogin] = useState(true);

  //Tutorias
  const [T1, setT1] = useState(false);
  const [T2, setT2] = useState(false);
  const [T3, setT3] = useState(false);
  const [T4, setT4] = useState(false);
  const [T5, setT5] = useState(false);

  const login = () => {
    if (user == "admin" && password == "admin") {
      setBanLogin(false);
    }
  };

  const showT1 = () => {
    setT1(true);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const showT2 = () => {
    setT1(false);
    setT2(true);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const showT3 = () => {
    setT1(false);
    setT2(false);
    setT3(true);
    setT4(false);
    setT5(false);
  };

  const showT4 = () => {
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(true);
    setT5(false);
  };

  const showT5 = () => {
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(true);
  };

  return (
    <div className="App">
      //Nav
      ------------------------------------------------------------------------------------
      {banLogin == true ? (
        <nav
          className="navbar navbar-light fixed-top"
          style={{ backgroundColor: "#D71C1C" }}
        >
          <a className="container">
            {" "}
            <h1 className="text-white"> Universidad del Tolima </h1>
          </a>
        </nav>
      ) : (
        <nav
          className="navbar navbar-light fixed-top"
          style={{ backgroundColor: "#D71C1C" }}
        >
          <div className="container" style={{ width: "95%" }}>
            <a className="container col-sm" style={{ marginRight: "15%" }}>
              {" "}
              <h1 className="text-white"> Universidad del Tolima </h1>
            </a>
            <ul
              className="nav justify-content-end col-sm"
              style={{ fontSize: "1.5rem" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link text-white border-bottom border-white mx-2"
                  aria-current="page"
                  href="#"
                  onClick={showT1}
                >
                  T1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-2"
                  onClick={showT2}
                  href="#"
                >
                  T2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-2"
                  onClick={showT3}
                  href="#"
                >
                  T3
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-2"
                  href="#"
                  onClick={showT4}
                >
                  T4
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-2"
                  href="#"
                  onClick={showT5}
                >
                  T5
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <div>
        {banLogin == true ? (
          //inicio Login ----------------------------------------------------------------------------
          <div className="container" style={{ marginTop: "10rem" }}>
            <h2>Ingeniería de Negocios</h2>
            <div className="row bg-light mt-3">
              <div className="col-sm-6">
                <h1>Cipa No.</h1>
                <div className="mt-5 text" style={{ fontSize: "1.5em" }}>
                  <p>
                    Santiago Lozano Murcia <br></br> Maria Catherine Parra Leiva
                    <br></br> Nombre Completo <br></br> Nombre Completo
                  </p>
                </div>
              </div>
              <div className="card m-3 rounded" style={{ width: "40%" }}>
                <div className="card-body">
                  <form onSubmit={handleSubmit(login)}>
                    <div className="form-group">
                      <label for="exampleInputEmail1" style={{ float: "left" }}>
                        User
                      </label>
                      <input
                        className="form-control d-block"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleInputPassword1"
                        style={{ float: "left" }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block text-white"
                      style={{ backgroundColor: "#D71C1C" }}
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          //Cuerpo-----------------------------------------------------------------
          <div>
            {T1 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 1</h2>
                <p className="bg-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  mollitia, incidunt at aliquid iste quibusdam consequatur
                  beatae nostrum quam maiores reprehenderit labore ab enim
                  quidem nulla autem numquam laudantium perspiciatis?
                </p>
              </div>
            ) : T2 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 2</h2>
                <p className="bg-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  mollitia, incidunt at aliquid iste quibusdam consequatur
                  beatae nostrum quam maiores reprehenderit labore ab enim
                  quidem nulla autem numquam laudantium perspiciatis?
                </p>
              </div>
            ) : T3 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 3</h2>
                <p className="bg-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  mollitia, incidunt at aliquid iste quibusdam consequatur
                  beatae nostrum quam maiores reprehenderit labore ab enim
                  quidem nulla autem numquam laudantium perspiciatis?
                </p>
              </div>
            ) : T4 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 4</h2>
                <p className="bg-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  mollitia, incidunt at aliquid iste quibusdam consequatur
                  beatae nostrum quam maiores reprehenderit labore ab enim
                  quidem nulla autem numquam laudantium perspiciatis?
                </p>
              </div>
            ) : T5 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 5</h2>
                <p className="bg-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  mollitia, incidunt at aliquid iste quibusdam consequatur
                  beatae nostrum quam maiores reprehenderit labore ab enim
                  quidem nulla autem numquam laudantium perspiciatis?
                </p>
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
      <div className="border-top border-danger fixed-bottom font-weight-light">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Santiago Lozano Murcia slozano@ut.edu.co
            </div>
            <div className="col-sm">
              Maria Catherine Parra Leiva cparra@ut.edu.co
            </div>
            <div className="col-sm">
              Nombre Completo Apellidos user@ut.edu.co
            </div>
            <div className="col-sm">
              Nombre Completo Apellidos user@ut.edu.co
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
