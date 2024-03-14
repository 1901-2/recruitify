import React from 'react'

export const Blog = () => {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        <div className="blog-post">
          <h3>10 Tips for a Successful Job Search</h3>
          <p>
            In today's job market, it can be tough to stand out from the crowd. Here
            are ten tips to help you conduct a successful job search.
          </p>
          <a href="/blog/10-tips-for-a-successful-job-search">Read More</a>
        </div>
        <div className="blog-post">
          <h3>How to Prepare for a Job Interview</h3>
          <p>
            Job interviews can be nerve-wracking, but with the right preparation,
            you can impress your potential employer and increase your chances of
            getting the job.
          </p>
          <a href="/blog/how-to-prepare-for-a-job-interview">Read More</a>
        </div>
        <div className="blog-post">
          <h3>The Benefits of Working Remotely</h3>
          <p>
            Remote work is becoming increasingly popular, and for good reason. Here
            are some of the benefits of working remotely.
          </p>
          <a href="/blog/the-benefits-of-working-remotely">Read More</a>
        </div>
      </div>
    </div>
  )
}