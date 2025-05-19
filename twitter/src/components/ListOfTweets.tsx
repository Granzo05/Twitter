import { Post } from "@/types/Post";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Tweet from "./Tweet";

const ListOfTweets = () => {
    const [tweets, setTweets] = useState<Post[]>([]);

    useEffect(() => {
        const fetchTweets = async () => {
            const response = await fetch('/api/tweets');
            const data = await response.json();
            setTweets(data);
        };

        fetchTweets();
    }, []);

    return (
        <Box sx={{ borderLeft: '1px solid rgb(59, 59, 59)', borderRight: '1px solid rgb(59, 59, 59)', width: '650px', height: '100%' }}>
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </Box>
    )
}

export default ListOfTweets;