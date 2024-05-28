import { Box, Card, CardMedia } from "@mui/material"
import { makeStyles } from "@mui/styles"

interface Props {
    name: string,
    photo: string
}

export const CardItem = ({ name, photo }: Props) => {
    const classes = useStyles();
    return (
        <Card style={{height: 200, marginRight: 10}}>
            <CardMedia
                component="img"
                height="200"
                width={200}
                image={photo}
                alt="Background Image"
            />
            <Box>
                <span className={classes.title}>{name}</span>
            </Box>
        </Card>
    )
}


const useStyles = makeStyles({
    title: {
        position: 'relative',
        bottom: 20,
        left: 5,
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: '0.715rem',
        fontWeight: 'bold'
    }
})
