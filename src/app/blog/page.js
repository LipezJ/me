import './locals.css'

import Link from 'next/link'

import BlogCard from '@/components/BlogCard'
import { changeTitle } from '../layout'

export default async function Blogs() {
  changeTitle('Blogs | Lipez')

  const query = await fetch('https://meapi.fly.dev/blog', { cache: 'no-cache'})
  const blogs = await query.json()

  return (
    <div className='blog_cont'>
      <div id='blogs_title'>
        <div>Blog 🗒️</div>
      </div>
      <div id='blogs'>
        { 
          blogs &&
          Object.values(blogs).map((blogInfo, index) => {
            return (
              <Link className='blog_card' href={'/blog/' + blogInfo.name} key={index}>
                <BlogCard blog={blogInfo} />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}