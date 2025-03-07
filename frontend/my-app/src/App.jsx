import { BrowserRouter } from "react-router";
import SignUp from "./SignUp";
// import SignIn from "./SignIn";

function App() {
	return (
		<>
			<BrowserRouter>
				{/* <SignIn /> */}
				<SignUp />
			</BrowserRouter>
		</>
	);
}

export default App;
