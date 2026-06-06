import { Grid, Box } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../hooks/useProducts";

// displays products for Home page
const DisplayProducts = () => {
    const { status } = useProducts();

    if (status.status === "loading") {
        return <h1 className="font-bold text-(--color-loading)">Loading...</h1>
    }

    if (status.status === "error") {
        return <h1 className="font-bold text-(--color-warning)">ERROR: {status.error}</h1>
    }                        

    if (status.status !== "success") return null;

    return (
        <Box sx={{ maxWidth: "75%", mx: "auto", p: 2 }}>
            <Grid container spacing={ 2 }>
                {status.data.map((p) => (
                    <Grid
                        key={p.id}
                        /* MUI defaults to 12-columns, this defines how much of the row each thing should use depending on screen size */
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    >
                        <ProductCard product={p} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

};
export default DisplayProducts;