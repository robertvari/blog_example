import React, {useEffect, useState} from 'react';
import BlogList from "./BlogList";
import LatestCard from "./LatestCard";
import axios from "axios";

function Home(props) {
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
        <div className="content_container">
            <BlogList posts={posts}/>

            <div>
                <LatestCard posts={posts}/>
            </div>

        </div>
    );
}

export default Home;