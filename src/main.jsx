import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Explorar from "./Routes/Explorar.jsx";
import Video from "./Routes/Video.jsx";
import Admin from "./Routes/Admin.jsx";
import NotFound from "./Routes/NotFound.jsx";

import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
  Navigate
} from "react-router-dom";

// Components (placeholders por enquanto)
const Assinatura = () => <h1>Planos e Pagamentos</h1>;

const Perfil = () => <></>

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Explorar />} />
      <Route path="video/:id" element={<Video />} />
      <Route path="checkout" element={<Assinatura />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Route>  
  )
)

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
