import { Post } from "@/types/Post";
import { Avatar, Button, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { Box } from "@mui/material";
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { COLOR_TWITTER_BLUE } from "@/utils/Const";

const Tweet = ({ tweet }: { tweet: Post }) => {
    const calculateTime = (date: Date) => {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        const diffHours = diffTime / (1000 * 60 * 60);
        const diffMinutes = diffTime / (1000 * 60);
        const diffSeconds = diffTime / 1000;

        if (diffDays >= 1) {
            return `${diffDays.toFixed(0)}d`;
        }

        if (diffHours >= 1) {
            return `${diffHours}h`;
        }

        if (diffMinutes >= 1) {
            return `${diffMinutes.toFixed(0)}m`;
        }

        if (diffSeconds >= 1) {
            return `${diffSeconds.toFixed(0)}s`;
        }
    }

    const TweetToolTip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.white,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'rgba(180, 201, 198, 0.52)',
        },
    }));

    return (
        <Box display={'flex'} flexDirection={'row'} gap={'15px'} padding={'15px'} sx={{ cursor: 'pointer' }} borderBottom={'2px solid rgb(54, 54, 54)'} borderLeft={'1px solid rgb(59, 59, 59)'} borderRight={'1px solid rgb(59, 59, 59)'} >
            <Avatar sx={{ ':hover': { boxShadow: 'inset 0 0 24px rgba(73, 73, 73, 0.5)' } }} />

            <Box width={'100%'}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'row'} gap={'5px'}>
                        <Typography sx={{ fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}>{tweet.author.name}</Typography>
                        <Typography sx={{ color: 'gray' }}>{tweet.author.username}</Typography>
                        <Typography sx={{ color: 'gray' }}>· {calculateTime(tweet.createdAt)}</Typography>
                    </Box>

                    <Box color={'gray'}>
                        <TweetToolTip title="Explaint this post">
                            <TravelExploreIcon sx={{ ":hover": { color: COLOR_TWITTER_BLUE } }} />
                        </TweetToolTip>

                        <TweetToolTip title="More">
                            <MoreHorizOutlinedIcon sx={{ ":hover": { color: COLOR_TWITTER_BLUE } }} />
                        </TweetToolTip>
                    </Box>
                </Box>

                <Typography mb={1}>{tweet.content}</Typography>
                <Typography mb={1}>{tweet.media}</Typography>

                <Box display={'flex'} flexDirection={'row'} gap={'5px'} justifyContent={'space-between'} width={'100%'} color={'gray'}>
                    <TweetToolTip title="Reply">
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', ":hover": { color: COLOR_TWITTER_BLUE } }}><ModeCommentOutlinedIcon sx={{ fontSize: '24px' }} />{tweet.quantityOfReplies > 1000 ? `${(tweet.quantityOfReplies / 1000).toFixed(1)}k` : tweet.quantityOfReplies}</Typography>
                    </TweetToolTip>
                    <TweetToolTip title="Repost">
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', ":hover": { color: COLOR_TWITTER_BLUE } }}><RepeatOutlinedIcon sx={{ fontSize: '24px' }} /> {tweet.quantityOfLikes > 1000 ? `${(tweet.quantityOfLikes / 1000).toFixed(1)}k` : tweet.quantityOfLikes}</Typography>
                    </TweetToolTip>
                    <TweetToolTip title="Like">
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', ":hover": { color: COLOR_TWITTER_BLUE } }}><FavoriteBorderOutlinedIcon sx={{ fontSize: '24px' }} />{tweet.quantityOfRetweets > 1000 ? `${(tweet.quantityOfRetweets / 1000).toFixed(1)}k` : tweet.quantityOfRetweets}</Typography>
                    </TweetToolTip>
                    <TweetToolTip title="View">
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', ":hover": { color: COLOR_TWITTER_BLUE } }}><SignalCellularAltOutlinedIcon sx={{ fontSize: '24px' }} />{tweet.quantityOfViews > 1000 ? `${(tweet.quantityOfViews / 1000).toFixed(1)}k` : tweet.quantityOfViews}</Typography>
                    </TweetToolTip>

                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <TweetToolTip title="Bookmark">
                            <TurnedInNotOutlinedIcon sx={{ fontSize: '24px', ":hover": { color: COLOR_TWITTER_BLUE } }} />
                        </TweetToolTip>
                        <TweetToolTip title="Share">
                            <IosShareOutlinedIcon sx={{ fontSize: '24px', ":hover": { color: COLOR_TWITTER_BLUE } }} />
                        </TweetToolTip>
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}

export default Tweet;