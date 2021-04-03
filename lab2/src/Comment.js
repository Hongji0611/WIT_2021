export default function Comment({ comment }) {
    return (
        <div className="board-row">
            <div className="arrow">ㄴ</div>
            <div className="grid">
                <div className="board-row">
                    <p className="font-bold">{comment.name}</p>
                    <p className="font-normal">{comment.email}</p>
                </div>
                <div>
                    {comment.body}
                </div>
            </div>
        </div>
    );
}