import axios from "axios";
import { Account, Ncr } from "../models";
import { URL } from "../constants";

interface ApiResponse {
  data: Ncr;
}

export const getAll = async (): Promise<Account[]> => {
  try {
    const { data }: ApiResponse = await axios.get(URL ?? "");

    const { cuentas } = data;

    const filteredAccounts = cuentas.filter((item) => {
      const isCurrentAccountOrSaving =
        item.tipo_letras === "CC" || item.tipo_letras === "CA";
      const isCurrencyARSorUSD = item.moneda === "$" || item.moneda === "u$s";
      return isCurrentAccountOrSaving && isCurrencyARSorUSD;
    });

    return filteredAccounts;
  } catch (error) {
    console.error("Error al obtener las cuentas:", error);
    return [];
  }
};

export const getByN = async (n: string) => {
  const { data }: ApiResponse = await axios.get(URL ?? "");

  const accounts = data.cuentas.filter((item: Account) => item.n === n);
  return accounts;
};
