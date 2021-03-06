import { ADD_POST, ADD_COMMENT } from "../types";

const initialState = {
	posts: [
		{
			id: "1",
			user: "dummy",
			title: "Dummy Title",
			role: "Dummy Role",
			company: "dummy company",
			skills: "Dummy skills",
			details: "dummy details",
			date: new Date().toDateString(),
		},
	],
};
const postReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, payload],
			};

		default:
			return state;
	}
};

export default postReducer;
