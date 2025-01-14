import { UserCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer 
    style={{

      boxShadow: "0px 0px 38px #CFDAF9",
    }}
     className="py-16 rounded-[15px] mx-2 px-40">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="flex space-y-[40px] flex-col items-start">
          {/* Logo */}
          <Image
            src="/header.png"
            alt="Logo"
            width={245}
            height={67}
       
          />

          {/* Copyright */}
          <p className="text-sm text-title">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Image
              src="/SVG/insta.svg"
              alt="Instagram"
              width={32}
              height={32}
          
            />
            <Image
              src="/SVG/twitter.svg"
              alt="Twitter"
              width={32}
              height={32}
        
            />
            <Image
              src="/SVG/youtube.svg"
              alt="YouTube"
              width={32}
              height={32}
          
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-[30px]">
          {/* Company Section */}
          <div className="mr-[70px]">
            <h4 className="text-[20px] text-title mb-[24px] font-semibold">Company</h4>
            <ul className="space-y-[12px] text-sm text-black">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href={`/admin`}>
                  <button
                    title="My Account"
                    className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
                  >
                    <UserCircle2 size={14} />
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mr-[70px]">
            <h4 className="text-[20px] text-title mr-[30px] mb-[24px] font-semibold">Support</h4>
            <ul className="space-y-[12px] text-sm text-black">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Stay Up-to-Date Section */}
          <div className="space-y-[12px] text-sm text-black">
            <h4 className="text-[20px] text-title mb-[24px] font-semibold">Stay Up-to-Date</h4>
            <div className="flex   justify-between  space-y-[12px] relative items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[255px] h-[40px] text-[14px] rounded-[14px] placeholder-dark_blue px-3 text-black bg-light_blue"
              />
              <button className="absolute right-3 top-0">
                <Image
                  src="/SVG/send.svg"
                  alt="Send"
                  width={18}
                  height={18}
                 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
