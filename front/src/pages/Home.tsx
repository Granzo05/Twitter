import ListOfTweets from "@/components/ListOfTweets";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { Box } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

const Home = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh', width: '100vw', flexDirection: 'row', gap: '30px' }}>
            <SidebarLeft />
            <ListOfTweets />
            <SidebarRight />
        </Box>
    )
}

export default Home;