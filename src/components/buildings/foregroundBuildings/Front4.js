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
  transform: skewY(5deg);
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
  padding-top: 2px;
`
const BackFace = styled.div`
  position: absolute;
  top: 9px;
  left: 2px;
  height: 20px;
  width: 87px;
  background: #333232;
  transform: skewY(-2deg);
`
const TopThingRight = styled.div`
  position: absolute;
  top: 0px;
  right: -49px;
  width: 14px;
  height: 15px;
  background: #28475f;
  clip-path: polygon(0 15%, 100% 63%, 100% 100%, 0% 100%);
`
const TopThingLeft = styled.div`
  position: absolute;
  transform: skewY(-2deg);
  top: 10px;
  right: -37px;
  width: 28px;
  height: 6px;
  background: #414e57;
`
const LightBackBuilding = styled.div`
  position: absolute;
  right: -51px;
  top: -10px;
  background: #839091;
  width: 37px;
  height: 20px;
  transform: skew(-3deg, 1deg);
`
export const Front4 = () => {
  return (
    <Front4Container>
      <LightBackBuilding>
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            left: "8px",
            top: "11px",
          }}
          doorStyles={{
            borderRadius: 0,
            height: "10px",
            width: "3px",
          }}
        />
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            right: "13px",
            top: "9px",
          }}
          doorStyles={{
            borderRadius: 0,
            height: "10px",
            width: "7px",
          }}
        />
      </LightBackBuilding>
      <BackFace />
      <TopThingRight />
      <TopThingLeft>
        <div
          style={{
            position: "relative",
            top: "-6px",
            height: "6px",
            width: "100%",
            clipPath: "polygon(13% 25%, 82% 27%, 100% 100%, 0% 100%)",
            background: "#6b8697",
          }}
        />
      </TopThingLeft>
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
