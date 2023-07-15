import './locals.css'
import 'dotenv/config'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { changeTitle } from '@/app/layout'

import Links from '@/components/Links'
import ViewImg from '@/islands/ViewImg'

const components  = {
  
}

export default async function Blog({ params }) {

  changeTitle('Lipez')  

  const { body, attributes } = await fetch(process.env.API + '/blog/'+ params.blog, {cache: "no-cache"})
  .then(res => res.json())
  .then(res => {
    return res
  })

  return (
    <div className='blog_article'>
      <div className="markdown blog_cont">
        <MDXRemote source={body} components={components}/>
      </div>
      <div className='attributes_b'>
        <a className='author_card' href={attributes.author.url} about='_blank' title={attributes.author.name} >
          {
            attributes.author.image &&
            <div className='author_b_img'>
              <img src={attributes.author.image} alt={attributes.author.name} loading='lazy' />
            </div>
          }
          <div className='author_b_name'>
            author: {attributes.author.name}
          </div>
        </a>
        <div className='tags_b_cont'>
          {
            attributes.topics &&
            attributes.topics.map((topic, index) => {
              return (
                <div className='tag_b' key={index}>
                  {topic}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
