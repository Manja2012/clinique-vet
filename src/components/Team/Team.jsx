import { Link } from "react-router-dom"

const Team = () => {

    return (
        <>
          <ul className="team">
            {/* <li className="border team__item">
              <img className="mobil__image" src="/img/doctor1.jpg" alt="Alexandre Shulesho" />
              <p className="mobil__team">Alexandre Shulesho</p>
              <p className="mobil__team-text">Chirurgie</p>
            </li> */}
              <li class="team__item">
                <Link className="team__link" to="#">
                  <div className="team__overlay">
                    <img className="mobil__image" src="/img/doctor1.jpg" alt=" photo Alexandre Shulesho"/> 
                    <p className="team__overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta, ullam fuga tenetur hic quos ad molestiae accusantium sed reprehenderit aut repudiandae nobis nemo sunt! Unde quasi cumque deserunt assumenda?</p>
                  </div>
                  <div className="team__exampl">
                    <h2 className="team__title">Alexandre Shulesho</h2>
                    <p className="team__text">Chirurgie</p>
                  </div>
                </Link>
              </li>
            <li className="border team__item ">
            <img className="mobil__image" src="/img/doctor2.jpg" alt="Nikolai Glushkov" />
              <p className="mobil__team">Nikolai Glushkov</p>
              <p className="mobil__team-text">Chirugie</p>
            </li>
            <li className="border team__item">
            <img className="mobil__image" src="/img/doctor3.jpg" alt="Maxim Krichko" />
              <p className="mobil__team">Maxim Krichko</p>
              <p className="mobil__team-text">ASV</p>
            </li>
            <li className="border team__item">
            <img className="mobil__image" src="/img/doctor4.jpg" alt="Elina Avezova" />
              <p className="mobil__team">Elina Avezova</p>
              <p className="mobil__team-text">Chirurgie et échographie 
                cardiaque</p>
            </li>
            <li className="border team__item">
            <img className="mobil__image" src="/img/doctor5.jpg" alt="Denis Belozerskikh" />
              <p className="mobil__team">Denis Belozerskikh</p>
              <p className="mobil__team-text">ASV</p>
            </li>
          </ul>
        </>

    )
}

export default Team;