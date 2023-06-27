export default function BlogCard({ blog }) {
  const date = new Date(blog.date)
  return (
    <>
      <div className='title_p'>{blog.title}</div>
      {
        (blog.images && !blog.type ) &&
        <div className='blog_img_cont'>
          <img className='blog_img' src={blog.images[0]} alt={blog.title} />
        </div>
      }
      <div className='blog_date'>
        by {blog.author.name} in {date.toLocaleDateString()}
      </div>
      <div className='blog_desc'>{blog.description}</div>
      <div className='tags_b_cont'>
        {
          blog.topics &&
          blog.topics.map((topic, index) => {
            return (
              <div className='tag_b' key={index}>
                {topic}
              </div>
            )
          })
        }
      </div>
    </>
  )
}