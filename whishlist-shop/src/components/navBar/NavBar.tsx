import React from "react";
import Image from "next/image";
import WishList from "../wishlist/WishList";
import { useWishlist } from "../../../context/WishlistContext";

type NavBarProps = {
	title: string;
};

const NavBar: React.FC<NavBarProps> = ({ title }) => {
	const { wishlist, toggleSidePanel } = useWishlist();
	return (
		<header className="flex justify-between bg-gray-800 p-4">
			<Image
				width={100}
				height={50}
				src="/gamma.svg"
				alt={title}
			/>
			<WishList
				itemCount={wishlist.length}
				onClick={toggleSidePanel}
			/>
		</header>
	);
};

export default NavBar;
