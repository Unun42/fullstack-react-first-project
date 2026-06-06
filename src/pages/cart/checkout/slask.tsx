// A BETTER VALIDATION SCHEMA
// should've done some reserch instead of simply starting


// const FIELD_RULES = {
//     name: {
//         minLength: 2,
//         maxLength: 21,
//         regex: /^[\p{L}\s]*$/u,
//         error: "3-20 letters required."
//     },
//     address: {
//         minLength: 3,
//         maxLength: 25,
//         regex: /^[\p{L}\p{N}\s]*$/u,
//         error: "4-26 characters required."
//     },
//     // ... etc
// };

// // In handleSubmit:
// const cleanFormErrors: FormErrors = {
//     name: validateField(formData.name, FIELD_RULES.name),
//     address: validateField(formData.address, FIELD_RULES.address),
//     zipCode: validateField(formData.zipCode, FIELD_RULES.zipCode),
//     creditCard: validateField(formData.creditCard, FIELD_RULES.creditCard),
// };