import React from "react";
import { useWishlist } from "../../../context/WishlistContext";
import { Product } from "@/utils/product";

interface ProductListProps {
	items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
	const { addToWishlist, removeFromWishlist } = useWishlist();

	const handleIncrement = (product: Product) => {
		addToWishlist(product);
	};

	const handleDecrement = (product: Product) => {
		removeFromWishlist(product);
	};

	return (
		<ul className="mt-4">
			{items.map(item => (
				<li
					className="mb-4 bg-blue-800 p-4 rounded-md"
					key={item.id}
				>
					<div className="flex justify-between">
						<div>
							<span className="font-bold">{item.name}</span>
							<span> x {item.quantity}</span>
						</div>
						<div className="ml-2">
							<button
								className="bg-gray-500 text-white rounded-md px-2 py-1 mr-2"
								onClick={() => handleIncrement(item)}
							>
								+
							</button>
							<button
								className="bg-gray-500 text-white rounded-md px-2 py-1"
								onClick={() => handleDecrement(item)}
							>
								-
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
