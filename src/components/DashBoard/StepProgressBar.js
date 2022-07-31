import { useState, useRef } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styled from 'styled-components';

import Step1Component from "./Step1Component";
import Step2Component from "./Step2Component";
import Step3Component from "./Step3Component";
import Step4Component from "./Step4Component";
import Step5Component from "./Step5Component";
import Step6Component from "./Step6Component";
import dbFe from 'db_fe';


const steps = [
  {nm: "", cd: 1, component: <Step1Component />},
  {nm: "", cd: 2, component: <Step2Component />},
  {nm: "", cd: 3, component: <Step3Component />},
  {nm: "", cd: 4, component: <Step4Component />},
  {nm: "", cd: 5, component: <Step5Component />},
  {nm: "", cd: 6, component: <Step6Component />},
];

(function setStepNameIfJsonExists() {
  const stepList = Object.keys(dbFe.stepList);
  stepList.map((s, i) => {
    steps[i].nm = dbFe.stepList[s].nm;
  });
})();

export default function StepProgressBar(props) {
  const currentIndex = steps.findIndex(s => s.cd === props.cd);
  const totalIndex = steps.length - 1;
  const percentage = (currentIndex + 0.5) / totalIndex * 100;

  const [componentCoord, setComponentCoord] = useState();
  const [hoveringComponent, setHoveringComponent] = useState();
  const [isHoveringElement, setIsHoveringElement] = useState(false);
  const [isHoveringComponent, setIsHoveringComponent] = useState(false);
  const elementMouseOver = (step, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const middleX = rect.x + rect.width/2
    const middleY = rect.y + rect.height/2
    setComponentCoord({x: middleX, y: middleY});
    setHoveringComponent(step.component);
    setIsHoveringElement(true);
  };
  const elementMouseOut = () => {
    setIsHoveringElement(false);
  };
  const componentMouseOver = () => {
    setIsHoveringComponent(true);
  };
  const componentMouseOut = () => {
    setIsHoveringComponent(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dimmerRef = useRef();
  const openModal = () => {
    setIsModalOpen(true);
  };
    const closeModal = () => {
    if (isModalOpen === true) return setIsModalOpen(false);
  };



  return (
    <>
      <div style={{ margin: 30, marginTop: 20 }} onClick={closeModal}>
        <ProgressBar
          style={{height: "1px"}}
          width={800}
          percent={percentage}
          filledBackground="linear-gradient(to right, #41ad49, #41ad49)"
        >
        {steps.map((step, index, arr) => {
          return (
            <Step key={step+"_"+index+"_component"}
              transition="scale"
              children={({ accomplished }) => (
                  <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    color: "black",
                    whiteSpace: "nowrap",
                    backgroundColor: accomplished ? "green" : "gray"
                    }}
                  >
                    <div
                      onMouseOver={(e) => {elementMouseOver(step, e)}}
                      onMouseOut={elementMouseOut}
                    ><br/><br/><br/>
                      {step.nm}
                    </div>
                  </div>
              )}
            />
            );
        })}
        </ProgressBar>
        {(isHoveringElement||isHoveringComponent)&&
          <HoverDiv
            coord={componentCoord}
            onMouseOver={componentMouseOver}
            onMouseOut={componentMouseOut}
          >
            {hoveringComponent}
          </HoverDiv>}
      </div>
    </>
  );
};

const HoverDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: ${props => props.coord.x}px;
  top: ${props => props.coord.y}px;
`;