'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import big_red from "@/public/assets/images/big_red.png";
import cornell from "@/public/assets/images/cornell.png";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const nav = () => {
    const isUserLoggedIn = true;
    
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        //setProviders();
    }, [])
    return (
        
        /**<div className="flex flex-col w-full ">
            <Link href={"/about"} className="responsive-navlink">
                About
            </Link>
        </div>**/
        
        <nav className="flex-between w-full mb-16 pt-3">
            <div className = "flex gap-4 md:gap-6"> 
                <Link href="/" className="flex gap-2 flex-center">
                    <Image 
                        src= {cornell}
                        alt = "big_red_hacks logo"
                        width = {30}
                        height = {30}
                        className="object-contain"
                    />
                    <p className="logo_text"> Cornell Flights </p>
                </Link>
                <Link href={"/about"} className = "flex gap-4 flex-center">
                    <p className= "nav_text"> about us</p>
                </Link>
                <Link href={"/contact"} className = "flex gap-4 flex-center">
                    <p className= "nav_text"> contact us</p>
                </Link>
            </div>
        
            {/* Desktop navigation */}
            <div className = "sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className = "flex gap-3 md:gap-5">
                       {/*} <Link href="/create-prompt"
                        className="black_btn">
                            Create Post
                        </Link> */}
                        <button type="button" onClick={signOut}
                        className = "outline_btn">
                            Sign Out
                        </button>

                       {/*} <Link href="/profile">
                            <Image 
                                src = {big_red}
                                width = {37}
                                height = {37}
                                className = "rounded-full"
                                alt = "profile"
                            />
                        </Link> */}
                    </div>
                ): (
                    <> 
                        {providers && Object.values(providers).map((provider) => (
                        <button
                            type = "button"
                            key = {provider.name}
                            onClick = {() => signIn(provider.id)}
                            className = 'black_btn'
                            >
                                Sign In
                        </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile navigation */}
            <div className= "sm: hidden flex relative">
                {isUserLoggedIn ? (
                    <div className = "flex">
                        <Image
                            src = "/assets/images/big_red.png"
                            width = {37}
                            height = {37}
                            className = "rounded-full"
                            alt = "profile"
                        />
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                        <button
                            type = "button"
                            key = {provider.name}
                            onClick = {() => signIn(provider.id)}
                            className = 'black_btn'
                            >
                                Sign In
                        </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default nav