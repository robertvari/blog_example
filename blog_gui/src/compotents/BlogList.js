import React, {useState, useEffect} from 'react';
import BlogCard from "./BlogCard";


function BlogList(props) {
    const [posts, set_posts] = useState([])

    const fetch_posts = () => {
        console.log("Get post list from API")
    }

    useEffect(() =>{
        fetch_posts()
    }, [])

    return (
        <div>
            {
               posts.map(data => <BlogCard key={data.id} blog_data={data}/>)
            }
        </div>
    );
}

export default BlogList;