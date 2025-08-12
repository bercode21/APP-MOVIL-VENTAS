
import { Redirect } from "expo-router";

export default function Index() {
  // Al abrir la app, redirige a la pantalla de login
  return <Redirect href="/login" />;
}
