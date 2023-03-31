import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
const SingleBlog = (props) => {
  console.log(props.blog);
  const { name, img, id, time, author_name,title
, author_image, publish_date } =
    props.blog;
  return (
    <div className="mt-30 pb-5">
      <img className="h-[260px] w-full " src={img} alt="" />
      <div className="flex justify-between items-center mt-5 mb-5 pl-2 pr-4">
        <div className="flex justify-between items-center gap-5">
          <img className="w-75 h-12 rounded-full " src={author_image} alt="" />
          <div>
            <p className="font-bold">{author_name}</p>
            <p>{publish_date}</p>
          </div>
        </div>
        <p>
          {time} min read <FontAwesomeIcon icon={faBookBookmark} />
        </p>
      </div>
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      <span className="mr-5 mb-5">#beginners</span>
      <span className="mb-5">#programming</span> <br />
      <div className="text-[#6047EC] underline">
        <a href=""> Mark as read</a>
      </div>
    </div>
  );
};

export default SingleBlog;
