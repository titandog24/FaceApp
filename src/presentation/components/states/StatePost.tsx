import { Avatar, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { CustomDivider } from "../util/CustomDivider";
import { Icons } from "../util/Icons";

const useStyles = makeStyles({
    container: {
        marginTop: 15,
        backgroundColor: '#242526',
        padding: 10,
        borderRadius: 5
    },
    topCard: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    bodyCardContainer: {
        flex: 9,
        color: '#aaa6a6',
        alignSelf: 'center',
        borderRadius: 5,
        cursor: 'pointer',
    },
    bodyCard: {
        flex: 3,
        flexDirection: 'row',
        textAlign: 'center',

    }
})



export const StatePost = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <HeaderCard />
            <CustomDivider orientation="center" width="95%" mbottom={1} />
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <BodyCard iconName="cumpleanos" title="Birthdays" />
                <BodyCard iconName="jugar" title="Game Store" />
                <BodyCard iconName="store" title="Marketplace" />
            </Box>
        </Box>
    )
}

const HeaderCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.topCard}>
            <Box sx={{ flex: 1 }}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }}
                    sx={{ '&:hover': { backgroundColor: '#a2a8af' } }} />
            </Box>
            <Box className={classes.bodyCardContainer}
                sx={{bgcolor: '#3a3b3c', padding: 1, '&:hover': { backgroundColor: '#545658' } }}>
                <p style={{ fontFamily: 'sans-serif', fontSize: 16 }}>{`¿Qué estás pensando, $ ?`}</p>
            </Box>
        </div>
    )
}

interface bodyProps {
    iconName: string,
    title: string
}

const BodyCard = ({ iconName, title }: bodyProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.bodyCard} sx={{ padding: 1, borderRadius: 1, '&:hover': { bgcolor: '#545658' } }}>
            <Icons title={iconName} />
            <p style={{ color: 'white', fontFamily: 'sans-serif', fontSize: 14 }}>{title}</p>
        </Box>
    )
}

