import { Avatar, Box } from "@mui/material"
import { makeStyles } from "@mui/styles";

interface Props {
    name: string,
    photo: string
}

export const ContactItem = ({ name, photo }: Props) => {
    const classes = useStyles();
    return (
        <Box className={classes.container} sx={{'&:hover': {backgroundColor: '#464749'}}}>
            <Avatar
                alt={name}
                src={photo}
                style={{ marginRight: 15, cursor: 'pointer' }}
                sx={{ '&:hover': { backgroundColor: '#a2a8af' } }}>

            </Avatar>
            <Box className={classes.boxName}>
                <p className={classes.nameUser}>{name}</p>
            </Box>
        </Box>
    )
}


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        marginBottom: 10,
        borderRadius: 5,
        cursor: 'pointer',
        width: '50%'
    },
    boxName: {
        paddingTop: 10
    },
    nameUser: {
        color: 'white',
        fontFamily: "sans-serif",
        fontSize: '0.875rem'
    }
});