import { useState } from "react";
import CallNRR from "./opciones/CallNRR";
import ActCes from "./opciones/ActCes";
import IngRutD from "./opciones/IngRutD";
import CamProP from "./opciones/CamProP";
import CamProB from "./opciones/CamProB";
import ConsHoR from "./opciones/ConsHoR";
import SolGra from "./opciones/SolGra";
import ProbApp from "./opciones/ProbApp";
import ConsDiff from "./opciones/ConsDiff";

export default function Menu({ setIsLogged }) {
  const [opcion, setOpcion] = useState("menu");

  function logout() {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  }

  return (
    <>
      {opcion === "menu" && (
        <div className="menu-container">
          <p className="menu-title">Info personal</p>

          <div className="menu-grid">
            <button className="menu-btn" onClick={() => setOpcion("opcion1")}>
              Call center no reconoce rut
            </button>
            <button className="menu-btn" onClick={() => setOpcion("opcion2")}>
              Actualizar CESFAM
            </button>

            <button className="menu-btn" onClick={() => setOpcion("opcion3")}>
              Ingresar rut definitivo
            </button>
            <button className="menu-btn" onClick={() => setOpcion("opcion4")}>
              Cambiar profesionales preferidos
            </button>

            <button className="menu-btn" onClick={() => setOpcion("opcion5")}>
              Cambiar profesionales bloqueados
            </button>
            <button className="menu-btn" onClick={() => setOpcion("opcion6")}>
              Consultar hora reservada
            </button>

            <button className="menu-btn" onClick={() => setOpcion("opcion7")}>
              Solicitar grabaciones
            </button>
            <button className="menu-btn" onClick={() => setOpcion("opcion8")}>
              ¿Problemas con la APP?
            </button>

            <button className="menu-btn" onClick={() => setOpcion("opcion9")}>
              Consulta diferente
            </button>

            {/* Botón Volver dentro del scroll */}
            <button className="menu-btn-exit" onClick={logout}>
              Volver
            </button>
          </div>
        </div>
      )}

      {opcion === "opcion1" && <CallNRR setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion2" && <ActCes setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion3" && <IngRutD setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion4" && <CamProP setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion5" && <CamProB setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion6" && <ConsHoR setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion7" && <SolGra setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion8" && <ProbApp setOpcion={() => setOpcion("menu")} />}
      {opcion === "opcion9" && <ConsDiff setOpcion={() => setOpcion("menu")} />}
    </>
  );
}
