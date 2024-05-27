import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { PropsWithChildren } from 'react';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row', // Cambia 'row' a 'column' para poner el texto debajo del icono
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        textTransform: 'none',  // Evita que el texto se transforme a mayúsculas
        padding: '10px',
    },
    title: {
        flex: 9,
        paddingLeft:5,
        color: 'white',
        textTransform: 'capitalize'
    },
    icon: {
        flex: 1,
    },
});

interface Props extends PropsWithChildren {
    text: string,
    isEvent?: boolean,
    changeExpand?: () => void
}

export const CustomButton = ({ children, text, isEvent = false, changeExpand }: Props) => {
    const classes = useStyles();

    const eventClickHandler = () => {
        if (isEvent && changeExpand != undefined) {
            changeExpand()
        }
    }
    
    return (
        <Button 
            style={{ 
                width: '50%', 
                padding: 10,
            }}
            sx={{'&:hover': {backgroundColor: '#464749'}}}
            classes={{ root: classes.root }}
            onClick={eventClickHandler}>
            <div className={classes.icon}>{children}</div>
            <div className={classes.title}>{text}</div>
        </Button>
    );
};