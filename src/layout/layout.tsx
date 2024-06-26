import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import SidePanel from "@/components/sidepanel/SidePanel";

interface LayoutProps {
	children?: React.ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
	return (
		<>
			<NavBar title="The Wishlist Shop" />
			<SidePanel />
			<main className="p-6 mx-auto bg-slate-700">{children}</main>
			<Footer />
		</>
	);
}
