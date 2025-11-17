import { IconHeart } from "@tabler/icons-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="h-full text-xs sm:text-sm w-full pb-24">
      <Separator className="mb-3" />

      <div className="flex justify-between items-center mt-4">
        <div>© 2025. All rights reserved.</div>

        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>Made with</span>
          <IconHeart className="size-5 inline" />
          <span>by akgbytes</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
