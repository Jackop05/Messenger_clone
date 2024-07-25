import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarMain from '../components/main/NavbarMain';
import SuggestedUsers from '../components/main/SuggestedUsers';
import UsersPreview from '../components/main/UsersPreview';
import FooterMain from '../components/main/FooterMain';

import Conversation from '../components/conversation/Conversation';

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
      <FooterMain handleChatsClick={props.handleChatsClick} />
    </>
  );
}

const ConversationPage = (props) => {
  return (
    <>
      <Conversation />
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Main 
            searchUser={searchUser} 
            setSearchUser={setSearchUser} 
            handleInputChange={handleInputChange} 
            handleChatsClick={handleChatsClick} 
          />} 
        />
        <Route path="/conversation/settings/:otherUsername" element={<ConversationSettings />} />
        <Route path="/conversation/:otherUsername" element={<ConversationPage />} />
        <Route path="/user/settings/:username" element={<UserSettings />} />
        <Route path="/group" />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
