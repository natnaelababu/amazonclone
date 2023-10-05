import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import { auth } from "../src/components/Authentication/Firebase";
import { useStateValue } from "./Stateprovider";
import{ useEffect } from "react";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
import Footer from "./components/Footer/Footer";

const promise = loadStripe(
	'pk_test_51NxVTUDzp21QueknKeUbt8xWgJ6q8BxpxxPNVkHf0Zs8Hd1lEujFu9GdljxckoFirOx2KGpEcOibyH6y4TskRiV3001VQPq8hA'
);
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						}
					/>

					<Route
						path="/checkout"
						element={
							<>
								<Header /> <Checkout />
								<Footer />
							</>
						}
					/>
					<Route
						path="/Orders"
						element={
							<>
								<Header />

								<Orders />

								

								<Footer />

							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
