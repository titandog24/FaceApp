import { BookmarkOutlined, CakeOutlined, CloseOutlined, CommentOutlined, EventOutlined, ExpandLessOutlined, ExpandMoreOutlined, FavoriteBorderOutlined, FlashlightOnOutlined, GamesOutlined, GroupOutlined, HelpOutline, LinearScaleOutlined, MessageOutlined, NewspaperOutlined, PeopleOutline, RestoreOutlined, ShareOutlined, StoreOutlined } from "@mui/icons-material";

interface Props {
    title: string,
    color?: string
}

export const Icons = ({ title, color = '#1976d2' }: Props) => {
    switch (title.toLocaleLowerCase()) {
        case "amigos":
            return <PeopleOutline sx={{ color: color }} />
        case "recuerdo":
            return <RestoreOutlined sx={{ color: color }} />
        case "guardado":
            return <BookmarkOutlined sx={{ color: color }} />
        case "grupo":
            return <GroupOutlined sx={{ color: color }} />
        case "store":
            return <StoreOutlined sx={{ color: color }} />
        case "mas":
            return <ExpandMoreOutlined sx={{ color: color }} />
        case "menos":
            return <ExpandLessOutlined sx={{ color: color }} />
        case "jugar":
            return <GamesOutlined sx={{ color: color }} />
        case "evento":
            return <EventOutlined sx={{ color: color }} />
        case "noticia":
            return <NewspaperOutlined sx={{ color: color }} />
        case "paginas":
            return <FlashlightOnOutlined sx={{ color: color }} />
        case "mensajes":
            return <MessageOutlined sx={{ color: color }} />
        case "cumpleanos":
            return <CakeOutlined sx={{ color: color }} />
        case "menupost":
            return <LinearScaleOutlined sx={{ color: color }} />
        case "close":
            return <CloseOutlined sx={{ color: color }} />
        case "favoritos":
            return <FavoriteBorderOutlined sx={{ color: color }} />
        case "comentarios":
            return <CommentOutlined sx={{ color: color }} />
        case "compartir":
            return <ShareOutlined sx={{ color: color }} />
        default:
            return <HelpOutline sx={{ color: color }} />
    }
}