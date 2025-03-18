import './App.css'
import myProfilePic from "./assets/my photo.jpg"

function App() {

  return (
    <>
      <header>
        <img src={myProfilePic} id="myPic"/>
        <h1 id="name">Ben Kwon</h1>
        <h1 id="title">Intermediate JavaScript Developer, Lifelong Student</h1>
      </header>
      <main>
        <div id="description">
          <p>I live in California</p>
          <p>I am an aspiring JavaScript Developer</p>
        </div>
      </main>
    </>
  )
}

export default App
