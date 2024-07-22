import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarMain from '../components/main/NavbarMain';
import SuggestedUsers from '../components/main/SuggestedUsers';
import UsersPreview from '../components/main/UsersPreview';
import FooterMain from '../components/main/FooterMain';

import ProfileConversation from '../components/conversation/ProfileConversation';
import Conversation from '../components/conversation/Conversation';
import Taskboard from '../components/conversation/Taskboard';

import ProfileSettings from '../components/settings/ProfileSettings';
import UserSettings from '../components/settings/UserSettings';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

import CreateGroup from '../components/createChat/CreateGroup';



const Main = (props) => {

  return (
    <>
      <NavbarMain searchUser={props.searchUser} setSearchUser={props.setSearchUser} handleInputChange={props.handleInputChange} />
      <SuggestedUsers searchUser={props.searchUser} />
      <UsersPreview searchUser={props.searchUser} />
      <FooterMain handleChatsClick={props.handleChatsClick} handleNewUsersClick={props.handleNewUsersClick} />
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
  const [searchUser, setSearchUser] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault;
    setSearchUser(e.target.value);
  }

  const handleChatsClick = () => {
    setSearchUser('');
  }

  const handleNewUsersClick = () => {
    if(searchUser === '') {
      setSearchUser('Jakub');
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Main 
            searchUser={searchUser} 
            setSearchUser={setSearchUser} 
            handleInputChange={handleInputChange} 
            handleChatsClick={handleChatsClick} 
            handleNewUsersClick={handleNewUsersClick} 
          />} 
        />
        <Route path="/conversation/settings/:id" element={<ConversationSettings />} />
        <Route path="/conversation/:otherUsername" element={<ConversationPage />} />
        <Route path="/user/settings/:id" element={<UserSettings />} />
        <Route path="/create-group/:id" element={<CreateGroup />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
