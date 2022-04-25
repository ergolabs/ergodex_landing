import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Header from "../components/header";
import MovingElements from "../components/movingElements";
import { Roadmap } from "../components/Roadmap/Roadmap";
import SEO from "../components/seo";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import TeamMember from "../components/teamMember";
import { team } from "../constants/team.js";
import Layout from "../layouts";

const StyledTeamList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 50px;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: #ff5135;
  text-decoration: none;
  font-weight: 700;

  :hover {
    color: #ff0080;
  }
`;

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={
          "Provide liquidity, swap and exchange assets on top of Ergo and Cardano blockchains"
        }
      />
      <Header />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">
              Decentralized exchange <br /> on Ergo and Cardano
            </h1>

            <p
              className="hero-paragraph is-revealing"
              style={{ margin: 0, marginBottom: "20px" }}
            >
              A noncustodial, decentralised exchange that allows a quick,
              effortless and secure transfer of liquidity between the Ergo and
              Cardano networks.
            </p>
            <a
              className="button button-primary button-align-items launch-button glow-on-hover"
              href="https://app.ergodex.io"
              target="_blank"
              rel="noreferrer"
            >
              Launch App
            </a>
            <SocialLinks />
          </div>
          <MovingElements />
        </div>
      </section>
      <section className="features section">
        <div className="features-inner">
          <div className="features-wrap">
            <div className="feature">
              <div className="feature-inner">
                <div className="feature-header mb-16">
                  <div className="feature-icon mr-16">
                    <svg
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="nonzero">
                        <path
                          d="M16 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                          fill="#FF5135"
                        />
                        <path
                          d="M27 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M27 12c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                          fill="#FF5135"
                        />
                        <path
                          d="M5 23c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M27 23c-1.859 0-3.41 1.28-3.858 3h-3.284A3.994 3.994 0 0 0 17 23.142v-3.284c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4-1.859 0-3.41 1.28-3.858 3H8.858A3.994 3.994 0 0 0 6 12.142V8.858c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S1 2.794 1 5c0 1.858 1.28 3.41 3 3.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284A3.994 3.994 0 0 0 15 19.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284c.447 1.72 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4z"
                          fill="#FF5135"
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 className="feature-title m-0">Cross-chain exchange</h4>
                </div>
                <p className="text-sm mb-0">
                  eUTXO model gives unique possibility to have shared liquidity
                  among different types of exchanges on top of Ergo and Cardano
                  ecosystems.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-inner">
                <div className="feature-header mb-16">
                  <div className="feature-icon mr-16">
                    <svg
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="nonzero" fill="none">
                        <path
                          d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                          fill="#FF5135"
                        />
                        <path
                          d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                          fill="#FF5135"
                        />
                        <path
                          d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                          fill="#FF5135"
                        />
                        <path
                          d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                          fill="#FF5135"
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 className="feature-title m-0">AMM and Orderbook</h4>
                </div>
                <p className="text-sm mb-0">
                  Classic AMM on the Ergo ecosystem have already been developed
                  and tested. Decentralized Orderbook coming soon.
                </p>
                <p className="text-sm mb-0">
                  <StyledLink
                    href="https://github.com/ergolabs/ergo-dex/blob/master/README.md"
                    target="_blank"
                    style={{ padding: "0", border: "none" }}
                    rel="noreferrer"
                  >
                    Read more about protocol
                  </StyledLink>
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-inner">
                <div className="feature-header mb-16">
                  <div className="feature-icon mr-16">
                    <svg
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="nonzero" fill="none">
                        <path
                          d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z"
                          fill="#FF8C00"
                        />
                        <path
                          d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z"
                          fill="#FF5135"
                        />
                        <path
                          d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z"
                          fill="#FF8C00"
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 className="feature-title m-0">Transparent tokenomics</h4>
                </div>
                <p className="text-sm mb-0">
                  In ErgoDEX each actor is incentivized to fulfill his role as
                  best as possible. Users benefit from DEX services, Liquidity
                  providers from protocol fees and the DEX benefits from
                  transaction fixed fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Roadmap />
      <section>
        <h3>Team</h3>
        <StyledTeamList>
          {team.map(({ name, role, profile, photo, links }, index) => (
            <TeamMember
              name={name}
              role={role}
              profile={profile}
              photo={photo}
              links={links}
              key={index}
            />
          ))}
        </StyledTeamList>
      </section>
      <section className="social">
        <div className="hero-inner">
          <div className="hero-copy">
            <h3>Join us</h3>
            <SocialLinks />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
