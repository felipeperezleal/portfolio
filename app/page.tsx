import {Navbar, Home, Contact, Projects, About} from '@/components'

export default function Page() {
  return (
    <main>
      <div className='flex-col w-full bg-slate-50'>
        <Home />
        <About />      
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
