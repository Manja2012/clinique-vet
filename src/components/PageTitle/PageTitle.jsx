import style from './PageTitle.module.scss';

const PageTitle = ({ text, h2 }) => {
  return (
      h2 
        ? <h2 className="title">{text}</h2>
        : <h1>{text}</h1>
  )
}

export default PageTitle;