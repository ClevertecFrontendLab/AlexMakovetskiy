import axios from "axios";

import { SignupRequestData } from "../../types/api/api-types";
import { baseURL, signupEndpoint } from "./apiConstants"

export function signupUser(signupData: SignupRequestData) {
	return axios.post(`${baseURL}/${signupEndpoint}`, signupData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}