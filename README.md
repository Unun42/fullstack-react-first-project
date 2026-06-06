# A LEARNING PROJECT.
My very first react project, explored fundamentals of React, TypeScript, TailWind and MUI.
-----------------------------------------------------------------------------------------
## GETTING STARTED
Ensure you have [Node.js](https://nodejs.org/) installed.

# 1. Clone the repository
git clone <https://github.com/Unun42/fullstack-react-first-project.git>

# 2. Navigate into the project directory
cd fullstack-react-first-project

# 3. Install dependencies (Vite, Tailwind, MUI, TypeScript)
npm install

# 4. Start the local development server
npm run dev

# 5. Spring forth!
somehow navigate yourself to http://localhost:5173, I belive in you.
-----------------------------------------------------------------------------------------
OVERALL 
Spread myself quite thin, barely scraped the surface of MUI and TypeScript,
lacked the time to properly refractor. Wrote some of the ugliest code known to man 
(see < CheckoutForm > for the coding experience of a life-time!).
Would've been happier if I focused on fewer things, still really enjoyed the process. 
-----------------------------------------------------------------------------------------
DEBOUNCE
Implemented a debounce on the <Search> component. 
When query state has initialized and not changed for 350ms then it sets a DebouncedQuery 
and displays products depending on that query. 
-----------------------------------------------------------------------------------------
TRY-CATCH
< fetchProducts > throws on HTTP-errors and propagates other potential errors to < useProductsData >,
which wraps the fetch call in a try-catch that logs andcatches potential errors as well as
dispatches ERROR action with state and proper a error message.
