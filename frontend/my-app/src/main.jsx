import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// <!-- Layout config Js -->
import "./assets/js/layout.js";

// <!-- App Css-->
import "./assets/css/app.min.css";

// <!-- Bootstrap Css -->
import "./assets/css/bootstrap.min.css";

// JAVASCRIPT
import "./assets/libs/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/libs/simplebar/simplebar.min.js";
// import "./assets/libs/node-waves/waves.min.js";
import "./assets/libs/feather-icons/feather.min.js";
import "./assets/js/pages/plugins/lord-icon-2.1.0.js";
import "./assets/js/plugins.js";

// particles js
// import "./assets/libs/particles.js/particles.js";
// import "./assets/js/pages/particles.app.js";
import "./assets/js/pages/password-addon.init.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
