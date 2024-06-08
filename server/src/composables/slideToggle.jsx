import { slideUp } from './slideUp.jsx';
import { slideDown } from './slideDown.jsx';

export function slideToggle(elm, duration = 300) {
	if (window.getComputedStyle(elm).display === 'none') {
		slideDown(elm, duration);
	} else {
		slideUp(elm, duration);
	}
}
