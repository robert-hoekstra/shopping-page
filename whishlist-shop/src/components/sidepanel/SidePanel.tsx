import React, { useState } from "react";
import { useWishlist } from "../../../context/WishlistContext";
import ProductList from "../productList/ProductList";

const SidePanel: React.FC = () => {
	const { isSidePanelOpen, toggleSidePanel, wishlist } = useWishlist();

	return (
		<div
			className={`side-panel shadow-md p-4 fixed top-0 right-0 h-screen min-w-80 bg-slate-900 transition-transform duration-300 transform ${
				isSidePanelOpen ? "translate-x-0" : "translate-x-full"
			} shadow-sm`}
		>
			<div className="flex justify-between">
				<h2 className="font-bold">My wishlist</h2>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={toggleSidePanel}
				>
					{isSidePanelOpen ? "Close" : "Open"}
				</button>
			</div>
			{isSidePanelOpen && (
				<div className="panel-content">
					<ProductList items={wishlist} />
				</div>
			)}
		</div>
	);
};

export default SidePanel;
