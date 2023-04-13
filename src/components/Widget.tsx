import { type Children } from "@/types";
import { type ReactNode, type ReactElement } from "react";

export type WidgetProps = {
  bgImageSrc?: string;
  icon: ReactElement;
  title: string;
  subtitle: string;
  content?: ReactElement | ReactNode;
  extra?: ReactElement | ReactNode;
  contrast?: boolean;
};

export default function Widget({
  bgImageSrc,
  icon,
  title,
  subtitle,
  content,
  extra,
  contrast,
}: Children<WidgetProps>) {
  // All assignments here is for naming component convention
  const Icon = icon;
  const Content = content;
  const Extra = extra;

  return (
    <div
      style={bgImageSrc ? { backgroundImage: `url(${bgImageSrc})` } : {}}
      className="mb-6 w-full cursor-default rounded-xl bg-cover bg-no-repeat px-8 py-6"
    >
      {/* Header */}
      <div
        className={`flex w-full items-center gap-4 ${
          contrast ? "text-white" : ""
        }`}
      >
        {Icon}
        <div>
          <p className="mb-2 text-xl font-medium">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      {Content}

      {/* Extras */}
      {Extra}
    </div>
  );
}
