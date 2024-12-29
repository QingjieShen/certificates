import ThreeDCard from './components/ThreeDCard'
import './App.css'
import fccJSAlgo from '../src/assets/certificates/freecodecamp_javascript-algorithms-and-data-structures.jpg'
import fccRWD from '../src/assets/certificates/freecodecamp_responsive-web-design.jpg'
import fmDB from '../src/assets/certificates/frontend-master_databases.jpg'
import fmFS from '../src/assets/certificates/frontend-master_fullstack-v3.jpg'
import ldREACT from '../src/assets/certificates/linkedin_reactjs-essential-training.jpeg'
import sbREACT from '../src/assets/certificates/scrimba_advanced-react.jpg'
import sbAI from '../src/assets/certificates/scrimba_the-ai-engineer-path.jpg'
import pmp from '../src/assets/certificates/pmi_pmp.jpeg'

function generateStars() {
  const stars = []
  for (let i = 0; i < 200; i++) {
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
    title: 'Advanced React',
    description: 'Issued by Scrimba',
    imageUrl: sbREACT,
    certificateType: 'img'
  },
  {
    title: 'The AI Engineer Path',
    description: 'Issued by Scrimba',
    imageUrl: sbAI,
    certificateType: 'img'
  },
  {
    title: 'Fullstack for Front-End Engineers',
    description: 'Issued by Frontend Master',
    imageUrl: fmFS,
    certificateType: 'img'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    description: 'Issued by freeCodeCamp',
    imageUrl: fccJSAlgo,
    certificateType: 'img'
  },
  {
    title: 'Responsive Web Design',
    description: 'Issued by freeCodeCamp',
    imageUrl: fccRWD,
    certificateType: 'img'
  },
  {
    title: 'Databases',
    description: 'Issued by Frontend Master',
    imageUrl: fmDB,
    certificateType: 'img'
  },
  {
    title: 'React.js Essential Training',
    description: 'Issued by LinkedIn Learning',
    imageUrl: ldREACT,
    certificateType: 'img'
  },
  {
    title: 'Project Management Professional (PMP)',
    description: 'Issued by Project Management Institute',
    imageUrl: pmp,
    certificateType: 'img'
  },
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
