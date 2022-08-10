import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-brand mb-0 h1">
          <img className="w-10" src={process.env.PUBLIC_URL + '/assets/author.jpg'} alt="hero-logo"/>
          <b>Technical Test</b>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-1" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Job Detail</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;