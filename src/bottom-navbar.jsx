const BottomNavbar = ()=>{
    return(
        <>
        <div className="sm:hidden h-16 bg-indigo-700 fixed rounded-t-lg bottom-0 flex gap-4 justify-evenly items-center w-full text-sky-200">
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-home fa-xl"></i>
            <a href="#home">Home</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
            <i className="fa-solid fa-briefcase fa-xl"></i><a href="#about">Skills</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-server fa-xl"></i><a href="#projects">Projects</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-message fa-xl"></i><a href="#contact">Contact</a></div>
        </div>
        </>
    )
}
export default BottomNavbar;
// .bottom-nav-list{
//    color: white;
//    height: 80%;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: end;
//    width: 4rem;
//    gap: 0.5rem;
//    padding: 2px;
//  }