import { useEffect, useState } from "react";
import { getAll } from "../services";
import { Account } from "../models";
import { Link } from "react-router-dom";

export const List = () => {
  const [data, setData] = useState<Account[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getAccounts = async () => {
    const accounts = await getAll();
    setData(accounts);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-center text-2xl">Consulta de saldo</h3>
      <h1 className="text-center text-4xl">
        <b>Seleccione la Cuenta a Consultar</b>
      </h1>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 p-3">
        {currentPage > 1 && (
          <Link
            to="#"
            className="text-center block p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-lime-600 dark:border-gray-700 dark:hover:bg-lime-700"
            onClick={() => prevPage()}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Opciones anteriores
            </h5>
          </Link>
        )}
        {currentItems.map((item, index) => (
          <div key={index}>
            <Link
              to={`/${item.n}`}
              className="text-center block p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-lime-600 dark:border-gray-700 dark:hover:bg-lime-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.tipo_letras === "CC"
                  ? "Cuenta Corriente"
                  : "Caja de Ahorro"}
              </h5>
              <p className="font-normal text-white">
                Nro: {item.n === " " ? "-" : item.n}
              </p>
            </Link>
          </div>
        ))}
        {currentPage < totalPages && (
          <Link
            to="#"
            className="text-center block p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-lime-600 dark:border-gray-700 dark:hover:bg-lime-700"
            onClick={() => nextPage()}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Más opciones
            </h5>
          </Link>
        )}
      </div>
    </div>
  );
};
