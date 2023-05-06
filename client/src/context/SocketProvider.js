import React, { createContext, useContext, useMemo } from 'react'
import { io } from "socket.io-client"

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

function SocketProvider(prop) {

    const socket = useMemo(() => io('localhost:8000'), [])

    return (
        <SocketContext.Provider vlaue={socket}>
            {prop.children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
