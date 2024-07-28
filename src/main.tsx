import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import RouterUrl from "./routes.tsx";
import "./index.css";
import CustomThemeProvider from "./theme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <CustomThemeProvider>
            <RouterUrl />
        </CustomThemeProvider>
    </BrowserRouter>
);
