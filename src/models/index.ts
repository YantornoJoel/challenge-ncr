export interface Ncr {
    cuentas: Account[];
    cuestas: Cuesta[];
}

export interface Account {
    e:           string;
    n:           string;
    t:           string;
    saldo:       string;
    moneda:      string;
    tipo_letras: string;
}

export interface Cuesta {
    id:     number;
    nombre: string;
}