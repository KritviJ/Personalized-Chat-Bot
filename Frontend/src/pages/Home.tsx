import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import TypingAnim from '../components/typer/TypingAnim';
import Footer from '../components/footer/Footer';;

const Home = () => {
    const theme = useTheme();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box width={"100%"} height={"100%"}>
            <Box
                sx={{
                    display: 'flex',
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    mx: "auto",
                    mt: 3,
                }}
            >
                <Box>
                    <TypingAnim />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        gap: 5,
                        my: 10,
                    }}
                >
                    <img
                        className="image-inverted"
                        src="robot.png" alt='robot' style={{
                            width: "100px", margin: "auto"
                        }} />
                    <img
                        className="image-inverted rotate"
                        src="logo.png" alt='logo' style={{
                            width: "200px", margin: "auto"
                        }} />
                </Box>
                <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
                    <img
                        src="chat.png" alt='chat'
                        style={{
                            display: "flex",
                            margin: "auto",
                            height: "400px",
                            //width: "60%",
                            borderRadius: 20,
                            boxShadow: "-5px -5px 105px #64f3d5",
                            marginTop: 20,
                            marginBottom: 30,
                        }}
                    />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Home