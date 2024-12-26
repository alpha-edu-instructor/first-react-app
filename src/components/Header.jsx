export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-part">
          <h1 id="logo">MusicApp</h1>
        </div>
        <div className="nav-part">
          <a href="#login" id="login-btn">
            Войти
          </a>
        </div>
      </nav>
    </header>
  );
}
