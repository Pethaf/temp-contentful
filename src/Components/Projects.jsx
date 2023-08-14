import { useFetchProjects } from "../fetchContent";
const Projects = () => {
    const { loading, projects } = useFetchProjects();
    if (loading) {
        return (
        <section className="=projects">
            <h2>Loading...</h2>
        </section> 
        )
    }
    return (
        <section>
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {projects.map((project) => {
                    const {id,img,url, title} = project;
                    console.log(id,img,url,title)
                    return (
                        <a href={url} key={id} target="_blank" rel="noreferer" className="project">
                                    <img src={img} alt={title} className="img"></img>
                                    <h5>{title}</h5>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
export { Projects };