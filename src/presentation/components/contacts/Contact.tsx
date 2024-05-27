import { Box } from "@mui/material"
import { ContactItem } from "./ContactItem"

interface contact {
    name:string,
    photo: string
}

const contactData = (): contact[] => {
    return [
        {
            name: 'Andrea Rodriguez',
            photo: 'http://localhost/facebook/1.jpg'
        },
        {
            name: 'Zenia Camacho Camacho',
            photo: 'http://localhost/facebook/2.jpg'
        },
        {
            name: 'Karol Morales Duarte ',
            photo: 'http://localhost/facebook/3.jpg'
        },
        {
            name: 'Williams Garcia',
            photo: 'http://localhost/facebook/4.jpg'
        },
        {
            name: 'Yir Martinez Briceño',
            photo: 'http://localhost/facebook/5.jpg'
        },
        {
            name: 'Yud Rodriguez',
            photo: 'http://localhost/facebook/6.jpg'
        },
        {
            name: 'Fabricio Duarte Araya',
            photo: 'http://localhost/facebook/7.jpg'
        },
        {
            name: 'Stephanie Amador',
            photo: 'http://localhost/facebook/8.jpg'
        },
        {
            name: 'Alexander Rosales',
            photo: 'http://localhost/facebook/9.jpg'
        },
        {
            name: 'Wendy Angulo García',
            photo: 'http://localhost/facebook/10.jpg'
        }
    ]
}

export const Contact = () => {
  return (
    <Box>
        {
            contactData().map((value, index) => (
                <ContactItem name={value.name} photo={value.photo} key={index} />
            ))
        }
    </Box>
  )
}
