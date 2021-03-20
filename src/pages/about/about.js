import "./about.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Globe from "../../assets/globe.png";
import Twitter from "../../assets/twitter.png";
import Stats from "../../components/stats/stats";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function About() {
  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/stats").then((res) =>
      res.json().then((resJson) => {
        const data = resJson.data;
        console.log(data);
        setStats(data);
      })
    );
  }, []);
  return (
    <div className="About">
      <Sidebar />
      <MobileHeader />
      <div className="about-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="about">
          <h2>the database</h2>
          <p>
            The AroAce Database is a <strong>searchable</strong> compilation of
            all <strong>aromantic and asexual characters</strong> in prose
            fiction out there--or all that we could find so far, at any rate.
            Enter as many search terms as you need and narrow down the results
            to what you’re looking for!
          </p>

          <p>
            None of the stories within are recommendations. You can, however,
            find Claudie’s recommendations on her website:{" "}
            <a href="http://claudiearseneault.com/?page_id=2107">Aromantic</a> |
            <a href="http://claudiearseneault.com/?page_id=2013"> Asexual</a>
          </p>
        </div>

        <Stats stats={stats} />

        <div className="about">
          <h2>Database structure</h2>
          <p>
            Each character has a single entry, to which is attached information
            on individual stories and reviews, when available. Entries are
            separated in three sections: the character, the stories they feature
            in, and the reviews.
          </p>

          <p>
            A caveat, however: classification is a great tool, but it has its
            flaws. Broad categories had to be created in order to keep the
            information easily searchable, and some stories won’t fit neatly
            into them, or will be grossly oversimplified by the term. The
            database has a lot of potential, but it is still missing some key
            parameter, and even those present won’t always give the best idea of
            what to expect.
          </p>
        </div>

        <div className="about">
          <h2>The terminology</h2>
          <div className="terminology">
            <div className="single">
              <div>Character name</div>
              <div>Character's name</div>
            </div>
            <div className="single">
              <div>Author</div>
              <div>Author's name</div>
            </div>
            <div className="single">
              <div>Title</div>
              <div>Story or book title</div>
            </div>
            <div className="single">
              <div>Series</div>
              <div>Name of the series (if applicable)</div>
            </div>
            <div className="single">
              <div>Genre</div>
              <div>The story's literary genre(s) and age category</div>
            </div>

            <div className="multi">
              <div className="title">Length</div>
              <div className="side-container">
                <div className="info">The length of the story</div>
                <div className="side">
                  <div>Short story</div>
                  <div>Up to 10.000 words</div>
                </div>
                <div className="side">
                  <div>Novella</div>
                  <div>10,000 to 50,000 words</div>
                </div>
                <div className="side">
                  <div>Novel (short)</div>
                  <div>50,000 to 80,000 words</div>
                </div>
                <div className="side">
                  <div>Novel (long)</div>
                  <div>More than 80,000 words</div>
                </div>
                <div className="side">
                  <div>Anthology</div>
                  <div>Short story is part of an anthology</div>
                </div>
                <div className="side">
                  <div>Webseries</div>
                  <div>
                    Published in several installments on the internet (blog,
                    Wattpad, etc.)
                  </div>
                </div>
              </div>
            </div>

            <div className="multi">
              <div className="title">Type of Rep</div>
              <div className="side-container">
                <div className="info">
                  How “involved” the representation is.
                </div>
                <div className="side">
                  <div>Word of God</div>
                  <div>
                    The character’s sexuality is not explicit on page, but the
                    author has confirmed it
                  </div>
                </div>
                <div className="side">
                  <div>On page</div>
                  <div>
                    The character’s sexuality is explicitly demonstrated within
                    the text. It should be showed or discussed to an extent that
                    makes it clear to the readers.
                  </div>
                </div>
                <div className="side">
                  <div>Word used</div>
                  <div>
                    The identity is stated using the actual word (usually also
                    On Page)
                  </div>
                </div>
              </div>
            </div>

            <div className="single">
              <div>Gender</div>
              <div> Character’s gender (nonbinary characters are grouped)</div>
            </div>

            <div className="multi">
              <div className="title">Character importance</div>
              <div className="side-container">
                <div className="info">
                  The character’s importance to the story
                </div>
                <div className="side">
                  <div>Lead</div>
                  <div>
                    The character is at the heart of the story’s central
                    storyline
                  </div>
                </div>
                <div className="side">
                  <div>Main</div>
                  <div>
                    The character plays an important role in the story and is
                    frequently on page
                  </div>
                </div>
                <div className="side">
                  <div>Side</div>
                  <div>The character plays a minor role in the story</div>
                </div>
              </div>
            </div>

            <div className="single">
              <div>Sexual Orientation</div>
              <div>The character’s sexual orientation</div>
            </div>

            <div className="single">
              <div>Romantic Orientation</div>
              <div>The character’s romantic orientation </div>
            </div>

            <div className="single">
              <div>Relationships</div>
              <div>Most important relationships to the character.</div>
            </div>

            <div className="single">
              <div>Pairing</div>
              <div>
                Genders of the relationship (qpr or romantic) in which the
                character is involved, if any.
              </div>
            </div>

            <div className="single">
              <div>Rep Notes&Warnings</div>
              <div> Warnings or notes with regards to the representation.</div>
            </div>

            <div className="single">
              <div>Other Notes&Warnings</div>
              <div>
                Everything else! This includes notes about polyamory, race,
                disability, known content warnings, explanations, etc.
              </div>
            </div>

            <div className="single">
              <div>Reviews</div>
              <div>Ownvoices reviews for this story</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
