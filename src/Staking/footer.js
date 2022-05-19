import React from "react";
import Twitter from "../media/twitter.png";
import Telegram from "../media/telegram.png";
import Kakao from "../media/kakao.png";
import Discord from "../media/discord.png";
import Logo from "../media/logo.png";
import { useTranslation } from "react-i18next";

import "./Staking.css";
export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer
      id="footer"
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      <div className="container ">
        <div className="row">
          <div className="col-md-3 text-center">
            <a href="/" className="logo">
              <img src={Logo} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-6 py-3 py-md-0 text-center">
            <p className="m-0">
              <a href="mailto:maguni@crazyapegongyeclub.com">
                maguni@crazyapegongyeclub.com
              </a>
            </p>
            <p className="m-0">
              &copy; COPYRIGHT Crazyapegoongyeclub. ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="col-md-3 social">
            <a
              href="https://twitter.com/crazyapegoongye"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://t.me/+5VvQvVvtYIA2OTc9"
              target="_blank"
              rel="noreferrer"
              className="telegram"
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              href="https://open.kakao.com/o/gzwaZ0be"
              target="_blank"
              rel="noreferrer"
              className="kakao"
            >
              <img src={Kakao} alt="" />
            </a>
            <a
              href="https://discord.gg/GJB55Rwbfe"
              target="_blank"
              rel="noreferrer"
              className="discord"
            >
              <img src={Discord} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
