import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactHeight } from "react-height";
import { Link } from "react-router-dom";

import { addComment } from "../../redux/actions/postActions";

import "./styles.css";

export default function PostDetails({ post, match }) {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const selectedPost = useSelector((state) =>
		state.post.posts.find((e) => e.id === match.params.id)
	);

	function handleSubmit(e) {
		e.preventDefault();
		setComments([...comments, comment]);
		setComment("");
	}

	return (
		<div className="postDetailContainer">
			<div className="postDetail">
				<img
					className="pimg"
					src="https://icons-for-free.com/iconfiles/png/512/profile+user+icon-1320166082804563970.png"
					alt=""
				/>
				<div className="headlineCtn">
					<p className="postHeadline">
						{selectedPost.user} posted <strong>{selectedPost.title}</strong>
					</p>
					<p className="date">posted on {selectedPost.date}</p>
					<p className="role">
						<strong>
							For {selectedPost.role} in {selectedPost.company}
						</strong>
					</p>
				</div>
			</div>
			<ReactHeight
				className="details"
				onHeightReady={(height) => console.log(height)}
			>
				<p>{selectedPost.details}</p>
			</ReactHeight>
			{comments.map((comment) => (
				<p className="comment">{comment}</p>
			))}
			<form onSubmit={handleSubmit} className="comment">
				<input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					type="text"
					placholder="Add Comment"
				/>
				<input type="submit" value="Add Comment" />
			</form>
			<Link to="/">
				<button className="home">Home</button>
			</Link>
		</div>
	);
}
