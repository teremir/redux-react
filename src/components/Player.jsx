import React, { useState, useEffect } from "react";
import "../assets/styles/components/Player.scss";
import { connect } from "react-redux";
import { getVideoSource } from "../actions/";
import { Redirect } from "react-router-dom";
import NotFound from "../containers/NotFound.jsx";

const Player = props => {
	const { id } = props.match.params;

	const hashPlayer = Object.keys(props.playing).length > 0;

	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		props.getVideoSource(id);
		setLoading(false);
	}, [])

	if(loading){
		return "<h1>Cargando...</h1>";
	}

	return  hashPlayer ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={props.playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={ () => props.history.goBack() }>Regresar</button>
			</div>
		</div>
	) : <NotFound />;
}

//export default Player;

const mapStateToProps = state => {
	return {
		playing: state.playing
	}
}

const mapDispatchToProps = {
	getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);