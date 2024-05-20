import React from 'react';

interface IconlyLightOutlineArrowDown22Props {
  color?: string;
  className?: string;
}

export const IconlyLightOutlineArrowDown22: React.FC<IconlyLightOutlineArrowDown22Props> = ({ color = '#200E32', className }) => {
	return (
		<svg
			className={`iconly-light-outline-arrow-down-2-2 ${className}`}
			fill="none"
			height="16"
			viewBox="0 0 16 16"
			width="16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="path"
				d="M2.8274 5.16393C3.0222 4.96523 3.32703 4.94716 3.54183 5.10974L3.60337 5.16393L8.00002 9.64894L12.3967 5.16393C12.5915 4.96523 12.8963 4.94716 13.1111 5.10974L13.1726 5.16393C13.3674 5.36264 13.3852 5.67358 13.2258 5.8927L13.1726 5.95547L8.38801 10.8361C8.19321 11.0348 7.88838 11.0528 7.67357 10.8903L7.61203 10.8361L2.8274 5.95547C2.61312 5.73689 2.61312 5.38251 2.8274 5.16393Z"
				fill={color}
			/>
		</svg>
	);
};
