import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Account } from "../models/";
import { getByN } from "../services";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<Account[]>([]);

  const getAccountById = async () => {
    try {
      const data: Account[] = await getByN(id!);
      setAccount(data);
    } catch (error) {
      console.error("Error al obtener los detalles de la cuenta:", error);
      setAccount([]);
    }
  };

  useEffect(() => {
    getAccountById();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-center text-2xl">Consulta de saldo</h3>
      <h1 className="text-center text-4xl">
        <b>Este es tu saldo actual</b>
      </h1>
      <div className="mt-16">
        {account.map((item) => (
          <div key={item.n} className="text-center">
            <h1>
              <i className="text-lime-500">Saldo de la cuenta:</i> {item.moneda}
              {item.saldo}
            </h1>
            <h1>
              <i className="text-lime-500">Tipo de cuenta:</i>{" "}
              {item.tipo_letras === "CC"
                ? "Cuenta Corriente"
                : "Caja de Ahorro"}
            </h1>
            <h1>
              <i className="text-lime-500">Número de cuenta:</i> {item.n}
            </h1>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-lime-600 dark:border-gray-700 dark:hover:bg-lime-700"
      >
        Volver
      </Link>
    </div>
  );
};
