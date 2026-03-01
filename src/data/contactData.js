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
        profile_picture: 'https://www.mundodeportivo.com/files/article_main_microformat/files/fp/uploads/2022/04/23/6263b76dc02f4.r_d.1257-1250-4367.jpeg',
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
                id: 2,
                text: 'Siuuuuuuuuuu',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            }
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
    },
    {
        id: 4,
        name: 'Homero',
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://media.gq.com.mx/photos/5be9eeb284b96e68a794165c/master/pass/11_cosas_que_le_preguntariamos_a_homero_simpson_2494.jpg',
        messages: [
            {
                id: 4,
                text: 'Douuuuuu',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 5,
        name: 'Ney',
        last_time_connection: 'Hace 2 hora',
        profile_picture: 'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2017%2F10%2F23103643%2FNeymar-sonriendo-1920.jpg?auth=61b92db4c570869dc6da0a8b6e4d444778bf14faaa28bba2c7daf961cc289f81&smart=true&width=1200&height=900&quality=85',
        messages: [
            {
                id: 0,
                text: 'Q onda ney tudo bem?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'tudo bem mano, y voce?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Chuerk',
        last_time_connection: 'Hace 3 hora',
        profile_picture: 'https://medias.lesindesradios.fr/t:app(web)/t:r(unknown)/fit-in/1100x2000/filters:format(webp)/radios/urbanhit/importrk/news/original/58e63a2b5c2ba3.26161477.jpg',
        messages: [
            {
                id: 6,
                text: 'Eze cuando volves al pantano?',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 0,
                text: 'Nose chuerk, cuando me haga un tiempo voy d1',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        name: 'Juli Alvarez',
        last_time_connection: 'Hace 7 hora',
        profile_picture: 'https://resizer.glanacion.com/resizer/v2/julian-alvarez-se-sumo-a-la-movida-de-spidermans-DTLK5SF3IRH3FJ236QE6FG55JI.jpg?auth=85453d3d322bf2b26cca547cc48ab28c38fa8f0ff44c29e530697fd893b5fe35&width=768&quality=70&smart=false',
        messages: [
            {
                id: 0,
                text: 'Hola juli q golazo q metiste hoy contra el real oviedo',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 7,
                text: 'Si amigo, ni yo se como lo meti jaajajas',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts