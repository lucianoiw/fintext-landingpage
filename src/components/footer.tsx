import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-8 bg-black">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <Typography
          color="blue-gray"
          className="text-center font-normal !text-white text-sm"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} - Todos os direitos reservados.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
