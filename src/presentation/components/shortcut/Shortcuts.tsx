
import { Avatar, Box, Divider } from "@mui/material"
import { Icons } from "../util/Icons"
import { CustomButton } from "../util/CustomButton"
import { useState } from "react"

interface arrayExample {
  icon: string,
  title: string
}

const shorcutsData = (): arrayExample[] => {
  return [
    {
      "icon": 'amigos',
      "title": 'Amigos'
    },
    {
      "icon": 'recuerdo',
      "title": 'Recuerdos'
    },
    {
      "icon": 'guardado',
      "title": 'Guardado'
    },
    {
      "icon": 'grupo',
      "title": 'Grupos'
    },
    {
      "icon": 'store',
      "title": 'Marketplace'
    },
    {
      "icon": 'jugar',
      "title": 'Jugar'
    },
    {
      "icon": 'evento',
      "title": 'Eventos'
    },
    {
      "icon": 'noticia',
      "title": 'Noticias'
    },
    {
      "icon": 'paginas',
      "title": 'Páginas'
    },
    {
      "icon": 'mensajes',
      "title": 'Messenger'
    }
  ]
}

export const Shortcuts = () => {

  const [expand, setExpand] = useState(false)

  const arrayWithFiveElement = expand ? shorcutsData() : shorcutsData().slice(0, 5);

  const changeExpand = () => {
    setExpand(!expand)
  }

  return (
    <Box sx={{ flex: 1 }}>
      {
        arrayWithFiveElement.map((value, index) => (
          <Box key={index}>
            <CustomButton text={value.title}><Icons title={value.icon} /></CustomButton>
          </Box>
        ))
      }
      <Box>
        <CustomButton text={expand ? 'ver menos' : 'ver más'} isEvent={true} changeExpand={changeExpand}>
        <Avatar 
            sx={{ bgcolor: '#3a3b3c', width: 24, height: 24}}>
            <Icons title={expand ? 'menos' : 'mas'} />
        </Avatar>
        </CustomButton>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Divider orientation="horizontal"  style={{ display: 'flex', backgroundColor: '#6d6464', width: '50%' }} />
      </Box>
    </Box>
  )
}
