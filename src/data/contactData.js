const userData = {
    id: 0, // ID único para el dueño
    name: 'Eze',
    avatar: 'https://content.imageresizer.com/images/memes/Happy-Monkey-NOW-meme-6.jpg',
};
const contacts = [
    {
        id: 1,
        name: 'Leo',
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
        messages: [
            {
                id: 1,
                text: 'Hola salen esos mates eze?',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 0,
                text: 'Emm dejame que lo pienso, ando medio ocupado haciendo un proyecto final de la utn',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },

        ]
    },
    {
        id: 2,
        name: 'CR7',
        last_time_connection: 'Hace 5 horas',
        profile_picture: 'https://editorial.uefa.com/resources/027f-17a3eb7de39a-460b563d750c-1000/manchester_united_v_chelsea_-_uefa_champions_league_final.jpeg',
        messages: [
            {
                id: 0,
                text: 'Are you better than Messi?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Siuuuuuuuuuu',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 0,
                text: 'Mmmm no, messi es mucho mejor q vos',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: false
            },
        ]
    },
    {
        id: 3,
        name: 'Leo Paredes',
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://media.urgente24.com/p/beb542b2662ee3b08667bd892e04b755/adjuntos/319/imagenes/003/285/0003285168/800x0/smart/leandro-paredes-revelo-cual-fue-el-factor-clave-regresar-boca.jpg',
        messages: [
            {
                id: 3,
                text: 'Hola eze creo que este sabado no voy a poder jugar contra gimnasia de mendoza',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 0,
                text: 'Tranka amigo, recuperate bien asi jugas el proximo partido a full',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts