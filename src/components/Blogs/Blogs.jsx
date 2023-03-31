import React, { useEffect, useState } from 'react';
import Read from '../../Read/Read';
import Cart from '../Cart/Cart';
import SingleBlog from '../SingleBlog/SingleBlog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            console.log(data);
        })
    }, [])
    return (
      <div className="mt-12 flex gap-10">
        <div className=" w-8/12">
          {blogs.map((blog) => (
            <SingleBlog blog={blog}></SingleBlog>
          ))}
        </div>
        <div>
          {/* <Read></Read> */}
          {/* <Cart></Cart> */}
          
            </div>
      </div>
    );
};

export default Blogs;