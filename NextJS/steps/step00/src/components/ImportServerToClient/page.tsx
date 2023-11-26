import ClientComponent from "./1c-client-component";
import ServerComponent from "./1c-server-component";

export default function ImportServerToClient() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
