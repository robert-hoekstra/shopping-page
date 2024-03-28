import React, {
	createContext,
	useState,
	useContext,
	FC,
	useEffect,
} from "react";

interface Product {
	id: number;
	name: string;
}

interface WishlistContextType {
	wishlist: Product[];
	addToWishlist: (product: Product) => void;
	removeFromWishlist: (productId: number) => void;
}

interface WishlistProviderProps {
	children: React.ReactNode;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
	undefined
);

export const useWishlist = () => {
	const context = useContext(WishlistContext);
	if (!context) {
		throw new Error("useWishlist must be used within a WishlistProvider");
	}
	return context;
};

export const WishlistProvider: FC<WishlistProviderProps> = ({ children }) => {
	const [wishlist, setWishlist] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Load wishlist from localStorage on component mount
	useEffect(() => {
		const savedWishlist = localStorage.getItem("wishlist");
		if (savedWishlist) {
			setWishlist(JSON.parse(savedWishlist));
		}
		setIsLoading(false);
	}, []);

	// Save wishlist to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
		console.log(wishlist); // Log the updated wishlist
	}, [wishlist]);

	const addToWishlist = (product: Product) => {
		setWishlist([...wishlist, product]);
	};

	const removeFromWishlist = (productId: number) => {
		setWishlist(wishlist.filter(product => product.id !== productId));
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	console.log(wishlist); // Log the wishlist when rendering

	return (
		<WishlistContext.Provider
			value={{
				wishlist,
				addToWishlist,
				removeFromWishlist,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};
