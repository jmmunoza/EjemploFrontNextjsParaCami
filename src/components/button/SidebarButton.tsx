import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { SVGAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../util/Text";
import { Icon } from "../util/Icon";

interface SidebarButtonProps {
  icon: (props: SVGAttributes<SVGElement>) => JSX.Element;
  page: string;
  label: string;
}

function SidebarButton({ icon, page, label }: SidebarButtonProps) {
  const [selected, setSelected] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    setSelected(pathname === `/${page}`);
  }, [pathname, params.organization, page]);

  return (
    <Link
      className={
        "relative self-start inline-flex w-full h-10 px-4 items-center hover:bg-primary group outline-none focus:outline-none focus:bg-primary " +
        (selected ? " bg-primary" : "bg-transparent")
      }
      href={`/${page}`}
    >
      <Icon
        icon={icon}
        className={twMerge(
          "absolute left-0 ml-4 w-5 h-5 transition-color group-focus:fill-text",
          selected ? "fill-text" : "fill-background-secondary"
        )}
      />

      <Text
        className={twMerge(
          "absolute text-background-secondary font-semibold left-0 ml-11 group-focus:text-text",
          selected ? "text-text" : "text-background-secondary"
        )}
      >
        {label}
      </Text>
    </Link>
  );
}

export default SidebarButton;
