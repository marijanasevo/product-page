TODO:

- [ ] How code could be structured into components, and reusable templates? React off the table. Web components, templating languages, etc. Similar projects - Github.

End file structure could be something like:

views/  
 |-- components/  
 |-- pages/  
 |-- layouts/  
data/  
 |-- products.json  
images/  
 |-- products/  
 |-- icons/  
styles/  
 |-- main.css  
 |-- globals/ (accent colors, typography breakpoints, helpers)  
 |-- pages/  
 |-- components/  
scripts/  
 |-- index.js  
 |-- utils/

- [x] Explore and setup parcel
- [x] Visual Code Figma extension
- [x] Add normalize.css
- [x] Mobile design first
  - [x] Header and menu
  - [x] Breadcrumbs
  - [x] Product image and info
  - [x] Product accordian
    - [x] CSS functionality, opening, closing, showing appropriate - + buttons
  - [x] Research available npm slider/carousels to save time
    - [x] `npm @splidejs/splide`
- [x] Research templating lang. Reduce code in `product.html`. Divide components into their own files / include their respective css/scripts. ejs easiest to implement
- [ ] Try building custom parcel plugin to reuse file. Skip for now.
- [x] Desktop version
  - [x] Decide on breakpoints
  - [x] Adjust header menu / display menu items
  - [x] Relocate breadcrumbs function and adjust
  - [x] Replace product `img` with `background: url()` image for responsivness and fluidity
  - [x] Adjust accorian (position - left)
  - [x] Get main info section into it's own container that expands to "You May Also Like" section on bigger screens so it can sticky slide.
    - [x] Dynamically define it's height - js
  - [x] Bigger sides padding
- [ ] Button animation
- [ ] Get carousel closer to the image
- [ ] When reducing the width of the browser slider doesn't adjust properly. Has to be refreshed instead.
- [ ] Improve HTML structure, and classes naming, css/js comments.
- [ ] Reuse product as template by passing JSON data. Custom parcel plugin?
  - [ ] Pass JSON to product.ejs
  - [ ] Find a way to pass variables to components
  - [ ] Generate static pages with product id or name as route
- [ ] Create layout template
- [ ] Folder for pages
- [ ] CSS into separate files
