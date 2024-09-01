const BottomNavbar = ()=>{
    return(
        <>
        <div className="bottom-nav">
           <div className="bottom-nav-list">
           <i class="fa-solid fa-home fa-xl"></i>
            <a href="#home">Home</a></div>
           <div className="bottom-nav-list">
            <i class="fa-solid fa-briefcase fa-xl"></i><a href="#about">Skills</a></div>
           <div className="bottom-nav-list">
           <i className="fa-solid fa-server fa-xl"></i><a href="#projects">Projects</a></div>
           <div className="bottom-nav-list">
           <i className="fa-solid fa-message fa-xl"></i><a href="#contact">Contact</a></div>
        </div>
        </>
    )
}
export default BottomNavbar;