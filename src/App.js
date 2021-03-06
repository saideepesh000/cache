import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetails from "./pages/PostDetails";

export default function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/create" component={CreatePostPage} />
			<Route exact path="/post/:id" component={PostDetails} />
		</Switch>
	);
}
