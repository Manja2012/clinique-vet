const MobileVersion = () =>{  

    return(
    <div>
      <section className="mobil tablet-display-none">
        <div className="container" >
          <h2 className="mobil__title">La clinique</h2>
          <img className="mobil__image" src="/img/dog.jpg" alt="dog" />
          <p className="mobil__text">Lorem ipsum dolor sit amet consectetur. Sit amet facilisi massa lacus quam sed enim turpis dignissim. Lecea amet mi. Lacus erat habitasse turpis semper nunc massa </p>
        </div>
      </section>
      <section className="mobil tablet-display-none">
        <div className="container">
          <h2 className="mobil__title">Notre équipe</h2>
          <ul>
            <li className="border">
              <img className="mobil__image" src="/img/doctor1.jpg" alt="Alexandre Shulesho" />
              <p className="mobil__team">Alexandre Shulesho</p>
              <p className="mobil__team-text">Chirurgie</p>
            </li>
            <li className="border">
            <img className="mobil__image" src="/img/doctor2.jpg" alt="Nikolai Glushkov" />
              <p className="mobil__team">Nikolai Glushkov</p>
              <p className="mobil__team-text">Chirugie</p>
            </li>
            <li className="border">
            <img className="mobil__image" src="/img/doctor3.jpg" alt="Maxim Krichko" />
              <p className="mobil__team">Maxim Krichko</p>
              <p className="mobil__team-text">ASV</p>
            </li>
            <li className="border">
            <img className="mobil__image" src="/img/doctor4.jpg" alt="Elina Avezova" />
              <p className="mobil__team">Elina Avezova</p>
              <p className="mobil__team-text">Chirurgie et échographie 
                cardiaque</p>
            </li>
            <li className="border">
            <img className="mobil__image" src="/img/doctor5.jpg" alt="Denis Belozerskikh" />
              <p className="mobil__team">Denis Belozerskikh</p>
              <p className="mobil__team-text">ASV</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    )
}
export default MobileVersion;