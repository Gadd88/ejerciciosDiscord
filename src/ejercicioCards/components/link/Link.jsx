import { Link } from "react-router-dom"

const LinkItem = ({children, link}) => {

  return (
    <Link to={`${link}`}>{children}</Link>
  )
}

export default LinkItem