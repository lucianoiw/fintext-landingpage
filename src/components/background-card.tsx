import React, { ReactNode } from "react";

import { Typography } from "@material-tailwind/react";

interface BackgroundCardProps {
  title: string;
  children: ReactNode;
}

export function BackgroundCard({ title, children }: BackgroundCardProps) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-gray-900 rounded-xl">
      <div>
        <Typography
          variant="h2"
          className="text-center"
          color="white"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          color="white"
          className="my-2 text-base w-full text-center font-normal"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}
export default BackgroundCard;
