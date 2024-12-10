import React from "react";
import "./SearchResults.css";

function SearchResults({ results, query }) {
  return (
    <div className="results-container">
      {results.length === 0 && query ? (
        <p>No results found for "{query}"</p>
      ) : (
        results.map((user, index) => (
          <div key={index} className="user-card">
            <p>
              <strong>Name:</strong> {user.first_name} {user.last_name}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Contact:</strong> {user.contact_number}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
