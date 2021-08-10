import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const projectID = 'e8eeee6a-3cd9-4e27-99bc-236523a8cb13';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="e8eeee6a-3cd9-4e27-99bc-236523a8cb13"
      userName="ashish"
      userSecret="123123123"
      renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}
export default App;