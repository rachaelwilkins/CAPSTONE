import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";


export default function AboutPage() {
  return (
        <div className="aboutPage">
          <h1>about whitesneakerhub.</h1>
          <h6>a crisp pair of white sneakers goes with just about everything in your wardrobe.<br></br>
             <br></br>
             whitesneakerhub. was created in july 2024 when our founders found it frustrating spending countless hours perusing countless websites looking for the best deals on white sneakers. and not just that - having to sift and filter through all different colours (and there are so many colours). we just wanted white!<br></br>
             <br></br>
             so, after careful consideration and calculation, a hub for white sneakers - whitesneakerhub. - was conceptualized. and why call it anything fancy - we call it like it is.<br></br>
             <br></br>
             we will never sell black sneakers.<br></br>
             we will never sell blue sneakers. <br></br>
             sure, some of our sneakers have pops of colour, but white is the winner. and that's why you're here!<br></br>
             <br></br>
             as we grow we will expand our offerings - more white sneakers for y'all, plus accessories to keep your fave white kicks looking fresh and clean.<br></br>
             <br></br>
             <br></br>
             thank you for coming on this journey with us - we value your support x<br></br>
             team whitesneakerhub.
             </h6>
             <h4>
              contact us.</h4>
             <h6>
             <CiLocationOn /> 123 shoe street, north shore city, auckland 1010<br></br>
             <IoIosPhonePortrait /> 0800 123 456<br></br>
             <MdOutlineMail /> hello@whitesneakerhub.com
             </h6>
        </div>
      );
};
