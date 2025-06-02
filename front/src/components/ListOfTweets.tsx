import { Post } from "@/types/Post";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Tweet from "./Tweet";
import PublicIcon from '@mui/icons-material/Public';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VerifiedIcon from '@mui/icons-material/Verified';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CheckIcon from '@mui/icons-material/Check';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { User } from "@/types/User";
import { BEARER_TOKEN, COLOR_TWITTER_BLUE } from "@/utils/Const";

const ListOfTweets = () => {
    const [tweets, setTweets] = useState<Post[]>([
        new Post(1, 'For you', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 20), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
        new Post(2, 'Following', null, 'Hello, world!', 0, new User(1, 'John Doe', 'john_doe', 'john@example.com', 'password', 'https://example.com/avatar.jpg', new Date()), new Date(2025, 5, 21), 'This is a test post.', [], 0, 0, 0, 0),
    ]);
    const [selectedTab, setSelectedTab] = useState<'for-you' | 'following'>('for-you');
    const [showWhoCanReply, setShowWhoCanReply] = useState(false);
    const [replyOptionSelected, setReplyOptionSelected] = useState('Everyone can reply');
    const [showSelectorReply, setShowSelectorReply] = useState(false);
    const [tweetContent, setTweetContent] = useState('');
    const [isPosting, setIsPosting] = useState(false);


    useEffect(() => {
        const fetchTweets = async () => {
            if (selectedTab === 'for-you') {
                const response = await fetch('https://api.twitter.com/2/tweets', {
                    method: 'POST',
                    body: JSON.stringify({ content: tweetContent }),
                    headers: {
                        'Autorization': `Bearer ${BEARER_TOKEN}`,
                    }
                });
                console.log(await response.json)
                const data = await response.json();
                setTweets(data);
            } else {
                const response = await fetch('https://api.twitter.com/2/tweets', {
                    method: 'POST',
                    body: JSON.stringify({ content: tweetContent }),
                    headers: {
                        'Autorization': `Bearer ${BEARER_TOKEN}`
                    }
                });

                const data = await response.json();
                setTweets(data);
            }
        };
        fetchTweets();
    }, [selectedTab]);

    const handlePost = async () => {
        setIsPosting(true);

        try {
            const response = await fetch('/api/tweets', {
                method: 'POST',
                body: JSON.stringify({ content: tweetContent }),
                headers: {
                    'Autorization': `Bearer ${BEARER_TOKEN}`
                }
            });

            if (response.ok) {
                setTweetContent('');
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            setIsPosting(false);
        }
    }

    const handleReplyOptionSelected = (option: string) => {
        setReplyOptionSelected(option);
        setShowSelectorReply(false);
    }

    const Option1 = {
        name: 'Everyone can reply',
        icon1: <PublicIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px'
        }} />,
        icon2: <CheckIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px', backgroundColor: COLOR_TWITTER_BLUE
        }} />
    }

    const Option2 = {
        name: 'Accounts you follow',
        icon1: <HowToRegIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px'
        }} />,
        icon2: <CheckIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px', backgroundColor: COLOR_TWITTER_BLUE
        }} />
    }

    const Option3 = {
        name: 'Verified accounts',
        icon1: <VerifiedIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px'
        }} />,
        icon2: <CheckIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px', backgroundColor: COLOR_TWITTER_BLUE
        }} />
    }


    const Option4 = {
        name: 'Only accounts you mention',
        icon1: <AlternateEmailIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px'
        }} />,
        icon2: <AlternateEmailIcon sx={{
            fontSize: '20px', borderRadius: '999px', padding: '8px',
            height: '25px', width: '25px', backgroundColor: COLOR_TWITTER_BLUE
        }} />
    }

    const options = [Option1, Option2, Option3, Option4];

    return (
        <Box sx={{ maxWidth: '650px', height: '100%', width: '100%' }} >
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '50px', borderRadius: '0px' }} borderLeft={'1px solid rgb(59, 59, 59)'} borderRight={'1px solid rgb(59, 59, 59)'}>
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

            <Box sx={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }} borderLeft={'1px solid rgb(59, 59, 59)'} borderRight={'1px solid rgb(59, 59, 59)'} borderBottom={'2px solid rgb(54, 54, 54)'}>
                <Avatar sx={{ width: '50px', height: '50px', margin: '10px', ':hover': { boxShadow: 'inset 0 0 20px rgba(73, 73, 73, 0.5)' }, cursor: 'pointer' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <textarea
                            spellCheck={true}
                            placeholder="What's happening?"
                            style={{
                                width: '100%',
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                fontSize: '20px',
                                outline: 'none',
                                overflow: 'hidden',
                                resize: 'none',
                                paddingTop: '25px',
                                paddingBottom: '25px',
                            }}
                            rows={Math.max(Math.ceil(tweetContent.length / 52), 1)}
                            onFocus={() => setShowWhoCanReply(true)}
                            onChange={(e) => setTweetContent(e.target.value)}
                        />

                        {tweetContent.length > 280 && (
                            <Box sx={{
                                display: 'flex', flexDirection: 'column', alignItems: 'start',
                                backgroundColor: 'rgb(2, 17, 61)', borderRadius: '20px', padding: '10px'
                            }}>
                                <Typography variant="body2" sx={{ color: 'white', fontSize: '15px', padding: '10px' }}>
                                    Mientras no le preguntes boludeces a Grok podés escribir todo lo que quieras.
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'white', textDecoration: 'underline', fontSize: '14px', fontWeight: 'bold', padding: '10px' }}>
                                    Dale me gusta al video.
                                </Typography>
                            </Box>
                        )}

                        {showWhoCanReply && (
                            <Box sx={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid rgb(59, 59, 59)', marginBottom: '10px' }}>
                                {options.map((option) => {
                                    if (option.name === replyOptionSelected) {
                                        return (
                                            <Typography variant="body2" onClick={() => setShowSelectorReply(true)} sx={{
                                                display: 'flex', flexDirection: 'row', alignItems: 'center', color: COLOR_TWITTER_BLUE, cursor: 'pointer', textWrap: 'nowrap'
                                            }}>
                                                {option.icon1}
                                                {option.name}
                                            </Typography>
                                        )
                                    }
                                })}
                            </Box>
                        )}

                        {showSelectorReply && (
                            <Box sx={{
                                position: 'relative', top: '20px',
                                backgroundColor: 'black', color: 'white', border: '1px solid rgb(59, 59, 59)',
                                borderRadius: '20px', width: '350px', zIndex: 20, overflow: 'hidden',
                                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
                            }}>
                                <Typography variant="body2" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '15px', paddingBottom: '0px' }}>
                                    Who can reply?
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '15px', color: 'gray', padding: '15px', paddingTop: '0px' }}>
                                    Choose who can reply to this post. Anyone mentioned can always reply.
                                </Typography>

                                {options.map(option => {
                                    return (
                                        <Typography variant="body2" onClick={() => handleReplyOptionSelected(option.name)} sx={{
                                            display: 'flex', flexDirection: 'row', alignItems: 'center',
                                            fontSize: '15px', fontWeight: 'bold',
                                            height: '50px', width: '100%', gap: '10px', padding: '10px',
                                            '&:hover': { backgroundColor: '#171717' }, cursor: 'pointer'
                                        }}>
                                            {option.icon2}
                                            {option.name}
                                        </Typography>
                                    )
                                })}
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Box display={'flex'} flexDirection={'row'} gap={'15px'}>
                            <ImageOutlinedIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <GifBoxOutlinedIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <TravelExploreIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <ChecklistRtlRoundedIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <EmojiEmotionsRoundedIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <CalendarMonthRoundedIcon sx={{ fontSize: '24px', color: COLOR_TWITTER_BLUE, cursor: 'pointer' }} />
                            <RoomOutlinedIcon sx={{ fontSize: '24px', color: '#115b88', cursor: 'pointer' }} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <CircularProgressWithLabel value={tweetContent.length} />

                            <Button disabled={tweetContent.length === 0 || isPosting} onClick={() => handlePost()} variant="contained" sx={{
                                mr: 1.5, backgroundColor: 'white', color: 'black',
                                '&:hover': { backgroundColor: 'rgb(230, 230, 230)' }, padding: '8.5px', borderRadius: '25px', borderBottom: '1px solid rgb(117, 117, 117)', width: '70px',
                                ':disabled': { backgroundColor: 'gray', color: 'black', fontWeight: 'bold' }
                            }}>
                                Post
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex', flexDirection: 'column',
            }}>
                {
                    tweets.map((tweet) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))
                }
            </Box>
        </Box >
    )
}

export default ListOfTweets;