import { useState, useRef } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import HoverComponent from "./HoverComponent";
import styled from 'styled-components';
import { FileRichtext } from "react-bootstrap-icons";
import { render } from "@testing-library/react";
import dbFe from 'db_fe';


const steps = [
  {
    status: "", statusCode: 1, component: <HoverComponent />
  },
  {
    status: "", statusCode: 2
  },
  {
    status: "", statusCode: 3
  },
  {
    status: "", statusCode: 4
  },
  {
    status: "", statusCode: 5
  },
  {
    status: "", statusCode: 6
  }
];

for (const si in dbFe.stepsInfo) {
  si.from(si, ([key, value]) => steps[key].status = si.value);
}


export default function StepProgressBar(props) {
    const currentIndex = steps.findIndex(s => s.statusCode === props.statusCode);
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
              <Step
                // position={100 * (index / arr.length)}
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
                        {step.status}
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
}

const HoverDiv = styled.div`
  position: absolute;
  left: ${props => props.coord.x}px;
  top: ${props => props.coord.y}px;
`;