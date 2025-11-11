
// import React from 'react';
// import Navbar from './a1Navbar';
// import Footer from './a3Footer';

// const MainContent = () => {
//   const [showNavLinksInFooter, setShowNavLinksInFooter] = React.useState(false);

//   const navLinks = [
//     {
//       path: '/',
//       text: 'Home',
//       icon: '/images/NavbarIcon1.png',
//     },
//     {
//       path: '/about',
//       text: 'About Us',
//       icon: '/images/NavbarIcon2.png',
//     },
//     {
//       path: '/projects',
//       text: 'Projects',
//       icon: '/images/NavbarIcon3.png',
//     },
//   ];

//   React.useEffect(() => {
//     const handleResize = () => {
//       setShowNavLinksInFooter(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); 

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar navLinks={navLinks} showNavLinksInFooter={showNavLinksInFooter} />
//       <Footer navLinks={showNavLinksInFooter ? navLinks : []} />
//     </div>
//   );
// };

// export default MainContent;
