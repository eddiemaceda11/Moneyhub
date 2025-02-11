import { JarIcon } from "../../JarIcon";

export const OverviewPots = ({ potsData }: any) => {
  return (
    <div className="overview-section-pots">
      <div className="overview-pots-header">
        <h3>Pots</h3>
        <p>See Details</p>
      </div>
      <div className="overview-pots-info">
        <div className="ov-pots-total-saved">
          <JarIcon />
          <div className="opts-info">
            <p>Total Saved</p>
            <span>$850</span>
          </div>
        </div>
        <div className="ov-pots-info-boxes">
          <div className="opib-top">
            <div className="opib-top-left">
              <div className="opib-border one"></div>
              <div className="opib-items">
                <p>{potsData[1].name}</p>
                <span>${potsData[1].total}</span>
              </div>
            </div>
            <div className="opib-top-right">
              <div className="opib-border two"></div>
              <div className="opib-items">
                <p>{potsData[2].name}</p>
                <span>${potsData[2].total}</span>
              </div>
            </div>
          </div>
          <div className="opib-bottom">
            <div className="opib-bottom-left">
              <div className="opib-border three"></div>
              <div className="opib-items">
                <p>{potsData[3].name}</p>
                <span>${potsData[3].total}</span>
              </div>
            </div>
            <div className="opib-bottom-right">
              <div className="opib-border four"></div>
              <div className="opib-items">
                <p>{potsData[4].name}</p>
                <span>${potsData[4].total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
