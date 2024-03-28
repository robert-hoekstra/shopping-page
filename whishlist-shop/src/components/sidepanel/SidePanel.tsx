import React, { useState } from "react";

const SidePanel: React.FC = () => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

	const togglePanel = () => {
		setIsSidePanelOpen(!isSidePanelOpen);
	};

	return (
		<div
			className={`side-panel fixed top-0 right-0 h-screen w-64 bg-white transition-transform duration-300 transform ${
				isSidePanelOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<button onClick={togglePanel}>
				{isSidePanelOpen ? "Close" : "Open"}
			</button>
			{isSidePanelOpen && (
				<div className="panel-content">{/* Add your panel content here */}</div>
			)}
		</div>
	);
};

export default SidePanel;
