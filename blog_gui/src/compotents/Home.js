import React from 'react';
import BlogList from "./BlogList";
import LatestCard from "./LatestCard";

function Home(props) {
    return (
        <div className="content_container">
            <BlogList/>

            <div>
                <LatestCard/>
            </div>

        </div>
    );
}

export default Home;