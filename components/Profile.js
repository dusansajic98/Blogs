'use client'

import React from "react";
import { useSession } from "next-auth/react";

const ProfileComponent = () => {

    const {data:session} = useSession()

    return(
        <div>
            <h1 style={{fontSize:'30px'}}>Welcome <b>{session?.user ? session?.user.name : 'Guest'}</b></h1>
            {session?.user ? 'These are your blogs.' : 'Sign In to see your blogs!'}
        </div>
    )
}
export default ProfileComponent