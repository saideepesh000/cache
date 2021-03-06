import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addPost } from "../../redux/actions/postActions";

import "./styles.css";

export default function CreatePostPage({ history }) {
	const dispatch = useDispatch();
	const [post, setPost] = useState({
		id: uuidv4(),
		title: "",
		role: "",
		company: "",
		skills: "",
		details: "",
		date: new Date().toDateString(),
		user: "sai",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addPost(post));
		history.push("/");
		console.log(post);
	};

	return (
		<div className="formContainer">
			<h1>Share Your Interview Experience</h1>
			<form className="form" onSubmit={handleSubmit}>
				<p>
					<label>
						<strong>Post Title*</strong>
					</label>
					<input
						name="title"
						type="text"
						value={post.title}
						placeholder="Data Scientist at google"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</p>
				<p>
					<label>
						<strong>Role Interviewed For*</strong>
					</label>
					<input
						name="role"
						type="text"
						value={post.role}
						placeholder="Data Scientist"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</p>
				<p>
					<label>
						<strong>Company Interviewed At</strong>
					</label>
					<input
						name="company"
						type="text"
						value={post.company}
						placeholder="Google India"
						onChange={(e) => handleInputChange(e)}
					/>
				</p>
				<p>
					<label>
						<strong>Required Skills</strong>
					</label>
					<input
						name="skills"
						type="text"
						value={post.skills}
						placeholder="Python"
						onChange={(e) => handleInputChange(e)}
					/>
				</p>
				<p>
					<label>
						<strong>Interview Details</strong>
					</label>
					<textarea
						name="details"
						type="text"
						value={post.details}
						placeholder="Give the details here"
						onChange={(e) => handleInputChange(e)}
						rows="5"
					/>
				</p>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
