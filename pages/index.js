import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

function GlobalStyle() {
    return (
        <style global jsx>{`
          *{
            margin: 0;
            paddin: 0;
            box-sizing: border-box;
            list-style: none;
          }
  
          body{
              font-family: 'Open Sans', sans-serif;
          }
          /* App fit height */
          html, body, #_next {
            min-height: 100vh;
            display: flex;
            flex: 1;
          }
          #_next {
            flex: 1;
          }
          #_next > * {
            flex: 1;
          }
          /*./App fit Height */
      `}</style>
    )
}


function Title(props) {
    const Tag = props.tag || 'h1'
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                    ${Tag} {
                        color: ${appConfig.theme.colors.neutrals["000"]};
                        font-size: 24px;
                        font-height: 600;
                    }
                `}
            </style>
        </>
    )
}

// Componente React
// export default function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Joguinho do Grupo </h2>
//         </div>
//     )
// }

export default function PaginaTitulo() {
    const username = 'TheKiller1998';




    return (

        <>

            <GlobalStyle />

            <Box

                styleSheet={{

                    display: 'flex', alignItems: 'center', justifyContent: 'center',

                    backgroundColor: appConfig.theme.colors.primary[500],

                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',

                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',

                }}

            >

                <Box

                    styleSheet={{

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'space-between',

                        flexDirection: {

                            xs: 'column',

                            sm: 'row',

                        },

                        width: '100%', maxWidth: '700px',

                        borderRadius: '5px', padding: '32px', margin: '16px',

                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',

                        backgroundColor: appConfig.theme.colors.neutrals[700],

                    }}

                >

                    {/* Formulário */}

                    <Box

                        as="form"

                        styleSheet={{

                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',

                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',

                        }}

                    >

                        <Title >Boas vindas de volta!</Title>


                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>

                            {appConfig.name}

                        </Text>




                        <TextField

                            fullWidth

                            textFieldColors={{

                                neutral: {

                                    textColor: appConfig.theme.colors.neutrals[200],

                                    mainColor: appConfig.theme.colors.neutrals[900],

                                    mainColorHighlight: appConfig.theme.colors.primary[500],

                                    backgroundColor: appConfig.theme.colors.neutrals[800],

                                },

                            }}

                        />

                        <Button

                            type='submit'

                            label='Entrar'

                            fullWidth

                            buttonColors={{

                                contrastColor: appConfig.theme.colors.neutrals["000"],

                                mainColor: appConfig.theme.colors.primary[500],

                                mainColorLight: appConfig.theme.colors.primary[400],

                                mainColorStrong: appConfig.theme.colors.primary[600],

                            }}

                        />

                    </Box>

                    {/* Formulário */}







                    {/* Photo Area */}

                    <Box

                        styleSheet={{

                            display: 'flex',

                            flexDirection: 'column',

                            alignItems: 'center',

                            maxWidth: '200px',

                            padding: '16px',

                            backgroundColor: appConfig.theme.colors.neutrals[800],

                            border: '1px solid',

                            borderColor: appConfig.theme.colors.neutrals[999],

                            borderRadius: '10px',

                            flex: 1,

                            minHeight: '240px',

                        }}

                    >

                        <Image

                            styleSheet={{

                                borderRadius: '50%',

                                marginBottom: '16px',

                            }}

                            src={`https://github.com/${username}.png`}

                        />

                        <Text

                            variant="body4"

                            styleSheet={{

                                color: appConfig.theme.colors.neutrals[200],

                                backgroundColor: appConfig.theme.colors.neutrals[900],

                                padding: '3px 10px',

                                borderRadius: '1000px'

                            }}

                        >

                            {username}

                        </Text>

                    </Box>

                    {/* Photo Area */}

                </Box>

            </Box>

        </>

    );

}

