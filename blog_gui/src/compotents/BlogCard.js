import React from 'react';
import "../styles/BlogCard.css"

function BlogCard({blog_data}) {
    return (
        <div className="blog_card_container">
            <div className="blog_card_header">
                <h2>{blog_data.title}</h2>
            </div>

            <div className="blog_card_body">
                {blog_data.card_body}
            </div>

            <div className="blog_card_footer">
                <small>{blog_data.author}</small>
                <small>{blog_data.created}</small>
                <a href="">Read more...</a>
            </div>
        </div>
    );
}

export default BlogCard;