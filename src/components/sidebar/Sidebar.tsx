"use client";

import Card from "../card/Card";
import { twMerge } from "tailwind-merge";
import SidebarButton from "../button/SidebarButton";
import { HomeIcon } from "@/assets/icons/Home";
import { UserCircleIcon } from "@/assets/icons/UserCircle";
import { ClockIcon } from "@/assets/icons/Clock";

function Sidebar() {
  return (
    <aside className="h-full">
      <Card className="rounded-none">
        <div
          className={twMerge(
            "h-full flex flex-col items-center overflow-hidden overflow-y-auto scrollbar-none border-r-[1px] border-text-secondary"
          )}
        >
          <div className="self-start flex flex-col w-64 items-center justify-center">
            <SidebarButton icon={HomeIcon} label="Inicio" page="" />
            <SidebarButton
              icon={UserCircleIcon}
              label="Chats recibidos gestionados"
              page="chats/received"
            />
            <SidebarButton icon={ClockIcon} label="Horas de conexión" page="hours" />
            <SidebarButton
              icon={UserCircleIcon}
              label="Chats asesores"
              page="chats/agent"
            />
            <SidebarButton
              icon={UserCircleIcon}
              label="Chats en cola"
              page="chats/queue"
            />
          </div>
        </div>
      </Card>
    </aside>
  );
}

export default Sidebar;
