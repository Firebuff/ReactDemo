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