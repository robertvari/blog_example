import React, {useState, useEffect} from 'react';
import axios from "axios"
import BlogCard from "./BlogCard";


function BlogList(props) {
    const [posts, set_posts] = useState([])

    const fetch_posts = () => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/"
        })
            .then(res => set_posts(res.data))
            .catch(err => console.log(err))
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