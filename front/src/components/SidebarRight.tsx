import { Avatar, Box, Button, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SuggestionBox from "./SuggestionBox";
import { useRef } from "react";
import { useEffect } from "react";
import { TrendingPost } from "@/types/TrendingPost";

const SidebarRight = () => {
    const [showSuggestionBox, setShowSuggestionBox] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [randomUser, setRandomUser] = useState({
        name: 'John Doe',
        username: 'john_doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: ''
    });

    const [trendingsPosts, setTrendingsPosts] = useState<TrendingPost[]>([
        new TrendingPost(1, 'Politics', 'Argentina', 'Boca de urna', 12200),
        new TrendingPost(2, 'Politics', null, 'Jefe de gobierno', 4042),
        new TrendingPost(3, 'Politics', 'Argentina', 'Pitu Salvatierra', 2980)

    ]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            setIsActive(true);
        } else {
            setIsActive(false);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Stack sx={{ position: 'fixed', ml: 135, display: 'flex', flexDirection: 'column', maxWidth: '350px', alignItems: 'start', justifyContent: 'start', height: '100vh', gap: '20px', mt: .5, width: '100%'}}>
            <Box sx={{ position: 'relative', zIndex: 1000, width: '100%' }}>
                <TextField autoComplete="off" fullWidth ref={inputRef} onChange={(e) => setSearchQuery(e.target.value)} onClick={() => { setShowSuggestionBox(true); setIsActive(true) }} variant="outlined" placeholder="🔍︎ Search" sx={{ width: '111.8%', height: '50px', backgroundColor: 'white', border: isActive ? '3px solid #1DA1F2' : '1px solid gray', borderRadius: '999px', '& .MuiOutlinedInput-root': { height: '50px', borderRadius: '999px', fontSize: '18px', backgroundColor: 'black', color: 'white', border: 'none', position: 'relative', zIndex: 1000 } }} />

                {showSuggestionBox && isActive && (
                    <SuggestionBox searchQuery={searchQuery} />
                )}
            </Box>

            <Box sx={{ width: '100%', height: 'fit-content', border: '1px solid gray', borderRadius: '20px', p: 1.5, pl: 2.5, pr: 2.5 }}>
                <Typography variant="h6" sx={{ color: 'white', fontSize: '25px', marginBottom: '10px' }}>Relevant people</Typography>

                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', width: '100%', height: 'fit-content' }}>
                        <Avatar src={randomUser.imagen} />

                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', gap: '10px', width: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '17px', marginBottom: '-5px', fontWeight: 'bold' }}>{randomUser.name}</Typography>
                                <Typography variant="h6" sx={{ color: 'gray', fontSize: '17px' }}>@{randomUser.username}</Typography>
                            </Box>

                            <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', fontSize: '13px', fontWeight: 'bold', borderRadius: '999px', height: '40px' }}>Follow</Button>
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ fontSize: '17px', mt: 1, color: 'white' }}>{randomUser.description}</Typography>
                </Box>
            </Box>

            <Box sx={{ width: '100%', height: 'fit-content', border: '1px solid gray', borderRadius: '20px', p: 1.5, pl: 2.5, pr: 2.5 }}>
                <Typography variant="h6" sx={{ color: 'white', fontSize: '25px', marginBottom: '10px' }}>What's happening</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', rowGap: '20px' }}>
                    {trendingsPosts.map(post => (
                        <Box key={post.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: '0px' }}>
                            <Typography variant="h6" sx={{ fontSize: '14px', color: 'gray' }}>{post.topic} {post.place ? `in ${post.place}` : '· trending'}</Typography>
                            <Typography variant="h6" sx={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>{post.title}</Typography>
                            <Typography variant="h6" sx={{ fontSize: '14px', color: 'gray' }}>{(post.quantityPosts / 1000).toFixed(1)}k Posts</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Grid container spacing={1} columns={3} sx={{ width: '100%', borderRadius: '20px', p: 1, display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center', color: 'gray' }}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href='/terms-of-service' sx={{ textDecoration: 'none', color: 'gray', '&:hover': { textDecoration: 'underline' } }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>Terms of Service</Typography>
                    </Link>
                    <p className="separator" style={{ margin: '0 5px', whiteSpace: 'nowrap' }}>|</p>
                    <Link href='/privacy-policy' sx={{ textDecoration: 'none', color: 'gray', '&:hover': { textDecoration: 'underline' } }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>Privacy Policy</Typography>
                    </Link>
                    <p className="separator" style={{ margin: '0 5px', whiteSpace: 'nowrap' }}>|</p>
                    <Link href='/cookie-policy' sx={{ textDecoration: 'none', color: 'gray', '&:hover': { textDecoration: 'underline' } }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>Cookie Policy</Typography>
                    </Link>
                    <p className="separator" style={{ margin: '0 5px', whiteSpace: 'nowrap' }}>|</p>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center', gap: '10px' }}>
                    <Link href='/accessibility' sx={{ textDecoration: 'none', color: 'gray', '&:hover': { textDecoration: 'underline' } }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>Accessibility</Typography>
                    </Link>
                    <p className="separator" style={{ margin: '0 5px', whiteSpace: 'nowrap' }}>|</p>
                    <Link href='/ads-info' sx={{ textDecoration: 'none', color: 'gray', '&:hover': { textDecoration: 'underline' } }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>Ads info</Typography>
                    </Link>
                    <p className="separator" style={{ margin: '0 5px', whiteSpace: 'nowrap' }}>|</p>
                    <Link href='/more' sx={{ textDecoration: 'none', color: 'gray', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap', '&:hover': { textDecoration: 'underline' } }}>More</Typography>
                        <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>···</Typography>

                    </Link>
                </Grid>

                <Typography variant="h6" sx={{ fontSize: '13px', whiteSpace: 'nowrap', mt: 1.5 }}>© 2025 Equis Corp.</Typography>
            </Grid>
        </Stack>
    )
}

export default SidebarRight;