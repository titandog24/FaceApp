import { BookmarkOutlined, EventOutlined, ExpandLessOutlined, ExpandMoreOutlined, FlashlightOnOutlined, GamesOutlined, GroupOutlined, HelpOutline, MessageOutlined, NewspaperOutlined, PeopleOutline, RestoreOutlined, StoreOutlined } from "@mui/icons-material";

interface Props {
    title: string
}

export const Icons = ({ title }: Props) => {
    switch (title.toLocaleLowerCase()) {
        case "amigos":
            return <PeopleOutline />
        case "recuerdo":
            return <RestoreOutlined />
        case "guardado":
            return <BookmarkOutlined />
        case "grupo":
            return <GroupOutlined />
        case "store":
            return <StoreOutlined />
        case "mas":
            return <ExpandMoreOutlined />
        case "menos":
            return <ExpandLessOutlined />
        case "jugar":
            return <GamesOutlined />
        case "evento":
            return <EventOutlined />
        case "noticia":
            return <NewspaperOutlined />
        case "paginas":
            return <FlashlightOnOutlined />
        case "mensajes":
            return <MessageOutlined />
        default:
            return <HelpOutline />
    }
}