import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

const SocketProvider = (props) => {
    const socket = useMemo(() => io(`localhost:8000`), []);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;