import { useState } from 'react';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch('');
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie className="camera" />
          movieDB
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
