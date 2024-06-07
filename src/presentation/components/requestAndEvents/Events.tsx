import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Icons } from "../util/Icons";

export const Events = () => {

    const classes = useStyles();

    return (
        <>
            <div style={{marginBottom: 10}}>
                <h4 style={{ color: '#9da0a3', fontFamily: 'sans-serif' }}>Cumpleaños</h4>
            </div>
            <Box className={classes.container} sx={{'&:hover':{backgroundColor: '#2a2b2c'}}}>
                <Box className={classes.avatar}>
                    <Icons title="cumpleanos" />
                </Box>
                <Box className={classes.info}>
                    <p style={{ color: 'white', marginBottom: 1 }}>{`Hoy es el cumpleaños de María Jose Duarte`}</p>
                </Box>
            </Box>
        </>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        height: 50,
        paddingTop: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    avatar: {
        flex: 1,
        paddingLeft: 5
    },
    info: {
        flex: 9,
        flexDirection: 'column',
        paddingLeft: 10
    }
})