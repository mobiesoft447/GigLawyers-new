import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>GigLawyers new</title>
        <meta property="og:title" content="GigLawyers new" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink10">
          <img
            alt="logo"
            src="/screenshot%202024-08-30%20044246-200h.png"
            className="home-image10"
          />
        </Link>
        <div className="home-container11">
          <div className="home-container12">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu"></div>
          </div>
          <Link to="/join-gig-lawsuit" className="home-navlink11">
            <div className="home-container13">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="home-icon10"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                >
                  <path
                    d="M4 6h40v30H29l-5 5l-5-5H4z"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M23 21h2.003m7.998 0H35m-21.999 0H15"></path>
                </g>
              </svg>
              <span className="home-text10">Join the Lawsuit</span>
            </div>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links">
              <span className="home-text11">About</span>
              <span className="home-text12">Features</span>
              <span className="home-text13">Pricing</span>
              <span className="home-text14">Team</span>
              <span className="home-text15">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon18">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon22">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container14">
        <div className="home-container15">
          <div className="home-container16">
            <span className="home-text16">Best Law Firms for Gig Workers</span>
            <span className="home-text17">Drivers looking for results.</span>
            <span>
              Join other drivers who were easily dismissed by the powerful
              companies that YOU helped build. Add your complaint to a growing
              database for class action lawsuits.
            </span>
          </div>
          <div className="home-container17"></div>
          <div className="home-container18">
            <div className="home-container19">
              <img
                alt="image"
                src="/screenshot%202024-12-12%20063022-200h.png"
                className="home-image11"
              />
              <div className="home-container20">
                <span className="home-text19">Global Network</span>
                <span className="home-text20">Top Firms | Gig Economy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container21">
          <div className="home-container22">
            <div className="home-container23">
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text21">
                    Rideshare &amp; Delivery Drivers
                  </span>
                  <div className="home-container26">
                    <span className="home-text22">
                      <span>
                        We are a global network of firms who represent drivers
                        who have wage claims, labor disputes, unfair
                        deactivations, and potential class action lawsuits.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container27">
                    <Link to="/join-gig-lawsuit" className="home-navlink12">
                      <div className="home-container28">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="home-icon24"
                        >
                          <path
                            d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="home-text25">Join Lawsuit</span>
                      </div>
                    </Link>
                    <div className="home-container29">
                      <span className="home-text26">+1 (805) 867-7836</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container30">
        <div className="home-container31">
          <span className="home-text27">
            Working together with these great firms:
          </span>
          <span className="home-text28">L&amp;LR</span>
          <span className="home-text29">POTTER HANDY, LLP</span>
          <span className="home-text30">LegalRideshare</span>
        </div>
      </div>
      <div className="home-container32">
        <span className="home-text31">We specialize in</span>
        <span className="home-text32">
          Knocking Down the Doors of Big Corporations
        </span>
        <div className="home-container33">
          <img
            alt="image"
            src="/grubhub-deactivation-support_thumbnail-removebg-preview-200h.png"
            className="home-image12"
          />
          <img
            alt="image"
            src="/1-removebg-preview-200h.png"
            className="home-image13"
          />
          <img
            alt="image"
            src="/5-removebg-preview-200w.png"
            className="home-image14"
          />
          <img
            alt="image"
            src="/2-removebg-preview-200h.png"
            className="home-image15"
          />
        </div>
      </div>
      <div className="home-container34">
        <div className="home-container35">
          <div className="home-container36">
            <div className="home-container37">
              <span className="home-text33">Working Together</span>
              <span className="home-text34">A Global Network of Top Firms</span>
              <span>
                Our global network is expanding across the world. If you are a
                top firm in your country, join our list of firms.
              </span>
              <Link to="/join-gig-lawsuit" className="home-navlink13">
                <div className="home-container38">
                  <span className="home-text36">Join Now</span>
                </div>
              </Link>
              <span className="home-text37"> ★ ★ ★ ★ ★</span>
              <span className="home-text38">Global Elite Law Firms</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/screenshot%202024-12-12%20094914-500w.png"
          className="home-image16"
        />
      </div>
      <div className="home-footer">
        <div className="home-container39">
          <span className="home-text39">Talk to us, solve your problems</span>
          <div className="home-container40">
            <Link to="/join-gig-lawsuit" className="home-navlink14">
              <div className="home-container41">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon26"
                >
                  <path
                    d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-text40">Tipline</span>
              </div>
            </Link>
            <div className="home-container42">
              <span className="home-text41">+1 (805) 867-7836</span>
            </div>
          </div>
        </div>
        <div className="home-container43">
          <span className="home-text42">Our best practice areas</span>
          <span className="home-text43">Covering drivers in all lanes.</span>
          <div className="home-container44">
            <Link to="/join-gig-lawsuit" className="home-navlink15">
              <div className="home-container45">
                <img
                  alt="image"
                  src="/ea6koxrhdsacnoaeakumumvdyt0-200h.png"
                  className="home-image17"
                />
                <span className="home-text44">Deactivation</span>
              </div>
            </Link>
            <Link to="/join-gig-lawsuit" className="home-navlink16">
              <div className="home-container46">
                <img
                  alt="image"
                  src="/adasd-200h.png"
                  className="home-image18"
                />
                <span className="home-text45">Passenger Issues</span>
              </div>
            </Link>
            <Link to="/join-gig-lawsuit" className="home-navlink17">
              <div className="home-container47">
                <img
                  alt="image"
                  src="/o8zebwteogegaagjq0a3kimg1hs-200h.png"
                  className="home-image19"
                />
                <span className="home-text46">Class Action</span>
              </div>
            </Link>
            <Link to="/join-gig-lawsuit" className="home-navlink18">
              <div className="home-container48">
                <img
                  alt="image"
                  src="/xybnhqbodmruz9sgksr9l0zc7w-200h.png"
                  className="home-image20"
                />
                <span className="home-text47">Car Accident</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="home-container49">
          <div className="home-container50">
            <Link to="/" className="home-navlink19">
              <img
                alt="image"
                src="/screenshot%202024-08-30%20044246-200h.png"
                className="home-image21"
              />
            </Link>
          </div>
          <div className="home-container51">
            <span className="home-text48">Tip Line</span>
            <span className="home-text49">tips@giglawyers.com</span>
            <span className="home-text50">+1 (805) 867-7836</span>
          </div>
          <div className="home-container52">
            <span className="home-text51">Practice Areas</span>
            <span className="home-text52">Class Action</span>
            <span className="home-text53">Small Claims</span>
            <span className="home-text54">Rideshare Attorneys</span>
            <span className="home-text55">Delivery Lawyers</span>
          </div>
          <div className="home-container53">
            <span className="home-text56">Contact</span>
            <span className="home-text57">Contacts</span>
          </div>
        </div>
        <div className="home-container54"></div>
        <div className="home-container55">
          <span className="home-text58">
            Copyright © 2023 - 2025 GigLawyers. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
