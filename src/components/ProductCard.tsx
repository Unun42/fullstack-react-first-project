import { Card, CardContent, CardActions, CardActionArea, CardMedia, Typography, Button } from "@mui/material";
import type { ProductItem } from "../types/sharedTypes";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";


type ProductCardProps = { product: ProductItem; }


// just the shape, no need for actual context here
const ProductCard = ({ product }: ProductCardProps) => {
    const { dispatch } = useCart();

    return (
        <Card
            sx={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "var(--color-surface-2)",
                border: "1.5px solid var(--color-border)",
                borderRadius: 3,
                transition: "all 200ms ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    borderColor: "var(--color-accent)",
                }
            }}
        >
            {/* MAIN AREA - CLICKABLE */}
            <CardActionArea
                component={NavLink}
                to={`/product/${product.id}`}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    flexGrow: 1,
                }}
            >
                {/* IMAGE */}
                <CardMedia
                    component="img"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{
                        width: "100%",
                        height: 190,
                        objectFit: "contain",
                        backgroundColor: "var(--color-surface)",
                    }}
                />

                {/* INFO */}
                <CardContent sx={{ px: 2, py: 2, flexGrow: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "var(--color-text)",
                        }}
                    >
                        {product.title}
                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--color-accent)",
                            fontWeight: 700,
                            fontSize: "1rem",
                        }}
                    >
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>

            {/* BUTTON AREA */}
            <CardActions
                sx={{
                    display: "flex",
                    gap: 1,
                    px: 2,
                    pb: 2,
                    pt: 0,
                    backgroundColor: "var(--color-surface-2)",
                }}
            >
                <Button
                    sx={{
                        flex: 1,
                        py: 1,
                        fontWeight: 450,
                        borderRadius: 2,
                        backgroundColor: "var(--color-surface)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "1",
                        "&:hover": { borderColor: "var(--color-accent)" }
                    }}
                    size="small"
                    component={NavLink}
                    to={`/product/${product.id}`}
                >
                    details
                </Button>

                <Button
                    sx={{
                        flex: 1,
                        py: 1,
                        borderRadius: 2,
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-text-on-accent)",
                        border: "1px solid var(--color-border)",
                        "&:hover": { 
                            backgroundColor: "var(--color-accent-hover)" 
                        }
                    }}
                    size="small"
                    onClick={() =>
                        dispatch({
                            type: "ADD",
                            payload: {
                                id: product.id,
                                quantity: 1,
                            }
                        })
                    }
                >
                    add
                </Button>
            </CardActions>
        </Card>
    );
};
export default ProductCard;