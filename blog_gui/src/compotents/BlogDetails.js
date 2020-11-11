import React from 'react';
import {useParams} from "react-router-dom"
import {Mock_BlogDetails} from "../Mock_BlogDetails";
import "../styles/BlogDetails.css"

function BlogDetails(props) {
    const {slug} = useParams()

    const {
        title,
        card_body,
        body,
        author,
        created
    } = Mock_BlogDetails

    return (
        <div className="details_container">
            <h1>{title}</h1>
            <hr/>
            <h4>{card_body}</h4>
            <br/>
            <p>{body}</p>
            <hr/>

            <div>
                <small>{author}</small>
                <small>{created}</small>
            </div>
        </div>
    );
}

export default BlogDetails;