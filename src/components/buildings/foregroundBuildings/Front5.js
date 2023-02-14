import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front5Container = styled.div`
  position: absolute;
  bottom: 149px;
  left: 148px;
  width: 50px;
`
const RedPart = styled.div`
  background: #48211a;
  height: 142px;
  clip-path: polygon(0 3%, 100% 8%, 100% 100%, 0 89%);
`
const TopPart = styled.div`
  background: #0e0a07;
  height: 7px;
  transform: skewY(7deg);
  position: relative;
  top: 8px;
  left: -1px;
`
const TopFace = styled.div`
  position: absolute;
  top: -59px;
  clip-path: polygon(100% 37%, 0 62%, 100% 81%);
  height: 110px;
  width: 90px;
  background: #ffffff;
  transform: rotate(5deg);
`
const TopFaceOverlay = styled(TopFace)`
  background: #4b5b6bd9;
`
const Banner = styled.div`
  position: absolute;
  bottom: 27px;
  left: -7px;
  width: 56px;
  height: 16px;
  background: #9a9b9d;
  border-radius: 5px 0 0 0;
  transform: skewY(15deg);
`

export const Front5 = () => {
  return (
    <Front5Container>
      <TopFace />
      <TopFaceOverlay />
      <TopPart />
      <RedPart />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "19px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#ce9321" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "48px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#78786c" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "76px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#272521" }}
      />
      <Banner>
        <span
          style={{
            position: "absolute",
            left: "5px",
            top: "6px",
            fontSize: "4px",
            fontWeight: 800,
            transform: "scaleY(1.5)",
          }}
        >
          K C
        </span>
        <span
          style={{
            position: "absolute",
            left: "7px",
            top: "6px",
            fontSize: "2px",
            fontWeight: 900,
            width: "50px",
            transform: "scaleY(2.5)",
          }}
        >
          ELECTRIC HARDWARE CORP.
        </span>
      </Banner>
    </Front5Container>
  )
}
