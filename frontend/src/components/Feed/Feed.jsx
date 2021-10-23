import './feed.css'
import { useState, useEffect } from 'react'
import Post from '../post/Post'
import axios from 'axios'
import Skeleton from '../skeleton/skeleton'

const Feed = () => {
    const [isloading, setIsLoading]= useState(true)
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async() => {
            setIsLoading(true)
            try {
                const res = await axios.get("/api/videos/1")
                setVideos(res.data)
            } catch (err) {

            }
            setIsLoading(false)
        }
        getVideos();
    }, [])

    return (
        <div className="Feed">
            {isloading ? <Skeleton type="feed" /> : (
                videos.map((video) => (
                    <Post video = {video}/>
                ))
            ) }
            
        </div>
    )
}

export default Feed
