import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: React.ReactNode;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`items-center flex flex-row gap-2 border py-3 px-5 rounded-full ${variant}`}>
      {icon && typeof icon === "string" && (
        <Image src={icon} alt={title} width={20} height={20} />
      )}
      {icon && typeof icon !== "string" && icon}
      <label className="whitespace-nowrap cursor-pointer bold-16 ">
        {title}
      </label>
    </button>
  );
};

export default Button;
