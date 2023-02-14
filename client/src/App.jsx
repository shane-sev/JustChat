import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import react components straight from directory
import { ChannelListContainer, ChannelContainer } from "./components";

// import style sheet
import './App.css';

const apiKey = 'fa6bmw9eewpb';

const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer

                />

                <ChannelContainer

                />
            </Chat>
        </div>
    );
}

export default App;