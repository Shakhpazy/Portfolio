import { Hero } from './components/hero/Hero'
import { About} from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/project/Projects'

function App() {

  return (
    <div className="bg-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
