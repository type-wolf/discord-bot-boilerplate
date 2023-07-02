import axios from "axios";
import { API_ENDPOINT } from "../constants/endpoint";

const getUsers = async () => {
	const { data } = await axios.get(`${API_ENDPOINT}/users`, {
		headers: {
			Authorization: "",
		},
	});
	return data;
};

export const getUserWithUserId = async (id: string) => {
	const { data } = await axios.get(`${API_ENDPOINT}/user`, {
		headers: {
			Authorization: "",
		},
		params: {
			discordId: id,
		},
	});
	return data;
};

export default getUsers;
