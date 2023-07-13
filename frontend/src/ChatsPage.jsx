import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style ={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='02634d22-7b54-4fb3-b191-702d2f42bfaa'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
            />
        </div>
        )
}

export default ChatsPage