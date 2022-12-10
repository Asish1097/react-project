import React, { useState } from 'react'
import './App.css';
import styles from './Home.module.scss';
import MainLogo from './images/postablur_logo.png'
import AppStore from './images/app_store.png'
import PostaBlur from './images/postablur.png'
import FacebookIcon from './images/icons/facebook_icon.png'
import YoutubeIcon from './images/icons/youtube_icon.png'
import TwitterIcon from './images/icons/twitter_icon.png'
import InstaIcon from './images/icons/instagram_icon.png'
import SnapchatIcon from './images/icons/snapchat_icon.png'
import TopMobile from './images/mobile_frame/top-mobile.png'
import MobOne from './images/mobile_frame/top1.png'
import MobTwo from './images/mobile_frame/top2.png'
import MobThree from './images/mobile_frame/top3.png'
import MobFour from './images/mobile_frame/top4.png'
import MobFive from './images/mobile_frame/top5.png'
import PostablurLogo from './images/banner_logo.png'

import Routes from "./routes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [toggle, setToggle] = useState(false)
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
}

export default App;
