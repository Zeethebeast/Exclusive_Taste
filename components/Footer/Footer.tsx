import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16 bg-black-100 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Title */}
        <Link href="/" className="font-black text-tertiary-dark text-2xl">
          Hotelzz
        </Link>
        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        {/* Contact Section */}
        <div className="flex flex-wrap gap-16 items-start justify-between">
          {/* Address Block */}
          <div className="flex-1">
            <p>234 Naija</p>
            {/* Email */}
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Zeethebeast</p>
            </div>
            {/* Phone */}
            <div className="flex items-center py-4">
              <BsTelephoneOutbound />
              <p className="ml-2">+234-912-247-0964</p>
            </div>
            {/* Messaging */}
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">Zeethebeast</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Piracy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Printing Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-dark h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
