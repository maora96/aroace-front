import "./about.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Globe from "../../assets/globe.png";
import Twitter from "../../assets/twitter.png";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function AboutTeam() {
  return (
    <div className="About">
      <Sidebar />
      <MobileHeader />
      <div className="about-container">
        <div className="about">
          <h2>About the team</h2>
          <h3>The Creator</h3>
          <p>
            Claudie Arseneault is an asexual and aromantic-spectrum writer of
            queer fantasy centering platonic relationships. In addition to her
            own novels, the <em>City of Spires</em> series and{" "}
            <em>Baker Thief</em>, she edited{" "}
            <em>Common Bonds: an Aromantic Speculative Anthology</em> and is a
            founding member of{" "}
            <a href="http://www.krakencollectivebooks.com/">
              The Kraken Collective
            </a>
            , an team of queer specfic self-published writers. Otherwise,
            Claudie tends to be known for her love of croissants and squids.
            Find out more on her{" "}
            <a href="http://claudiearseneault.com/">website</a>!
          </p>

          <a href="https://ko-fi.com/claudie" className="kofi-link">
            Buy Claudie a Ko-fi!
          </a>
          <div className="social-media">
            <a href="https://twitter.com/ClH2OArs">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="http://claudiearseneault.com/">
              <img src={Globe} alt="website" />
            </a>
          </div>

          <h3>The Database Gremlins</h3>
          <p>
            While the database began as a solo project, it certainly has its
            share of helpers now. Many authors have submitted their characters,
            and many others have sent information about missing ones.
          </p>
          <p>
            In addition to the occasional helpers, two have been of invaluable
            help. Massive thanks to fellow author S.L. Dove Cooper
            (@dovelynnwriter), especially for the early volunteer help, and
            Marianne D., whose continuous work is invaluable in keeping
            everything up to date .
          </p>

          <h3>The Dev</h3>
          <p>
            Ren Oliveira is an a-spec nonbinary writer by night and a web
            developer by day. Their short story <em>Half a Heart</em> was
            published in{" "}
            <em>Common Bonds: an Aromantic Speculative Anthology</em>. You can
            find them on <a href="https://twitter.com/nyphren">twitter</a>.
          </p>

          <a href="https://ko-fi.com/nyphren" className="kofi-link">
            Buy Ren a Ko-fi!
          </a>
        </div>
      </div>
    </div>
  );
}
