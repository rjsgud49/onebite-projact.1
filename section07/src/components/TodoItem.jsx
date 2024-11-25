import "./TodoItem.css"; // 스타일링이 필요한 경우 CSS 파일 연결

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox" />
            <div className="content">Todo...</div>
            <div className="Date">Date</div>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;
