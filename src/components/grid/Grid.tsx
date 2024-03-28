import React, { ReactNode, useEffect, useState } from "react";

interface GridProps {
	children: ReactNode[];
	gap: number;
	columnWidth: number;
}

const Grid: React.FC<GridProps> = ({ children, gap, columnWidth }) => {
	const [columns, setColumns] = useState(1); // Default number of columns

	useEffect(() => {
		const updateColumns = () => {
			// Calculate the number of columns based on the available screen width
			const screenWidth = window.innerWidth;
			const newColumns = Math.floor(screenWidth / columnWidth);
			setColumns(newColumns);
		};

		// Call the updateColumns function initially and on window resize
		updateColumns();
		window.addEventListener("resize", updateColumns);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", updateColumns);
		};
	}, []);

	return (
		<div className={`grid grid-cols-3 gap-6`}>
			{children.map((child, index) => (
				<div key={index}>{child}</div>
			))}
		</div>
	);
};

export default Grid;
