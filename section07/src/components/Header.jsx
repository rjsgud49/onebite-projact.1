import "./Header.css"; // 스타일링이 필요한 경우 CSS 파일 연결

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default Header;
