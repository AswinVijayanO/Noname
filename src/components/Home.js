import React from 'react';
import Header from './Header';
import Card from './Card';


function Home() {
    return (
        <div className="App">
  <div className="topPageBG">

  <header>
    <Header />
  </header>

  <img className="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/7d96189e-4a66-48ad-bf08-e6f850f8463e/IN-en-20200302-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/7d96189e-4a66-48ad-bf08-e6f850f8463e/IN-en-20200302-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/7d96189e-4a66-48ad-bf08-e6f850f8463e/IN-en-20200302-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/7d96189e-4a66-48ad-bf08-e6f850f8463e/IN-en-20200302-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>
  <div className="title-cnter">
    <p className="unlimited">
      Unlimited movies, TV shows and more.
    </p>
    <p className="watch">
      Watch anywhere. Cancel anytime
    </p>
    <p className="watchNow"> Watch Now ></p>

  </div>

</div>
<Card dir = "" mainTitle="Enjoy on your TV." subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
" url ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
<Card dir= "columnrev" mainTitle="Download your shows to watch on the go." subtitle="Save your data and watch all your favourites offline." url ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
<Card dir = "" mainTitle="Watch everywhere." subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." url ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
<div>
<p className="endCredits">
 Noname India Pvt Limited
</p>
</div>
</div>
    );
}
export default Home;