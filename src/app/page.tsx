import Hero from '@/components/Hero'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Stack />
      <Contact />
    </main>
  )
}
