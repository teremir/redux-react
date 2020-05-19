const reducer = (state, action ) => {
	
	switch(action.type){
		case "SET_FAVORITE":
			return {
				...state,
				myList: [...state.myList, action.payload],
				tendencias: []
			}
		case "DELETE_FAVORITE":
			return {
				...state,
				myList: state.myList.filter(items => items.id !== action.payload),
				tendencias: []
			}
		case "LOGIN_REQUEST":
			return {
				...state,
				user: action.payload,
				tendencias: []
			}
		case "LOGOUT_REQUEST":
			return {
				...state,
				user: action.payload,
				tendencias: []
			}
		case "REGISTER_REQUEST":
			return {
				...state,
				user: action.payload,
				tendencias: []
			}
		case "GET_VIDEO_SOURCE":
			return {
				...state,
				playing: state.trends.find(item => item.id === Number(action.payload)) || 
				state.original.find(item => item.id === Number(action.payload)) ||
					[],
				tendencias: []
			}
		case "FILTERED_LIST":
			let listTendencia = [];

			 if(action.payload.length > 0){
			 	listTendencia = state.trends.filter(list => {
					return list.title.toLowerCase().includes(action.payload.toLowerCase());
				}) || state.original.filter(list => {
					return list.title.toLowerCase().includes(action.payload.toLowerCase());
				})
			 }

			return {
				...state,
				searchActive: (action.payload.length === 0 ) ? false : true,
				tendencias:   listTendencia
			}
		default:
			return state;
	}

}

export default reducer;