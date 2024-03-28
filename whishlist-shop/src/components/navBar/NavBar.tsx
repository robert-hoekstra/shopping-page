import React from "react";
import Image from "next/image";
import WishList from "../wishlist/WishList";

type NavBarProps = {
	title: string;
};

const NavBar: React.FC<NavBarProps> = ({ title }) => {
	return (
		<header className="flex justify-between bg-gray-800 p-4 ">
			<Image
				width={100}
				height={50}
				src="/gamma.svg"
				alt={title}
			/>
			<WishList
				itemCount={0}
				onClick={() => {}}
			/>
		</header>
	);
};

export default NavBar;
