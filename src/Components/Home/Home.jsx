import Social_icons from "../Social_icons/Social_icons";
import "./Home.css"
function Home(){
    return (
        <div id="home" className="home">
            <img src="https://i.pinimg.com/originals/a9/da/3d/a9da3df52d836a48a091afb99134cfd6.jpg" width="250" height="250"></img>
            <h1>Aniket Jauhri</h1>
            <p>Frontend Developer</p>
            <Social_icons />
        </div>
    )
}
export default Home;