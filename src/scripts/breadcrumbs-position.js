// window.addEventListener('DOMContentLoaded', () => {
//   const breadcrumbsContainer = document.querySelector('.breadcrumb');
//   const productInfoSection = document.querySelector(
//     '.product-main__info--content'
//   );
//   const header = document.querySelector('.header');
//   const breakpoint = 900;
//
//   function moveBreadcrumbs() {
//     if (window.innerWidth >= breakpoint) {
//       productInfoSection.prepend(breadcrumbsContainer);
//     } else {
//       header.after(breadcrumbsContainer);
//     }
//   }
//
//   // Move the breadcrumbs initially based on the screen size
//   moveBreadcrumbs();
//
//   // Move the breadcrumbs whenever the window is resized
//   window.addEventListener('resize', moveBreadcrumbs);
// });
