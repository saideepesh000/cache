import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Post({ post }) {
	return (
		<div className="postContainer">
			<div className="post">
				<img
					className="img"
					src="https://icons-for-free.com/iconfiles/png/512/profile+user+icon-1320166082804563970.png"
					alt=""
				/>
				<div className="headlineCtn">
					<p className="postHeadline">
						{post.user} posted <strong>{post.title}</strong>
					</p>
					<p className="date">posted on {post.date}</p>
				</div>
			</div>
			<Link className="btn" to={`/post/${post.id}`}>
				<button className="viewBtn"> View More</button>
			</Link>
		</div>
	);
}
