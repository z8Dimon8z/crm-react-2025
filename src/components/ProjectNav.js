import { Link } from "react-router-dom";

const ProjectNav = () => (
  <nav className="project-nav">
    <div className="project-nav__links-wrapper">
      <Link to="/">Форма добавления заявок</Link>
      <Link to="/table">Таблица с заявками</Link>
    </div>
  </nav>
);

export default ProjectNav;
