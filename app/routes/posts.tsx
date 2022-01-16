import { LinksFunction, Outlet, Link } from 'remix';
import styles from '../styles/routes/posts/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Post () {
  return (
    <div>
      <h1 className="text-5xl">文章主页</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}