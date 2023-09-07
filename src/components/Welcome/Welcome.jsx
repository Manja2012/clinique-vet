const Welcome = () =>{  

    return(
    <div>
      <section className="clinic-presentation">
        <div className="container ">
          <h1 className="main__title"> Bienvenue chez BIOMIR</h1>
          <a href="/rdv"><button type="button" className="button main__button button--hero">Prendre RDV</button></a>
        </div>
      </section>
    </div>
    )
}
export default Welcome;