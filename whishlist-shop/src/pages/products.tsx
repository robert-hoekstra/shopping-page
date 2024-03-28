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
		<div className="">
			<h1>Bekijk ons assortiment</h1>
			<Grid
				columns={4}
				gap={4}
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
