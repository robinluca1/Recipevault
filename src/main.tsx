
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { Auth0Provider } from "@auth0/auth0-react";

  createRoot(document.getElementById("root")!).render(
    <Auth0Provider
    domain="dev-7mxple0m0rl4mbk6.us.auth0.com"
    clientId="UXcD7QUZaZfHVeTzYIUDz6vAyyHGMM1n"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
  );
  