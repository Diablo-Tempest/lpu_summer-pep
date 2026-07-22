import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const initial = user?.name?.trim()?.[0]?.toUpperCase() || "?";

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="dot" />
        GeoExplorer
      </div>
      <div className="navbar-user">
        <div className="navbar-avatar">{initial}</div>
        <span>{user?.name}</span>
        <button className="navbar-logout" onClick={logout}>
          Log out
        </button>
      </div>
    </header>
  );
}
