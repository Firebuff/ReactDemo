import { PLUS, MINUS } from './action-type'

export const plusTotal = function (data) {
	return {
		type: PLUS,
		data: data
	}
}

export const minusTotal = function (data) {
	return {
		type: MINUS,
		data: data
	}
}


export const asyncPlus = function (number) {
	// console.log(number)
	return function (dispatch) {
		console.log(number)
		/*setTimeout( () => {
			dispatch(plusTotal(number))
		}, 5000)*/
		dispatch(plusTotal(number))
	}
}