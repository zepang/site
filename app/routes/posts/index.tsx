import { LinksFunction, Outlet, Link, useLocation } from 'remix';

export default function Post () {
  return (
    <div>
      <h1 className="text-5xl">文章列表</h1>
      <Link to="new">post new</Link>
      <main>
        <Outlet />
      </main>
    </div>
  )
}