import { Post } from "@/types/Post";
import { Box, Typography, Button, Avatar, TextField, TextareaAutosize } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Tweet from "./Tweet";

const ListOfTweets = () => {
    const [tweets, setTweets] = useState<Post[]>([]);
    const [selectedTab, setSelectedTab] = useState<'for-you' | 'following'>('for-you');

    useEffect(() => {
        const fetchTweets = async () => {
            if (selectedTab === 'for-you') {
                const response = await fetch('/api/tweets/for-you');
                const data = await response.json();
                setTweets(data);
            } else {
                const response = await fetch('/api/tweets/following');
                const data = await response.json();
                setTweets(data);
            }
        };

        fetchTweets();
    }, [selectedTab]);

    return (
        <Box sx={{ borderLeft: '1px solid rgb(59, 59, 59)', borderRight: '1px solid rgb(59, 59, 59)', width: '650px', height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '50px', borderRadius: '0px' }}>
                <Button onClick={() => setSelectedTab('for-you')} variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#171717' }, padding: '15px', borderRadius: '0px', borderBottom: '1px solid rgb(117, 117, 117)' }}>
                    <Typography variant="body2" sx={{ borderBottom: selectedTab === 'for-you' ? '5px solid #1DA1F2' : 'none', height: '30px', paddingTop: '15px', color: selectedTab === 'for-you' ? 'white' : 'gray' }}>
                        For you
                    </Typography>
                </Button>
                <Button onClick={() => setSelectedTab('following')} variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#171717' }, padding: '15px', borderRadius: '0px', borderBottom: '1px solid rgb(117, 117, 117)' }}>
                    <Typography variant="body2" sx={{ borderBottom: selectedTab === 'following' ? '5px solid #1DA1F2' : 'none', height: '30px', paddingTop: '15px', color: selectedTab === 'following' ? 'white' : 'gray' }}>
                        Following
                    </Typography>
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', height: '50px', borderRadius: '0px' }}>
                <Avatar sx={{ width: '40px', height: '40px', margin: '10px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                            placeholder="What's happening?"
                            sx={{
                                width: '100%',
                                backgroundColor: 'black',
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgb(59, 59, 59)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgb(59, 59, 59)',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box>
                            Icons
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'rgb(230, 230, 230)' }, padding: '7px', borderRadius: '25px', borderBottom: '1px solid rgb(117, 117, 117)', width: '70px' }}>
                            Post
                        </Button>
                    </Box>
                </Box>
            </Box>

            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </Box>
    )
}

export default ListOfTweets;