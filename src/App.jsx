import "./App.css";

const gameModes = [
  {
    title: "BATTLE ROYALE",
    players: "100 PLAYERS",
    description:
      "Drop into the arena, collect equipment and become the last squad standing.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "TEAM DEATHMATCH",
    players: "5 VS 5",
    description:
      "Fight with your squad and reach the highest score before the timer ends.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "RANKED ARENA",
    players: "SQUAD",
    description:
      "Compete against skilled players and climb the competitive leaderboard.",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=1200&q=90",
  },
];

const players = [
  {
    rank: "01",
    name: "SHADOW",
    kills: "2,841",
    wins: "184",
    kd: "4.82",
  },
  {
    rank: "02",
    name: "NOVA",
    kills: "2,590",
    wins: "167",
    kd: "4.51",
  },
  {
    rank: "03",
    name: "PHANTOM",
    kills: "2,341",
    wins: "151",
    kd: "4.28",
  },
  {
    rank: "04",
    name: "VIPER",
    kills: "2,105",
    wins: "143",
    kd: "4.01",
  },
];

function GameCard({ game }) {
  return (
    <div className="game-card">

      <div className="game-image">

        <img
          src={game.image}
          alt={game.title}
        />

        <div className="players">
          {game.players}
        </div>

      </div>

      <div className="game-info">

        <span>GAME MODE</span>

        <h3>{game.title}</h3>

        <p>{game.description}</p>

        <button>
          ENTER ARENA →
        </button>

      </div>

    </div>
  );
}


function App() {

  return (
    <div className="app">

      {/* NAVIGATION */}

      <nav className="navbar">

        <div className="logo">
          ⚡ BATTLE<span>ZONE</span>
        </div>

        <div className="nav-links">

          <a href="#home">
            HOME
          </a>

          <a href="#modes">
            MODES
          </a>

          <a href="#players">
            PLAYERS
          </a>

          <a href="#leaderboard">
            LEADERBOARD
          </a>

        </div>

        <button className="play-button">
          PLAY NOW
        </button>

      </nav>


      {/* HERO */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="small-title">

            <span></span>

            MULTIPLAYER COMBAT SYSTEM

          </div>


          <h1>

            ENTER

            <br />

            <strong>THE BATTLE.</strong>

          </h1>


          <p>

            Squad up with your friends, enter the
            battlefield and fight for survival.
            Every match creates a new story.

          </p>


          <div className="hero-buttons">

            <button className="primary-btn">
              PLAY MATCH
            </button>

            <button className="secondary-btn">
              VIEW MODES
            </button>

          </div>

        </div>


        {/* 3D GAMING VISUAL */}

        <div className="hero-visual">

          <div className="glow"></div>

          <div className="radar"></div>

          <div className="soldier">

            🪖

          </div>

          <div className="crosshair">

            +

          </div>

          <div className="status">

            ONLINE

          </div>

        </div>

      </section>


      {/* GAME STATS */}

      <section className="stats">

        <div>

          <strong>100</strong>

          <span>PLAYERS</span>

        </div>

        <div>

          <strong>25+</strong>

          <span>WEAPONS</span>

        </div>

        <div>

          <strong>15</strong>

          <span>MAPS</span>

        </div>

        <div>

          <strong>24/7</strong>

          <span>BATTLES</span>

        </div>

      </section>


      {/* GAME MODES */}

      <section
        className="modes"
        id="modes"
      >

        <div className="section-heading">

          <div>

            <span>
              01 / GAME MODES
            </span>

            <h2>
              CHOOSE YOUR BATTLE.
            </h2>

          </div>

          <p>

            Select your game mode,
            assemble your squad and
            prepare for combat.

          </p>

        </div>


        <div className="game-grid">

          {gameModes.map((game) => (

            <GameCard
              key={game.title}
              game={game}
            />

          ))}

        </div>

      </section>


      {/* BATTLE PASS */}

      <section className="battle-section">

        <div className="battle-content">

          <span>
            02 / SEASON 12
          </span>

          <h2>

            DOMINATE

            <br />

            <strong>THE ARENA.</strong>

          </h2>

          <p>

            Complete missions, earn XP,
            unlock rewards and become
            the ultimate battlefield champion.

          </p>

          <button className="primary-btn">
            VIEW BATTLE PASS
          </button>

        </div>


        <div className="battle-card">

          <div className="target">

            +

          </div>

          <div className="mission">

            <span>
              CURRENT MISSION
            </span>

            <h3>
              GET 10 ELIMINATIONS
            </h3>

            <div className="progress">

              <div></div>

            </div>

            <small>
              7 / 10 COMPLETED
            </small>

          </div>

        </div>

      </section>


      {/* LEADERBOARD */}

      <section
        className="leaderboard"
        id="leaderboard"
      >

        <div className="section-heading">

          <div>

            <span>
              03 / COMPETITIVE
            </span>

            <h2>
              TOP PLAYERS.
            </h2>

          </div>

          <p>

            The best players in the
            current competitive season.

          </p>

        </div>


        <div className="table">

          <div className="table-header">

            <span>RANK</span>

            <span>PLAYER</span>

            <span>KILLS</span>

            <span>WINS</span>

            <span>K/D</span>

          </div>


          {players.map((player) => (

            <div
              className="player-row"
              key={player.rank}
            >

              <span className="rank">
                {player.rank}
              </span>

              <strong>
                {player.name}
              </strong>

              <span>
                {player.kills}
              </span>

              <span>
                {player.wins}
              </span>

              <span className="kd">
                {player.kd}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* FEATURES */}

      <section
        className="features"
        id="players"
      >

        <div className="feature-title">

          <span>
            04 / BATTLE SYSTEM
          </span>

          <h2>

            SQUAD.

            <br />

            <strong>FIGHT.</strong>

            <br />

            WIN.

          </h2>

        </div>


        <div className="feature-cards">

          <div className="feature-card">

            <div className="number">
              01
            </div>

            <h3>
              TEAM UP
            </h3>

            <p>
              Create your squad and
              communicate with your
              teammates during battle.
            </p>

          </div>


          <div className="feature-card">

            <div className="number">
              02
            </div>

            <h3>
              SURVIVE
            </h3>

            <p>
              Collect equipment,
              manage resources and
              survive the shrinking zone.
            </p>

          </div>


          <div className="feature-card">

            <div className="number">
              03
            </div>

            <h3>
              DOMINATE
            </h3>

            <p>
              Eliminate opponents,
              secure objectives and
              claim victory.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="logo">

          ⚡ BATTLE<span>ZONE</span>

        </div>

        <p>

          Squad up. Drop in. Fight to win.

        </p>

        <div className="footer-line"></div>

        <small>

          © 2026 BATTLEZONE —
          MULTIPLAYER STUDY PROJECT

        </small>

      </footer>

    </div>
  );
}

export default App;