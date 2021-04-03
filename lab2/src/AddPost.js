import { useEffect, useState } from "react";
import styled from 'styled-components';

export default function AddPost({ posts, setPosts, size }) {

    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onReset = () => {
        setUser("");
        setTitle("");
        setBody("");
    };

    const onClickPost = () => {
        if (user && title && body) {
            const mapping = {
                post: {
                    userId: user,
                    title: title,
                    body: body,
                    id: size,
                },
                comments: []
            };
            setPosts([mapping, ...posts]);
            onReset();
            console.log(posts);
        } else {
            alert("빈칸을 작성해주세요")
        }
    };

    return (
        <div className="addPost">
            <div>
                <input
                    className="user"
                    type="text"
                    name="user"
                    placeholder="User"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                />
                <input type="text"
                    className="title"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea
                    name="body"
                    className="body"
                    placeholder="Body"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </div>

            <button className="plus" onClick={onClickPost}>+</button>
        </div>
    );
}