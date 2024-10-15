import React from 'react';
import Tittle from '../layer/Tittle';
import Input from '../layer/Input';
import Buttun from '../layer/Buttun';
import Mail from '../../assets/Mail.png';
import Mail_logo from '../../assets/Mail_logo.png'; 
import Call_logo from '../../assets/Call_png.png';
import Facebook_logo from '../../assets/Facebook_Logo.png';
import Fiverr from '../../assets/Fiverr-Logo.png';
import Github from '../../assets/Github.png';
import { Link } from 'react-router-dom';
import Container from '../layer/Container';

const Contact = () => {
  return (
    <div>
      <Container className="pb-[100px]">
        <div>
          <Tittle text="Contact" />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="contact flex flex-col gap-8 justify-center w-full md:w-[425px]">
              <Input placeholder="Name :" />
              <Input placeholder="Email :" />
              <textarea
                placeholder="Message :"
                className="w-full h-[170px] py-[17px] px-5 bg-transparent border-[3px] rounded-[10px] border-[#D9D9D9] outline-none focus:border-[#0FE1C2] focus:placeholder:text-[#0FE1C2] placeholder:text-2xl placeholder:text-white text-white text-2xl"
              ></textarea>
              <Buttun className="w-[152px] mx-auto" text="Send" />
            </div>
            <div className="flex flex-col mt-8 md:mt-0">
              <h4 className="text-[32px] font-bold text-white">DON'T BE SHY</h4>
              <p className="text-white text-xl w-full md:w-[510px] py-[27px]">
                Feel free to reach out if you have any questions, collaboration opportunities, or just want to connect. I'm always open to new projects and discussions.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <img src={Mail} alt="" />
                </div>
                <div>
                  <p className="text-white text-base">Mail me</p>
                  <Link type='' to="mailto:tahmid08.code@gmail.com" className="text-white text-base">
                    tahmid08.code@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center mt-20 flex-wrap gap-4">
                <Link target='_blank' to="callto:01553447450">
                  <img src={Call_logo} alt="" />
                </Link>
                <Link target='_blank' to="mailto:tahmid08.code@gmail.com">
                  <img src={Mail_logo} alt="" />
                </Link>
                <Link target='_blank' to="https://github.com/MD-MUSTAK-TAHMID">
                  <img src={Github} alt="" />
                </Link>
                <Link target='_blank' to="https://www.facebook.com/mobasserabegum.mobassera.1">
                  <img src={Facebook_logo} alt="" />
                </Link>
                <Link target='_blank' to="https://www.fiverr.com/mustak_tahmid08?up_rollout=true">
                  <img src={Fiverr} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
