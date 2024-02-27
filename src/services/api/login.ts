import axios from "axios";

import { LoginRequestData } from "../../types/api/api-types";
import { baseURL, loginEndpoint } from "./apiConstants";

export function loginUser(loginData: LoginRequestData) {
	return axios.post(`${baseURL}/${loginEndpoint}`, loginData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}