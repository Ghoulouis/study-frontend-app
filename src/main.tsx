import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import RouterUrl from "./routes.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <RouterUrl />
    </BrowserRouter>
);
