function adjustSidebarHeight() {
    const breakpoint = 1300;
    const sidebarContainer = document.querySelector(".product-main__info--container");
    const sidebar = document.querySelector(".product-main__info");
    const sidebarOffsetTop = sidebar.offsetTop;
    const stopElement = document.querySelector(".product-carousel-section");
    const stopElementOffsetTop = stopElement.offsetTop;
    if (window.innerWidth >= breakpoint) sidebarContainer.style.height = stopElementOffsetTop - sidebarOffsetTop + "px";
    else sidebarContainer.style.height = "";
}
adjustSidebarHeight();
window.addEventListener("resize", adjustSidebarHeight);

//# sourceMappingURL=product.ecc6ce66.js.map
