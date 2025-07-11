import { Hero } from './components/hero/Hero'
import { About} from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="bg-slate-900">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
