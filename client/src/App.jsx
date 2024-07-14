import NavbarMain from '../components/main/NavbarMain';
import SuggestedUsers from '../components/main/SuggestedUsers';
import UsersPreview from '../components/main/UsersPreview';
import FooterMain from '../components/main/FooterMain';

import ProfileConversation from '../components/conversation/ProfileConversation';
import Conversation from '../components/conversation/Conversation';
import Taskboard from '../components/conversation/Taskboard';


function App() {
  
  return (
    <>
      {/*
      <NavbarMain />
      <SuggestedUsers />
      <UsersPreview />
      <FooterMain />
      */}

      <ProfileConversation />
      <Conversation />
      <Taskboard />
    </>
  )
}

export default App
