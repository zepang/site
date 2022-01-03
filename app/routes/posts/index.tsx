import { LinksFunction } from 'remix';
import styles from '../../styles/routes/posts/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Post () {
  return (
    <h1 className="text-5xl">文章列表</h1>
  )
}