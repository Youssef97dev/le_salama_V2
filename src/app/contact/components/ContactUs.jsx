import InfoCard from "./InfoCard";
import Image from "next/image";

// Icons
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center gap-14 py-4 px-3 lg:px-10 lg:py-16  xl:px-72"
    >
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 w-full">
        <InfoCard
          icon={<LuMapPin size={55} />}
          title="Adresse"
          content="40 Rue des Banques, Marrakech 40000, Maroc"
        />
        <InfoCard
          icon={<MdOutlinePhoneIphone size={55} />}
          title="Tel"
          content="+212 675-480018"
        />
        <InfoCard
          icon={<MdOutlineEmail size={55} />}
          title="Mail"
          content="reservation@lesalamamarrakech.com"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <span className="text-3xl font-medium text-primary">Le Salama</span>
          <p className="text-gray-700">
            At the heart of the experience at Le Salama restaurant in Marrakech.
            In a warm, authentic atmosphere, let yourself be carried away by the
            generosity of Moroccan dishes to share with friends or family. From
            fragrant tajines and tasty couscous to exotic cocktails, every
            moment becomes a celebration of tradition and friendship. Salama is
            the ideal place to gather, savour and create unforgettable memories
            in an enchanting setting.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/assets/images/salama_28.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
