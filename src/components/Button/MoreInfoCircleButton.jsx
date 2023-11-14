import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import ContentModal from "../../feature/ContentModal";

export default function MoreInfoCircleButton({ customizeClass }) {
  return (
    <ContentModal>
      <div className={`${customizeClass} `}>
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60  p-2 scale-100 duration-100 "
        />
      </div>
    </ContentModal>
  );
}
