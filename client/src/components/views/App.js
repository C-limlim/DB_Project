import React from "react";
import { Route, Switch } from "react-router-dom";
import { ChatRoomPage } from "./ChatRoomPage/ChatRoomPage";
import { LandingPage } from "./LandingPage/LandingPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { ChatList } from "./ChatList/ChatList";
import { NearbyPeople } from "./NearbyPeople/NearbyPeople";
import { FriendSearchPage } from "./FriendSearchPage/FriendSearch";
import { FriendListPage } from "./FriendListPage/FriendList";
import { EditPage } from "./EditPage/EditPage";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/chatroom" component={ChatRoomPage} />
        <Route exact path="/friendsearch" component={FriendSearchPage} />
        <Route exact path="/friendlist" component={FriendListPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/chatlist" component={ChatList} />
        <Route exact path="/nearby/people" component={NearbyPeople} />
        <Route exact path="/edit" component={EditPage} />
      </Switch>
    </div>
  );
};
