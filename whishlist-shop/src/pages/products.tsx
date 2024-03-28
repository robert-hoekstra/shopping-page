import { useEffect, useState } from "react";
import { Product as ProductType } from "../utils/product";
import Product from "../components/product/Product";
import Grid from "@/components/grid/Grid";

export default function ProductsPage() {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch("/api/products")
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<div className="grid gap-6">
			<h1 className="text-2xl font-bold">
				Wat voeg jij tot aan jouw wishlist?
			</h1>
			<Grid
				gap={4}
				columnWidth={200}
			>
				{products.map(product => (
					<Product
						key={product.id}
						product={product}
					/>
				))}
			</Grid>
		</div>
	);
}
