import "./MobileControlBar.sass";
import ControlSidePanel from "../ControlSidePanel/ControlSidePanel";

const MobileControlBar = (props: any) => {
  const { setVisibilitySidePanel } = props;
  return (
    <div className="mobile-control-bar">
      <div
        className={"mobile-control-bar__button"}
        onClick={() => {
          setVisibilitySidePanel(true);
        }}
      >
        Фильтры
      </div>
      <div className={"mobile-control-bar__button"}>По цене</div>
    </div>
  );
};
export default MobileControlBar;
