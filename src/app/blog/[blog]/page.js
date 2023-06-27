import './locals.css'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { changeTitle } from '@/app/layout'

export default async function Blog({ params }) {

  changeTitle('Lipez')  

  const body = await fetch('https://meapi.fly.dev/blog/'+ params.blog, {cache: "no-cache"})
  .then(res => res.json())
  .then(res => {
    return res.body
  })
  
  return (
    <>
      <div className="markdown blog_cont">
        <MDXRemote source={body} />
      </div>
    </>
  )
}
