import React from "react";
import Image from "next/image";

interface WishListProps {
	itemCount: number;
	onClick: () => void;
}

const WishList: React.FC<WishListProps> = ({ itemCount, onClick }) => {
	return (
		<button
			className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800"
			onClick={onClick}
		>
			<Image
				src="/heart.svg"
				alt="Wishlist"
				width={24}
				height={24}
			/>
			<span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
				{itemCount}
			</span>
		</button>
	);
};

export default WishList;
