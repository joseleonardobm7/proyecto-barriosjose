import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h1> Error 404</h1>
          <p>
            <b> No se encontró lo que buscabas </b>
          </p>
          <p>
            Si crees que es un error puedes escribirnos
            <a href="mailto:soporte@latienditadelaesquina.cl" class="pl-2">
              soporte@latienditadelaesquina.cl
            </a>
          </p>
          <p className="my-5">
            <Link to={"/"} className="btn bg-black text-white">
              Ir al Inicio
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
