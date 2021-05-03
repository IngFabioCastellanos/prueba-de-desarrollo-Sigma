import logo from "./img/sigma-logo.png";
import image from "./img/sigma-image.png";
import { api, city } from "./helpers/api";
import { useEffect, useState } from "react";

function App() {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [ciudad, setCiudad] = useState([]);

  useEffect(() => {
    (async () => {
      setDepartamentos(await api());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setCiudad(await city(ciudades));
    })();
  }, [ciudades]);

  const handlerChangeDepartments = (e) => {
    setCiudades(e.target.value);
  };

  return (
    <div className="App">
      <img className="mx-auto mt-10" src={logo} alt="" />
      <h1 className="text-3xl font-bold text-center pb-7 mt-7">
        Prueba de desarrollo Sigma
      </h1>
      <p className="mx-auto mb-10 text-sm font-semibold text-center text-gray-500 md:w-6/12">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        blanditiis dolor corrupti delectus soluta! Qui quis sunt quae
        dignissimos nam, voluptatibus, culpa molestias, delectus eligendi
        accusamus accusantium architecto maxime inventore!
      </p>
      <div className="grid mx-auto mb-20 text-sm md:w-2/3 md:grid-cols-2">
        <div className="col-span-1 pl-8 pr-4 py-9">
          <img src={image} alt="" className="" />
        </div>
        <div className="pt-12 pl-12 font-bold border shadow-2xl rounded-tl-xl rounded-3xl">
          <form>
            <label>
              Departamento*
              <br />
              <select
                className="w-11/12 px-4 py-2 mt-2 mb-4 text-sm font-bold text-gray-400 bg-white border rounded-md focus:outline-none"
                name="state"
                onChange={handlerChangeDepartments}
              >
                <option value="">--Seleccione--</option>
                {departamentos.map((dep) => (
                  <option value={dep.departamento} key={dep.departamento}>
                    {dep.departamento}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Ciudad*
              <br />
              <select
                className="w-11/12 px-4 py-2 mt-2 mb-4 text-sm font-bold text-gray-400 bg-white border rounded-md focus:outline-none"
                name="city"
              >
                <option value="">--Seleccione--</option>

                {ciudad.map((item) =>
                  item?.ciudades?.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))
                )}
              </select>
            </label>
            <br />

            <label>
              Nombre*
              <br />
              <input
                className="w-11/12 px-4 py-2 mt-2 mb-4 text-sm font-bold text-gray-400 border rounded-md focus:outline-none"
                type="text"
                placeholder="--Pepito de Jesús--"
                name="name"
              />
            </label>
            <br />

            <label>
              Correo*
              <br />
              <input
                className="w-11/12 px-4 py-2 mt-2 text-sm font-bold text-gray-400 border rounded-md focus:outline-none"
                type="email"
                placeholder="--pepito@correo.com--"
                name="email"
              />
            </label>
            <div className="text-center">
              <button
                style={{ background: "#FF596B" }}
                className="p-3 px-10 mt-6 mb-10 -ml-10 text-sm font-bold text-center text-white bg-red-400 rounded-full focus:outline-none"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
