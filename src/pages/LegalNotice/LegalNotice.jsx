import { Helmet } from 'react-helmet';
import PageTitle from '../../components/PageTitle/PageTitle';
import style from './LegalNotice.module.scss';
import css from '../../sass/Base.module.scss';

const LegalNotice = () =>{  

  return(
    <>
      <Helmet>
          <title>Page Mentions légales</title>
          <meta name="description" content="Mentions légales" />
      </Helmet> 
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle text="Mentions légales"/>
          <div className={style.text}>
            Le présent site est la propriété de <span className={style.text__accent}>la Clinique vétérinaire Biomir</span>  <br />
            Siège social : Avenue Bohdan Khmelnitsky, 58, Dnipro, région de Dnipropetrovsk, Ukraine, 49000 <br />
          </div> 
          <p className={style.text}>
            Immatriculée au RCS le 15/06/2005 <br />
            sous le numéro 797 476 744 <br />
            N° identifiant TVA : FR31 721 476 456. <br /> 
          </p> 
          <div className={style.text}>
            Directeur de la publication du site : Alexandre Shuleshko 
            Ce site est hébergé par : 
            Kinsta Ltd
            71 – 75 Shelton Street, Covent Garden
            London, W2CH9JQ
            Royaume Uni
            En cas de dysfonctionnement du site ou pour toute question relative à nos services vous pouvez nous joindre au <span className={style.text__accent}>+380 96 521 89 42</span>
          </div>
          <div className={style.text}> Vous pouvez nous contacter par mail à l'adresse suivante : <span className={style.text__accent}>biomir.vet@gmail.com</span> </div>
        </div>
      </section>
    </>
    
  )
}
export default LegalNotice;