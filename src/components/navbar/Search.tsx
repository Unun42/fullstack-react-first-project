import { Box, Paper, Typography, ClickAwayListener, Backdrop } from "@mui/material";
import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from  "../ProductCard";

// TODO: create useSearch hook
const Search = () => {
    const [debouncedQuery, setDebouncedQuery] = useState("");   // debounced input
    const [query, setQuery] = useState("");                     // user input
    const [isOpen, setIsOpen] = useState(false);                // search dropdown visability
    const { status } = useProducts();                           // product context

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOpen(true);
    };

    // debounce
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 350);
        return () => clearTimeout(timer);
    }, [query]);

    // prevents rendering unless successfully loaded products
    if (status.status !== "success") return null;

    const products = status.data;

    // matches eithercategory or title
    const queriedProducts = products.filter((p) =>
        p.category.toLowerCase().includes(debouncedQuery) ||
        p.title.toLowerCase().includes(debouncedQuery)
    );

    // dropdown shown if open search and query not empty
    const showDropdown = isOpen && debouncedQuery.trim() !== "";

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <Box sx={{ position: "relative", display: "inline-block", p: 1, ml: "auto" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    name="Search"
                    value={query}
                    onChange={handleQuery}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
                    className="
                        p-2 pl-6 rounded-xl
                        bg-(--color-surface)
                        text-(--color-text)
                        border-2 border-(--color-border)
                        focus:outline-none
                        focus:ring-2
                        focus:ring-(--focus)
                        transition
                    "
                />

                <Backdrop
                    open={showDropdown}
                    onClick={() => setIsOpen(false)}
                    sx={{ zIndex: 42 }}
                />

                {/* SEARCH DROPDOWN */}
                {showDropdown && (
                    <Paper
                        elevation={6}
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            zIndex: 45,
                            maxHeight: 360,
                            overflowY: "auto",
                            mt: 0.5,
                            backgroundColor: "var(--color-background)",
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{ display: "block", px: 2, py: 1, color: "var(--color-text)" }}
                        >
                            Results for: "{debouncedQuery}"
                        </Typography>

                        {queriedProducts.length > 0 
                            ? ( queriedProducts.map((p) => (
                                    <Box key={p.id} className="p-1">
                                        <ProductCard product={p} />
                                    </Box>
                                ))) 
                            : ( <Typography variant="body2" sx={{ px: 2, py: 1, backgroundColor: "var(--color-text)" }}>
                                    No results found.
                                </Typography>
                            )
                        }
                    </Paper>
                )}
            </Box>
        </ClickAwayListener>
    );
};
export default Search;