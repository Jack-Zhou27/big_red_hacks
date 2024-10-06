import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

import React from 'react'

export const metadata = {
    title: "big_red_hacks",
    description: "first app!"
}

const RootLayout = ({children}) => {
  return (
    <html lang = 'en'>
        <body>
            <div className = "main">
                <div className = "gradient" />
            </div>

            <main className = "app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default RootLayout;