import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
}

export function CourseCard({ img, title, desc }: CourseCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        className="p-0"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography
            variant="h5"
            className="mb-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {title}
          </Typography>
        </a>
        <Typography
          className="mb-6 font-normal !text-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {desc}
        </Typography>
        <Button
          color="gray"
          size="sm"
          disabled
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Aguarde
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
