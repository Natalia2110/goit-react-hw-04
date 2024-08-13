import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";
// import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit, onClick }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const inputValue = form.input.value.trim();
    // console.log(inputValue);
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="input"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn} onClick={onClick}>
          <IoSearchOutline size="24" className={css["search-icon"]} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
