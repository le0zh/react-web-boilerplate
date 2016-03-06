/**
 * action类型
 */

export cost ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISBILITY_FILTER = 'SET_VISBILITY_FILTER';


/**
 * 其他的常量
 */
export const VisbilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETE: 'SHOW_COMPLETE',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action创建函数
 */

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index
	}
}

export function setVisbilityFilter(filter) {
	return {
		type: SET_VISBILITY_FILTER,
		filter
	}
}