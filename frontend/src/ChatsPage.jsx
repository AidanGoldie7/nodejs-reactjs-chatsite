//MultiChatSocket allows users to have access to all of their chats they have
//MultiChatWindow allows users to see new messages type messages etc 
//MultiChatLogic is all the state management and api calls that makes the chat app work
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '02634d22-7b54-4fb3-b191-702d2f42bfaa', 
        props.user.username, 
        props.user.secret
        );

        
    return (
        <div style ={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
        )
}

export default ChatsPage