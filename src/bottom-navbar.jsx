const BottomNavbar = ()=>{
    return(
        <>
        <div className="md:hidden h-16 bg-amber-400 fixed rounded-t-lg bottom-0 flex gap-4 justify-evenly items-center font-reem pt-5 w-screen text-blue-950">
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-home fa-xl"></i>
            <a href="/">Home</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
            <i className="fa-solid fa-briefcase fa-xl"></i> <a href='#skills'>Skills</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-server fa-xl"></i> <a href='#projects'>Projects</a></div>
           <div className="p-1 flex flex-col items-center justify-end gap-2 h-3/4">
           <i className="fa-solid fa-message fa-xl"></i> <a href='#contact'>Contact</a></div>
        </div>
        </>
    )   
}
export default BottomNavbar;