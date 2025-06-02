import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    const normalise = (value: number) => ((value - 0) * 100) / (280 - 0);
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{transition: '0.12s ease-in-out'}} color={280 - props.value > 20 ? 'info' : 280 - props.value <= 20 && 280 - props.value > 0 ? 'warning' : 'error'} size={280 - props.value > 20 ? 30 : 40} variant="determinate" {...props} value={normalise(props.value)} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 280 - props.value > 20 ? 'black' : 'white' }}
                >{`${Math.round(280 - props.value)}`}</Typography>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;