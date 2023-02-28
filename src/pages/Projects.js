import {projects} from "./../Helpers/projectlist"
import Project from '../components/Project';

const Projects = () => {
    return ( <>
      <main className="section">
        {projects.map((e)=>
        
        (<Project key={e.title} img={e.img} title={e.title} skils={e.skils} link={e.link}/>)
        )}
        
    </main>

    </> );
}
 
export default Projects;