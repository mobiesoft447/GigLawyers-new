import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer10.css'

const Footer10 = (props) => {
  return (
    <footer className="footer10-container thq-section-padding">
      <div className="footer10-max-width thq-section-max-width">
        <div className="footer10-divider1 thq-divider-horizontal"></div>
        <div className="footer10-content">
          <div className="footer10-links thq-grid-5">
            <div className="footer10-column2">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer10-image1"
              />
            </div>
            <div className="footer10-column1">
              <strong className="footer10-column1-title thq-body-large">
                {props.column1Title ?? (
                  <Fragment>
                    <span className="footer10-text11">Tip Line</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-footer-links1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link1 thq-body-small"
                >
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer10-text22">
                        tips@giglawyers.com
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link2 thq-body-small"
                >
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer10-text21">+1 (805) 867-7836</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="footer10-column3">
              <strong className="footer10-column3-title thq-body-large">
                {props.column3Title ?? (
                  <Fragment>
                    <span className="footer10-text18">Practica Areas</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-footer-links2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link61 thq-body-small"
                >
                  {props.link11 ?? (
                    <Fragment>
                      <span className="footer10-text14">Class Action</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link7 thq-body-small"
                >
                  {props.link12 ?? (
                    <Fragment>
                      <span className="footer10-text20">Small Claims</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link8 thq-body-small"
                >
                  {props.link13 ?? (
                    <Fragment>
                      <span className="footer10-text12">
                        Rideshare Attorneys
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link9 thq-body-small"
                >
                  {props.link14 ?? (
                    <Fragment>
                      <span className="footer10-text10">Delivery Lawyers</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="footer10-column4">
              <strong className="footer10-column4-title thq-body-large">
                {props.column4Title ?? (
                  <Fragment>
                    <span className="footer10-text15">
                      <span>Contact</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-footer-links3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link16 ?? (
                    <Fragment>
                      <span className="footer10-text13">Contacts</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer10-divider2 thq-divider-horizontal"></div>
        <div className="footer10-credits1">
          <div className="footer10-row">
            <div className="footer10-credits2">
              <span className="footer10-content3 thq-body-small">
                {props.copyright ?? (
                  <Fragment>
                    <span className="footer10-text19">
                      Copyright © 2023 GigLawyers. All Rights Reserved
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer10.defaultProps = {
  link14: undefined,
  logoSrc: '/screenshot%202024-08-30%20044246-1500h.png',
  logoAlt: 'logo',
  column1Title: undefined,
  link13: undefined,
  link16: undefined,
  link11: undefined,
  column4Title: undefined,
  column3Title: undefined,
  copyright: undefined,
  link12: undefined,
  link2: undefined,
  link1: undefined,
}

Footer10.propTypes = {
  link14: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  column1Title: PropTypes.element,
  link13: PropTypes.element,
  link16: PropTypes.element,
  link11: PropTypes.element,
  column4Title: PropTypes.element,
  column3Title: PropTypes.element,
  copyright: PropTypes.element,
  link12: PropTypes.element,
  link2: PropTypes.element,
  link1: PropTypes.element,
}

export default Footer10
