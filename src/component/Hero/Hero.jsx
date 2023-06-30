import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <h1>Discover the best food & drinks</h1>
      <p>The food which has touch of family</p>
      <button onClick={()=>{window.scrollTo({top:608, left:0, behavior:'smooth'})}}>Explore</button>
    </div>
  )
}

export default Hero
