import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import "./index.css";
import AddPost from "./AddPost";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            let list = [];
            const allPosts = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/"
            );

            const getComments = allPosts.data.map((item) => {
                return (async () => {
                    const allComments = await axios.get(
                        `https://jsonplaceholder.typicode.com/posts/${item.id}/comments`
                    );

                    const mapping = { post: item, comments: allComments.data };
                    list.push(mapping);
                })();
            });

            await Promise.all(getComments);

            setPosts(list);
            setIsReady(true);
        };

        init();
    }, []);

    return (
        <div className="App">
            { !isReady ? <div>Loading... </div> : (
                <div>
                    <AddPost posts={posts} setPosts={setPosts} size={posts.size} />
                    {posts.map(item => (<Post key={item.post.id} post={item.post} comments={item.comments} />))}
                </div>
            )
            }
        </div>
    );
}

