import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        
      </div>
   <div className="container mx-auto px-8">
    
   </div>
   <Navbar />
   <Hero/>  
   <Technologies/>
   <Projects/>
  </div>
  )
}

export default App