import style from './PageTitle.module.scss';

const PageTitle = ({text}) => {
  return (
    <div>
      <h1 className={style.title}>{text}</h1>
    </div>
  )
    
}

export default PageTitle;