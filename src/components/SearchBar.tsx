import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="relative">
      {/* Mobile: Icon that opens search */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-orange-300 transition-colors"
        aria-label="Search"
      >
        <i className="fa fa-search text-xl"></i>
      </button>

      {/* Desktop: Always visible search bar */}
      <form onSubmit={handleSearch} className="hidden lg:flex items-center">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search teachings..."
            className="w-64 px-4 py-2 pl-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
          />
          <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-white/60"></i>
        </div>
      </form>

      {/* Mobile: Expandable search */}
      {isOpen && (
        <div className="lg:hidden absolute top-12 right-0 w-72 bg-white rounded-lg shadow-2xl p-4 z-50 animate-fade-in">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search teachings..."
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                autoFocus
              />
              <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <button
              type="submit"
              className="w-full mt-3 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
