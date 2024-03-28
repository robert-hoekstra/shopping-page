import { Product } from "@/utils/product";
import React, {
	createContext,
	useState,
	useContext,
	FC,
	useEffect,
} from "react";

interface WishlistContextType {
	wishlist: Product[];
	addToWishlist: (product: Product, quantity?: number) => void;
	removeFromWishlist: (product: Product, quantity?: number) => void;
	isSidePanelOpen: boolean;
	toggleSidePanel: () => void;
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
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

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
	}, [wishlist]);

	const addToWishlist = (product: Product, quantity: number = 1) => {
		const existingProductIndex = wishlist.findIndex(p => p.id === product.id);
		if (existingProductIndex !== -1) {
			const updatedWishlist = [...wishlist];
			updatedWishlist[existingProductIndex].quantity += quantity;
			setWishlist(updatedWishlist);
		} else {
			setWishlist([...wishlist, { ...product, quantity }]);
		}
	};

	const removeFromWishlist = (product: Product, quantity: number = 1) => {
		const existingProductIndex = wishlist.findIndex(p => p.id === product.id);
		if (existingProductIndex !== -1) {
			const updatedWishlist = [...wishlist];
			updatedWishlist[existingProductIndex].quantity -= 1;
			if (updatedWishlist[existingProductIndex].quantity <= 0) {
				updatedWishlist.splice(existingProductIndex, 1);
			}
			setWishlist(updatedWishlist);
		}
	};

	const toggleSidePanel = () => {
		setIsSidePanelOpen(!isSidePanelOpen);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<WishlistContext.Provider
			value={{
				wishlist,
				addToWishlist,
				removeFromWishlist,
				isSidePanelOpen,
				toggleSidePanel,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};
