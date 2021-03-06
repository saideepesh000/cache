import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Post from "../../components/Post";
import CustomHeading from "../../components/CustomHeading";

import "./styles.css";

export default function HomePage() {
	const { posts } = useSelector((state) => state.post);

	return (
		<div className="container">
			<CustomHeading title="Interview Experiences" />
			<Link to="/create">
				<button className="createBtn">Post Your Interview Experience</button>
			</Link>
			<div className="postAndSide">
				<div className="posts">
					{posts.map((post) => (
						<Post post={post} />
					))}
				</div>
				<div className="sideBar">
					<h3>Related Items</h3>
					<p>Item 1</p>
					<p>Item 2</p>
					<p>Item 3</p>
				</div>
			</div>
		</div>
	);
}
