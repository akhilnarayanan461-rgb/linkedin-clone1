import React, { useState } from 'react'
import './Createpost.css'

function Createpost() {
    const [post, setPost] = useState("")
    const [posts, setPostS] = useState([])
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState("")
    const [publishedcomment, setPublishedcomment] = useState("")

    function postHandler() {
        if (post === "") {
            alert("Please write Something")
        } else {
            alert("successfully")
            setPost("")
            setPostS([...posts, post])
        }
    }

    function likeHandler() {
        setLike(!like)
    }

    function commentHandler() {
        setPublishedcomment(comment)
        setComment("")
    }

    function sharehandler() {
        alert("Post shared successfully")
    }

    return (
        <div className='createpost'>

            <input
                className='postinput'
                type="text"
                placeholder='Whats on Your Mind ?'
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />

            <button
                className="postbutton"
                onClick={postHandler}>
                Send
            </button>

            <button className="likebtn" onClick={likeHandler}>
                {like ? "Liked" : "Like"}
            </button>

            <input
                className='commentinput'
                type='text'
                placeholder='Write your comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />

            <button
                className='commentbtn'
                onClick={commentHandler}>
                Add
            </button>

            <p className='publishedcomment'>{publishedcomment}</p>

            {posts.map((person, index) => {
                return (
                    <div key={index}>
                        <p className="posttext">{person}</p>

                        <button onClick={sharehandler}>Share</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Createpost