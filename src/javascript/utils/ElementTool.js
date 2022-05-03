export const $ = (selector) => document.querySelector(selector);

export const $$ = (selectors) => document.querySelectorAll(selectors);

export const createElement = (tagName, tagText = '') => {
	const element = document.createElement(tagName);
	element.textContent = tagText;

	return element;
};

export const combineElement = (...elements) => {
	const fragment = document.createDocumentFragment();
	elements.forEach((element) => fragment.append(element));

	return fragment;
};

