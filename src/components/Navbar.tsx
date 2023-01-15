import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";
import {LienTypes} from "../App";

interface AppBarProps {
    title : string;
    links: LienTypes[];

    closeIcon: React.ReactNode | JSX.Element;
}

/**
 *  Exemple de react Node ou JSX.Element
 *
 *  <div>
 *      <p>Conténu an'ny paragraphe</p>
 *      <p>Conténu an'ny paragraphe</p>
 *  </div>
 *  Exemple de react Node
 *  <Navbar/>
 */

/**
 *UseContext
 *  Misy zavatra ray tadiavina vao lancée le app: Ohatra theme
 */



export default function CustomNavbar({title, links, closeIcon}: AppBarProps) {
    return (
        <AppBar>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography>
                    {title}
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem"
                }}>
                    {links.map((link, key) => (
                        <Typography key = {key}>
                            {link.name}
                        </Typography>
                    ))}
                </div>
                <div>
                    {closeIcon}
                </div>
            </Toolbar>
        </AppBar>
    )
}

