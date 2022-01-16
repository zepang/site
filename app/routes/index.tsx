import { LinksFunction, Link, useLocation, Outlet } from 'remix';
import styles from '../styles/routes/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Index() {
  const menus = [
    {
      title: '技术学习',
      url: 'posts'
    },
    {
      title: '生活思考',
      url: 'thought'
    },
    {
      title: '兴趣爱好',
      url: 'interesting'
    },
    {
      title: '收藏分享',
      url: 'collection'
    }
  ]
  
  let layoutCls = 'w-screen h-screen flex flex-row'
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  if (isHomePage) {
    layoutCls = 'w-screen h-screen flex flex-col items-center justify-center'
  }
  return (
    <div className={layoutCls} style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {/* <h1 className="text-lg py-4">Welcome! </h1> */}
      <div className="menus-wrapper rounded-lg shadow-lg">
        <ul className="p-2 md:flex">
          {
            menus.map(({ title, url }) => (
              <li key={url} className="py-2">
                <button className="btn btn-primary text-lg px-6">
                  <Link to={url} className="hover:underline underline-offset-4 stroke-cyan-500 stroke-4 tracking-wider text-slate-400">{title}</Link>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
