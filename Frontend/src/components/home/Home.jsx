import React from "react";
import { useSelector } from "react-redux";
import FilterModal from "./FilterModal";
import "../../css/Home.css";

const Home = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [showFilter, setShowFilter] = React.useState(false);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to HomelyHub</h1>
          <p>Find your perfect accommodation</p>
        </div>
      </header>

      <main className="home-main">
        <section className="search-section">
          <h2>Search Properties</h2>
          <button 
            className="filter-btn"
            onClick={() => setShowFilter(true)}
          >
            Open Filters
          </button>
          {showFilter && (
            <FilterModal onClose={() => setShowFilter(false)} />
          )}
        </section>

        <section className="featured-section">
          <h2>Featured Properties</h2>
          <div className="properties-grid">
            <p>Properties will load here...</p>
          </div>
        </section>

        {isAuthenticated && (
          <section className="user-section">
            <h2>Welcome, {user?.name || "User"}!</h2>
            <p>Manage your bookings and preferences here.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
