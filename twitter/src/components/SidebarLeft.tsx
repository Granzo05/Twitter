import { Avatar, Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import EmailIcon from '@mui/icons-material/Email';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import WorkIcon from '@mui/icons-material/Work';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import XIcon from '@mui/icons-material/X';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const SidebarLeft = () => {
    const username = 'Natalia Natalia';
    const userAlias = 'natalia_natalia';
    const userLogo = 'https://via.placeholder.com/150';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', height: '100vh', maxWidth: '450px', mt: .5 }}>
            <span className="sidebar-section-container" style={{ padding: '15px !important' }}>
                <XIcon fontSize="large" />
            </span>

            <span className="sidebar-section-container">
                <HomeIcon fontSize="large" />
                Home
            </span>

            <span className="sidebar-section-container">
                <SearchIcon fontSize="large" />
                Explore
            </span>

            <span className="sidebar-section-container">
                <NotificationImportantIcon fontSize="large" />
                Notifications
            </span>

            <span className="sidebar-section-container">
                <EmailIcon fontSize="large" />
                Messages
            </span>

            <span className="sidebar-section-container">
                <TravelExploreIcon fontSize="large" />
                Grok
            </span>

            <span className="sidebar-section-container">
                <BookmarkBorderIcon fontSize="large" />
                Bookmarks
            </span>

            <span className="sidebar-section-container">
                <WorkIcon fontSize="large" />
                Jobs
            </span>

            <span className="sidebar-section-container">
                <SocialDistanceIcon fontSize="large" />
                Communities
            </span>

            <span className="sidebar-section-container">
                <XIcon fontSize="large" />
                Premium
            </span>

            <span className="sidebar-section-container">
                <FlashOnIcon fontSize="large" />
                Verified Orgs
            </span>

            <span className="sidebar-section-container">
                <PersonIcon fontSize="large" />
                Profile
            </span>

            <span className="sidebar-section-container">
                <MoreHorizIcon fontSize="large" />
                More
            </span>

            <Button fullWidth sx={{ marginTop: '10px', height: '55px', backgroundColor: 'white', color: 'black', borderRadius: '999px', '&:hover': { backgroundColor: '#d1d1d1' } }}>Post</Button>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mt: 8, gap: '10px' }}>
                <Avatar src={userLogo} />

                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                    <span style={{ fontWeight: 'bold', width: '100%' }}>{username}</span>
                    <span style={{ fontSize: '12px', color: 'gray' }}>@{userAlias}</span>
                </Box>
            </Box>
        </Box >
    )
}

export default SidebarLeft;