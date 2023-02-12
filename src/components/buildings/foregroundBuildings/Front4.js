import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front4Container = styled.div`
  position: absolute;
  bottom: 164px;
  left: 108px;
  width: 41px;
`
const RedPart = styled.div`
  background: #46302b;
  height: 164px;
  clip-path: polygon(0 6%, 100% 8%, 100% 100%, 0 92%);
`
const TopPart = styled.div`
  position: relative;
  background: #0e0a07;
  height: 9px;
  transform: skewY(6deg);
  top: 12px;
`
const SideFace = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 10px;
  right: -50px;
  clip-path: polygon(0 0, 11% 0, 11% 9%, 100% 9%, 100% 100%, 0 100%);
  background: #8099ae;
  transform: skewY(-3deg);
`
const Banner = styled.div`
  position: absolute;
  bottom: 25px;
  left: -3px;
  height: 10px;
  width: 40px;
  background: #3a70ac;
  transform: skewY(15deg);
  padding-top: 4px;
`
export const Front4 = () => {
  return (
    <Front4Container>
      <SideFace />
      <TopPart />
      <RedPart />
      <Banner>
        <div
          style={{
            fontSize: "3px",
            fontWeight: 700,
            color: "white",
          }}
        >
          CASH REGISTERS
        </div>
        <div
          style={{
            fontSize: "2px",
            fontWeight: 400,
            color: "white",
          }}
        >
          slicers, scales, safes bandsaws
        </div>
        <div
          style={{
            fontSize: "2px",
            fontWeight: 400,
            color: "white",
          }}
        >
          new & used bought & sold
        </div>
      </Banner>
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "28px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "55px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "82px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "110px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
    </Front4Container>
  )
}
