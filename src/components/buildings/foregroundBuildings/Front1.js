import billboard from "../../../pictures/billboard.png"
import styled from "@emotion/styled/macro"

const Front1Container = styled.div`
  position: absolute;
  bottom: 208px;
  left: -5px;
  width: 20px;
`
const FrontFace = styled.div`
  width: 100%;
  height: 90px;
  background: #1a1c21;
  clip-path: polygon(0 -1%, 100% 4%, 100% 100%, 0 93%);
`

export const Front1 = () => {
  return (
    <Front1Container>
      <FrontFace>
        <div
          style={{
            position: "absolute",
            left: "-6px",
            top: "18px",
            height: "12px",
            width: "20px",
            background: "#667d84",
            transform: "skewY(10deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-6px",
            top: "37px",
            height: "17px",
            width: "20px",
            background: "#959e89",
            transform: "skewY(10deg)",
          }}
        />
      </FrontFace>
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "3px",
          height: "52px",
          transform: "skewY(4deg)",
        }}
      >
        <img
          alt="billboard"
          src={billboard}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        />
      </div>
    </Front1Container>
  )
}
