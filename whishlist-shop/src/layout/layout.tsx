import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import SidePanel from "@/components/sidepanel/SidePanel";

interface LayoutProps {
	children?: React.ReactNode;
	// any props that come into the component
}

export default function Layout({ children, ...props }: LayoutProps) {
	return (
		<>
			<NavBar title="The Wishlist Shop" />
			<SidePanel />
			<main className="p-6 mx-auto">{children}</main>
			<Footer />
		</>
	);
}
