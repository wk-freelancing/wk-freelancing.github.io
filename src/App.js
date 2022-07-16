import "./App.scss";
import aboutUs from "./assets/about_us.png";
import monkey2 from "./assets/monkey2.png";
import social1 from "./assets/social1.png";
import twitter from "./assets/twitter.png";
import vision from "./assets/vision.png";
import down from "./assets/down.png";
import up from "./assets/up.png";
import one from "./assets/numbers/1.png";
import two from "./assets/numbers/2.png";
import three from "./assets/numbers/3.png";
import four from "./assets/numbers/4.png";
import five from "./assets/numbers/5.png";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="two-columns">
          <h3 className="subheader">NFT MARKETPLACE</h3>
          <h1 className="header header--bigger">
            {`Create, Explore &
Collect Digital Art NFTs`}
          </h1>
          <p className="text text--first-section">
            JungleArt is the first and largest fully-fledged NFT marketplace on
            Polygon get quick and easy access to digital collectibles and
            explore, buy and sell NFTs from different collections and artists.
          </p>
          <div className="buttons">
            <button className="button button--primary">Roadmap</button>
            <button className="social-media-button">
              <img src={social1} alt="social1" className="social1" />
            </button>
            <button className="social-media-button">
              <img src={twitter} alt="twitter" className="twitter" />
            </button>
          </div>
        </div>
        <div className="two-columns right-column--first-section">
          <img src={monkey2} alt="Monkey" className="float-right responsive" />
        </div>
      </section>
      <section className="section">
        <div className="two-columns">
          <h1 className="header">About Us</h1>
          <p className="text our-goal-text">
            Analyzing the current situation in the NFTs market, we know that
            today's products must offer much more than before.
          </p>
          <p className="text our-goal-text">
            To materialize our vision, we created JungleArt - a combination of
            all the tools that enable the creation, distribution and trading of
            NFT collections.
          </p>
          <p className="text our-goal-text">
            With our approach focused on helping artists and projects take their
            first steps in the blockchain world, we will be able to attract
            unlimited potential.
          </p>
          <p className="text our-goal-text">
            Explore an all-in-one experience for everyone connected by a passion
            for art
          </p>
        </div>
        <div className="two-columns mr-150">
          <img
            src={aboutUs}
            alt="About Us"
            className="float-right responsive"
          />
        </div>
      </section>
      <section className="section">
        <div className="two-columns">
          <h1 className="header">Token & Utilitys</h1>
          <p className="text our-goal-text">
            The native token of JungleArt marketplace - <strong>$JUNGLE</strong>
            - unlike any other marketplace token, offers invaluable benefits and
            a wide variety of utilities to long-term investors.
          </p>
        </div>
      </section>
      <section>
        <div className="column">
          <div className="row">
            <div className="row__container">
              <img src={one} alt="One" />
              <h3 className="row__heading">
                Share of marketplace earnings and buy&burn mechanism
              </h3>
            </div>
            <div>
              <img src={down} alt="down" />
            </div>
          </div>
          <div className="row">
            <div className="row__container">
              <img src={one} alt="One" className="invisible" />
              <p className="row__text">
                Investors who decide to stake the $JUNGLE token will receive
                dual rewards both in the native token and a stablecoin. Where
                will the money come from? We are planning to share a portion of
                our marketplace fees. Therefore, 0,5% from each NFT sale and 2%
                of the initial value of the collection that we launch will be
                distributed among $JUNGLE stakers. We understand the importance
                of keeping token inflation low and stable. We also know that in
                the long run only deflationary tokenomics may thrive. That is
                why we will introduce a buy&burn mechanism, and 20% of the sales
                fee on our market will be made in the $JUNGLE token. Above all,
                however, we value user experience. For this reason, if someone
                does not have our native token, the platform will recalculate
                the fee and purchase it on the open market. We will then reserve
                some of the tokens for burning.
              </p>
            </div>
            <div>
              <img src={down} alt="down" className="invisible" />
            </div>
          </div>
        </div>

        <div className="row">
          <img src={two} alt="Two" />
        </div>
        <div className="row">
          <img src={three} alt="Three" />
        </div>
        <div className="row">
          <img src={four} alt="Four" />
        </div>
        <div className="row">
          <img src={five} alt="Five" />
        </div>
      </section>
      <section className="mt-142">
        <h1 className="header">Roadmap</h1>
        <div className="flex-container">
          <div className="roadmap-column">
            <h2 className="roadmap-header">Past</h2>
            <ul className="roadmap-list">
              <li className="roadmap-list-item">Team assembly</li>
              <li className="roadmap-list-item">Concept work</li>
              <li className="roadmap-list-item">
                Conceptual work on Tokenomics and UI Design
              </li>
            </ul>
          </div>
          <div className="roadmap-column">
            <h2 className="roadmap-header">Present</h2>
            <ul className="roadmap-list">
              <li className="roadmap-list-item">Marketplace & Launchpad v1</li>
              <li className="roadmap-list-item">Making partnerships</li>
              <li className="roadmap-list-item">Marketing</li>
            </ul>
          </div>
          <div className="roadmap-column">
            <h2 className="roadmap-header">Future</h2>
            <ul className="roadmap-list">
              <li className="roadmap-list-item">1st NFT Collection launch</li>
              <li className="roadmap-list-item">Seed and public sale</li>
              <li className="roadmap-list-item">Token Launch</li>
              <li className="roadmap-list-item">Builiding market position</li>
              <li className="roadmap-list-item">Implementing token utility</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--vision">
        <div className="five-columns">
          <h1 className="header">Vision</h1>
          <p className="text">
            JungleArt is not just a pure vision. Above all, it’s titanic work
            and a battle-tested, goal-oriented team of blockchain professionals.
          </p>
          <p className="text">
            <strong>Find out for yourself!</strong>
          </p>
        </div>
        <img
          src={vision}
          alt="Vision"
          className="float-right responsive vision"
        />
      </section>
    </div>
  );
}

export default App;
