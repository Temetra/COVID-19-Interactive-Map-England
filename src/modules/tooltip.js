export function showTooltip(targetElement, tooltipElement) {
	// Default tooltip position
	let position = "bottom";

	// Get size of elements
	let targetRect = targetElement.getBoundingClientRect();
	let tooltipRect = tooltipElement.getBoundingClientRect();

	// Get computed size of arrow
	let afterContent = window.getComputedStyle(tooltipElement, ":after");
	let afterSize = parseInt(afterContent.getPropertyValue("border-bottom-width"), 10);

	// Compute tooltip position
	let coords = calculateCoords(position, targetRect, tooltipRect);

	// Todo: Check if content extends past page, reverse position if so
	if (coords.left <= 0) {
		position = "right";
		coords = calculateCoords(position, targetRect, tooltipRect);
	}
	else if (afterSize + coords.top + tooltipRect.height - window.scrollY >= window.innerHeight) {
		position = "top";
		coords = calculateCoords(position, targetRect, tooltipRect);
	}

	// Show tooltip
	tooltipElement.style.visibility = "visible";
	tooltipElement.style.top = `${coords.top}px`;
	tooltipElement.style.left = `${coords.left}px`;

	// Return calculated position
	return position;
}

export function hideTooltip(tooltipElement) {
	tooltipElement.style.visibility = "hidden";
	tooltipElement.style.top = "0px";
	tooltipElement.style.left = "0px";
}

function calculateCoords(position, targetRect, tooltipRect) {
	let top, left;

	switch (position) {
		case "top":
			top = targetRect.top - tooltipRect.height + window.scrollY;
			left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
			break;
		case "bottom":
			top = targetRect.top + targetRect.height + window.scrollY;
			left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
			break;
		case "right":
			top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
			left = targetRect.right;
			break;
		case "left":
			top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
			left = targetRect.left - tooltipRect.width;
			break;
	}

	return { top, left };
}