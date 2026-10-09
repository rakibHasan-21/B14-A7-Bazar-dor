"use client";

import { useEffect, useState } from "react";

const HeaderDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date();

    setFormattedDate(
      date.toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);

  return (
    <p className="text-xs text-gray-500">
      {formattedDate}
    </p>
  );
};

export default HeaderDate;