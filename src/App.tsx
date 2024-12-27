import ThreeDCard from './components/ThreeDCard'
import './App.css'

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

function App() {

  return (
    <>
      <div id='stars'>
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
      <ThreeDCard title={''} description={''} imageUrl={''} />
    </>
  )
}

export default App
