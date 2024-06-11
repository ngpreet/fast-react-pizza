import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) {
      return;
    }

    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        placeholder="Search Order #"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all
        duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
