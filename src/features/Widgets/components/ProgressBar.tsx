import { type ReactElement, useState } from "react";
import { usePopper } from "react-popper";

type Props = {
  level: number;
};

{
  /*
   * Air Quality Index.
   * Possible values: 0, 1, 2, 3, 4.
   * Where 0 = Good, 1 = Fair, 2 = Moderate, 3 = Poor, 4 = Very Poor.
   */
}
enum AQI {
  Good,
  Fair,
  Moderate,
  Poor,
  "Very Poor",
}

// refer for `ref` error and generic for `useState`: https://github.com/floating-ui/react-popper/issues/415#issuecomment-821968179
export default function ProgressBar({ level = 1 }: Props): ReactElement {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 12] } },
    ],
    placement: "top",
  });

  const showTooltip = () => {
    popperElement?.setAttribute("data-show", "");
  };

  const hideTooltip = () => {
    popperElement?.removeAttribute("data-show");
  };

  const classNameBG = () => {
    switch (level - 1) {
      case 4:
        return "bg-red-700";
      case 3:
        return "bg-yellow-500";
      case 2:
        return "bg-green-700";
      case 1:
        return "bg-green-500";
      case 0:
      default:
        return;
    }
  };

  return (
    <>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className=" mb-1 mt-4 h-1.5 w-full rounded-full bg-gray-200"
        ref={setReferenceElement}
      >
        <div
          style={{ width: `${(level - 1) * 25}%` }}
          className={`h-1.5 rounded-full ${classNameBG() as string}`}
        />
      </div>

      <div
        className="inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 data-[show]:opacity-100"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {AQI[level - 1]}
        <div
          ref={setArrowElement}
          className="absolute -bottom-1 left-0 h-2 w-2 translate-x-[38px] rotate-45 bg-inherit content-['']"
        />
      </div>
    </>
  );
}
