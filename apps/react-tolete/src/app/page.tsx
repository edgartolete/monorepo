import { About } from './components/about'
import { Header } from './components/header'
import { Testimonials } from './components/testimonials'
import Button from '@repo/react/components/button'

export default function Home() {
  return (
    <>
      <Header />
      <Button pill>Click me</Button>
      <About />
      <Testimonials />
    </>
  )
}
