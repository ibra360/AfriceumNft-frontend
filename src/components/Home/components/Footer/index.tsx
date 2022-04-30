import styles from "./index.module.css";
import { FiMail, FiFacebook } from "react-icons/fi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.sponsBg}>
        <div className={styles.sponsors}>
          <a>
            <svg viewBox="0 0 135 32">
              <path d="M70.8,19.6c-3.4,0-6.1,2.6-6.1,6.1s2.8,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1C76.9,22.2,74.2,19.6,70.8,19.6z M70.8,22c2.1,0,3.6,1.5,3.6,3.7c0,2.1-1.6,3.7-3.6,3.7c-2.1,0-3.6-1.5-3.6-3.7C67.1,23.6,68.7,22,70.8,22z M121.6,27.9v-5.6h2.9 v-2.4h-2.9v-3.3l-2.5,0.8v2.5H117v2.4h2.1v5.6c0,3,1.5,4.1,5.4,3.6v-2.2C122.6,29.4,121.6,29.4,121.6,27.9z M134.6,29.2h-5.7 l5.7-6.9V20h-8.9v2.3h5.7l-5.7,6.9v2.4h8.9V29.2L134.6,29.2z M84,19.7v2.7c-1.7-0.1-3.6,0.6-3.6,3.3v5.8h-2.5V19.9h2.5v1.9 C81.1,20.3,82.5,19.7,84,19.7z M90,19.6c-3.4,0-6.1,2.6-6.1,6.1s2.8,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1 C96.2,22.2,93.5,19.6,90,19.6z M90,22c2.1,0,3.6,1.5,3.6,3.7c0,2.1-1.6,3.7-3.6,3.7c-2.1,0-3.6-1.5-3.6-3.7C86.4,23.6,88,22,90,22z M112.7,19.9L109,31.6h-2.4l-2.4-7.8l-2.4,7.8h-2.4l-3.7-11.6h2.6l2.2,8l2.4-8h2.4l2.4,8l2.2-8H112.7L112.7,19.9z M116,19.9h-2.5 v11.6h2.5V19.9L116,19.9z M34.5,1.7v4.8c-1-0.7-2.3-1.3-3.6-1.3c-3.6,0-6.5,3.1-6.1,6.8c0.3,2.8,2.6,5.1,5.5,5.5 c1.6,0.1,3.1-0.3,4.2-1.2v0.9H37V1L34.5,1.7z M34.4,11.4c0,2.2-2.1,4-4.4,3.5c-1.3-0.3-2.4-1.3-2.8-2.8c-0.4-2.3,1.3-4.4,3.6-4.4 C32.8,7.8,34.4,9.4,34.4,11.4L34.4,11.4z M9.7,5.7v0.8c-1-0.7-2.2-1.2-3.5-1.2c-3.6,0-6.5,3.1-6.1,6.8c0.3,2.8,2.6,5.1,5.5,5.5 c1.6,0.1,3.1-0.3,4.2-1.2v0.9h2.6V5.7H9.7L9.7,5.7z M9.7,11.4c0,2.2-2.1,4-4.4,3.5c-1.3-0.3-2.4-1.3-2.8-2.8 C2.1,9.8,3.9,7.8,6.1,7.8C8.1,7.8,9.7,9.4,9.7,11.4z M19.4,5.3c-1.6,0-2.8,0.6-3.6,1.8V5.6h-2.5v11.6h2.5V11c0-2.4,1.3-3.3,3-3.3 c1.6,0,2.6,0.9,2.6,2.7v6.9h2.5v-7.1C23.9,7.1,22,5.3,19.4,5.3z M66.1,13.8c-0.6,0.8-1.6,1.4-3,1.4c-1.9,0-3.3-0.9-3.7-2.8h9.3 c0.1-0.3,0.1-0.7,0.1-1c0-3.3-2.4-6.1-5.8-6.1c-3.7,0-6.1,2.7-6.1,6.1c0,3.5,2.5,6.1,6.3,6.1c2.2,0,4-1,5.1-2.5L66.1,13.8 L66.1,13.8z M62.9,7.6c1.5,0,3,0.8,3.3,2.8h-6.9C59.7,8.7,61,7.6,62.9,7.6z M94.8,15.3c1.4,0,2.4-0.6,3-1.4l2.1,1.2 c-1.1,1.6-2.8,2.5-5.1,2.5c-3.9,0-6.3-2.6-6.3-6.1c0-3.5,2.5-6.1,6.1-6.1c3.5,0,5.8,2.8,5.8,6.1c0,0.1,0,0.3-0.1,0.5 c0,0.2-0.1,0.3-0.1,0.5h-9.3C91.5,14.3,93,15.3,94.8,15.3L94.8,15.3z M97.9,10.5c-0.3-2-1.8-2.8-3.3-2.8c-1.9,0-3.1,1.1-3.5,2.8 H97.9z M116,17.3h-2.5V15h2.5V17.3z M101.7,17.3h2.5v-6.2c0-2.4,1.3-3.3,3-3.3c1.5,0,2.6,1,2.6,2.7v6.8h2.5v-7.1 c0-3-1.9-4.8-4.4-4.8c-1.6,0-2.8,0.6-3.6,1.8V5.7h-2.5V17.3L101.7,17.3z M72,8.9c0-0.8,0.8-1.2,1.7-1.2c0.9,0,1.7,0.4,2.1,1.2 L78,7.7c-0.8-1.5-2.4-2.4-4.3-2.4c-2.4,0-4.2,1.3-4.2,3.5c0,2.4,2.1,3,3.9,3.5h0.1c0.1,0,0.1,0.1,0.2,0.1c1.2,0.4,2.1,0.6,2.1,1.5 c0,0.9-0.8,1.3-2,1.3c-1.1,0-2-0.4-2.4-1.3L69,15c0.8,1.5,2.4,2.5,4.6,2.5c2.5,0,4.6-1.3,4.6-3.6c0-2.5-2.2-3.1-3.9-3.6 C73.1,10,72,9.7,72,8.9L72,8.9z M81.7,8.9c0-0.8,0.8-1.2,1.7-1.2c0.9,0,1.7,0.4,2.2,1.2l2.2-1.1c-0.8-1.5-2.4-2.4-4.3-2.4 c-2.4,0-4.2,1.3-4.2,3.5c0,2.4,2.1,3,3.9,3.5h0.2c1.2,0.4,2.2,0.7,2.2,1.5c0,0.9-0.9,1.3-2,1.3c-1.2,0-2-0.4-2.4-1.3l-2.2,1.1 c0.8,1.5,2.4,2.5,4.6,2.5c2.6,0,4.6-1.3,4.6-3.6c0-2.5-2.1-3.1-3.9-3.6H84c-0.1,0-0.2-0.1-0.3-0.1C82.6,10,81.7,9.7,81.7,8.9 L81.7,8.9z M44.2,8.2V5.5c-1.5,0-2.9,0.6-3.6,2.1V5.7h-2.5v11.6h2.5v-5.8C40.6,8.8,42.5,8,44.2,8.2L44.2,8.2z M55.7,15v6.4 c0.8-1.2,2-1.8,3.6-1.8c2.6,0,4.4,1.7,4.4,4.8v7.2h-2.5v-6.9c0-1.7-1-2.7-2.6-2.7c-1.7,0-3,1-3,3.3v6.2h-2.5V17.1 c-0.8,0.3-1.6,0.5-2.6,0.5c-3.9,0-6.3-2.6-6.3-6.1c0-3.5,2.5-6.1,6.1-6.1c3.5,0,5.8,2.8,5.8,6.1c0,0.1,0,0.3-0.1,0.5 c0,0.2-0.1,0.3-0.1,0.5h-9.3c0.4,1.8,1.9,2.8,3.7,2.8c1.1,0,1.9-0.4,2.6-0.9c0.2-0.1,0.3-0.3,0.4-0.5L55.7,15L55.7,15z M53.7,10.5 c-0.4-2-1.8-2.8-3.3-2.8c-1.9,0-3.1,1.1-3.5,2.8H53.7L53.7,10.5z" />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 112 25">
              <path d="M7.2,24.9c-3.6,0-7.2-2.6-7.2-8.5c0-5.9,3.5-8.5,7.2-8.5c1.8,0,3.2,0.5,4.2,1.1l-1.1,2.4 c-0.7-0.5-1.7-0.8-2.7-0.8c-2.2,0-4.2,1.7-4.2,5.7c0,4,2.1,5.8,4.2,5.8c1,0,2-0.3,2.7-0.8l1.1,2.5C10.3,24.5,9,24.9,7.2,24.9z" />
              <path d="M19.7,24.9c-4.6,0-7.2-3.7-7.2-8.5c0-4.8,2.5-8.5,7.2-8.5c4.6,0,7.2,3.6,7.2,8.5C26.9,21.3,24.3,24.9,19.7,24.9 z M19.7,10.6c-2.6,0-3.8,2.3-3.8,5.8c0,3.5,1.3,5.8,3.8,5.8c2.6,0,3.8-2.3,3.8-5.8C23.5,12.9,22.3,10.6,19.7,10.6z" />
              <path d="M31.3,5.3c-1.1,0-2-0.8-2-1.9s0.9-1.9,2-1.9c1.1,0,2,0.8,2,1.9S32.4,5.3,31.3,5.3z M29.6,8.3H33v16.3h-3.3V8.3z " />
              <path d="M46.1,24.6V13.7c0-1.9-1.2-3.1-3.4-3.1c-1.2,0-2.3,0.2-3,0.5v13.5h-3.3V9.1c1.6-0.7,3.7-1.2,6.3-1.2 c4.6,0,6.8,2,6.8,5.4v11.2H46.1z" />
              <path d="M58.2,24.9c-2.1,0-4.2-0.5-5.5-1.2V0.8H56v7.9C56.8,8.3,58.1,8,59.2,8c4.2,0,7.1,3,7.1,8 C66.2,22.2,63.1,24.9,58.2,24.9z M58.6,10.6c-0.9,0-2,0.2-2.6,0.5v10.7c0.5,0.2,1.4,0.4,2.4,0.4c2.6,0,4.6-1.8,4.6-6 C62.9,12.7,61.2,10.6,58.6,10.6z" />
              <path d="M75.2,24.9c-4.7,0-7.1-1.9-7.1-5.1c0-4.5,4.8-5.4,9.8-5.6v-1c0-2.1-1.4-2.8-3.5-2.8c-1.5,0-3.4,0.5-4.5,1 l-0.8-2.3c1.3-0.6,3.5-1.2,5.7-1.2c3.9,0,6.3,1.5,6.3,5.5v10.3C79.9,24.4,77.5,24.9,75.2,24.9z M78,16.4c-3.3,0.2-6.7,0.5-6.7,3.4 c0,1.7,1.3,2.8,3.8,2.8c1.1,0,2.3-0.2,2.8-0.4V16.4z" />
              <path d="M88.6,24.9c-1.9,0-3.9-0.5-5.1-1.2l1.1-2.5c0.8,0.5,2.6,1.1,3.9,1.1c1.8,0,3-0.9,3-2.2c0-1.5-1.2-2.1-2.9-2.7 c-2.2-0.8-4.6-1.8-4.6-4.9c0-2.7,2.1-4.6,5.7-4.6c2,0,3.6,0.5,4.8,1.2l-1,2.3c-0.7-0.5-2.2-1-3.4-1c-1.7,0-2.7,0.9-2.7,2.1 c0,1.5,1.2,2,2.8,2.6c2.3,0.8,4.8,1.8,4.8,5C94.9,23,92.6,24.9,88.6,24.9z" />
              <path d="M111,16.4l-10.8,1.5c0.3,2.9,2.2,4.4,5,4.4c1.6,0,3.4-0.4,4.5-1l1,2.5c-1.3,0.7-3.5,1.2-5.7,1.2 c-5.1,0-8-3.3-8-8.5c0-5,2.8-8.5,7.4-8.5c4.2,0,6.8,2.8,6.8,7.2C111,15.5,111,15.9,111,16.4z M104.2,10.4c-2.5,0-4.2,1.9-4.3,5.3 l7.9-1.1C107.8,11.7,106.4,10.4,104.2,10.4z" />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 140 30">
              <path className={styles.box} d="M28.9,0.9H0v28.9h28.9V0.9z" />
              <path
                d="M13.5,17.3L8.5,8h2.3l2.9,5.9c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.4l0.1,0.1v0.1 c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.1,0.3,0.2,0.4c0.1-0.3,0.3-0.5,0.4-0.9c0.1-0.3,0.3-0.6,0.5-0.9L18.3,8h2.1l-5,9.4v6h-1.9V17.3z "
                fill="#FFFEFE"
              />
              <path
                d="M42.1,6.5c1.4,0,2.7,0.4,3.7,1.2l-1,1.2c-0.9-0.6-1.7-1-2.8-1c-1.6,0-2.9,0.9-3.6,2.5c-0.4,1-0.6,2.2-0.6,3.9 c0,1.3,0.2,2.3,0.5,3.1c0.8,1.8,2,2.7,4,2.7c1.1,0,2-0.3,2.9-1l1,1.3c-1.3,0.8-2.6,1.2-4,1.2c-1.7,0-3.2-0.7-4.3-2.1 c-1.2-1.3-1.6-3.2-1.6-5.4c0-2.2,0.6-4,1.7-5.4C38.9,7.3,40.4,6.5,42.1,6.5z"
                fill="black"
              />
              <path
                d="M47.6,16.1c0-1.7,0.4-3.1,1.3-4c0.9-1,1.9-1.5,3.3-1.5c1.5,0,2.8,0.6,3.7,1.8c0.7,1,1,2.3,1,4 c0,1.9-0.6,3.5-1.6,4.4c-0.8,0.7-1.7,1.1-2.9,1.1c-1.4,0-2.5-0.5-3.4-1.5C48,19.2,47.6,17.8,47.6,16.1z M54.4,13.3 c-0.5-0.9-1.2-1.3-2.2-1.3c-1.1,0-1.7,0.4-2.2,1.2c-0.4,0.6-0.5,1.5-0.5,2.8c0,1.6,0.2,2.8,0.7,3.5c0.5,0.7,1.2,1.1,2.1,1.1 c1.2,0,1.9-0.6,2.3-1.6c0.2-0.6,0.3-1.3,0.3-2.3C54.9,15,54.8,13.9,54.4,13.3z"
                fill="black"
              />
              <path
                d="M59.9,13.5c0-1.1-0.1-1.9-0.4-2.6l1.6-0.4c0.3,0.5,0.4,1.1,0.4,1.5v0.1c0.4-0.4,0.8-0.8,1.3-1.1 c0.7-0.4,1.3-0.6,1.8-0.6c0.9,0,1.6,0.4,2.1,1.1c0.1,0.2,0.3,0.5,0.4,0.7c1.2-1.2,2.2-1.7,3.4-1.7c0.8,0,1.4,0.3,1.9,0.8 c0.5,0.6,0.8,1.3,0.8,2v8h-1.7v-7.9c0-1.1-0.5-1.5-1.3-1.5c-0.5,0-1.1,0.2-1.5,0.6c-0.2,0.2-0.6,0.5-1.1,0.9l-0.2,0.2v7.8h-1.8v-7.5 c0-0.7-0.1-1.2-0.3-1.3C65,12.1,64.7,12,64.2,12c-0.8,0-1.6,0.5-2.7,1.4v7.9h-1.6V13.5L59.9,13.5z"
                fill="black"
              />
              <path
                d="M76.2,6.1L78,5.7c0.2,0.8,0.3,1.6,0.3,2.7v2.4c0,0.6,0,1,0,1.2c1-1,2-1.4,3.1-1.4c1.3,0,2.3,0.5,3,1.4 c0.8,1,1.2,2.3,1.2,4c0,1.7-0.4,3.1-1.2,4.1c-0.8,1.1-1.8,1.5-3.1,1.5c-0.6,0-1.1-0.1-1.6-0.4c-0.6-0.3-1-0.6-1.3-1 c-0.1,0.5-0.2,0.9-0.3,1.2h-1.6c0.2-0.5,0.3-1.3,0.3-2.7V8.6C76.6,7.5,76.5,6.6,76.2,6.1z M79,12.7c-0.3,0.2-0.6,0.5-0.8,0.8V19 c0.7,0.9,1.5,1.3,2.6,1.3c0.9,0,1.5-0.3,1.9-1c0.5-0.8,0.8-1.8,0.8-3.4c0-1.3-0.2-2.3-0.7-2.9c-0.4-0.6-1.1-0.9-2-0.9 C80.3,12,79.6,12.2,79,12.7z"
                fill="black"
              />
              <path
                d="M88,7.5c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.6-0.4,1-0.4s0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.1,0.7-0.4,1 c-0.3,0.3-0.6,0.4-1,0.4s-0.7-0.1-1-0.4S88,7.9,88,7.5z M88.4,21.4V10.8l1.7-0.3v10.9H88.4z"
                fill="black"
              />
              <path
                d="M93.9,13.5c0-0.8,0-1.3-0.1-1.4c0-0.3-0.2-0.6-0.4-1.1l1.6-0.5c0.3,0.6,0.4,1.1,0.4,1.6 c1.1-1.1,2.2-1.6,3.4-1.6c0.6,0,1.1,0.1,1.5,0.4c0.5,0.3,0.9,0.7,1.1,1.2c0.2,0.4,0.3,0.8,0.3,1.3v8.1h-1.6v-7.2 c0-0.9-0.1-1.4-0.4-1.7s-0.7-0.5-1.2-0.5c-0.4,0-1,0.2-1.5,0.5c-0.6,0.3-1.1,0.7-1.4,1.1v7.9h-1.6V13.5L93.9,13.5z"
                fill="black"
              />
              <path
                d="M105.6,13.1l-0.9-1.2c1.4-1,2.9-1.4,4.4-1.4c1.5,0,2.5,0.6,3,1.6c0.2,0.4,0.2,1,0.2,1.8v0.6l-0.1,3.5 c0,0.1,0,0.3,0,0.5c0,0.6,0,1,0.1,1.3c0.1,0.4,0.4,0.7,0.8,0.9l-0.9,1.2c-0.8-0.3-1.3-0.8-1.4-1.5c-1,1-2,1.4-3.1,1.4 c-1.1,0-1.9-0.3-2.6-0.9c-0.6-0.5-0.9-1.3-0.9-2.2c0-1.3,0.5-2.1,1.4-2.8c1-0.7,2.4-1,4.1-1c0.3,0,0.5,0,0.8,0V14 c0-0.9-0.1-1.4-0.4-1.6c-0.4-0.4-0.8-0.6-1.4-0.6c-0.6,0-1.3,0.2-2,0.5C106.4,12.5,106,12.8,105.6,13.1z M110.7,18.8l0.1-2.8 c-0.5,0-0.8,0-0.9,0c-1.5,0-2.5,0.3-3.1,0.9c-0.4,0.4-0.6,1-0.6,1.7c0,1.3,0.6,1.9,1.8,1.9C109.2,20.4,110.1,19.8,110.7,18.8z"
                fill="black"
              />
              <path
                d="M117.8,10.8h2.7l-0.5,1.3h-2.2V19c0,0.6,0.1,1,0.3,1.3c0.2,0.2,0.6,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.2l0.2,1.1 c-0.6,0.3-1.2,0.4-1.8,0.4c-1.6,0-2.4-0.8-2.4-2.4v-7.3h-1.4v-1.3h1.3v-0.2c0-0.2,0.1-1,0.2-2.2V8.1l1.7-0.4 C117.8,8.8,117.8,9.9,117.8,10.8z"
                fill="black"
              />
              <path
                d="M122.2,16.1c0-1.7,0.4-3.1,1.3-4c0.8-1,1.9-1.5,3.3-1.5c1.5,0,2.8,0.6,3.7,1.8c0.7,1,1,2.3,1,4 c0,1.9-0.6,3.5-1.6,4.4c-0.8,0.7-1.7,1.1-2.9,1.1c-1.4,0-2.5-0.5-3.4-1.5C122.7,19.2,122.2,17.8,122.2,16.1z M129.1,13.3 c-0.5-0.9-1.2-1.3-2.2-1.3c-1.1,0-1.7,0.4-2.2,1.2c-0.4,0.6-0.5,1.5-0.5,2.8c0,1.6,0.2,2.8,0.7,3.5c0.5,0.7,1.2,1.1,2.1,1.1 c1.2,0,1.9-0.6,2.3-1.6c0.2-0.6,0.3-1.3,0.3-2.3C129.6,15,129.4,13.9,129.1,13.3z"
                fill="black"
              />
              <path
                d="M134.6,13.3c0-1-0.1-1.7-0.4-2.3l1.6-0.5c0.3,0.6,0.4,1.1,0.4,1.6v0.2c0.9-1.2,1.8-1.7,3-1.7 c0.2,0,0.4,0,0.6,0.1l-0.7,1.8c-0.2-0.1-0.4-0.1-0.5-0.1c-0.4,0-0.9,0.1-1.3,0.4c-0.4,0.3-0.8,0.6-1,1c-0.1,0.3-0.2,0.7-0.2,1.2v6.7 h-1.6V13.3z"
                fill="black"
              />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 136 36">
              <path d="M45.7,14.4H42v-2.2h10v2.2h-3.7v9.3h-2.6V14.4z M54.5,16c0.3-0.4,0.7-0.7,1.2-1c0.5-0.2,1.1-0.3,1.8-0.3v2.4 c-0.3,0-0.5,0-0.6,0c-0.7,0-1.3,0.2-1.7,0.6s-0.6,1-0.6,1.8v4.2H52v-8.8h2.4L54.5,16L54.5,16z M67,14.9v8.8h-2.4v-1 c-0.3,0.4-0.7,0.7-1.2,0.9c-0.5,0.2-1,0.3-1.5,0.3c-1.2,0-2.1-0.3-2.7-1c-0.7-0.7-1-1.7-1-3v-5h2.6v4.6c0,1.4,0.6,2.1,1.8,2.1 c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-1,0.6-1.8v-4.3C64.7,14.9,67,14.9,67,14.9z M71.4,23.8c-0.7,0-1.4-0.1-2.1-0.3 c-0.7-0.2-1.3-0.4-1.7-0.7l0.9-1.8c0.4,0.3,0.9,0.5,1.4,0.6c0.6,0.2,1.1,0.2,1.6,0.2c1.1,0,1.6-0.3,1.6-0.8c0-0.3-0.1-0.4-0.4-0.5 s-0.7-0.2-1.4-0.3c-0.7-0.1-1.3-0.2-1.8-0.4c-0.5-0.1-0.9-0.4-1.2-0.8c-0.3-0.4-0.5-0.9-0.5-1.5s0.2-1,0.5-1.5 c0.3-0.4,0.8-0.8,1.4-1s1.4-0.4,2.2-0.4c0.6,0,1.2,0.1,1.8,0.2c0.6,0.1,1.1,0.3,1.5,0.6l-0.9,1.8c-0.8-0.4-1.6-0.7-2.5-0.7 c-0.5,0-1,0.1-1.2,0.2c-0.3,0.2-0.4,0.3-0.4,0.6c0,0.3,0.1,0.5,0.4,0.6s0.8,0.2,1.4,0.3c0.7,0.1,1.3,0.3,1.8,0.4s0.9,0.4,1.2,0.7 c0.3,0.4,0.5,0.9,0.5,1.5c0,0.5-0.2,1-0.5,1.5c-0.3,0.4-0.8,0.8-1.4,1C73,23.7,72.2,23.8,71.4,23.8z M81.8,23.2 c-0.3,0.2-0.6,0.3-0.9,0.4c-0.4,0.1-0.7,0.1-1.1,0.1c-1,0-1.9-0.3-2.4-0.8c-0.6-0.5-0.9-1.3-0.9-2.4V17h-1.4v-2h1.4v-2.1H79V15h2.2 v2H79v3.6c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.3L81.8,23.2z M103.4,12.2l-3.7,11.4h-2.8l-2.5-7.8 l-2.6,7.8H89l-3.8-11.4h2.7l2.6,8l2.7-8h2.5l2.6,8.1l2.7-8.1C101,12.2,103.4,12.2,103.4,12.2z M106.6,14.7c1.4,0,2.4,0.3,3.1,1 c0.7,0.6,1.1,1.6,1.1,2.9v5h-2.4v-1.1c-0.5,0.8-1.4,1.2-2.7,1.2c-0.7,0-1.3-0.1-1.8-0.3c-0.5-0.2-0.9-0.5-1.1-0.9 c-0.3-0.4-0.4-0.9-0.4-1.4c0-0.8,0.3-1.5,0.9-1.9c0.6-0.5,1.6-0.7,2.9-0.7h2c0-0.6-0.2-1-0.5-1.3s-0.8-0.5-1.5-0.5 c-0.5,0-0.9,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1.1,0.6l-0.9-1.8c0.5-0.3,1.1-0.6,1.7-0.8C105.2,14.8,105.9,14.7,106.6,14.7z M106.4,22.1 c0.4,0,0.8-0.1,1.2-0.3c0.3-0.2,0.6-0.5,0.7-0.9V20h-1.7c-1,0-1.6,0.3-1.6,1c0,0.3,0.1,0.6,0.4,0.8C105.6,22,105.9,22.1,106.4,22.1z M112.1,11.5h2.6v12.1h-2.6V11.5z M116.1,11.5h2.6v12.1h-2.6V11.5z M128.6,19.3c0,0,0,0.3,0,0.7h-6.7c0.1,0.5,0.4,1,0.8,1.3 s1,0.5,1.7,0.5c0.5,0,0.9-0.1,1.2-0.2c0.4-0.1,0.7-0.4,1-0.7l1.4,1.5c-0.8,0.9-2,1.4-3.6,1.4c-1,0-1.9-0.2-2.6-0.6 c-0.8-0.4-1.4-0.9-1.8-1.6s-0.6-1.5-0.6-2.3c0-0.9,0.2-1.6,0.6-2.3c0.4-0.7,1-1.2,1.7-1.6c0.7-0.4,1.5-0.6,2.4-0.6s1.6,0.2,2.3,0.6 c0.7,0.4,1.2,0.9,1.6,1.6C128.4,17.6,128.6,18.4,128.6,19.3z M124.1,16.7c-0.6,0-1.1,0.2-1.5,0.5s-0.6,0.8-0.7,1.3h4.3 c-0.1-0.6-0.3-1-0.7-1.3C125.1,16.8,124.6,16.7,124.1,16.7z M135,23.2c-0.3,0.2-0.6,0.3-0.9,0.4c-0.4,0.1-0.7,0.1-1.1,0.1 c-1,0-1.9-0.3-2.4-0.8c-0.6-0.5-0.9-1.3-0.9-2.4V17h-1.4v-2h1.4v-2.1h2.6V15h2.2v2h-2.2v3.6c0,0.4,0.1,0.7,0.3,0.9 c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.3L135,23.2z" />
              <path
                className={styles.box}
                d="M23.4,1H12.3C6.1,1,1,6.1,1,12.3v11.1c0,6.3,5.1,11.3,11.3,11.3h11.1c6.3,0,11.3-5.1,11.3-11.3V12.3 C34.7,6.1,29.7,1,23.4,1z"
              />
              <path d="M17.3,7.9c0.4-0.3,1-0.3,1.4,0c2.7,2.3,5.8,2.2,7,2.2c0.1,0,0.1,0,0.2,0c0.3,0,0.6,0.1,0.8,0.3s0.3,0.5,0.3,0.8 c-0.1,3.8-0.2,6.5-0.5,8.4c-0.3,2-0.8,3.3-1.5,4.4c-0.7,1-1.7,1.6-2.7,2.2c-0.2,0.1-0.4,0.2-0.5,0.3c-0.9,0.5-1.9,1-3,1.8 c-0.4,0.3-0.9,0.3-1.2,0c-1.2-0.8-2.1-1.4-3-1.8c-0.2-0.1-0.4-0.2-0.5-0.3c-1-0.6-2-1.1-2.7-2.2c-0.7-1-1.2-2.4-1.5-4.4 s-0.4-4.7-0.5-8.4c0-0.3,0.1-0.6,0.3-0.8s0.5-0.3,0.8-0.3c0,0,0.1,0,0.2,0C11.5,10.2,14.6,10.2,17.3,7.9z M18,10.1 c-2.5,1.8-5.2,2.1-6.7,2.2c0.1,3.2,0.2,5.4,0.5,7.1c0.3,1.8,0.7,2.8,1.1,3.4c0.4,0.6,1,1,2,1.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.7,0.4,1.6,0.9,2.6,1.6c1-0.7,1.9-1.2,2.7-1.6c0.2-0.1,0.3-0.2,0.5-0.3c1-0.5,1.6-0.9,2-1.6c0.5-0.6,0.8-1.6,1.1-3.4 c0.2-1.6,0.4-3.9,0.5-7.1C23.2,12.2,20.5,11.9,18,10.1z" />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 87 25">
              <path d="M0,10.2v9.4h3.8c4.6,0,5.2,0,6.5-0.4c2.1-0.5,3.8-1.6,4.9-3.1c0.5-0.7,0.9-1.5,1.2-2.3c0.8-2.2,0.7-5.3-0.2-7.5 C15.2,3.5,13,1.7,9.9,1.1C8.8,0.8,8.8,0.8,4.3,0.8L0,0.8V10.2z M8.8,4.2c1.5,0.3,2.6,1,3.4,2c1.3,1.8,1.6,5,0.5,7.1 c-0.8,1.5-2,2.4-3.9,2.9c-0.4,0.1-0.5,0.1-2.8,0.1l-2.4,0v-6.1V4.1l2.3,0C8.2,4.1,8.3,4.2,8.8,4.2z M23.3,6.7 c-0.8,0.1-1.5,0.3-2.2,0.6c-1.1,0.5-1.9,1.4-2.4,2.5c-0.2,0.4-0.3,0.8-0.3,0.8c0,0,0.6,0.2,1.4,0.4c0.8,0.2,1.4,0.4,1.5,0.4 c0.1,0,0.1-0.1,0.2-0.3c0.4-1.1,1.3-1.8,2.6-1.8c0.9,0,1.5,0.2,2,0.7c0.4,0.4,0.6,0.8,0.6,1.7c0,0.6,0,0.6,0,0.6 c0,0-0.4-0.1-0.8-0.2c-1.2-0.3-1.5-0.3-2.5-0.3c-1.2,0-2,0.1-2.8,0.5c-1.3,0.6-1.9,1.6-2.1,3c-0.1,1.3,0.2,2.5,1.1,3.3 c1,0.9,2.4,1.3,4,1.1c1.4-0.2,2.4-0.8,3.1-1.8l0.2-0.3l0,1l0,1h1.6h1.6l0-4.4l0-4.4L30,10.3c-0.5-2-1.8-3.1-4.1-3.6 C25.5,6.7,23.7,6.6,23.3,6.7z M25.2,14.3c0.2,0,0.7,0.2,1,0.3c0.7,0.2,0.7,0.2,0.6,0.7c-0.1,0.9-0.8,1.6-1.7,1.8 c-0.3,0.1-1.2,0.1-1.6,0.1c-0.6-0.1-1.1-0.4-1.3-0.9c-0.1-0.3-0.2-0.8-0.1-1.1c0.1-0.5,0.6-0.8,1.2-1C23.8,14.2,24.7,14.2,25.2,14.3 z M38.9,6.7c-1.2,0.2-2.3,0.9-3.1,1.7c-0.1,0.1-0.2,0.3-0.3,0.3c0,0,0-0.4,0-0.9V6.9h-1.7h-1.7v9v9h1.7h1.7l0-3.5l0-3.5l0.2,0.2 c0.8,1.1,2.3,1.7,4,1.6c2-0.1,3.7-1,4.8-2.5c1.5-2.3,1.5-5.9-0.1-8.2c-0.3-0.4-0.9-1-1.3-1.3c-0.6-0.4-1.4-0.8-2.3-1 C40.6,6.6,39.3,6.6,38.9,6.7z M39.8,9.7c0.9,0.2,1.7,0.9,2.1,1.7c0.3,0.6,0.5,1.5,0.4,2.3c-0.1,1.5-1,2.6-2.3,3 c-0.3,0.1-0.4,0.1-0.9,0.1c-0.7,0-1.1-0.1-1.7-0.4c-0.3-0.2-0.5-0.3-0.8-0.6c-0.3-0.3-0.4-0.4-0.6-0.8c-0.4-0.7-0.5-1.5-0.4-2.3 c0.2-1.7,1.1-2.9,2.7-3.2C38.5,9.6,39.4,9.6,39.8,9.7z M54,6.7c-0.7,0.1-1.5,0.4-2.1,0.9c-0.3,0.2-0.9,0.7-1.1,1l-0.1,0.2V7.8V6.9 H49h-1.7v9v9h1.7h1.7v-3.4V18l0.2,0.2c0.6,0.8,1.5,1.3,2.6,1.5c0.5,0.1,1.8,0.1,2.3,0c1.2-0.2,2.3-0.8,3.1-1.6 c1.3-1.3,1.9-3,1.8-5.2c-0.1-2-0.7-3.6-1.9-4.7c-1.1-1.1-2.5-1.6-4-1.6C54.6,6.6,54.2,6.7,54,6.7z M54.9,9.7 c1.3,0.3,2.1,1.4,2.4,2.8c0.1,0.4,0.1,1.4,0,1.8c-0.3,1.3-1.1,2.2-2.3,2.6c-0.4,0.1-1.3,0.2-1.7,0.1c-1.3-0.3-2.3-1.3-2.6-2.7 c-0.1-0.4-0.1-1.3,0-1.8c0.2-0.8,0.4-1.4,1-1.9c0.5-0.5,1-0.8,1.7-0.9C53.7,9.6,54.6,9.6,54.9,9.7z M67.8,6.7 c-1.5,0.2-2.7,0.8-3.6,1.8c-1,1-1.6,2.3-1.8,3.9c-0.1,0.6,0,1.8,0.1,2.4c0.4,2,1.5,3.6,3.3,4.5c1.9,0.9,4.5,1,6.3,0.1 c0.8-0.4,1.5-1,2-1.6c0.3-0.4,0.8-1.4,0.8-1.6c0-0.1-0.1-0.1-1.4-0.7c-1.7-0.7-1.5-0.6-1.5-0.5c0,0.1-0.2,0.6-0.4,0.9 c-0.3,0.5-0.8,0.9-1.3,1c-0.9,0.3-2,0.2-2.9-0.2c-0.3-0.2-0.5-0.3-0.8-0.6c-0.3-0.3-0.4-0.4-0.6-0.8c-0.2-0.4-0.3-0.6-0.3-1.1l0-0.3 l4.3,0l4.4,0l0.1-0.3c0-0.2,0.1-0.6,0.1-1.2c0-0.8,0-1-0.1-1.3c-0.5-2.3-2-3.7-4.3-4.2c-0.3-0.1-0.6-0.1-1.3-0.1 C68.4,6.7,67.9,6.7,67.8,6.7z M69.6,9.5c0.6,0.2,1.2,0.6,1.5,1.1c0.1,0.2,0.2,0.6,0.2,0.8v0.2h-2.7c-1.5,0-2.7,0-2.7,0 c0,0,0-0.1,0.1-0.2C66.4,9.9,67.9,9.1,69.6,9.5z M82.4,6.7c-0.9,0.2-1.6,0.7-2,1.4l-0.2,0.3V7.7V6.9h-1.7h-1.7v6.4v6.4h1.7h1.7 l0-4.4c0-4.3,0-4.4,0.1-4.6c0.1-0.4,0.3-0.7,0.6-0.9c0.3-0.2,0.6-0.3,0.9-0.3c0.8-0.1,1.5,0.4,1.7,1.1c0.1,0.2,0.1,0.3,0,0.7 c0,0.3,0,0.6-0.1,0.6l0,0.1h1.6h1.6l0-0.2c0.2-0.8,0.2-1.9,0-2.5c-0.4-1.4-1.4-2.3-2.8-2.6C83.6,6.6,82.8,6.6,82.4,6.7z" />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 157 30">
              <path d="M26.2,15.4c0-2.3-0.7-4.5-1.9-6.4l4.6-4.6l-3.5-3.5l-4.6,4.6C16.9,3,11.9,3,8,5.5L3.5,0.9L0,4.4L4.6,9 c-2.5,3.9-2.5,8.9,0,12.8L0,26.4l3.5,3.5l4.6-4.6c3.9,2.5,8.9,2.5,12.8,0l4.6,4.6l3.5-3.5l-4.6-4.6C25.5,19.9,26.2,17.7,26.2,15.4z M7.6,15.4c0-2.8,1.7-5.3,4.3-6.4c2.6-1,5.6-0.4,7.5,1.6c1.9,2,2.5,5,1.3,7.5l-4.5-4.5l-3.5,3.5l4.5,4.5c-2.1,1-4.6,0.8-6.5-0.5 C8.8,19.9,7.6,17.7,7.6,15.4z" />
              <path d="M51.1,15.5c0,2.8-1.4,5.4-4,6.6l1.4,1.8l-2.8,1.4l-1.9-2.5h-0.1c-4.6,0-7.3-3.4-7.3-7.3c0-3.9,2.7-7.3,7.3-7.3 C48.3,8.3,51.1,11.6,51.1,15.5z M43.7,19.9c2.6,0,4-2,4-4.4c0-2.4-1.4-4.4-4-4.4c-2.6,0-4,2-4,4.4C39.7,17.9,41.1,19.9,43.7,19.9z M56.2,22.6c-2.3,0-3.5-1.4-3.5-3.9v-5.9h3v5.2c0,1.3,0.4,2,1.6,2c1.3,0,1.8-0.8,1.8-2.1v-5.1h3v9.4h-3V21 C58.6,22,57.6,22.6,56.2,22.6z M68.4,22.6c-2.8,0-4.5-2.1-4.5-5c0-2.8,1.7-5,4.5-5c1.4,0,2.4,0.7,3,1.6V13h3v9.4h-3v-1.3 C70.9,22,69.7,22.6,68.4,22.6z M69.3,20.2c1.5,0,2.3-1.1,2.3-2.5c0-1.4-0.8-2.5-2.3-2.5c-1.4,0-2.3,1-2.3,2.5 C67,19.1,67.9,20.2,69.3,20.2z M76.9,12.9h3v1.4c0.5-1.1,1.6-1.6,3.1-1.6c2.3,0,3.5,1.3,3.5,3.9v5.9h-3v-4.9c0-1.6-0.4-2.3-1.7-2.3 c-1.2,0-1.8,0.8-1.8,2.2v4.9h-3L76.9,12.9L76.9,12.9z M93.7,20.1c0.4,0,0.8,0,1-0.1v2.4c-0.4,0.1-1.1,0.2-2,0.2 c-1.4,0-3.4-0.3-3.4-3.5v-3.8h-1.5V13h1.5v-2.8h3V13h2.1v2.4h-2.1v3.1C92.4,19.8,93,20.1,93.7,20.1z M100.3,22.7 c-2.8,0-4.5-1.4-4.5-3.1h3c0,0.7,0.6,1.1,1.6,1.1c0.7,0,1.1-0.3,1.1-0.9c0-0.4-0.2-0.7-0.7-0.8l-2.3-0.6c-1.6-0.4-2.4-1.4-2.4-2.7 c0-1.8,1.6-3,4-3c2.8,0,4.2,1.1,4.2,2.9h-3c0-0.7-0.5-1-1.3-1c-0.7,0-1.1,0.3-1.1,0.8c0,0.4,0.3,0.7,0.8,0.8l2.2,0.6 c1.5,0.4,2.4,1.3,2.4,2.6C104.4,21.4,102.9,22.7,100.3,22.7z M111.2,20.1c0.4,0,0.8,0,1-0.1v2.4c-0.4,0.1-1.1,0.2-2,0.2 c-1.4,0-3.4-0.3-3.4-3.5v-3.8h-1.5V13h1.5v-2.8h3V13h2.1v2.4h-2.1v3.1C109.9,19.8,110.5,20.1,111.2,20.1z M117.8,22.6 c-2.8,0-4.5-2.1-4.5-5c0-2.8,1.7-5,4.5-5c1.4,0,2.4,0.7,3,1.6V13h3v9.4h-3v-1.3C120.3,22,119.1,22.6,117.8,22.6z M118.7,20.2 c1.5,0,2.3-1.1,2.3-2.5c0-1.4-0.8-2.5-2.3-2.5c-1.4,0-2.3,1-2.3,2.5C116.4,19.1,117.3,20.2,118.7,20.2z M126.3,12.9h3v1.4 c0.4-0.9,1.4-1.6,2.7-1.6c1.7,0,2.6,0.8,3,1.7c0.5-1,1.6-1.7,3-1.7c2.7,0,3.4,1.9,3.4,3.9v5.9h-3v-5.3c0-1.3-0.5-1.9-1.4-1.9 c-0.9,0-1.6,0.5-1.6,2.3v4.9h-3V17c0-1.3-0.5-1.8-1.4-1.8c-1,0-1.6,0.5-1.6,2.3v4.9h-3V12.9L126.3,12.9z M143.7,12.9h3v1.4 c0.5-0.9,1.7-1.6,3.1-1.6c2.6,0,4.3,2,4.3,5s-1.8,5-4.4,5c-1.4,0-2.5-0.7-3-1.6v5.3h-3L143.7,12.9z M148.8,20.2c1.3,0,2.2-1,2.2-2.5 c0-1.5-0.9-2.5-2.2-2.5c-1.4,0-2.3,1-2.3,2.5C146.5,19.1,147.5,20.2,148.8,20.2z M154.9,14.9c-0.2,0-0.5-0.1-0.7-0.2 c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.2,0.1-0.4,0.2-0.7c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.1,0.4-0.2,0.7-0.2 c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.4,0.2,0.7c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.4,0.5 C155.4,14.9,155.2,14.9,154.9,14.9z M154.9,14.7c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2-0.1-0.4-0.1-0.5c-0.2-0.3-0.5-0.5-0.9-0.5c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.2-0.1,0.3-0.1,0.5 c0,0.2,0.1,0.4,0.1,0.5c0.1,0.2,0.2,0.3,0.4,0.4C154.5,14.6,154.7,14.7,154.9,14.7z M154.5,12.9h0.5c0.1,0,0.2,0.1,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.2l0.3,0.5h-0.2l-0.3-0.4h-0.3v0.4h-0.2V12.9L154.5,12.9z M155,13.7c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1h-0.3v0.5H155z" />
            </svg>
          </a>

          <a>
            <svg viewBox="0 0 206 15">
              <path d="M2.3,2.1v4.2H8v1.9H2.3v6.1H0v-14h9.5V2L2.3,2.1z M22.2,0.2c1.3,0,1.9,0.2,2.5,0.6C25.4,1.5,26,2.5,26,7.2 c0,4.7-0.6,5.7-1.3,6.4c-0.6,0.4-1,0.6-2.5,0.6h-4.2c-1.3,0-1.9-0.2-2.5-0.6c-0.8-0.8-1.3-1.7-1.3-6.4c0-4.7,0.6-5.7,1.3-6.4 c0.6-0.4,1-0.6,2.5-0.6H22.2z M17.1,12.2c0.2,0.2,0.4,0.2,1.1,0.2H22c0.8,0,1,0,1.1-0.2c0.2-0.2,0.6-0.8,0.6-4.9 c0-4-0.4-4.8-0.6-4.9c-0.2-0.2-0.4-0.2-1.1-0.2h-3.8c-0.8,0-1,0-1.1,0.2c-0.2,0.2-0.6,0.8-0.6,4.9C16.7,11.2,16.9,12,17.1,12.2z M43.5,8.4c0,3.6-0.4,4.2-1.1,4.9c-0.8,0.6-1.7,0.8-3.6,0.8h-2.1c-1.9,0-2.8-0.2-3.6-0.8c-0.8-0.8-1.1-1.5-1.1-4.9V0.2h2.3v8.7 c0,2.5,0.2,2.8,0.6,3.1c0.2,0.2,0.6,0.4,2.3,0.4h1.3c1.5,0,1.9,0,2.3-0.4c0.4-0.4,0.4-0.4,0.4-3.1V0.2h2.3L43.5,8.4L43.5,8.4z M61.7,14.3h-2.5c-0.6,0-0.8-0.2-1.1-0.6L52.4,3.2h-0.4v11h-2.3v-14h2.7c0.6,0,0.8,0.2,1.1,0.6l5.5,9.9h0.4V0h2.3L61.7,14.3 L61.7,14.3z M74.6,0.2c1.7,0,2.8,0.2,3.6,1c1,0.8,1.5,2.7,1.5,6.1c0,3.4-0.4,5.1-1.5,6.1c-0.8,0.8-1.7,1-3.6,1h-6.4v-14H74.6z M76.3,2.5c-0.4-0.4-1-0.4-1.7-0.4h-4v10.2h4c1,0,1.3,0,1.7-0.4c0.6-0.6,0.8-1.5,0.8-4.6C77.3,4,76.9,3.1,76.3,2.5z M95.5,14.3H85.4 v-14h10.1v1.9h-7.8v3.8h6.4v1.9h-6.4v4.3h7.8V14.3z M109.4,8.7c-0.2-0.2-0.8-0.2-1.5-0.2h-4.2v5.9h-2.3v-14h8c1,0,1.7,0.2,2.1,0.6 c0.6,0.6,1,1.3,1,3.4c0,2.5-0.8,3.2-2.5,3.4c1.5,0.2,2.1,0.6,2.3,2.7c0,1.9,0.2,3.2,0.2,4h-2.3c-0.2-1-0.2-2.3-0.2-3.8 C109.7,9.3,109.5,8.9,109.4,8.7z M108.6,6.6c0.6,0,0.8-0.2,1-0.2c0.2-0.2,0.4-0.6,0.4-2.1c0-1.5-0.2-1.9-0.4-2.1 c-0.2-0.2-0.4-0.2-1-0.2h-4.9v4.6L108.6,6.6z M128.3,13.7c-0.4,0.4-1.1,0.6-2.3,0.6h-4.9c-1.1,0-1.9-0.2-2.3-0.6 c-0.6-0.6-0.8-1.3-0.8-3.8h2.3c0,1.7,0.2,2.1,0.2,2.3c0.2,0.2,0.4,0.2,1,0.2h4.2c0.6,0,0.8,0,1-0.2c0.2-0.2,0.2-0.8,0.2-1.9 c0-1,0-1.3-0.2-1.5c-0.2-0.2-0.4-0.2-1-0.2l-4.6-0.4c-1.1-0.2-1.7-0.4-2.1-0.8c-0.6-0.6-0.8-1.1-0.8-3.1c0-1.9,0.2-2.7,1-3.4 c0.4-0.4,1.1-0.6,2.3-0.6h4.6c1.1,0,1.9,0.2,2.3,0.6c0.6,0.6,0.8,1.1,0.8,3.8h-2.3c0-1.7-0.2-2.1-0.2-2.1c-0.2-0.2-0.4-0.2-1-0.2 h-3.8c-0.6,0-0.8,0-1,0.2c-0.2,0.2-0.2,0.8-0.2,1.9c0,1,0,1.3,0.2,1.5c0.2,0.2,0.4,0.2,1,0.2l4.6,0.4c1,0,1.7,0.2,2.1,0.8 c0.6,0.6,0.8,1.1,0.8,3.2C129.3,12.2,129.1,12.9,128.3,13.7z M145.2,2.1v4.2h5.7v1.9h-5.7v6.1h-2.3v-14h9.5V2L145.2,2.1z M169.3,8.4 c0,3.6-0.4,4.2-1.1,4.9c-0.8,0.6-1.7,0.8-3.6,0.8h-2.1c-1.9,0-2.8-0.2-3.6-0.8c-0.8-0.8-1.1-1.5-1.1-4.9V0.2h2.3v8.7 c0,2.5,0.2,2.8,0.6,3.1c0.2,0.2,0.6,0.4,2.3,0.4h1.3c1.5,0,1.9,0,2.3-0.4c0.4-0.4,0.4-0.4,0.4-3.1V0.2h2.3L169.3,8.4L169.3,8.4z M187.6,14.3h-2.5c-0.6,0-0.8-0.2-1.1-0.6l-5.7-10.4h-0.4v11h-2.3v-14h2.7c0.6,0,0.8,0.2,1.1,0.6l5.5,9.9h0.4V0h2.3L187.6,14.3 L187.6,14.3z M200.5,0.2c1.7,0,2.8,0.2,3.6,1c1,0.8,1.5,2.7,1.5,6.1c0,3.4-0.4,5.1-1.5,6.1c-0.8,0.8-1.7,1-3.6,1H194v-14H200.5z M202.2,2.5c-0.4-0.4-1-0.4-1.7-0.4h-4v10.2h4c1,0,1.3,0,1.7-0.4c0.6-0.6,0.8-1.5,0.8-4.6C202.9,4,202.7,3.1,202.2,2.5z" />
            </svg>
          </a>
          <a>
            <svg viewBox="0 0 118 25">
              <path d="M0,0.2h4.2c1.1,0,1.7,0.2,2.3,0.8C6.8,1.3,7,1.8,7,2.3c0,1-0.5,1.6-1.3,1.9c1,0.3,1.6,0.9,1.6,2.1 c0,1.5-1.1,2.4-3.1,2.4H0V0.2z M3.6,3.6c0.7,0,1.1-0.2,1.1-0.7c0-0.5-0.4-0.7-1.1-0.7H2.2v1.5L3.6,3.6L3.6,3.6z M3.9,6.9 C4.6,6.9,5,6.6,5,6.1c0-0.5-0.4-0.8-1.1-0.8H2.1v1.6L3.9,6.9L3.9,6.9z M12.6,0.2h2.3v6.5h3.9v2.1h-6.2V0.2z M23.3,4.5 c0-2.4,1.9-4.5,4.4-4.5c2.5,0,4.4,2,4.4,4.4c0,2.4-1.9,4.4-4.4,4.4C25.2,8.9,23.3,6.9,23.3,4.5z M29.9,4.5c0-1.2-0.8-2.4-2.1-2.4 c-1.2,0-2,1-2,2.3c0,1.2,0.8,2.3,2.1,2.3C29,6.8,29.9,5.7,29.9,4.5z M37.3,4.5C37.3,2,39.1,0,41.6,0c1.7,0,2.7,0.7,3.5,1.8l-1.7,1.3 c-0.5-0.6-1-1-1.8-1c-1.1,0-2,1-2,2.3c0,1.2,0.8,2.3,2,2.3c0.8,0,1.4-0.4,1.8-1l1.7,1.2c-0.8,1.1-1.8,1.9-3.6,1.9 C39.2,8.9,37.3,7.1,37.3,4.5z M50.5,0.2h2.3v3.5l2.8-3.5h2.7l-3.1,3.7l3.2,4.9h-2.7l-2-3.2l-0.8,0.9v2.2h-2.3V0.2z M62.3,4.5 C62.3,2,64.1,0,66.6,0c1.7,0,2.7,0.7,3.5,1.8l-1.7,1.3c-0.5-0.6-1-1-1.8-1c-1.1,0-2,1-2,2.3c0,1.2,0.8,2.3,2,2.3 c0.8,0,1.4-0.4,1.8-1l1.7,1.2c-0.8,1.1-1.8,1.9-3.6,1.9C64.2,8.9,62.3,7.1,62.3,4.5z M75.4,0.2h2.3v3.2h2.9V0.2h2.3v8.5h-2.3V5.5 h-2.9v3.2h-2.3V0.2z M91.4,0.2h2.2l3.5,8.6h-2.4l-0.6-1.5h-3.2l-0.6,1.5h-2.4L91.4,0.2z M93.4,5.4l-0.9-2.4l-0.9,2.4H93.4z M102.1,0.2h2.3v8.5h-2.3V0.2z M110.2,0.2h2.1l3.4,4.5V0.2h2.3v8.5h-2l-3.5-4.6v4.6h-2.3L110.2,0.2L110.2,0.2z M0.1,20.7 c0-2.4,1.7-4.4,4.2-4.4c1.5,0,2.3,0.6,3.2,1.3l-0.6,0.7c-0.8-0.7-1.5-1.2-2.6-1.2c-1.8,0-3.2,1.5-3.2,3.5s1.4,3.6,3.2,3.6 c1.1,0,1.9-0.5,2.6-1.2l0.6,0.6C6.6,24.4,5.6,25,4.2,25C1.8,25.1,0.1,23.1,0.1,20.7z M16.4,16.3h0.8l3.7,8.6h-1l-1-2.3h-4.5l-1,2.3 h-1L16.4,16.3z M18.7,21.8l-1.9-4.3l-1.9,4.3H18.7z M26.8,16.4h3c1.8,0,3,1,3,2.7c0,1.8-1.4,2.7-3.3,2.7h-2v3h-0.9L26.8,16.4 L26.8,16.4L26.8,16.4z M29.8,21.1c1.4,0,2.3-0.8,2.3-1.9c0-1.2-0.9-1.8-2.2-1.8h-2v3.8L29.8,21.1L29.8,21.1L29.8,21.1z M39,16.4h0.9 v8.5H39V16.4z M48.7,17.3H46v-0.9h6.5v0.9h-2.7v7.6h-0.9L48.7,17.3L48.7,17.3z M60.4,16.3h0.8l3.7,8.6h-1l-1-2.3h-4.5l-1,2.3h-1 L60.4,16.3z M62.7,21.8l-1.9-4.3l-1.9,4.3H62.7z M70.8,16.4h0.9v7.6h4.6v0.9h-5.6L70.8,16.4L70.8,16.4z" />
            </svg>
          </a>
        </div>
      </div> */}
      <div className={styles.info}>
        <div className={styles.public}>
          {/* <div className={styles.loop}>
            <p className={styles.title}>Stay in the loop</p>
            <p className={styles.desc}>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating Africeum.
            </p>
            <div className={styles.sign}>
              <input type="email" placeholder="Your email address" />
              <button>Sign Up</button>
            </div>
          </div> */}
          <div className={styles.community}>
            <p className={styles.title}>Join the community</p>
            <div className={styles.media}>
              <a href="https://twitter.com/africeum" target={"_blank"}>
                <button>
                  <svg
                    fill="#FFFFFF"
                    style={{ height: "20px", width: "30px" }}
                    viewBox="0 0 18 16"
                  >
                    <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path>
                  </svg>
                </button>
              </a>
              <a href="https://www.instagram.com/africeum/" target={"_blank"}>
                <button>
                  <svg
                    fill="#FFFFFF"
                    style={{ height: "20px", width: "30px" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path>
                    <path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path>
                    <path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path>
                  </svg>
                </button>
              </a>
              <a
                href="https://www.facebook.com/Africeum-llc-105920905266354"
                target="_blank"
              >
                <button>
                  <FaFacebookF color="white" size={"22px"} />
                  {/* <svg
                    fill="#FFFFFF"
                    style={{ height: "20px", width: "30px" }}
                    viewBox="0 0 22 16"
                  >
                    <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path>
                  </svg> */}
                </button>
              </a>
              <a href="https://t.me/+xxQJv1IPirxmODkx" target={"_blank"}>
                <button>
                  <FaTelegramPlane color="white" size={"22px"} />
                  {/* <svg
                    fill="#FFFFFF"
                    style={{ height: "20px", width: "30px" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path>
                  </svg> */}
                </button>
              </a>
              <a>
                <button>
                  <svg
                    fill="#FFFFFF"
                    style={{ height: "20px", width: "30px" }}
                    viewBox="0 0 20 18"
                  >
                    <path d="M9.99433 3.33325C9.99433 3.33325 4.26441 3.33326 2.82628 3.70695C2.05625 3.9221 1.4222 4.55617 1.20704 5.33752C0.833352 6.77565 0.833344 9.75391 0.833344 9.75391C0.833344 9.75391 0.833352 12.7435 1.20704 14.159C1.4222 14.9403 2.04493 15.563 2.82628 15.7782C4.27574 16.1632 9.99433 16.1632 9.99433 16.1632C9.99433 16.1632 15.7356 16.1632 17.1737 15.7895C17.9551 15.5744 18.5778 14.963 18.7816 14.1703C19.1666 12.7435 19.1666 9.76524 19.1666 9.76524C19.1666 9.76524 19.178 6.77565 18.7816 5.33752C18.5778 4.55617 17.9551 3.93344 17.1737 3.72961C15.7356 3.33327 9.99433 3.33325 9.99433 3.33325ZM8.17116 7.00225L12.9386 9.75391L8.17116 12.4942V7.00225Z"></path>
                  </svg>
                </button>
              </a>
              <a>
                <button className={styles.mail}>
                  <FiMail />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.opensea}>
          <div className={styles.container}>
            <img src="/logos.png" />
            <h1>Africeum</h1>
            <p>
              The world&apos;s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkcontainer}>
              <p className={styles.linktitle}>GET STARTED</p>
              <ul>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    What is Africeum
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.africeum.com/investor.html"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Investor
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.africeum.com/roadmap.html"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkcontainer}>
              <p className={styles.linktitle}>FOR INVESTORS</p>
              <ul>
                <li>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0xb9bFE9241aCFFBe7f5B06C4e668c4a43b8431D3a"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Africeum Contract Address
                  </a>
                </li>
                <li>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0xb9bFE9241aCFFBe7f5B06C4e668c4a43b8431D3a"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Get Africeum
                  </a>
                </li>
                <li>
                  <a
                    href="https://bscscan.com/token/0xb9bFE9241aCFFBe7f5B06C4e668c4a43b8431D3a"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.linkcontainer}>
              <p className={styles.linktitle}>FOR ARTISTS</p>
              <ul>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Getting started with NFTs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    How to mint an NFT
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Monetize my art
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkcontainer}>
              <p className={styles.linktitle}>FOR COMMUNITY</p>
              <ul>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Ecosystem
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.africeum.com/#"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Live Africeum Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.end}>
          <p className={styles.credit}>© 2021 Africeum</p>
          <div className={styles.policy}>
            <a
              href="https://www.africeum.com/#"
              target={"_blank"}
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
