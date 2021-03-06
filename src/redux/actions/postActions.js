import { ADD_POST, ADD_COMMENT } from "../types";

export const addPost = (payload) => {
	return {
		type: ADD_POST,
		payload,
	};
};

export const addComment = (payload) => {
	return {
		type: ADD_COMMENT,
		payload,
	};
};
