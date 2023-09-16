import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClaimFeeTooltip() {
  return (
    <span className="premium-token tooltip-activator">
      <FontAwesomeIcon
        className="text-premium cursor-help premium-pulse"
        icon={faStar}
      />
      <div className="tooltip w-64 p-3.5 rounded-2xl right-5 bottom-5 absolute">
        A fee is applied to tokens distributed by this service.
      </div>
    </span>
  );
}
