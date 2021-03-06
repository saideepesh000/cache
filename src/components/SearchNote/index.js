import { useDispatch } from "react-redux";

import { searchNotes } from "../../redux/actions/noteActions";

import "./styles.css";

export default function SearchNote() {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(searchNotes(e.target.value.toLowerCase()));
  }
  return (
    <div className="search">
      <input
        className="searchInput"
        type="text"
        placeholder="Search by Note Name"
        onChange={handleChange}
      />
    </div>
  );
}
