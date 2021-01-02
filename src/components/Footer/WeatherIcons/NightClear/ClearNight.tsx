import React, { FC } from "react";
import "./ClearNight.scss";


const ClearNight: FC = () => {
    return (
        <div className="wrap-planet">
            <div className="planet">
                <div className="spots">
                    <span className="spot spot--one"></span>
                    <span className="spot spot--two"></span>
                    <span className="spot spot--three"></span>
                    <span className="spot spot--four"></span>
                    <span className="spot spot--five"></span>
                    <span className="spot spot--six"></span>
                    <span className="spot spot--seven"></span>
                    <span className="spot spot--eigth"></span>
                </div>
                <div className="planet__shadow"></div>
            </div>
        </div>

    );
};
export default ClearNight;
