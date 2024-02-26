
import axios from "axios";

import { SignupFieldData } from "../../types/pages/auth"
import { baseURL, signupEndpoint } from "./apiConstants"

export function signupUser(signupData: SignupFieldData) {
	return axios.post(`${baseURL}${signupEndpoint}`, signupData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}