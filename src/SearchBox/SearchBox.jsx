import s from "./SearchBox.module.css";

const SearchBox = ({ handleChangeInput }) => {
  return (
    <div className={s.searchContainer}>
      <h3 className={s.searchTitle}>Find contacts by name</h3>
      <input
        className={s.searchInput}
        name="findContact"
        onChange={handleChangeInput}
        placeholder="Enter contact name"
      />
    </div>
  );
};

export default SearchBox;
