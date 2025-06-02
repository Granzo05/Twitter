import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const SuggestionBox: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const [topics, setTopics] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const search = async () => {
            if (searchQuery.length > 0) {
                const [topics, users] = await Promise.all([searchTopics(searchQuery), searchUsers(searchQuery)]);
                console.log(topics, users);
                setTopics(topics);
                setUsers(users);
            }
        }

        search();
    }, [searchQuery])

    const searchTopics = async (query: string) => {
        //const response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=1&q=${query}`);
        //const data = await response.json();
        return [];
    }

    const searchUsers = async (query: string) => {
        //const response = await fetch(`https://api.twitter.com/1.1/users/search.json?q=${query}`);
        //const data = await response.json();
        return [];
    }

    return (
        <Box sx={{ width: '100%', border: '1px solid gray', borderRadius: '10px', position: 'absolute', zIndex: 1000, backgroundColor: 'black' }}>
            {searchQuery.length === 0 ? (
                <Typography variant="h6" sx={{ color: 'gray', fontSize: '17px', marginBottom: '10px', p: 1.5 }}>Try searching for people, topics, or keywords</Typography>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
                    {topics.length === 0 ? (
                        <span className="suggestion-box-text">Search for {searchQuery}</span>
                    ) : (
                        topics.map((topic: any) => (
                            <span className="suggestion-box-text" key={topic.name}>{topic.name}</span>
                        ))
                    )}

                    {users.length === 0 ? (
                        <span className="suggestion-box-text">Go to @{searchQuery}</span>
                    ) : (
                        users.map((user: any) => (
                            <span className="suggestion-box-text" key={user.name}>{user.name}</span>
                        ))
                    )}
                </Box >
            )}
        </Box>
    )
}

export default SuggestionBox;