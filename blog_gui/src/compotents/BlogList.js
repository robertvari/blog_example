import React from 'react';
import BlogCard from "./BlogCard";
import {MockData} from "../MockData";

function BlogList(props) {
    console.log(MockData)

    return (
        <div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    );
}

export default BlogList;