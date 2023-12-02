export interface Usuario{
  uid: string;
  email: string | null;
  nombre: string | null;
  ciudad: string | null;
  apellido: string | null;
  fechaDeNacimiento: Date | null;
  tipoDeVivienda: string | null;
  telefono: number | null;
  dni: number | null;
  photoUrl: string | null
}
