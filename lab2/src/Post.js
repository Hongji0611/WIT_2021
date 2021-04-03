import Comment from "./Comment";

export default function Post({ post, comments }) {
    return (
        <div className="post">
            <div className="board-row">
                <p className="font-bold">User</p>
                <p className="font-normal">{post.userId}</p>
            </div>
            <div className="board-row">
                <p className="font-bold">Title</p>
                <p className="font-normal">{post.title}</p>
            </div>
            <hr className="board-row"/>
            <div className="board-row">
                <p className="font-bold">Body</p>
                <p className="font-normal">{post.body}</p>
            </div>

            <div className="">
                {comments.map( item => <Comment key={item.id} comment={item}/>)}
            </div>
        </div>
    );
}