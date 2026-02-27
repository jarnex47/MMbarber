"use client";

import { useState, useEffect } from "react";

interface OpeningHoursItemProps {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function OpeningHoursItem({
  day,
  open,
  close,
  closed = false,
}: OpeningHoursItemProps) {
  // 1. Default to false so the server render matches the initial client render
  const [isToday, setIsToday] = useState(false);

  // 2. Run the date check only on the client after the component mounts
  useEffect(() => {
    setIsToday(DAYS[new Date().getDay()] === day);
  }, [day]);

  const textColor = isToday ? "text-[#1152D4] font-semibold" : "text-white/80";

  return (
    <div className={`flex justify-between items-center py-3 border-b border-white/5 w-full text-sm ${textColor}`}>
      <span>{day}</span>

      {closed ? (
        <span className={isToday ? "text-[#1152D4]" : "text-red-400"}>Closed</span>
      ) : (
        <span>
          {open} – {close}
        </span>
      )}
    </div>
  );
}