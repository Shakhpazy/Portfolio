import { Hero } from './components/hero/Hero'
import { About} from './components/about/About'
import { Skills } from './components/skills/Skills'
import SocialIcons from './components/SocialIcons'

function App() {

  return (
    <div className="bg-slate-900">
      <Hero />
      <About />
      <Skills />
      <SocialIcons />
    </div>
  )
}

export default App
