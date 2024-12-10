import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Initialize local storage with provided user data
  useEffect(() => {
    const userData = [
      {
        first_name: "Amit",
        last_name: "Sharma",
        city: "Mumbai",
        contact_number: "9876543210",
      },
      {
        first_name: "Amit",
        last_name: "Verma",
        city: "Delhi",
        contact_number: "9123456789",
      },
      {
        first_name: "Sandeep",
        last_name: "Gupta",
        city: "Bangalore",
        contact_number: "9876549870",
      },
      // ... Add the rest of your user data here
    ];

    // Store users in local storage if not already present
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(userData));
    }
  }, []);

  // Handle the search query
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    // Fetch user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Filter results based on the search query
    const filteredResults = storedUsers.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.contact_number.includes(searchQuery)
    );

    // Update the results state
    setResults(filteredResults);
  };

  return (
    <div>
      <Header />
      <SearchBox onSearch={handleSearch} />
      <SearchResults results={results} query={query} />
    </div>
  );
}

export default App;
