import React, { useState} from "react";
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
        
        setQuery(e.currentTarget.value.toLowerCase());
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            onSubmit(query.trim());
        }
     
    }
 
    return(
            <div className={css.searchbar}>
            <form onSubmit={handleSubmit} className={css.searchForm}> 
            <button type="submit" className={css.searchFormButton}>
                <span className={css.searchFormLabel}>Search</span>
            </button>
            <input
            value={query}
            className={css.searchFormInput}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            />
            </form>
            </div>
        )
    }


Searchbar.propTypes = {

    onSubmit: PropTypes.func.isRequired,

  };