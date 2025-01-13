import { UserCircle2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-2">
      {" "}
      <Link href={`/admin`}>
        <button
          title="My Account"
          className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
        >
          <UserCircle2 size={14} />
        </button>
      </Link>
    </div>
  );
};
export default Footer;
