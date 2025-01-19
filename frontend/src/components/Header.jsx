export default function Header() {
    return (
        <header className="header-block">
            <div className="header-block-left-part">
                <h1>Здесь могла бы быть ваша реклама</h1>
                <img src="/images/favicon.png" alt="Logo" />
            </div>
            <div className="header-block-right-part">
                <img
                    src="/images/avatar.png"
                    className="header-block-right-part-avatar"
                    alt="header-block-right-part-avatar"
                />
                <span className="header-block-right-part-name">
                    Менеджер
                </span>
            </div>
        </header>
    );
}
