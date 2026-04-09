interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => (
  <input
    placeholder="Buscar..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;