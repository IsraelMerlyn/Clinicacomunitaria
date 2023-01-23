import React from "react";
import DONAR from "../../public/Donar.png";
import REQUISITOS from "../../public/requisitos.png";
import MEDICAMENTO from "../../public/medicamentos.png";
import BUSCADOR from "../../public/Buscador.png";
const Works = () => {
  return (
    <div id="aboutUs" className="bg-gray-100 p-8 xl:p-20">
      <div className=" mb-8">
        <h1 className="text-[40px] font-black">Nuestros Servicios</h1>
        <p className="text-xl text-gray-500">
          Proyecto con impacto social en la sociedad, nos importa tu salud
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card w-96 bg-white shadow-xl flex flex-col gap-5">
            <figure className="px-12 pt-10">
              <img
                src={BUSCADOR}
                width="180"
                className="rounded-xl"
              />
            </figure>

            <div className="card-body  items-center text-center">
              <h3 className="text-2xl font-bold">Buscar Clinica</h3>
              <p className="text-gray-500">
                Encuentra la clinica mas cercana de tu ubicacion
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-xl flex flex-col gap-5">
            <figure className="px-12 pt-10">
              <img src={MEDICAMENTO} width='130' alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-2xl font-bold">Buscar Medicamentos</h3>
              <p className="text-gray-500">
                Encuentra el medicamento que necesites
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-xl flex flex-col gap-5">
            <figure className="px-12 pt-10">
              <img src={DONAR} width='180' className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-2xl font-bold">Donde Donar</h3>
              <p className="text-gray-500">
                Encuentra clinicas que reciban tus medicamentros
              </p>
            </div>
          </div>

          <div className="card w-96 bg-white shadow-xl flex flex-col gap-5">
            <figure className="px-12 pt-10">
              <img src={REQUISITOS} width='150' className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-2xl font-bold"> Requisitos</h3>
              <p className="text-gray-500">Ojo, es importante contar con tu receta medica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
