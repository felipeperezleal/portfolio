import {Home, Footer, Projects, AboutMe} from '@/components'

export default function Page() {
  return (
    <main className='bg-white h-screen w-full'>
      <Home />
      <AboutMe />      
      <Projects />
      <Footer />
    </main>
  )
}
