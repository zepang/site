import { useParams } from 'remix';

export default function New () {
  console.log(useParams())
  return (
    <div>
      <h1 className="text-5xl">文章详情-new</h1>
    </div>
  )
}