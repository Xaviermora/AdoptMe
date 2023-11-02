export interface Usuario{
  uid: string;
  email: string | null;
  nombre: string | null;
  apellido: string | null;
  fechaDeNacimiento: Date | null;
  provincia: string | null;
  tipoDeVivienda: string | null;
  telefono: number | null;
  dni: number | null;
  photoURL: string | null
}
