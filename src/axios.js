import axios from "axios";
const instance = axios.create({
	// baseURL: " http://127.0.0.1:5005/c-93147/us-central1/api.",
	// baseURL: " http://127.0.0.1:5000",
	baseURL: " https://fine-lime-woodpecker-suit.cyclic.app",
});

export default instance;
