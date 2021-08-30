import React from "react"
import styled from 'styled-components'

import Layout from '../layouts'

import SEO from '../components/seo'
import Header from '../components/header'
import TeamMember from '../components/teamMember'

import DoneIcon from '../images/done.inline.svg'

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
`

const team = [
  {
    name: 'Ilya Oskin',
    role: 'Lead Developer',
    profile: `
        Software Engineer, Core Developer of Ergo, Lead Developer at Mail.ru Group, Degree in Economics.
      `,
    photo: 'oskin',
    links: {
      github: 'https://github.com/oskin1'
    }
  },
  {
    name: 'Dmitriy Usov',
    role: 'Lead UI Developer',
    profile: `
        Software Engineer, Developer of Ergo, ex. Frontend Team Lead at CityMobil, Degree in computer science.
      `,
    photo: 'usov',
    links: {
      github: 'https://github.com/deadit'
    }
  },
  {
    name: 'Yasha Black',
    role: 'Product Manager',
    profile: `
        Product manager at Ergo, Frontend Developer at Mail.ru Group, Masters degree in management.
      `,
    photo: 'black',
    links: {
      linkedin: 'https://www.linkedin.com/in/yasha-black-25852018a/',
      telegram: 'https://t.me/yashablack',
      github: 'https://github.com/yasha-black'
    }
  },
  {
    name: 'Timofey Gusev',
    role: 'Core Developer',
    profile: `
        Software Engineer, Developer at Mail.ru Group, FP enthusiast, ex. Blockchain Core Dev., Degree in cyber security.
      `,
    photo: 'gusev',
    links: {
      github: 'https://github.com/GusevTimofey'
    }
  },
  {
    name: 'Alexander Romanovskiy',
    role: 'Core developer',
    profile: `
        Software engineer. One of the creators of Encry blockchain and smart contract language Prism. FP enthusiast. Has expertise in cybersecurity. Ergo ecosystem developer.
      `,
    photo: 'romanovsky',
    links: {
      github: 'https://github.com/Bromel777'
    }
  },
  {
    name: 'Vadim Safonov',
    role: 'Frontend Developer',
    profile: `
        Software Engineer, Team lead at Rbc.ru. Degree in computer science.
      `,
    photo: '../static/images/safonov.jpeg',
    links: {
      github: 'https://github.com/imamatory'
    }
  }
]

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title='Home'
        path={props.location.pathname}
        description={'Swap and exchange on top of Ergo and Cardano blockchains'}
      />
      <Header />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">Decentralized exchange <br/> on Ergo and Cardano
            </h1>
            <p className="hero-paragraph is-revealing" style={{margin: 0}}>A non-custodial, decentralised
              exchange that allows a quick, effortless and secure transfer of liquidity between the
              Ergo and Cardano networks.
            </p>
            <a
              className="button button-primary button-align-items beta-button glow-on-hover "
              href="https://beta.ergodex.io"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-8">Try beta now</span>
            </a>
            <a className="ml-8 button button-primary button-align-items github-button"
               href="https://github.com/ergolabs" target="_blank" rel="noreferrer">
              <span className="mr-8">Github</span>
              <svg className="eg-footer__social-icon eg-footer__social-icon--github" width="25"
                   height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"
                   >
                <title>Github</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g className="eg-social__icon--github"
                     transform="translate(-70.000000, -395.000000)" fill="#fff">
                    <g transform="translate(70.000000, 395.000000)">
                      <path
                        d="M12.3398485-.000378787879C5.52545455-.000378787879-.000303030303 5.52537879-.000303030303 12.3412879-.000303030303 17.792803 3.53530303 22.4185606 8.43984848 24.0503788 9.05727273 24.1632576 9.28227273 23.7829545 9.28227273 23.4556818 9.28227273 23.1625 9.27166667 22.3867424 9.26560606 21.3564394 5.8330303 22.1026515 5.10878788 19.7026515 5.10878788 19.7026515 4.54742424 18.2768939 3.73833333 17.8973485 3.73833333 17.8973485 2.61787879 17.1314394 3.82318182 17.1473485 3.82318182 17.1473485 5.06181818 17.2344697 5.71333333 18.4185606 5.71333333 18.4185606 6.81409091 20.3049242 8.60121212 19.7602273 9.305 19.4443182 9.41712121 18.6465909 9.73530303 18.1026515 10.0883333 17.7943182 7.34818182 17.4829545 4.46712121 16.4246212 4.46712121 11.6950758 4.46712121 10.3481061 4.94818182 9.24659091 5.73757576 8.38371212 5.61030303 8.07159091 5.18681818 6.81704545 5.8580303 5.11856061 5.8580303 5.11856061 6.89439394 4.78598485 9.2519697 6.38295455 10.2360606 6.1094697 11.2921212 5.97234848 12.3413636 5.96780303 13.3890909 5.97234848 14.4451515 6.1094697 15.4307576 6.38295455 17.7868182 4.78598485 18.8209091 5.11856061 18.8209091 5.11856061 19.4943939 6.81704545 19.0709091 8.07159091 18.9436364 8.38371212 19.7345455 9.24659091 20.2125758 10.3481061 20.2125758 11.6950758 20.2125758 16.4359848 17.3269697 17.4791667 14.5777273 17.7852273 15.0209091 18.1655303 15.4156061 18.9193182 15.4156061 20.0700758 15.4156061 21.7200758 15.4004545 23.0511364 15.4004545 23.4556818 15.4004545 23.7852273 15.6224242 24.1693182 16.2489394 24.0488636 21.1481818 22.4140152 24.6815152 17.7912879 24.6815152 12.3412879 24.6815152 5.52537879 19.1557576-.000378787879 12.3398485-.000378787879">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="hero-illustration">
            <div className="hero-bg">
              <svg width="720" height="635" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="97.738%" id="a">
                    <stop stopColor="#151616" offset="0%"/>
                    <stop stopColor="#222424" offset="100%"/>
                  </linearGradient>
                </defs>
                <path
                  d="M0 0h720v504.382L279.437 630.304c-53.102 15.177-108.454-15.567-123.631-68.669-.072-.25-.142-.5-.211-.75L0 0z"
                  fill="url(#a)" fillRule="evenodd"/>
              </svg>
            </div>
            <div className="hero-square hero-square-1 is-moving-object is-rotating">
              <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-1-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="18.74%" y1="17.384%" x2="96.787%" y2="88.669%"
                                  id="square-1-b">
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF8C00" offset="53.489%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#square-1-a)" opacity=".64" d="M0 0h220v220H0z"/>
                  <path
                    d="M0 65.022V61.7c51.102-26.116 77.322-13.388 77.322 38.41 0 57.718 25.944 67.701 79.782 30.373l1.709 2.466c-55.678 38.604-84.491 27.517-84.491-32.839 0-49.494-24.315-61.27-74.322-35.087z"
                    fill="url(#square-1-b)" fillRule="nonzero" opacity=".701"/>
                  <path
                    d="M113.203 220c2.943-57.607 37.666-164 90.473-164 4.973 0 10.458.203 16.324.614v77.24c-5.819.237-11.3 1.007-16.324 2.458-32.685 9.44-57.608 55.87-72.976 83.688h-17.497z"
                    fillOpacity=".096" fill="#FF8C00"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-2 is-moving-object is-rotating">
              <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-2-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="-31.43%" y1="104.265%" x2="143.71%" y2="43.581%"
                                  id="square-2-b">
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#square-2-a)" d="M0 0h88v88H0z"/>
                  <path
                    d="M19.717 36.579C13.824 33.969 7.004 32.555 0 31.535V0h88v88H76.869C59.773 67.766 40.697 45.872 19.717 36.579z"
                    fill="url(#square-2-b)"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-3 is-moving-object is-rotating">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-3-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="-58.825%" y1="39.622%" x2="81.589%" y2="-11.971%"
                                  id="square-3-b">
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".163" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd" opacity=".64">
                  <path fill="url(#square-3-a)" d="M0 0h64v64H0z"/>
                  <path
                    d="M14.03 0C27.176 13.07 42 27.791 42 38.165c0 17.46-14.154-11.127-31.614-11.127-2.67 0-6.289.931-10.386 2.406V0h14.03z"
                    fill="url(#square-3-b)"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-4 is-moving-object is-rotating">
              <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-4-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="18.74%" y1="17.384%" x2="96.787%" y2="88.669%"
                                  id="square-4-b">
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF8C00" offset="53.489%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="0%" y1="57.64%" x2="94.346%" y2="8.32%" id="square-4-c">
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                  <radialGradient cx="100%" cy="100%" fx="100%" fy="100%" r="136.8%"
                                  id="square-4-d">
                    <stop stopColor="#FF8C00" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </radialGradient>
                  <radialGradient cx="100%" cy="100%" fx="100%" fy="100%" r="140.264%"
                                  id="square-4-e">
                    <stop stopColor="#FF8C00" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </radialGradient>
                  <radialGradient cx="100%" cy="100%" fx="100%" fy="100%" r="137.638%"
                                  id="square-4-f">
                    <stop stopColor="#FF8C00" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <rect fill="url(#square-4-a)" width="320" height="320" rx="2"/>
                  <path
                    d="M278.958 209.715c-54.758 37.966-82.136 27.43-82.136-31.606s-34.335-65.905-103.005-20.607C49.492 185.246 33.604 160.412 46.154 83"
                    stroke="url(#square-4-b)" strokeWidth="3"/>
                  <path
                    d="M71.05 41.844c57.243-16.532 154.657 38.697 154.657-16.532 0-8.934-4.692-17.934-10.123-25.312H0v99.92c19.6-22.665 44.942-50.536 71.05-58.076z"
                    fill="url(#square-4-c)"/>
                  <path d="M320 320V66C179.72 66 66 179.72 66 320h254z" fill="url(#square-4-d)"
                        opacity=".16"/>
                  <path d="M320 320V131c-104.382 0-189 84.618-189 189h189z"
                        fill="url(#square-4-e)" opacity=".32"/>
                  <path d="M320 320V196c-68.483 0-124 55.517-124 124h124z"
                        fill="url(#square-4-f)"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-5 is-moving-object is-rotating">
              <svg width="141" height="140" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-5-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="27.288%" y1="50%" x2="172.696%" y2="-8.701%"
                                  id="square-5-b">
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="18.74%" y1="17.384%" x2="96.787%" y2="88.669%"
                                  id="square-5-c">
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF8C00" offset="53.489%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path opacity=".24" fill="url(#square-5-a)" d="M19 18h128v128H19z"
                        transform="translate(-6 -6)"/>
                  <path
                    d="M147 76.088V18h-35.004c-4.63 24.206-16.838 55.057-44.819 79.224-63.217 54.6 46.59-21.136 79.823-21.136z"
                    opacity=".24" fill="url(#square-5-b)" transform="translate(-6 -6)"/>
                  <path d="M0 0l39.459 40.249" stroke="url(#square-5-c)" strokeWidth="3"
                        transform="translate(-6 -6)"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-6 is-moving-object is-rotating">
              <svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-6-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="14.98%" y1="57.941%" x2="95.966%" y2="33.366%"
                                  id="square-6-b">
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="97.033%" y1="97.033%" x2="0%" y2="0%" id="square-6-c">
                    <stop stopColor="#FF8C00" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".24" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="18.74%" y1="17.384%" x2="96.787%" y2="88.669%"
                                  id="square-6-d">
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF8C00" offset="53.489%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#square-6-a)" d="M0 0h128v128H0z"/>
                  <path
                    d="M27.652 128H0V32.762c13.602-4.224 26.559-6.606 36.988-6.606 42.25 0-38.976 13.508-19.488 50.235C25.002 90.529 28.544 109.73 27.652 128z"
                    fill="url(#square-6-b)"/>
                  <path fill="url(#square-6-c)" opacity=".32" d="M88 88h40v40H88z"/>
                  <path d="M69 68l39.459 40.249" stroke="url(#square-6-d)" strokeWidth="3"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-7 is-moving-object is-rotating">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-7-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <radialGradient cx="-5.754%" cy="67.691%" fx="-5.754%" fy="67.691%" r="140.869%"
                                  gradientTransform="scale(-1 -.64163) rotate(55.582 1.643 -.08)"
                                  id="square-7-b">
                    <stop stopColor="#FF8C00" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </radialGradient>
                  <linearGradient x1="0%" y1="23.176%" x2="96.787%" y2="88.669%" id="square-7-c">
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF8C00" offset="32.912%"/>
                    <stop stopColor="#FF8C00" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd" opacity=".601">
                  <path fill="url(#square-7-a)" d="M0 0h64v64H0z"/>
                  <path d="M0 64V.1C22.901 1.644 41 20.709 41 44c0 7.202-1.73 14-4.798 20H0z"
                        fill="url(#square-7-b)"/>
                  <path
                    d="M63.925 58.495c-4.136-2.459-9.143-4.747-15.272-6.916-23.745-8.402-32.768-20.182-27.972-32.9 2.7-7.16 9.914-13.947 18.763-18.679h7.221c-10.84 4.263-20.209 11.866-23.177 19.737-4.076 10.81 3.808 21.103 26.166 29.014 5.524 1.955 10.252 4.048 14.271 6.3v3.444z"
                    fill="url(#square-7-c)" fillRule="nonzero"/>
                </g>
              </svg>
            </div>
            <div className="hero-square hero-square-8 is-moving-object is-rotating">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="square-8-a">
                    <stop stopColor="#FF5135" offset="0%"/>
                    <stop stopColor="#FF5135" stopOpacity=".32" offset="100%"/>
                  </linearGradient>
                  <linearGradient x1="66.071%" y1="50%" x2="168.952%" y2="11.585%"
                                  id="square-8-b">
                    <stop stopColor="#FF8C00" stopOpacity=".123" offset="0%"/>
                    <stop stopColor="#FF8C00" stopOpacity=".16" offset="100%"/>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#square-8-a)" opacity=".24" d="M0 0h40v40H0z"/>
                  <path
                    d="M40 0h-4.67c-.999 7.225-3.804 17.536-12.85 25.35-15.393 13.294 5.041-.287 17.36-4.644L40 0z"
                    fill="url(#square-8-b)"/>
                </g>
              </svg>
            </div>
            <div className="hero-dots hero-dots-1 is-moving-object is-translating"
                 data-translating-factor="160">
              <svg width="279" height="97" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FF8C00" fillRule="evenodd">
                  <path
                    d="M71.686 0l-2.899 1.334L68 4.157l.926 2.688L71.686 8l2.6-1.31L76 4.156l-1.295-2.94z"/>
                  <path fillOpacity=".64"
                        d="M38.843 2l-1.45.667L37 4.079l.463 1.344 1.38.577 1.3-.655L41 4.079l-.648-1.47z"/>
                  <path fillOpacity=".24"
                        d="M65.843 55l-1.45.667L64 57.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M94.765 29l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".8"
                        d="M58.765 25l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".48"
                        d="M18.843 44l-1.45.667L17 46.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M8.843 29l-1.45.667L7 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".48"
                        d="M32.843 29l-1.45.667L31 31.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM.922 45l-.725.333L0 46.04l.232.672.69.289.65-.328L2 46.04l-.324-.735z"/>
                  <path fillOpacity=".24"
                        d="M267.843 93l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".8"
                        d="M275.765 75l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".48"
                        d="M259.843 78l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                </g>
              </svg>
            </div>
            <div className="hero-dots hero-dots-2 is-moving-object is-translating"
                 data-translating-factor="120">
              <svg width="138" height="132" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FF8C00" fillRule="evenodd">
                  <path
                    d="M73.686 66l-2.899 1.334L70 70.157l.926 2.688L73.686 74l2.6-1.31L78 70.156l-1.295-2.94z"/>
                  <path fillOpacity=".64"
                        d="M108.843 0l-1.45.667L107 2.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".24"
                        d="M135.843 53l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M107.765 53l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".8"
                        d="M128.765 23l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".48"
                        d="M88.843 42l-1.45.667L87 44.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M78.843 27l-1.45.667L77 29.079l.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".48"
                        d="M102.843 27l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM70.922 43l-.725.333-.197.706.232.672.69.289.65-.328.428-.633-.324-.735z"/>
                  <path
                    d="M2.765 126L.59 127 0 129.118l.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
                  <path fillOpacity=".64"
                        d="M24.843 127l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
                  <path fillOpacity=".48"
                        d="M6.922 114l-.725.333-.197.706.232.672.69.289.65-.328.428-.633-.324-.735z"/>
                </g>
              </svg>
            </div>
            <div className="hero-dots hero-dots-3 is-moving-object is-translating"
                 data-translating-factor="160">
              <svg width="98" height="59" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FF8C00" fillRule="evenodd">
                  <path
                    d="M26.314 0l2.899 1.334L30 4.157l-.926 2.688L26.314 8l-2.6-1.31L22 4.156l1.295-2.94z"/>
                  <path fillOpacity=".64"
                        d="M59.157 2l1.45.667L61 4.079l-.463 1.344-1.38.577-1.3-.655L57 4.079l.648-1.47z"/>
                  <path fillOpacity=".24"
                        d="M32.157 55l1.45.667.393 1.412-.463 1.344-1.38.577-1.3-.655L30 57.079l.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M3.235 29l2.175 1L6 32.118l-.695 2.016-2.07.866-1.95-.983L0 32.117l.972-2.204z"/>
                  <path fillOpacity=".8"
                        d="M39.235 25l2.175 1 .59 2.118-.695 2.016-2.07.866-1.95-.983-1.285-1.9.972-2.204z"/>
                  <path fillOpacity=".48"
                        d="M79.157 44l1.45.667.393 1.412-.463 1.344-1.38.577-1.3-.655L77 46.079l.648-1.47z"/>
                  <path fillOpacity=".64"
                        d="M89.157 29l1.45.667.393 1.412-.463 1.344-1.38.577-1.3-.655L87 31.079l.648-1.47z"/>
                  <path fillOpacity=".48"
                        d="M65.157 29l1.45.667.393 1.412-.463 1.344-1.38.577-1.3-.655L63 31.079l.648-1.47zM97.078 45l.725.333.197.706-.232.672-.69.289-.65-.328L96 46.04l.324-.735z"/>
                </g>
              </svg>
            </div>
            <div className="hero-line hero-line-1">
              <svg width="344" height="217" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="18.74%" y1="17.384%" x2="96.787%" y2="88.669%"
                                  id="line-1-a">
                    <stop stopColor="#FF0080" stopOpacity="0" offset="0%"/>
                    <stop stopColor="#FF0080" offset="53.489%"/>
                    <stop stopColor="#FF0080" stopOpacity="0" offset="100%"/>
                  </linearGradient>
                </defs>
                <path
                  d="M340.86 180.664l2.281 3.287c-79.796 55.378-120.994 39.511-120.994-47.035 0-82.777-47.283-92.246-144.735-27.901-32.607 20.428-55.391 21.53-67.544 2.516C-1.882 93.147-3.092 56.053 5.987 0l3.948.64c-8.928 55.125-7.743 91.453 3.303 108.736 10.644 16.653 31.058 15.666 62.01-3.725 99.65-65.797 150.9-55.534 150.9 31.265 0 83.03 37.371 97.424 114.713 43.748z"
                  fill="url(#line-1-a)" fillRule="nonzero"
                  transform="matrix(-1 0 0 1 343.141 0)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="features section">
          <div className="features-inner">
            <div className="features-wrap">
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M16 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                            fill="#FF5135" />
                          <path
                            d="M27 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                            fill="#FF8C00" />
                          <path
                            d="M27 12c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                            fill="#FF5135" />
                          <path
                            d="M5 23c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                            fill="#FF8C00" />
                          <path
                            d="M27 23c-1.859 0-3.41 1.28-3.858 3h-3.284A3.994 3.994 0 0 0 17 23.142v-3.284c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4-1.859 0-3.41 1.28-3.858 3H8.858A3.994 3.994 0 0 0 6 12.142V8.858c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S1 2.794 1 5c0 1.858 1.28 3.41 3 3.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284A3.994 3.994 0 0 0 15 19.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284c.447 1.72 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4z"
                            fill="#FF5135" />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title m-0">Cross-chain exchange</h4>
                  </div>
                  <p className="text-sm mb-0">eUTXO model gives unique possibility to have shared
                    liquidity among different types of exchanges on top of Ergo and Cardano
                    ecosystems.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF8C00" />
                          <path
                            d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF8C00" />
                          <path
                            d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                            fill="#FF5135" />
                          <path
                            d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                            fill="#FF8C00" />
                          <path
                            d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                            fill="#FF5135" />
                        </g>
                      </svg>

                    </div>
                    <h4 className="feature-title m-0">AMM and Orderbook</h4>
                  </div>
                  <p className="text-sm mb-0">Classic AMM on the Ergo ecosystem have already been
                    developed and tested. Decentralized Orderbook coming soon.</p>
                  <p className="text-sm mb-0"><a className="button"
                                                 href="https://github.com/ergolabs/ergo-dex/blob/master/README.md"
                                                 target="_blank" style={{ padding: '0', border: 'none' }} rel="noreferrer">Read more about
                    protocol</a></p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-inner">
                  <div className="feature-header mb-16">
                    <div className="feature-icon mr-16">
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="nonzero" fill="none">
                          <path d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z"
                                fill="#FF8C00" />
                          <path
                            d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z"
                            fill="#FF5135" />
                          <path d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z"
                                fill="#FF8C00" />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title m-0">Transparent tokenomics</h4>
                  </div>
                  <p className="text-sm mb-0">In ErgoDEX each actor is incentivized to fulfill his role as
                    best as possible. Users benefit from DEX services, Liquidity providers from
                    protocol fees and the DEX benefits from transaction fixed fees.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="roadmap">
        <h3>Roadmap</h3>
        <div className="roadmap__container">
          <ul className="roadmap__stages">
            <li className="roadmap__stage done">
              <div className="bullet">
                <DoneIcon />
              </div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 1. OrderBook DEX: Core development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    Order Book DEX RnD
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX contracts implementation (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX contracts: public audit (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book Matcher development (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Order Book DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage done">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 2. AMM DEX: Core development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    AMM DEX RnD
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts: public audit (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX Bots (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX contracts testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage done">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 3. AMM DEX: Frontend development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    JavaScript AMM DEX SDK (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    Minimal viable AMM UI (Ergo Network)
                  </li>
                  <li className="stage-content__item done">
                    ErgoDEX UI guidelines
                  </li>
                  <li className="stage-content__item done">
                    AMM UI design
                  </li>
                  <li className="stage-content__item done">
                    Public AMM DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage active">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 4. OrderBook DEX: Frontend development</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item">
                    JavaScript Order Book DEX SDK implementation (Ergo Network)
                  </li>
                  <li className="stage-content__item">
                    Order Book UI design
                  </li>
                  <li className="stage-content__item">
                    Order Book UI development (Ergo Network)
                  </li>
                  <li className="stage-content__item">
                    Public Order Book DEX testing (Ergo Network)
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 5. ErgoDEX for Cardano</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item done">
                    AMM DEX contracts (Plutus)
                  </li>
                  <li className="stage-content__item done">
                    AMM DEX Bots (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    JavaScript AMM DEX SDK (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    Order Book DEX contracts (Plutus)
                  </li>
                  <li className="stage-content__item">
                    Order Book DEX Matcher (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    JavaScript Order Book DEX SDK (Cardano Network)
                  </li>
                  <li className="stage-content__item">
                    ErgoDEX UI update for Cardano network
                  </li>
                </ul>
              </div>
            </li>
            <li className="roadmap__stage">
              <div className="bullet"><DoneIcon /></div>
              <div className="stage-content">
                <h4 className="stage-content__title">Stage 6: Grand testing</h4>
                <ul className="stage-content__list">
                  <li className="stage-content__item">
                    Public AMM testing (Cardano network)
                  </li>
                  <li className="stage-content__item">
                    Public Order Book testing (Cardano network)
                  </li>
                  <li className="stage-content__item">
                    Bug fixes and improvements
                  </li>
                  <li className="stage-content__item">
                    Stable ErgoDEX release
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="roadmap__line" />
        </div>
      </section>
      <section>
        <h3>
          Team
        </h3>
        <StyledTeamList>
          {team.map(({name,
            role,
            profile,
            photo,
            links}, index) =>
            <TeamMember
              name={name}
              role={role}
              profile={profile}
              photo={photo}
              links={links}
              key={index}
            />)}
        </StyledTeamList>
      </section>
      <section className='social'>
        <div className="hero-inner">
          <div className="hero-copy">
            <h3>Join us</h3>
            <ul className="social-list">
              <li className="social-item">
                <a href="https://twitter.com/ErgoDex" target="_blank"
                   className="social-link social-square" rel="noreferrer">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8375 40C30.4421 40 39.5225 26.1512 39.5225 14.142C39.5225 13.7486 39.5146 13.3571 39.497 12.9672C41.2637 11.6802 42.7885 10.0867 44 8.26117C42.3825 8.98506 40.6419 9.47232 38.816 9.69201C40.6797 8.56678 42.1105 6.78707 42.7856 4.66533C41.0134 5.72371 39.0748 6.46977 37.0533 6.87135C35.4059 5.10487 33.0608 4 30.4638 4C25.4786 4 21.436 8.07001 21.436 13.0869C21.436 13.8001 21.5153 14.4938 21.6702 15.1591C14.1674 14.779 7.51445 11.1627 3.06195 5.66377C2.26002 7.05059 1.83819 8.62689 1.83956 10.2316C1.83956 13.3846 3.43328 16.1681 5.85679 17.7965C4.42327 17.7525 3.02119 17.3627 1.76839 16.6598C1.76706 16.698 1.76706 16.7352 1.76706 16.7759C1.76706 21.1773 4.87877 24.852 9.0094 25.6847C8.23359 25.8975 7.43306 26.005 6.629 26.0046C6.05957 26.0042 5.49147 25.9493 4.93236 25.8407C6.08166 29.4517 9.41425 32.0794 13.3653 32.1528C10.2756 34.5909 6.38346 36.043 2.15331 36.043C1.42555 36.043 0.706648 36.0013 0 35.9172C3.99523 38.4953 8.7392 39.9996 13.838 39.9996"
                      fill="#FFF"/>
                  </svg>
                </a>
              </li>
              <li className="social-item">
                <a href="https://t.me/ergodex" target="_blank" className="social-link" rel="noreferrer">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.69753 19.8127L28.9069 9.03556C31.494 7.91294 40.268 4.32055 40.268 4.32055C40.268 4.32055 44.3175 2.74888 43.98 6.56579C43.8675 8.13746 42.9676 13.6383 42.0678 19.5882L39.2556 37.2133C39.2556 37.2133 39.0306 39.7954 37.1184 40.2444C35.2061 40.6935 32.0565 38.6728 31.494 38.2237C31.0441 37.8869 23.0576 32.8351 20.1329 30.3654C19.3455 29.6918 18.4456 28.3446 20.2454 26.773C24.2949 23.0683 29.1318 18.4656 32.0565 15.5468C33.4063 14.1996 34.7561 11.0563 29.1318 14.8732L13.2712 25.5381C13.2712 25.5381 11.4715 26.6607 8.09688 25.6503C4.72228 24.64 0.78526 23.2928 0.78526 23.2928C0.78526 23.2928 -1.91441 21.6089 2.69753 19.8127V19.8127Z"
                      fill="#FFF"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
