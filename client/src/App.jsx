import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarMain from '../components/main/NavbarMain';
import SuggestedUsers from '../components/main/SuggestedUsers';
import UsersPreview from '../components/main/UsersPreview';
import FooterMain from '../components/main/FooterMain';

import ProfileConversation from '../components/conversation/ProfileConversation';
import Conversation from '../components/conversation/Conversation';
import Taskboard from '../components/conversation/Taskboard';

import ProfileSettings from '../components/settings/ProfileSettings';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const Main = () => {
  return (
    <>
      <NavbarMain />
      <SuggestedUsers />
      <UsersPreview />
      <FooterMain />
    </>
  );
}

const ConversationPage = () => {
  return (
    <>
      <Conversation />
      <ProfileConversation /> 
      <Taskboard />
    </>
  )
}

const ConversationSettings = () => {
  return (
    <>
      <ProfileSettings />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/user/settings/:id" element={<ConversationSettings />} />
        <Route path="/conversation/:id" element={<ConversationPage />} />
        <Route path="/conversation/settings/:id" element={<ConversationSettings />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
