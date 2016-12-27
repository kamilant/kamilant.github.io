let IMG = "public/img/"
let Nav = React.createClass({
  render: () => {
    return (
      <div className="Nav">
        <div className="Nav--logo"><img src={`${IMG}/logo1.png`} alt="With All Your Strength logo" /></div>
        <div className="Nav--list">
          <ul>
            <a href="#About"><li>About</li></a>
            <a href="#Gigs"><li>Gigs</li></a>
            <a href="#Members"><li>Members</li></a>
            <a href="#Footer"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    )
  }
});

let EpBar = React.createClass({
  render: () => {
    return (
      <div className="Ep">
        <div className="Ep--music">
          <ul>
            <a href='https://itunes.apple.com/lk/artist/with-all-your-strength/id903405936' target="_blank" ref='noopener noreferrer'>
            <li><img src={`${IMG}/itunes.png`} /></li></a>
            <a href='https://play.spotify.com/artist/3RqHFopC3q4b1aGHG2biZd?play=true&utm_source=open.spotify.com&utm_medium=open' target="_blank" ref='noopener noreferrer'>
            <li><img src={`${IMG}/spotify1.png`} /></li></a>
            <a href='https://www.youtube.com/user/BandWAYS' target="_blank" ref='noopener noreferrer'>
            <li><img src={`${IMG}/yout.png`} /></li></a>
          </ul>
        </div>
        <div className="Ep--name"><h1>Morning Light - EP</h1></div>
      </div>
    )
  }
});

let EpBadge = React.createClass({
  render: () => {
    return (
      <div className="Badge">

        <div className="Badge--wrapper">

          <div className="Badge--cover">
            <img src={`${IMG}/ep.jpg`} />
            <a href="http://withallyourstrength.bigcartel.com/" ref="noopener noreferrer">
              <button className="Badge--button">BUY NOW</button>
            </a>
          </div>

          <div className="Badge--songs">
            <ul>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=bhfa0Hs574Y&index=1&list=PL2DJfL8ohhKWb2YFT06vhp2aUboS5kakN" ref="noopener noreferrer">Intro</a></div></li>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=YLUlXByn25Q" ref="noopener noreferrer">Morning Light</a></div></li>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=Ep_rxcRKCgg" ref="noopener noreferrer">Way</a></div></li>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=M-gZhdBDQco&index=4&list=PL2DJfL8ohhKWb2YFT06vhp2aUboS5kakN" ref="noopener noreferrer">Pride</a></div></li>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=2nOHqjCuYUs" ref="noopener noreferrer">Neverending</a></div></li>
              <li><div className="animate"><a href="https://www.youtube.com/watch?v=0ZjFEYi5j5M" ref="noopener noreferrer">Don't waste your time</a></div></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
});

let OurStory = React.createClass({
  render: () => {
    return (
      <div className="Story" id="About">
        <h1>Our Story</h1>
        <div className="Story--content">
          <div className="Story--column">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            . Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
          </div>
          <div className="Story--column">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            . Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <div className="Story--column">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            . Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
          </div>
      </div>
      </div>
    )
  }
});
let Promo = React.createClass({
  render: () => {
    return (
     <div className="Promo">
       <Nav></Nav>
       <EpBar></EpBar>
       <EpBadge></EpBadge>
     </div>
  )}
});

let Members = React.createClass({
  render: () => {
    return (
      <div className="Members" id="Members">
        <div className="Members--leftrect">
          <h1>Members</h1>
          <div className="Member Member--vocal">
            <a href="https://www.facebook.com/maciej.rogowski.7?fref=nf"><div className="Member--photo"></div></a>
          <span>  Maciej Rogowski</span>
          </div>

          <div className="Member--guitar">
            <div className="Member Member--guitar_kamil">
              <a href="https://www.facebook.com/kamil.antropik?fref=ts"><div className="Member--photo"></div></a>
          <span>    Kamil Antropik</span>
            </div>
            <div className="Member Member--guitar_andrzej">
              <a href="https://www.facebook.com/andrzej.kossuth?fref=ufi"><div className="Member--photo"></div></a>
              <span>Andrzej Kossuth</span>
            </div>
          </div>

          <div className="Member--rythm">
            <div className="Member Member--rythm_adrian">
              <a href="https://www.facebook.com/admijarocki?fref=ts"><div className="Member--photo"></div></a>
            <span>  Adrian Jarocki</span>
            </div>
            <div className="Member Member--rythm_mateusz">
              <a href="https://www.facebook.com/M.Sredzinski?fref=ts"><div className="Member--photo"></div></a>
              <span>Mateusz Średziński</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

let Gig = (props) => {
    return (
      <div className="Gig">
        <div className="Gig--date">{props.date}</div>
        <div className="Gig--city">{props.city}</div>
      </div>
    )
}

let Gigs = React.createClass({
  render: () => {
    return (
        <div className="Gigs" id="Gigs">
          <div className="Gigs--header">
            <h1>COME AND SEE US LIVE!</h1>
            <div className="Gigs--header_rect"></div>
          </div>
          <div className="Gigs--container">
            <Gig date="12-23-2016" city="Krakow"></Gig>
            <Gig date="1-23-2014" city="Poznan"></Gig>
            <Gig date="10-1-2016" city="Chełm"></Gig>
            <Gig date="10-1-2016" city="Kraśnik"></Gig>
            <Gig date="10-1-2016" city="Sokółka"></Gig>
            <Gig date="10-1-2016" city="Białystok"></Gig>
            <Gig date="10-1-2016" city="Chełm"></Gig>
            <Gig date="10-1-2016" city="Chełm"></Gig><Gig date="10-1-2016" city="Sokółka"></Gig>
            <Gig date="10-1-2016" city="Białystok"></Gig>
            <Gig date="10-1-2016" city="Chełm"></Gig>
            <Gig date="10-1-2016" city="Chełm"></Gig>


          </div>
        </div>
    )
  }
})

let Footer = React.createClass({
  render: () => {
    return (
      <div className="Footer" id="Footer">

        <footer>
          <h1>get in touch with us</h1>
          <div className="Footer--socialmedia">
            <ul>
              <a href="https://www.facebook.com/WithAllYourStrength/" ref='noopener noreferrer' target='_blank'><li><img src={`${IMG}fb.png`} /></li></a>
              <a href="https://facebook.com" ref='noopener noreferrer' target='_blank'><li><img src={`${IMG}insta.png`} /></li></a>
              <a href="mailto:withallyourstrengthband@gmail.com" ref='noopener noreferrer' target='_blank'><li><img src={`${IMG}mln.png`} /></li></a>
            </ul>
        </div>
        </footer>
      </div>
    )
  }
})

let App = React.createClass({
  render: function(){
  return (<div className="App">
    <Promo />
    <OurStory />
    <Members />
    <Gigs />
    <Footer />
  </div>)
},
});
ReactDOM.render(<App />, document.getElementById('app'))
console.log(React);
