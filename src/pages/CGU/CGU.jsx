import { Helmet } from 'react-helmet';
import PageTitle from '../../components/PageTitle/PageTitle';
import style from '../LegalNotice/LegalNotice.module.scss';
import css from '../../sass/Base.module.scss';

const CGU = () =>{  

  return(
    <>
      <Helmet>
          <title>Page CGU</title>
          <meta name="description" content="Conditions générales d'un site web" />
      </Helmet> 
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle text="CONDITIONS GÉNÉRALES"/>
          <div className={style.text}>
            Les présentes conditions générales régissent l’utilisation de ce site <span className={style.text__accent}>https://clinique-vet.netlify.app/</span> <br />
            Ce site appartient et est géré par Biomir <br />
            En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que
            vous acceptez de les respecter en tout temps.
          </div>
          <div className={style.text}>Type de site : vitrine</div>
          <ul className={style.list}>
            <li className={style.item}>
              <h2 className={style.title}>Propriété intellectuelle </h2>
              <p className={style.text}>Tout contenu publié et mis à disposition sur ce site est la propriété de Biomir et de ses créateurs.
              Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables
              et tout ce qui contribue à la composition de ce site.</p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Limitation de responsabilité</h2>
              <p className={style.text}>Biomir ou l’un de ses employés sera tenu responsable de tout problème découlant de ce site.
              Néanmoins, Biomir et ses employés ne seront pas tenus responsables de tout problème découlant de
              toute utilisation irrégulière de ce site.</p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Indemnité </h2>
              <p className={style.text}>En tant qu’utilisateur, vous indemnisez par les présentes Biomir de toute responsabilité, de tout
              coût, de toute cause d’action, de tout dommage ou de toute dépense découlant de votre utilisation de
              ce site ou de votre violation de l’une des dispositions énoncées dans le présent document.
              </p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Lois applicables</h2>
              <p className={style.text}>Ce document est soumis aux lois applicables en France et vise à se conformer à ses règles et
              règlements nécessaires. Cela inclut la réglementation à l’échelle de l’UE énoncée dans le RGPD.</p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Divisibilité </h2>
              <p className={style.text}>Si, à tout moment, l’une des dispositions énoncées dans le présent document est jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront considérées comme nulles et seront
              retirées du présent document. Toutes les autres dispositions ne seront pas touchées par les lois et le
              este du document sera toujours considéré comme valide.</p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Modifications </h2>
              <p className={style.text}>Ces conditions générales peuvent être modifiées de temps à autre afin de maintenir le respect de la loi et de refléter tout changement à la façon dont nous gérons notre site et la façon dont nous nous
              attendons à ce que les utilisateurs se comportent sur notre site. Nous recommandons à nos
              utilisateurs de vérifier ces conditions générales de temps à autre pour s’assurer qu’ils sont informés
              de toute mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements
              apportés à ces conditions ou nous afficherons un avis sur notre site.</p>
            </li> 
            <li className={style.item}>
              <h2 className={style.title}>Contact</h2>
              <p className={style.text}>Veuillez communiquer avec nous si vous avez des questions ou des préoccupations. Nos
              coordonnées sont les suivantes : <br />
              <span className={style.text__accent}>38 09 65 21 89 <br />
              biomir.vet@gmail.com <br />
              Avenue Bohdan Khmelnitsky, 58, Dnipro, région de Dnipropetrovsk, Ukraine, 49000</span> <br />
              Date d'entrée en vigueur : le 22 septembre 2023.</p>
            </li> 
          </ul>
        </div>
      </section>
    </>
  )
}
export default CGU;