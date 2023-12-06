import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NativefeeTooltip() {
  return (
    <span className="premium-token tooltip-activator">
      <FontAwesomeIcon
        className="text-premium cursor-help premium-pulse"
        icon={faCircleDot}
      />
      <div className="tooltip w-64 p-3.5 rounded-2xl right-5 bottom-5 absolute">
        Neo-Miami tax is applied to claiming discoin.
      </div>
    </span>
  );
}
