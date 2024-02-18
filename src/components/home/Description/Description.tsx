"use client";
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABxAHEDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUAAgMGAQf/xAAlEAABBAICAgIDAQEAAAAAAAAAAQIDBCExEWESQQUTIjJRFFL/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAhEQEBAQACAwABBQAAAAAAAAAAAQIDERIhMUEEEyIyQv/aAAwDAQACEQMRAD8A+QxtyMK7coZsizoMgj0OzVXLfQysmhpXQBrsGUDdD8uVywbBoNjBYWhkaYNqeNUPXHqIRRWlPGHlALAfLoBsCNLMFNrSiO77HtpNiO6mzIa5z5BMKczeT81Opvt2c5eZ+XJXwpeYt4IbeBClP5PqbYchUMXRukIRHF0c/Lp7ryCPoYQs0ZxRhkTB+XP5I2iaFRoZRtCWIGm6eomDxUNEQq4Vo/AaUBsJsPlAJ/YiqsUqtJsSXE2PbXsTW02ZIb25663Yitx8qp0dxuxPYZypVxkck7KPpIH/AFkH9keD6wkZqyM0RpoxpBl0NPY2BUbSjEN2IPyj5I0Yhu1DNhogaaxYo4sqlHqBoeWEoDPoMlUBnURVGaXWfYnt+xtZXYptLs9Deya2mxVM3I3s+xbMmSnAKE8SGvBBgen1c0aYo4u1xFFGhDDdigrHGzXDsptiWqXRwO1xbzDT1srjN7iivM3vA03KsrgGd2zaV4DO8VT8hbDhTadsOsP2KrT9noYAsrlRbMuQuy/Ki2aTJThlW5IYfYhBrH1NJC7ZBYk/Zds/ZFIbqmzJDVsgqZMbsm7GRNumbZCySC9spdJewuyaMWQyfJgHdKYvl7F2ijSWQBnk2SWUBnl3kVadmM7EmxTal2bWZt5FFufjnIWTGFqbYqnsIi7KX7iNRciSWw6Rd8IW8WfzQWm/+lP6QSea/wBIP8ch9vq6WuzVlns5VvyCf9BEV5F9kHhRa3HVR2ewhk/ZzUNvn2GxWezek+tn7Z+zRJuxNHY7Nkn7BtBL2ZrMZPmAlm7MnzditaOy3mm7ALE3ZWabsW2Z95FXSjOVbdjjnJz/AMlcRjV5U1+Qto1FVVOYt2HTSLnAWNQdz1EnmWV6ucpl5FCDrz6/BfS/kQoQz9/T3Qlsz0XDlC61xUVEcvAtRxZFKs8s2Xrjljp61lccOGde0vs5ejKqpwvobwP0e05vLi4vp0UNjlEyFsmEMEioqDCJ+Cffp7i339MftMnymHmZyPJtadDj9vJ5sKKLtjhFyFWH4URfIyL4qTa3e+ou489lvyFhXuXOBeazrkyKMTqB5b/LpCEIEUhCEPPIhdCEHcP1lG0P2UdQaQhCnX1zv1P0bFtBjDpCEEb+JuH62M5NEIR7dTiAWdKIfkdKQhN/uOjwk037IZEIWT4Ryf2qHpCGgQhCHnn/2Q=='

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder
  });

  console.log(buttonStyles);
  
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image 
            src="/images/description.jpeg" 
            alt="products marketplace" 
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  );
}