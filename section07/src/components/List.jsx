import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    // 검색어 변경 핸들러
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // 필터링된 데이터 가져오기
    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    // 필터링된 데이터
    const filteredTodos = getFilteredData();

    // 통계 데이터 분석
    const getAnalyzedData = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    };

    useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);

    // 분석 데이터 추출
    const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>전체: {totalCount}</div>
            <div>완료: {doneCount}</div>
            <div>미완료: {notDoneCount}</div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
