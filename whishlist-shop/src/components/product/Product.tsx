import React from "react";
import { Product } from "../../utils/product";
import { useWishlist } from "../../../context/WishlistContext";

export interface ProductProps {
	product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
	const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

	const isProductInWishlist = wishlist.some(item => item.id === product.id);

	const handleAddToWishlist = () => {
		addToWishlist(product);
	};

	const handleRemoveFromWishlist = () => {
		removeFromWishlist(product.id);
	};

	const { imageUrl, name, description, price, category, id } = product;

	return (
		<div className="bg-white rounded-lg shadow-lg p-4">
			<img
				className="w-32 h-32 object-cover"
				src={imageUrl}
				alt={description}
			/>
			<h2 className="font-bold text-blue-900">{name}</h2>
			<p className="text-gray-500">{category}</p>
			<p className="text-gray-700">Price: {price}</p>
			<p className="text-gray-700">ID: {id}</p>
			{isProductInWishlist ? (
				<button
					className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
					onClick={handleRemoveFromWishlist}
				>
					Remove from list
				</button>
			) : (
				<button
					className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
					onClick={handleAddToWishlist}
				>
					Add to list
				</button>
			)}
		</div>
	);
};

export default ProductComponent;
