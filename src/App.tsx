import ThreeDCard from './components/ThreeDCard'
import './App.css'
import fccJSAlgo from '../src/assets/certificates/freecodecamp_javascript-algorithms-and-data-structures.jpg'
import fccRWD from '../src/assets/certificates/freecodecamp_responsive-web-design.jpg'
import fmDB from '../src/assets/certificates/frontend-master_databases.jpg'
import fmFS from '../src/assets/certificates/frontend-master_fullstack-v3.jpg'
import ldREACT from '../src/assets/certificates/linkedin_reactjs-essential-training.jpeg'
import sbREACT from '../src/assets/certificates/scrimba_advanced-react.jpg'
import sbAI from '../src/assets/certificates/scrimba_the-ai-engineer-path.jpg'

function generateStars() {
  const stars = []
  for (let i = 0; i < 100; i++) {
    const star = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${Math.random() * 2 + 1}s`,
      animationDelay: `${Math.random() * 2}s`
    }
    stars.push(star)
  }
  return stars
}

const stars = generateStars()
// console.log(stars)

const certificates = [
  {
    title: 'JavaScript Algorithms and Data Structures',
    description: 'freeCodeCamp',
    imageUrl: fccJSAlgo
  },
  {
    title: 'Responsive Web Design',
    description: 'freeCodeCamp',
    imageUrl: fccRWD
  },
  {
    title: 'Databases',
    description: 'Frontend Master',
    imageUrl: fmDB
  },
  {
    title: 'Fullstack',
    description: 'Frontend Master',
    imageUrl: fmFS
  },
  {
    title: 'React.js Essential Training',
    description: 'LinkedIn Learning',
    imageUrl: ldREACT
  },
  {
    title: 'Advanced React',
    description: 'Scrimba',
    imageUrl: sbREACT
  },
  {
    title: 'The AI Engineer Path',
    description: 'Scrimba',
    imageUrl: sbAI
  }
]

function App() {

  return (
    <div className="app">
      <div className='stars-container'>
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              position: 'absolute',
              left: star.left,
              top: star.top,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay
            }}
          ></div>
        ))}
      </div>
      <div className="certificates">
        {certificates.map((certificate, index) => (
          <ThreeDCard
            key={index}
            title={certificate.title}
            description={certificate.description}
            imageUrl={certificate.imageUrl}
          />
        ))}

      </div>
    </div>
  )
}

export default App
