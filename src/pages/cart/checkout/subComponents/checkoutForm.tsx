import { useState } from "react";
import styles from "./Marquee.module.css";


type FormData = {
    name: string;
    address: string;
    zipCode: string;
    creditCard: string;
};

type FormErrors = {
    name:       string | null;
    address:    string | null;
    zipCode:    string | null;
    creditCard: string | null;
};


const CheckoutForm = () => {
    const [ showMarquee, setShowMarquee ] = useState(false);
    const [ formErrors, setFormErrors ] = useState<FormErrors>({
        name:       null,
        address:    null,
        zipCode:    null,
        creditCard: null,
    });


    // Lazy initiation: runs once, return value becomes init state
    // Used because needed conditional logic to check localStorage for init value
    const [formData, setFormData] = useState<FormData>(() => {
        const isStored = localStorage.getItem("formData");
        
        if (isStored) { return JSON.parse(isStored); }

        return {
            name: "",
            address: "",
            zipCode: "",
            creditCard: ""
        }
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // using this to bypass React async state update timing issue
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };

        setFormData(newFormData);
        localStorage.setItem("formData", JSON.stringify(newFormData));
    };


    const handleAndValidateSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const validationErrors: FormErrors = {
            name:       null,
            address:    null,
            zipCode:    null,
            creditCard: null,
        };

        // ======================================
        // UGLIEST FORM VALIDATION KNOWN TO MAN, brute forced and did not have time to pretty up
        // REGEX: u enables Unicode mode; needed for: \p{L} (any letter in any language), \p{N} (any digit)
        // NAME -------------------------------
        if (formData.name.trim().length < 2  || 
            formData.name.trim().length > 21 || 
            /[^\p{L}\s]/u.test(formData.name)
        )  {    validationErrors.name = 
                    "3-20 letters required."
                    console.error("formName error");
        }

        // ADDRESS -------------------------------
        if (formData.address.trim().length < 3  ||
            formData.address.trim().length > 25 || 
            /[^\p{L}\p{N}\s]/u.test(formData.address)
        ) { validationErrors.address = 
                "4-26 characters required.";
                console.error("formAddress error");
        }

        // ZIPCODE ------------------------------
        if (formData.zipCode.trim().length < 5 ||
            formData.zipCode.trim().length > 9 || 
            /[^\p{N}\s]/u.test(formData.zipCode)
        ) { 
            validationErrors.zipCode = 
                "6-10 numbers required.";
                console.error("formZip error");
        }

        // CREDITCARD (should be between 13-19) -----
        if (formData.creditCard.trim().length < 6 || 
            formData.creditCard.trim().length > 19 ||
            /[^\p{L}\p{N}\s]/u.test(formData.creditCard)
        ) { 
            validationErrors.creditCard = 
                "7-20 numbers required.";
                console.error("formCredit error");
        }

        // SET FORM ERRORS from validationErrors and early return if errors
        setFormErrors(validationErrors);
        const isValid = Object.values(validationErrors).every((e) => e === null);   // checks object values for null

        if (!isValid) {
            console.log("submit failed");
            return;
        };
        
        // ORDER SUCCESSFUL ===========
        // show marquee, clear form/cart
        setShowMarquee(true);
        localStorage.removeItem("formData");
        localStorage.removeItem("cart");
        setFormData({
            name: "",
            address: "",
            zipCode: "",
            creditCard: ""
        });
    };


    // really really needed to be broken down into smaller components
    return (
        <div
            className="
                space-y-4
                p-4
                rounded-xl
                border border-(--color-border)
                bg-(--color-surface)
            "
        >
            {/* HEADER */}
            <div className="space-y-1">
                <h2 className="text-lg font-bold text-(--color-text)">
                    Checkout Form
                </h2>

                <p className="text-sm text-(--color-text)/60">
                    Enter your details to complete the order.
                </p>
            </div>

            {/* FORM */}
            <form className="flex flex-col gap-3" onSubmit={handleAndValidateSubmit}>

                {/* NAME */}
                <div className="space-y-1">
                    <input
                        className={`
                            w-full
                            p-2 rounded-md
                            border border-(--color-border)
                            bg-(--color-background)
                            text-(--color-text)

                            focus:outline-none
                            focus:ring-2 focus:ring-(--color-focus)

                            ${formErrors.name ? "border-red-500" : ""}
                        `}
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    {formErrors.name && (
                        <p className="text-sm text-red-500">
                            {formErrors.name}
                        </p>
                    )}
                </div>

                {/* ADDRESS */}
                <div className="space-y-1">
                    <input className={`
                        w-full
                        p-2 rounded-md
                        border border-(--color-border)
                        bg-(--color-background)
                        text-(--color-text)

                        focus:outline-none
                        focus:ring-2 focus:ring-(--color-focus)

                        ${formErrors.address ? "border-red-500" : ""}
                    `}
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    {formErrors.address && (
                        <p className="text-sm text-red-500">
                            {formErrors.address}
                        </p>
                    )}
                </div>

                {/* ZIP */}
                <div className="space-y-1">
                    <input
                        className={`
                            w-full
                            p-2 rounded-md
                            border border-(--color-border)
                            bg-(--color-background)
                            text-(--color-text)

                            focus:outline-none
                            focus:ring-2 focus:ring-(--color-focus)

                            ${formErrors.zipCode ? "border-red-500" : ""}
                        `}
                        name="zipCode"
                        type="number"
                        placeholder="Zip code"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />

                    {formErrors.zipCode && (
                        <p className="text-sm text-red-500">
                            {formErrors.zipCode}
                        </p>
                    )}
                </div>

                {/* CARD */}
                <div className="space-y-1">
                    <input className={`
                        w-full
                        p-2 rounded-md
                        border border-(--color-border)
                        bg-(--color-background)
                        text-(--color-text)

                        focus:outline-none
                        focus:ring-2 focus:ring-(--color-focus)

                        ${formErrors.creditCard ? "border-red-500" : ""}
                    `}
                        name="creditCard"
                        type="number"
                        placeholder="Credit card number"
                        value={formData.creditCard}
                        onChange={handleChange}
                    />

                    {formErrors.creditCard && (
                        <p className="text-sm text-red-500">
                            {formErrors.creditCard}
                        </p>
                    )}
                </div>

                {/* SUBMIT */}
                <button className="
                    mt-2
                    w-full
                    py-2
                    rounded-lg
                    bg-(--color-accent)
                    hover:bg-(--color-accent-hover)
                    active:bg-(--color-accent-active)
                    text-(--color-text-on-accent)
                    font-medium
                    transition
                ">
                    Checkout
                </button>
            </form>

            {/* BANNER */}
            <div className="relative h-6 overflow-hidden">
                {showMarquee && (
                    <div
                        className={`
                            ${styles.marquee}
                            absolute whitespace-nowrap
                            font-extrabold text-amber-500
                        `}
                        onAnimationEnd={() => setShowMarquee(false)}
                    >
                        Order confirmed!
                    </div>
                )}
            </div>
        </div>
    );
};
export default CheckoutForm;