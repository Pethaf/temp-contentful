import heroImg from "../assets/hero.svg";
const Hero = () => {
    return ( 
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quaerat libero expedita, omnis amet quam perspiciatis 
                        labore reiciendis dolorum laudantium? Aut iure ipsa, sapiente 
                        alias nisi cumque debitis possimus error atque.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser"></img>
                </div>
            </div>
        </section>
    )
}

export { Hero}