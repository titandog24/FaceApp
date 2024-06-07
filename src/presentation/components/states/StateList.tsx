import { Avatar, Button, CardMedia, Link } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Icons } from "../util/Icons";
import { CustomDivider } from "../util/CustomDivider";
import '../../../assets/css/styleGlobal.css'

const useStyles = makeStyles({
    container: {
        backgroundColor: '#242526',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        fontFamily: 'sans-serif'
    },
    container_item: {
        display: 'flex',
        flexDirection: 'column',
        height: 600,
    },
    header: {
        width: '100%',
        flex: 1
    },
    header_text: {
        flex: 0.5,
        width: '100%',
        color: 'white',
        fontSize: 15
    },
    body_image: {
        flex: 6.5,
        width: '100%',
        height: '445px'
    },
    footer: {
        flex: 1,
        width: '100%'
    },
    header_avatar: {
        flex: 1,
    },
    header_text_avatar: {
        flex: 8,
    },
    header_avatar_action: {
        flex: 2
    },
})

export const StateList = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.container_item}>
                <div className={classes.header} style={{ paddingTop: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className={classes.header_avatar}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }}
                                sx={{ '&:hover': { backgroundColor: '#a2a8af' } }} />
                        </div>
                        <div className={classes.header_text_avatar} style={{ paddingLeft: 5 }}>
                            <p style={{ fontWeight: 'bold', color: 'white', fontSize: 14, marginBottom: 3 }}>Christopher Coronado</p>
                            <p style={{ color: 'gray', fontSize: 13 }}>1h</p>
                        </div>
                        <div className={classes.header_avatar_action}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Button style={{ flex: 1 }}><Icons title="menuPost" color="#a6a9ad" /></Button>
                                <Button style={{ flex: 1 }}><Icons title="close" color="#a6a9ad" /></Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.header_text} style={{ paddingLeft: 10, paddingTop: 5 }}>
                        <p>Vinci Vini Jr</p>
                    </div>
                </div>
                <div className={classes.body_image} >
                    <CardMedia
                        component="img"
                        style={{ height: '100%' }}
                        image={"https://pbs.twimg.com/media/GMccRY8XIAAkS8T?format=jpg&name=large"}
                        alt="Background Image"
                    />
                </div>
                <div className={classes.footer}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 10, paddingRight: 10 }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                                <div style={{ flex: 1 }}>
                                    <p>😊</p>
                                </div>
                                <div style={{ flex: 1, textAlign: "right" }}>
                                    <Link href="#" variant="body2" color="#8d8f92" style={{ marginRight: 10 }} underline="hover">
                                        {'10 comentarios'}
                                    </Link>
                                    <Link href="#" variant="body2" color="#8d8f92" underline="hover">
                                        {'17 veces compartido'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <CustomDivider orientation="center" width="100%" mbottom={0} />
                        </div>
                        <div style={{ flex: 0.5 }}>
                            <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', marginTop: 5}}>
                                <ButtonFooterCustom color="#8d8f92" icon="favoritos" title="Me gusta" />
                                <ButtonFooterCustom color="#8d8f92" icon="comentarios" title="Comentar" />
                                <ButtonFooterCustom color="#8d8f92" icon="compartir" title="Compartir" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface PropsCustom {
    flex?: number,
    color: string,
    icon: string,
    title: string,
}

const ButtonFooterCustom = ({flex = 1, color, icon, title}:PropsCustom) => {

    return (
        <div className="divWithHover" style={{flex: flex, color: '#8d8f92', paddingTop:5, paddingBottom: 6}} >
            <Link href="#" variant="body2" color="#8d8f92" underline="hover">
                <Icons title={icon} color={color} /> {title}
            </Link>
        </div>
    )
}