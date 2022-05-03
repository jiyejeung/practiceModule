'use strict';

import { $, $$, createElement, combineElement } from '../utils/elementTool.js';

export default class GameDisplay {
	constructor() {}
	init() {}
	createToggleButtonTag() {
		const toggleButton = createElement('BUTTON', 'CLICK HERE!');

		return toggleButton;
	}
	createChangedColorDivTags() {
		const firstDiv = createElement('DIV');
		const secondDiv = createElement('DIV');
		const thirdDiv = createElement('DIV');

		return combineElement(firstDiv, secondDiv, thirdDiv);
	}
}
