import React, { useCallback, useState } from 'react'

// material UI components
import { TextField, Container, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Lobby() {

    const [email, setEmail] = useState(" ");
    const [room, setRoom] = useState(" ");

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        console.log({ email, room });
    })

    return (
        <Container >
            <h1>Lobby</h1>

            <Container>
                <Stack spacing={{ xs: 1, sm: 2 }} flexWrap="wrap">
                    <TextField id="email" label="Email ID" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="room" label="Room Code" variant="filled" value={room} onChange={(e) => setRoom(e.target.value)} />
                    <Button type='submit' variant="outlined" onClick={handleSubmit} endIcon={<SendIcon />}>
                        Let's Gooooo...
                    </Button>
                </Stack>
            </Container>
        </Container>
    )
}

export default Lobby
