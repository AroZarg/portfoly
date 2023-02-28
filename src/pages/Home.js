import Header from "./../components/Header";
import ss from './../img/projects/01.jpg';
import tt from "./../img/projects/2.jpg";

const Home = () => {
    return (      
        <>
    <Header/>
    <main className="section">

        <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
            <li className="project">
                <a href="https://arozarg.github.io/usingData/">
                    <img src={ss} alt="Project img" className="project__img"/>
                    <h3 className="project__title">Photo Searching</h3>
                </a>
            </li>
            <li className="project">
                <a href="https://arozarg.github.io/tetris2/">
                    <img src={tt} alt="Project img" className="project__img"/>
                    <h3 className="project__title">Tetris</h3>
                </a>
            </li>

        </ul>
    </div>
        </main> 
</>

);
}
 
export default Home;