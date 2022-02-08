import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";

import universidadDelTolima from "../../Img/universidadDelTolima.png";
import bannerIngenieriaDeNegocios from "../../Img/bannerIngenieriaDeNegocios.jpg";
import bannerIngenieriaDeNegocios2 from "../../Img/bannerIngenieriaDeNegocios2.jpg";
import bannerIngenieriaDeNegocios4 from "../../Img/bannerIngenieriaDeNegocios4.jpg";

import imagenX from "../../Img/fotoX.png";

import img1_t1 from "../../Img/img1-T1.png";
import fondo1T1 from "../../Img/fondo1T1.jpg";

import img1_t2 from "../../Img/img1-T2.png";
import img2_t2 from "../../Img/img2-T2.png";

import pdf1T3 from "../../files/ficha-AyB.pdf";
import pdf2T3 from "../../files/ficha-apelsa.pdf";
import pdf3T3 from "../../files/ficha-rk.pdf";

import imgPdf from "../../Img/pdf.png";

import img1_t4 from "../../Img/img1-T4.jpeg";

const Index = () => {
  //Estados del formulario
  const { register, handleSubmit } = useForm();

  //Login
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [banLogin, setBanLogin] = useState(true);

  //Tutorias
  const [home, setHome] = useState(true);
  const [T1, setT1] = useState(false);
  const [T2, setT2] = useState(false);
  const [T3, setT3] = useState(false);
  const [T4, setT4] = useState(false);
  const [T5, setT5] = useState(false);

  const [bienvenidaT1, setBienvenidaT1] = useState(false);
  const [tituloComponentes, setTituloComponentes] = useState(true);
  const [tituloMetodologias, setTituloMetodologias] = useState(false);
  const [tituloRiesgos, setTituloRiesgos] = useState(false);
  const [tituloCriterios, setTituloCriterios] = useState(false);

  const login = () => {
    if (user == "admin" && password == "admin") {
      setBanLogin(false);
      setHome(true);
    }
  };

  const exit = () => {
    setBanLogin(true);
    setHome(false);
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const showHome = () => {
    setHome(true);
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const showT1 = () => {
    setHome(false);
    setT1(true);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const [showModal1, setShowModal1] = useState(false);
  const handleShow1 = () => setShowModal1(true);
  const handleClose1 = () => {
    setTomaDeDecisiones1(true);
    setTomaDeDecisiones2(false);
    setShowModal1(false);
  };

  const [tomaDeDecisiones1, setTomaDeDecisiones1] = useState(true);
  const [tomaDeDecisiones2, setTomaDeDecisiones2] = useState(false);

  const showTomaDeDecisiones2 = () => {
    setTomaDeDecisiones1(false);
    setTomaDeDecisiones2(true);
  };

  const [showModal2, setShowModal2] = useState(false);
  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => {
    setIndicadoresModelos(true);
    setCaracteristicasKPIs1(false);
    setCaracteristicasKPIs2(false);
    setCaracteristicasKPIs3(false);
    setShowModal2(false);
  };

  const [indicadoresModelos, setIndicadoresModelos] = useState(true);
  const [caracteristicasKPIs1, setCaracteristicasKPIs1] = useState(false);
  const [caracteristicasKPIs2, setCaracteristicasKPIs2] = useState(false);
  const [caracteristicasKPIs3, setCaracteristicasKPIs3] = useState(false);
  const [caracteristicasKPIs4, setCaracteristicasKPIs4] = useState(false);

  const showcaracteristicasKPIs1 = () => {
    setIndicadoresModelos(false);
    setCaracteristicasKPIs1(true);
  };
  const showcaracteristicasKPIs2 = () => {
    setCaracteristicasKPIs1(false);
    setCaracteristicasKPIs2(true);
  };
  const showcaracteristicasKPIs3 = () => {
    setCaracteristicasKPIs2(false);
    setCaracteristicasKPIs3(true);
  };

  const showcaracteristicasKPIs4 = () => {
    setCaracteristicasKPIs3(false);
    setCaracteristicasKPIs4(true);
  };

  const showT2 = () => {
    setHome(false);
    setT1(false);
    setT2(true);
    setT3(false);
    setT4(false);
    setT5(false);
  };

  const showT3 = () => {
    setHome(false);
    setT1(false);
    setT2(false);
    setT3(true);
    setT4(false);
    setT5(false);
  };

  const showT4 = () => {
    setHome(false);
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(true);
    setT5(false);
  };

  const showT5 = () => {
    setHome(false);
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(true);
  };

  //T2 actions
  const showComponentesT2 = () => {
    setTituloComponentes(!tituloComponentes);
    setTituloMetodologias(false);
    setTituloRiesgos(false);
    setTituloCriterios(false);
  };

  const showMetodologiasT2 = () => {
    setTituloComponentes(false);
    setTituloMetodologias(!tituloMetodologias);
    setTituloRiesgos(false);
    setTituloCriterios(false);
  };

  const showRiesgosT2 = () => {
    setTituloComponentes(false);
    setTituloMetodologias(false);
    setTituloRiesgos(!tituloRiesgos);
    setTituloCriterios(false);
  };

  const showCriteriosT2 = () => {
    setTituloComponentes(false);
    setTituloMetodologias(false);
    setTituloRiesgos(false);
    setTituloCriterios(!tituloCriterios);
  };

  return (
    <div className="App">
      //Nav------------------------------------------------------------------------------------
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
              <h1 className="text-white" style={{ fontSize: "2rem" }}>
                {" "}
                Universidad del Tolima{" "}
              </h1>
            </a>
            <ul
              className="nav justify-content-end col-sm"
              style={{ fontSize: "1.5 rem" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link text-white border-bottom border-white mx-1"
                  aria-current="page"
                  href="#"
                  onClick={showHome}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white border-bottom border-white mx-1"
                  aria-current="page"
                  href="#"
                  onClick={showT1}
                >
                  T1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-1"
                  onClick={showT2}
                  href="#"
                >
                  T2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-1"
                  onClick={showT3}
                  href="#"
                >
                  T3
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-1"
                  href="#"
                  onClick={showT4}
                >
                  T4
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white  border-bottom border-white mx-1"
                  href="#"
                  onClick={exit}
                >
                  Exit
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
                <h1>Cipa No. 3</h1>
                <div className="mt-5 text" style={{ fontSize: "1.5em" }}>
                  <p>
                    Juan David Cortes <br></br>Maria Catherine Parra Leiva
                    <br></br>Santiago Lozano Murcia
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
          <div style={{ fontSize: "1.1rem" }}>
            {home == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Ingeniería de negocios</h2>
                <div>
                  <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-interval="5000"
                      >
                        <img
                          src={bannerIngenieriaDeNegocios}
                          className="d-block w-100"
                          width="1100"
                          height="250"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item" data-interval="5000">
                        <img
                          src={bannerIngenieriaDeNegocios2}
                          class="d-block w-100"
                          width="1100"
                          height="250"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item" data-interval="5000">
                        <img
                          src={bannerIngenieriaDeNegocios4}
                          class="d-block w-100"
                          width="1100"
                          height="250"
                          alt=""
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleInterval"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleInterval"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="bg-light mt-3 text-center">Cipa Número 3</h3>
                  <p className="mt-3">
                    Bienvenidos, en esta pagina web se tratarán temas
                    relacionados con la ingeniería de negocios. Cada uno de los
                    temas está dividido por tutorías, éstas van desde la tutoría
                    número 1 hasta la tutoría número 4.
                  </p>
                  <button className="btn btn-lg btn-info" onClick={showT1}>
                    Empezar <FiArrowRight />{" "}
                  </button>
                </div>

                <div className="mb-5 mt-5">
                  <img
                    className="mb-5"
                    src={universidadDelTolima}
                    width="500"
                    height="200"
                    alt=""
                  />
                </div>
              </div>
            ) : T1 == true ? (
              <div
                className="container"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
              >
                <h2 className="bg-light">Bienvenido a la tutoría número 1</h2>
                <div className="row mt-5">
                  <div className="col-4">
                    <h3>Ingeniería de negocios</h3>
                    <p className="text-justify mt-3">
                      Los sistemas BI combinan la recopilación de datos, el
                      almacenamiento de datos y la gestión del conocimiento. Con
                      herramientas analíticas para presentar información interna
                      y competitiva compleja a planificadores y tomadores de
                      decisiones
                    </p>
                    <p className="text-justify mt-3">
                      El objetivo es mejorar la oportunidad y calidad de los
                      aportes al proceso de decisión, facilitando así el trabajo
                      de gestión. Los componentes esenciales de BI proactiva son
                      [Langseth y Vivatrat, 2003]:
                      <ul>
                        <li>almacenamiento de datos en tiempo real.</li>
                        <li>procesamiento de datos.</li>
                        <li>
                          detección automatizada de anomalías y excepciones.
                        </li>
                        <li>
                          {" "}
                          Alertas proactivas con determinación automática de
                          destinatarios.
                        </li>
                        <li> flujo de trabajo de seguimiento continuo.</li>
                        <li> aprendizaje automático y refinamiento.</li>
                        <li> sistemas de información geográfica </li>
                        <li> visualización de datos.</li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-7">
                    <img src={img1_t1} width="800" height="600" alt="" />
                  </div>
                </div>
                <div class="row mt-5 mb-5 text-justify">
                  <div class="col mr-2">
                    <Button
                      className="btn btn-md btn-block bg-info"
                      onClick={handleShow1}
                    >
                      Toma de decisiones
                    </Button>
                    <Modal
                      show={showModal1}
                      onHide={handleClose1}
                      animation={false}
                      centered={true}
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="text-right">
                          Toma de decisiones
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {tomaDeDecisiones1 == true ? (
                          <div>
                            <p>
                              A veces, la inteligencia de negocios se refiere a
                              la toma de decisiones en línea, es decir, la
                              respuesta instantánea. En cuestión de tiempo, se
                              refiere a reducir el marco de tiempo para que la
                              inteligencia siga siendo útil para el tomador de
                              decisiones cuando llega el momento. BI ayuda en la
                              toma de decisiones estratégicas y operativas. Una
                              encuesta de Gartner clasificó el uso estratégico
                              de BI en el siguiente orden [Willen, 2002]:
                              <ul className="mt-3">
                                <li>1. Gestión del desempeño corporativo</li>
                                <li>
                                  2. Optimización de las relaciones con los
                                  clientes, seguimiento de la actividad
                                  comercial y decisión tradicional.
                                </li>
                                <li>
                                  3. Aplicaciones de BI independientes
                                  empaquetadas para operaciones o estrategias
                                  específicas
                                </li>
                                <li>
                                  4. Informes de gestión de inteligencia de
                                  negocios.
                                </li>
                              </ul>
                            </p>
                            <button
                              className="btn btn-info btn-block"
                              onClick={showTomaDeDecisiones2}
                            >
                              Siguiente <FiArrowRight />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <p>
                              {" "}
                              Es simplemente reportar el desempeño de una
                              empresa y sus competidores, que es la fuerza de
                              muchos paquetes de software existentes, no es
                              suficiente. Además, que demasiadas empresas
                              todavía ven la inteligencia de negocios (como DSS
                              y EIS antes) como una función de mirar hacia
                              adentro. La inteligencia empresarial es una
                              consecuencia natural de una serie de sistemas
                              anteriores diseñados para respaldar la Toma de
                              decisiones. El surgimiento del data warehouse como
                              repositorio, los avances en data, las mayores
                              capacidades de hardware y software, y el auge de
                              las tecnologías de Internet que proporcionaron la
                              interfaz de usuario predominante se combinan para
                              crear un entorno de inteligencia de negocios más
                              rico que el que estaba disponible anteriormente.
                            </p>
                          </div>
                        )}
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div class="col mr-2">
                    <Button
                      className="btn btn-md btn-block bg-info"
                      onClick={handleShow2}
                    >
                      Indicadores de modelo de datos
                    </Button>
                    <Modal
                      show={showModal2}
                      onHide={handleClose2}
                      animation={false}
                      centered={true}
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="text-right">
                          Indicadores de modelo de datos
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {indicadoresModelos == true ? (
                          <div>
                            <p>
                              El modelo de negocio es la arquitectura de la
                              configuración de componentes de las transacciones
                              diseñadas para explotar oportunidades de negocios.
                              Los KPI (Key Performance Indicators) o Indicadores
                              Clave de Desempeño miden el nivel del desempeño de
                              un proceso determinado, enfocándose en el “cómo” e
                              indicando que tan efectivos son los procesos, de
                              forma que se pueda alcanzar el objetivo fijado.
                              Los KPIs son métricas financieras o no
                              financieras, utilizadas para cuantificar objetivos
                              que reflejan el rendimiento de una organización, y
                              que generalmente se recogen en su plan
                              estratégico. Estos son volcados en el Balanced
                              Scorecard o Cuadro de Mando Integral que los
                              recoge y muestra, generalmente con una clave de
                              colores (rojo, amarillo o verde) facilitando
                              información del cumpliendo o no del objetivo
                              fijado.
                            </p>
                            <button
                              className="btn btn-info btn-block"
                              onClick={showcaracteristicasKPIs1}
                            >
                              Siguiente <FiArrowRight />
                            </button>
                          </div>
                        ) : caracteristicasKPIs1 == true ? (
                          <div>
                            <p>
                              <strong> Características de los KPIs: </strong>
                              <br></br>
                              <br></br>
                              <strong> • Relevante </strong>
                              <br></br> ya que debe ser un factor que realmente
                              influya en el modelo de negocio, y que si esa
                              variable da resultados negativos, rápidamente se
                              pueda actuar. <br></br>
                              <br></br>
                              <strong> • Conciso </strong>
                              <br></br> Cuanto menor sea el número de KPIs en
                              los que se pueda mesurar la información necesaria
                              para la empresa, mejor. Simplificará el vaciado y
                              la cuantificación de los datos obtenidos.{" "}
                              <br></br>
                              <br></br>
                            </p>
                            <button
                              className="btn btn-info btn-block"
                              onClick={showcaracteristicasKPIs2}
                            >
                              Siguiente <FiArrowRight />
                            </button>
                          </div>
                        ) : caracteristicasKPIs2 == true ? (
                          <div>
                            <p>
                              <strong>• Simple </strong>
                              <br></br> Los usuarios deben entender con
                              facilidad en qué consiste cada indicador y qué
                              valor tiene.<br></br>
                              <br></br> <strong>• Fácil de procesar </strong>
                              <br></br> El proceso de descifrar y conocer el
                              efecto de los resultados obtenidos debe ser un
                              procedimiento sencillo y clarificador. <br></br>
                              <br></br>
                            </p>
                            <button
                              className="btn btn-info btn-block"
                              onClick={showcaracteristicasKPIs3}
                            >
                              Siguiente <FiArrowRight />
                            </button>
                          </div>
                        ) : caracteristicasKPIs3 == true ? (
                          <div>
                            <p>
                              <strong> • Emprendimiento </strong> <br></br> La
                              Ingeniería de Negocios es una disciplina que busca
                              formalizar y proveer una metodología para el
                              diseño integral de los negocios, desde el análisis
                              y la concepción de la Estrategia, pasando por el
                              diseño de los Modelos de Negocio y los Procesos de
                              Negocio que las materializan, y llegando hasta el
                              diseño de las aplicaciones y la infraestructura TI
                              que apoya la ejecución de dichos procesos.
                              <br></br>
                              <br></br>
                            </p>
                            <button
                              className="btn btn-info btn-block"
                              onClick={showcaracteristicasKPIs4}
                            >
                              Siguiente <FiArrowRight />
                            </button>
                          </div>
                        ) : caracteristicasKPIs4 == true ? (
                          <div>
                            <p>
                              <strong>• Innovación </strong> <br></br> Consiste
                              en buscar soluciones para resolver un problema o
                              una necesidad de mercado, o en materializar ideas
                              potenciales que brinden a la empresa ventajas
                              competitivas y aseguren su permanencia en el
                              mercado. El resultado que se obtiene al aplicar
                              este proceso necesariamente representa un ingreso
                              para las empresas que podría reflejarse a través
                              de una reducción de tiempos y costos, adquisición
                              y retención de clientes, compromiso de sus
                              colaboradores y dividendos adicionales.
                              <br></br>
                              <br></br>
                            </p>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            ) : T2 == true ? (
              <div
                className="container"
                style={{ marginTop: "5rem", marginBottom: "5rem" }}
              >
                <h2 className="bg-light">Bienvenido a la tutoría número 2</h2>
                <h3 className="mt-5">
                  {" "}
                  <strong>Herramientas</strong>
                </h3>

                <button
                  className="btn btn-block btn-info mt-5"
                  onClick={showComponentesT2}
                >
                  <strong> Componentes</strong>{" "}
                </button>
                {tituloComponentes == true ? (
                  <div
                    class="row mt-3 text-justify"
                    style={{
                      marginBottom: "5rem",
                    }}
                  >
                    <div class="col mr-2">
                      <p class="col mt-3">
                        <ul>
                          <li>
                            {" "}
                            <strong> Modelo de función empresarial</strong>{" "}
                            <br></br> Descomposición jerárquica de negocio de la
                            organización. Muestra lo que hace la organización.{" "}
                          </li>

                          <li className="mt-3">
                            <strong> Modelo de procesos de negocio </strong>{" "}
                            <br></br> Procesos implementados para funciones de
                            negocio Muestra cómo se desempeña la
                            organización.Sus funciones comerciales
                          </li>
                          <li className="mt-3">
                            <strong> Modelo de datos comerciales </strong>{" "}
                            <br></br> Representa los objetos de datos, las
                            relaciones que conectan estos objetos basados en
                            negocios reales actividades, los elementos de datos
                            almacenados sobre estos objetos, y las reglas de
                            negocio que rigen estos objetos. Muestra qué datos
                            describen la organización.
                          </li>

                          <li className="mt-3">
                            <strong> Inventario de aplicaciones </strong>{" "}
                            <br></br> Contabilidad de lo físico componentes de
                            implementación de funciones comerciales, negocios
                            procesos y datos comerciales Muestra donde la
                            arquitectura reside las piezas.
                          </li>

                          <li className="mt-3">
                            <strong>Repositorio de metadatos </strong> <br></br>{" "}
                            Detalle descriptivo del negocio modelos Admite la
                            captura de metadatos y uso.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div class="col mr-2 mt-5">
                      <p>
                        <img src={img1_t2} width="600" height="600" alt="" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <button
                  className="btn btn-block btn-info mt-2"
                  onClick={showMetodologiasT2}
                >
                  <strong> Metodologías</strong>
                </button>
                {tituloMetodologias == true ? (
                  <div>
                    <div
                      class="row mt-4 text-justify"
                      style={{ marginBottom: "5rem" }}
                    >
                      <div class="col mr-2">
                        <p class="">
                          <p className="mt-2">
                            La metodología de la Ingeniería de Negocios cubre
                            los siguientes ámbitos:
                          </p>
                          <ul>
                            <li>
                              <strong> Planteamiento Estratégico:</strong>{" "}
                              Consiste en definir como se alcanzará la
                              efectividad operacional, y el posicionamiento
                              estratégico, a partir de los cuales se buscará la
                              obtención de ventajas competitivas.
                            </li>

                            <li>
                              <strong>Definición del Modelo de Negocio:</strong>{" "}
                              Consiste en mencionar explícitamente, a partir del
                              planteamiento estratégico, quienes son los
                              clientes, qué es lo que éstos valoran y como se
                              generará un resultado económico positivo producto
                              de proveer tal valor. Para este ámbito, se emplean
                              las bases definidas en el punto titulado “Bases
                              para el modelo de negocio” detallado más adelante.
                            </li>
                            <li>
                              <strong>
                                Diseño de la arquitectura de procesos:
                              </strong>{" "}
                              Consiste en instanciar los macro procesos
                              relevantes para definir cuáles son los procesos
                              necesarios para implementar el modelo de negocio
                              definido, y más específicamente, estudiar las
                              interacciones (entradas, salidas, recursos y
                              normas) necesarias para cada uno de estos. A
                              partir de este punto, se definen los
                              requerimientos para la siguiente etapa, que es el
                              diseño detallado de los procesos.
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div class="col mr-2 ">
                        <ul>
                          <li>
                            <strong> Diseño de los procesos:</strong> Consiste
                            en definir detalladamente cómo se ejecuta cada
                            proceso de la arquitectura definida en el punto
                            anterior. En esta etapa se definen en forma
                            detallada, como se ejecutan las actividades que
                            transforman las entradas de cada proceso, en el
                            resultado o salida requerido, a través del uso de
                            sus recursos y normas asociadas.
                          </li>

                          <li>
                            <strong>
                              {" "}
                              Diseño de las aplicaciones de apoyo a los
                              procesos:
                            </strong>{" "}
                            Consiste en diseñar las aplicaciones que apoyarán a
                            las personas en la ejecución de los procesos
                            diseñados en la etapa anterior, y que además
                            permitirán registrar información relevante para el
                            estudio de la ejecución del proceso y de futuras
                            optimizaciones. Para esta etapa, se utiliza el
                            lenguaje de modelamiento unificado (UML), que
                            permite especificar visualmente las componentes y
                            funcionalidades de un sistema de software orientado
                            a objetos.
                          </li>
                          <li>
                            <strong>Construcción e Implementación:</strong>{" "}
                            Consiste en desarrollar las aplicaciones diseñadas
                            en el punto anterior, utilizando las TI apropiadas
                            de acuerdo con las exigencias de la organización; y
                            en establecer la programación del plan piloto y de
                            implementación del rediseño del proceso y los
                            sistemas desarrollados, considerando las bases para
                            la gestión del cambio detalladas más adelante.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div style={{ marginBottom: "5rem" }}>
                      <img src={img2_t2} width="600" height="600" alt="" />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <button
                  className="btn btn-block btn-info mt-2"
                  onClick={showRiesgosT2}
                >
                  <strong>Riesgos</strong>
                </button>
                {tituloRiesgos == true ? (
                  <div
                    class="row mt-4 text-justify"
                    style={{ marginBottom: "5rem" }}
                  >
                    <div class="col mr-2">
                      <p class="col mt-0">
                        Los entornos empresariales son cada vez más complejos y
                        dinámicos, por lo que las organizaciones enfrentan
                        diversos riesgos al ejecutar sus procesos. Tomando la
                        perspectiva de riesgo, en la implementación del ciclo de
                        vida propuesto por “Business Process Management” (BPM),
                        empieza a cobrar importancia el poder detectar de manera
                        anticipada los riesgos que se derivan del modelado,
                        implementación, ejecución, monitoreo y optimización de
                        los procesos.<br></br>
                        <br></br> El propósito de la gestión de riesgos es
                        reducir o neutralizar los riesgos potenciales. Un marco
                        general de gestión de riesgos se compone de tres fases
                        principales de acción: identificación, análisis y
                        control. Los riesgos son causados por incertidumbres,
                        por lo que a menudo es difícil enmarcar los riesgos de
                        manera precisa. Una forma de hacerlo es caracterizar los
                        riesgos utilizando propiedades como el impacto, la
                        probabilidad, el marco temporal y el acoplamiento con
                        otros riesgos. En la literatura se sugieren cuatro
                        estrategias de manejo de riesgos: mitigación, omisión,
                        transferencia y aceptación.
                        <br></br>
                        <br></br>
                        La disciplina BPM es consciente de los riesgos que
                        implica la implementación de un diseño y rediseño de
                        procesos. Al mapear los riesgos del ciclo de vida se ha
                        demostrado que algunos riesgos son específicos de una
                        fase del ciclo de vida, mientras que existen otros
                        riesgos relacionados con el sistema, el liderazgo, los
                        recursos y la estrategia, que afectan el ciclo de vida
                        de BPM en su totalidad.
                        <br></br>
                        <br></br> Por lo expuesto, el presente artículo parte de
                        una revisión bibliográfica para establecer los avances y
                        aportes en la integración de la gestión de riesgos en el
                        ciclo de vida de los procesos que incluye la
                        identificación, modelado, análisis, rediseño,
                        implementación y monitoreo de los procesos, según el
                        enfoque de BPM. Se revisaron en detalle 24 artículos en
                        donde se analizaron los riesgos, las metodologías,
                        técnicas y herramientas utilizadas y sus aportes a las
                        organizaciones, así como los retos que afrontan en la
                        implementación de los modelos.<br></br>
                        <br></br> De manera general, se evidencia que los
                        riesgos, asociados a la etapa de análisis que plantea el
                        ciclo de vida BPM, suelen deberse a fallas relacionadas
                        con la definición de la estrategia organizacional, los
                        riesgos presentados en la etapa de diseño, en la mayoría
                        de los casos, están relacionados con los métodos de
                        planificación, otros riesgos por falta de comunicación
                        de los objetivos organizacionales, suelen presentarse en
                        la etapa de implementación así como la incapacidad para
                        reconocer problemas o reprocesos, de igual forma, en la
                        etapa de ejecución, la falta de flexibilidad
                        tecnológica, es un riesgo potencial, y finalmente, en la
                        etapa de monitoreo se evidencian riesgos por la falta de
                        estrategias, planes, objetivos y métodos de seguimiento.{" "}
                        <br></br>
                        <br></br> La perspectiva de esta investigación analiza
                        como herramientas y técnicas de mejoramiento de procesos
                        como es el modelado de procesos en BPMN, la técnica
                        Delphi, el análisis causa-raíz (ishikawa), y el análisis
                        DOFA (SWOT), que al integrase con los marcos normativos
                        COSO, COBIT e ISO 27001, buscan facilitar la gestión
                        administrativa debido a los beneficios que la aplicación
                        conjunta de los mismos aporta a las organizaciones, y
                        favorece la mitigación de riesgos.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <button
                  className="btn btn-block btn-info mt-2 mb-0"
                  onClick={showCriteriosT2}
                >
                  <strong>Criterios</strong>
                </button>

                {tituloCriterios == true ? (
                  <div
                    class="row mt-4 text-justify"
                    style={{ marginBottom: "5rem" }}
                  >
                    <div class="col mr-2">
                      <p class="col">
                        En la ingeniería de negocios los criterios se enfocan en
                        patrones que sirven como modelos de referencia para
                        generar propuestas de diseño. Dichos patrones modelan
                        básicamente las estructuras de los componentes y las
                        relaciones que deben existir para que un negocio
                        funcione correctamente. Además, los criterios
                        proporcionan estructuras alternativas adecuadas para
                        diferentes maneras de manejar un negocio. Un criterio
                        que se puede emplear para las organizaciones que proveen
                        servicios se propone un modelo conceptual simple que
                        muestra una visión agregada de los componentes y las
                        relaciones en un diseño de negocio. Analizando un flujo
                        de valor el cual consiste en el conjunto de actividades
                        operativas interrelacionadas o procesos que van desde
                        generar pedidos de un cliente hasta la entrega exitosa
                        del producto o servicio. Por otro lado, los criterios
                        del sistema de gestión son un conjunto de actividades
                        necesarias para definir y dirigir el flujo de valor para
                        cumplir con los requerimientos de los clientes,
                        incluyendo la gestión a corto plazo, tales como las
                        ventas y operaciones o logística, Además de la
                        planificación estratégica a largo plazo, desarrollo de
                        nuevos productos y otras innovaciones en las capacidades
                        de la gestión de los recursos financieros, humanos y
                        demás recursos explícitamente incluidos.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : T3 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 3</h2>
                <div class="container">
                  <div className="mt-5">
                    <h3>
                      <strong>Casos</strong>
                    </h3>
                  </div>
                  <div className="row mt-5" style={{ marginBottom: "5rem" }}>
                    <div className="col text-justify">
                      <p className="">
                        <strong>A&B Laboratorios de Biotecnología</strong>
                        <br></br>
                        <br></br>
                        El primer caso es el de esta empresa vitoriana de 30
                        empleados dedicada al diseño, fabricación y
                        comercialización de productos químicos y biológicos
                        profesionales para mantenimiento industrial, limpieza,
                        desinfección y tratamiento de aguas. Participó en el
                        piloto de Nuevos Modelos de Negocio para incorporar
                        nuevas metodologías que les permitieran optimizar la
                        cadena de suministro, codiseñar nuevos productos junto
                        al cliente y digitalizar la organización. Tras un plan
                        de acción que ha incluido un análisis del impacto de la
                        digitalización y el establecimiento de contactos con
                        potenciales colaboradores, ha identificado nuevos
                        mercados estratégicos y tendencias tecnológicas
                        vinculadas a su actividad. Además, ha elaborado un plan
                        para mejorar los procesos internos relacionados con su
                        cadena de suministro y entrega de pedidos y ha
                        desarrollado su propio plan de digitalización.
                      </p>
                    </div>
                    <div className="col">
                      <img
                        className="justify-content-center "
                        src={imgPdf}
                        width="300"
                        height="300"
                        alt=""
                      />
                      <a
                        className="btn btn-info d-block"
                        href={pdf1T3}
                        download="ficha_A&B"
                      >
                        Descargar Archivo
                      </a>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      {" "}
                      <img src={imgPdf} width="300" height="300" alt="" />
                      <a
                        className="btn btn-info d-block"
                        href={pdf2T3}
                        download="ficha-apelsa"
                      >
                        Descargar Archivo
                      </a>
                    </div>
                    <div className="col text-justify">
                      {" "}
                      <p>
                        <strong>
                          Aplicaciones Prácticas Electrónicas (APEL)
                        </strong>
                        <br></br>
                        <br></br>
                        Esta firma eibarresa de tan sólo diez empleados dedicada
                        al mantenimiento en electrónica de potencia y equipos de
                        calentamiento por inducción mostró su interés por
                        reorientar su negocio. El proceso de transformación
                        arrancó con la realización de entrevistas a clientes y
                        la visita a empresas dedicadas al mantenimiento
                        industrial que ya han dado el salto a la digitalización.
                        Tras analizar cuatro alternativas, la firma ha definido
                        las tecnologías y herramientas más adecuadas para
                        transformar su modelo de negocio en los próximos meses y
                        ha iniciado conversaciones para crear alianzas con otras
                        firmas.
                      </p>
                    </div>
                  </div>
                  <div className="col text-justify">
                    <p className="">
                      <strong>RKL Integral</strong>
                      <br></br>
                      <br></br>
                      Esta consultoría e ingeniería bilbaína especializada en
                      seguridad, tanto física como informática, cuenta en la
                      actualidad con quince trabajadores y se plantea ofrecer
                      también servicios orientados a la digitalización de los
                      procesos Safety&Security. Ya ha desarrollado un ‘software’
                      propio que aúna la gestión de todos los elementos de
                      seguridad dispuestos en una empresa, pero necesita
                      posicionarse como empresa de base tecnológica. Para
                      lograrlo, ha aplicado un enfoque de innovación abierta de
                      colaboración con organizaciones tecnológicas y ha
                      reforzado el alineamiento de la visión de los trabajadores
                      sobre los objetivos y el futuro de la empresa. Además, ha
                      establecido una hoja de ruta con las actuaciones que
                      tendrá que llevar a cabo para dar respuesta a los clientes
                      en el menor tiempo posible, ha obtenido financiación
                      pública y privada para implementar el proyecto y ha
                      cerrado una alianza con una empresa estadounidense para la
                      mejora su ‘software’ además de entablar conversaciones
                      para realizar pruebas en dos empresas.
                    </p>
                  </div>
                  <div className="col" style={{ marginBottom: "5rem" }}>
                    {" "}
                    <img src={imgPdf} width="300" height="300" alt="" />
                    <a
                      className="btn btn-info d-block"
                      href={pdf3T3}
                      download="ficha_rKlintegral"
                    >
                      Descargar Archivo
                    </a>
                  </div>
                </div>
              </div>
            ) : T4 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 4</h2>
                <div className="row mt-5">
                  <div className="col-7">
                    <h3>
                      Una tecnología para la inteligencia de negocios:
                      GEOGRÁFICA SISTEMAS DE INFORMACIÓN (SIG)
                    </h3>
                    <p className="text-justify">
                      En sentido estricto, un sistema de información geográfica
                      (SIG) es un paquete de software que vincula bases de datos
                      y mapas electrónicos. En un nivel más general, el término
                      SIG se refiere a la capacidad de analizar fenómenos
                      espaciales. Estos sistemas son una importante herramienta
                      de inteligencia comercial para explotar y presentar la
                      cantidad cada vez mayor de datos bidimensionales (y más)
                      disponibles en una forma que pueda ser entendida por
                      analistas y gerentes. Además de recopilar, almacenar y
                      recuperar datos de ubicación espacial, un SIG se utiliza
                      para identificar ubicaciones que cumplen criterios
                      específicos (por ejemplo, para la ubicación de una nueva
                      tienda), explorando las relaciones entre conjuntos de
                      datos, evaluando alternativas y ayudando en la toma de
                      decisiones, y mostrando ambientes tanto visual como
                      numéricamente. A nivel general, el término SIG se refiere
                      a la capacidad de analizar fenómenos espaciales, el cuál
                      consta de una serie de capas, cada una presentando una
                      particular característica bidimensional, que se pueden
                      superponer con precisión encima de unos y otros.
                    </p>
                  </div>
                  <div className="col-5">
                    <img src={img1_t4} width="400" height="500" alt="" />
                  </div>
                </div>
                <div className="d-block bg-info text-white">
                  Algunos Ejemplos
                </div>
                <div class="mt-5 text-justify" style={{ marginBottom: "5rem" }}>
                  <div class="mr-2">
                    <ul>
                      <li>
                        <p>
                          Un grupo de marketing superpone las ubicaciones de los
                          clientes, las escuelas, la distribución centros
                          comerciales y minoristas existentes que venden
                          productos propios y/o de la competencia. <br />
                          <br />
                        </p>
                      </li>
                      <li>
                        Una empresa de telecomunicaciones selecciona el número y
                        la ubicación de los centros de conmutación y rutas en
                        una red de comunicación. El sistema muestra cantidades
                        tales como tráfico, costes y tiempos de transmisión. Los
                        usuarios pueden redefinir la red en la pantalla, puede
                        crear varias vistas, ver el efecto de los cambios "qué
                        pasaría si" y los nuevos datos porque el sistema vuelve
                        a calcular cada cambio, tiene en cuenta las
                        restricciones y muestra donde la solución propuesta no
                        cumple con los criterios.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : T5 == true ? (
              <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="bg-light">Bienvenido a la tutoría número 5</h2>
                <div class="container">
                  <div className="row mt-5" style={{ marginBottom: "5rem" }}>
                    <div className="col text-justify">
                      <h3>Titulo</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio tempore, perferendis similique, ipsum alias eaque
                        quaerat hic, facere libero minima voluptatum
                        consequuntur. Sapiente porro iure esse sequi ullam
                        perspiciatis eos, iste facere aliquam perferendis ea
                        corporis illo distinctio repudiandae ut illum, tempora
                        nostrum! Fuga maxime nostrum error quaerat. Numquam eum
                        temporibus nemo illo fugit iste nam dicta eligendi.
                        Deserunt, explicabo asperiores quos omnis voluptates
                        maiores ad. Nisi reprehenderit esse ipsa nobis
                        reiciendis. Repellat a omnis nihil in possimus dolore,
                        fugiat animi provident laudantium sed suscipit
                        exercitationem corporis nesciunt distinctio fuga
                        explicabo iste ab molestias commodi sunt recusandae cum
                        modi iure?
                      </p>
                    </div>
                    <div className="col">
                      {" "}
                      <img src={imagenX} width="300" height="300" alt="" />
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                      {" "}
                      <img src={imagenX} width="300" height="300" alt="" />
                    </div>
                    <div className="col text-justify">
                      {" "}
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio tempore, perferendis similique, ipsum alias eaque
                        quaerat hic, facere libero minima voluptatum
                        consequuntur. Sapiente porro iure esse sequi ullam
                        perspiciatis eos, iste facere aliquam perferendis ea
                        corporis illo distinctio repudiandae ut illum, tempora
                        nostrum! Fuga maxime nostrum error quaerat. Numquam eum
                        temporibus nemo illo fugit iste nam dicta eligendi.
                        Deserunt, explicabo asperiores quos omnis voluptates
                        maiores ad. Nisi reprehenderit esse ipsa nobis
                        reiciendis. Repellat a omnis nihil in possimus dolore,
                        fugiat animi provident laudantium sed suscipit
                        exercitationem corporis nesciunt distinctio fuga
                        explicabo iste ab molestias commodi sunt recusandae cum
                        modi iure?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
      <div
        //Footer----------------------------------------------------------------------------

        className="border-top fixed-bottom text-white"
        style={{ backgroundColor: "#CF1C1C" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4">
              Juan David Cortes <br></br> user@ut.edu.co
            </div>
            <div className="col-4">
              Maria Catherine Parra Leiva <br></br> cparra@ut.edu.co
            </div>
            <div className="col-4">
              Santiago Lozano Murcia <br></br> slozano@ut.edu.co
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
