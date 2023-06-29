import './locals.css'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { changeTitle } from '@/app/layout'

import Links from '@/components/Links'

const components  = {
  Links
}

export default async function Blog({ params }) {

  changeTitle('Lipez')  

  const body = await fetch('http://localhost:4000/blog/'+ params.blog, {cache: "no-cache"})
  .then(res => res.json())
  .then(res => {
    return res.body
  })
  
  return (
    <>
      <div className="markdown blog_cont">
        <MDXRemote source={body} components={components}/>
      </div>
    </>
  )
}
