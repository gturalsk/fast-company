import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Users from "./components/users";

const root = createRoot(document.getElementById("root"))
    


root.render(
    <StrictMode>
<Users />
    </StrictMode>

);