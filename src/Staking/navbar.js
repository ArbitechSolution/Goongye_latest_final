import React from "react";
import containerImage from "../media/Group 48.png";
import Twitter from "../media/twitter.png";
import Telegram from "../media/telegram.png";
import Kakao from "../media/kakao.png";
import Discord from "../media/discord.png";
import Logo from "../media/logo.png";
import { useTranslation } from "react-i18next";

import "./Staking.css";
export default function Navbar({ changeMain, changeStake, changePresale }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center"></div>
          <div className="social-links" data-aos="fade-down">
            <a href="/" className="Eng">
              <span className="green">ENG</span>
            </a>
            /
            <a href="/kr" className="Kor pe-4">
              KOR
            </a>
            <a
              href="https://twitter.com/crazyapegoongye"
              target="_blank"
              rel="noreferrer"
              className="twitter pe-1"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://t.me/+5VvQvVvtYIA2OTc9"
              target="_blank"
              rel="noreferrer"
              className="telegram pe-1"
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              href="https://open.kakao.com/o/gzwaZ0be"
              target="_blank"
              rel="noreferrer"
              className="kakao pe-1"
            >
              <img src={Kakao} alt="" />
            </a>
            <a
              href="https://discord.gg/GJB55Rwbfe"
              target="_blank"
              rel="noreferrer"
              className="discord pe-1"
            >
              <img src={Discord} alt="" />
            </a>
          </div>
        </div>
      </section>

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/" className="logo">
            <img src={Logo} alt="" data-aos="zoom-in" className="img-fluid" />
          </a>

          <nav id="navbarID" className="navbar" data-aos="zoom-in">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#story"
                  onClick={() => changeMain()}
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#tokenomics"
                  onClick={() => changeMain()}
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#nft"
                  onClick={() => changeMain()}
                >
                  NFT
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#mint"
                  onClick={() => changeMain()}
                >
                  Mint
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#stake"
                  onClick={() => changeStake()}
                >
                  Stake
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#roadmap"
                  onClick={() => changeMain()}
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#team"
                  onClick={() => changeMain()}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#faq"
                  onClick={() => changeMain()}
                >
                  FAQ
                </a>
              </li>
            </ul>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarID"
              aria-controls="navbarID"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list mobile-nav-toggle"></i>
            </button> */}
            <i
              className="bi bi-list mobile-nav-toggle"
              data-toggle="collapse"
              data-target="#navbarID"
              aria-controls="navbarID"
              aria-expanded="false"
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
