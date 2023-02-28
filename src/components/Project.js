import ss from './../img/projects/01.jpg';

const Project = (props) => {
    return (

 <div className="container">

    <div className="project-details">

        <h1 className="title-1">{props.title}</h1>

        <img src={props.img} alt="" className="project-details__cover"/>

        <div className="project-details__desc">

            <p>Skills: {props.skils}</p>

        </div>
       
        <a href={props.link} className="btn-outline">
      
                 GitHub repo
        </a>

    </div>
</div> );
}
 
export default Project;