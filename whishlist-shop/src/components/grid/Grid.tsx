import React, { ReactNode } from "react";

interface GridProps {
	children: ReactNode[];
	columns: number;
	gap: number;
}

const Grid: React.FC<GridProps> = ({ children, columns, gap }) => {
	return (
		<div className={`grid grid-cols-3 gap-2`}>
			{children.map((child, index) => (
				<div key={index}>{child}</div>
			))}
		</div>
	);
};

export default Grid;
