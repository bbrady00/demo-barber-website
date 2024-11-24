import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const InstagramIcon = ({ link }) => (
  <a
    href={"https://www.instagram.com/bitbrilliant"}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>
);

export const PhoneIcon = ({ link }) => (
  <a href={"tel:+00000000001"} rel="noopener noreferrer">
    <FontAwesomeIcon icon={faPhone} size="2x" />
  </a>
);

export const MapIcon = ({ link }) => (
  <a
    href={"https://maps.app.goo.gl/1WNRcscJ47CqPhHv91232"}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
  </a>
);

export const GlobeIcon = ({ link }) => (
  <a
    href={"https://www.bitbrilliant.com.au/"}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faGlobe} size="2x" />
  </a>
);
