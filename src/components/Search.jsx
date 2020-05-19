import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { connect } from "react-redux";
import { filteredList } from "../actions/";

const Search = ({ isHome, filteredList}) => {
	const inputStyle = classNames('input', {
		isHome
	});
	const handleChange = e => {
		filteredList(e.target.value);
	}
	return (
		<section className="main">
		    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
		    <input 
		    	type="text" 
		    	className={inputStyle} 
		    	placeholder="Buscar..." 
		    	onChange={handleChange}
		    />
		</section>
	);
};

//export default Search;

const mapDispatchToProps = {
	filteredList
}

export default connect(null, mapDispatchToProps)(Search);