import "./Navbar.css"
const Navbar = () => {
   return (  
      <nav className="navbar">
         <div className="logo"></div>
         <div className="links">

            <a href="/" style={{
               color: "black",
               backgroundColor: '#FFCE44',
               borderRadius:'8px'
            }}>
               Home
   
            </a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>

         </div>
      </nav>
   );
}
 
export default Navbar;