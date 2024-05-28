import { Avatar, Box, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const RequestEvent = () => {

    const classes = useStyles();

    return (
        <>
            <div style={{marginBottom: 10}}>
                <h4 style={{ color: '#9da0a3', fontFamily: 'sans-serif' }}>Solicitud de amistad</h4>
            </div>
            <Box className={classes.container} sx={{'&:hover':{backgroundColor: '#2a2b2c'}}}>
                <Box className={classes.avatar}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                        style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }} />
                </Box>
                <Box className={classes.info}>
                    <div style={{ position: 'relative', marginBottom: 1 }}>
                        <p style={{ color: 'white', marginBottom: 1 }}>María Jose Duarte</p>
                        <p style={{ color: 'white' }}>6 amigos en comun</p>
                        <p style={{ color: 'white', position: 'absolute', top: 0, right: 10 }}>5h</p>
                    </div>
                    <Box sx={{ marginTop: 1 }}>
                        <Button variant="contained" color="primary" sx={{ width: '45%', marginRight: '2%' }}>Confirmar</Button>
                        <Button variant="contained" color="inherit" sx={{ width: '45%', marginLeft: '2%' }}>Eliminar</Button>
                    </Box>
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
        height: 100,
        paddingTop: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    avatar: {
        flex: 1,
    },
    info: {
        flex: 9,
        flexDirection: 'column',
        paddingLeft: 10
    }
})