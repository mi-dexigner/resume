import './App.css';
import EducationWork from './components/EducationWork/EducationWork';
import NameTitle from './components/NameTitle/NameTitle';
import SkillContact from './components/SkillContact/SkillContact';
const App = () => {
  return (
    <div className="app">
     <NameTitle />
     <EducationWork />
     <SkillContact />
    </div>
  )
}

export default App
