import "../Styles/header.css";
export default function Header() {
  return (
    <nav className="nav">
      <ul className="Logo_container">
        <li className="Logo">
          <a href="/">SK</a>
        </li>
      </ul>
      <ul className="nav_item">
        <li className="nav_list">
          <a href="/">HOME</a>
        </li>
        <li className="nav_list">
          <a href="index2.html">CONTACT</a>
        </li>
        <li className="nav_list">
          <a href="about.html">ABOUT </a>
        </li>
      </ul>
    </nav>
  );
}
