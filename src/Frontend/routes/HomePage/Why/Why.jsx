import React from 'react';
import './Why.css';
import iconSvg from "./../../../Images/icons/man-thinking.svg";
import guyInWheelChairImg from '../../../Images/weelchair_vs_stairs.jpg';

export default function Why() {
  return (
    <div className="Why" id="Why">
      <div className="Why__Tittle"><img src={iconSvg} alt="icon" className="Why__Icon" />Why Accessibility Live?</div>
      <div className="Why__Container__Flex">
        <img className="Why__Photo" src={guyInWheelChairImg} alt="wheelchair vs stairs" />
        <div className="Why__Description">
          <div className="Why__Description__text"><p>
            Passengers with disabilities are passengers who require accurate
            information when planning their journey. Currently, disable citizens are not
            able to determine whether key facilities, such as a lift, are functional at a certain
            station or not. Neither are they able to know if the stations they plan to use are busy. Thus,
            Accessibility live is a website where pertinent information that is useful to such
            important passengers will be readily available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
