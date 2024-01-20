import {Navbar, Home, Contact, Projects, About} from '@/components'

export default function Page() {
  return (
    <main className='flex'>
      <nav className='fixed'>
        <Navbar />
      </nav>
      <div className='flex-col ml-20 w-full'>
        <Home />
        <About />      
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
