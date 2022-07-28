import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";



const steps = [
  {
    status: "연계항목 분석", statusCode: 1
  },
  {
    status: "보유기관 설정", statusCode: 2
  },
  {
    status: "연계항목 확정", statusCode: 3
  },
  {
    status: "APIG 설정", statusCode: 4
  },
  {
    status: "ApigClient 설정", statusCode: 5
  },
  {
    status: "업무팀 호출확인", statusCode: 6
  }
];

export default function StepProgressBar(props) {
    const currentIndex = steps.findIndex(s => s.statusCode === props.statusCode);
    const totalIndex = steps.length - 1;
    const percentage = (currentIndex + 0.5) / totalIndex * 100;

    return (
        <>
            <div style={{ margin: 30 }}>
                <ProgressBar
                    width={700}
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
                                
                            ><br/><br/><br/>
                                
                            </div>
                        )}
                    />
                    );
                })}
                </ProgressBar>
            </div>
        </>
    );
}
