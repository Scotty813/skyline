import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const MiddleBackContainer = styled.div`
  position: absolute;
  bottom: 335px;
`
const RedBuilding = styled.div`
  display: flex;
  position: absolute;
  top: -49px;
  height: 55px;
`
const RedLeftFace = styled.div`
  height: 100%;
  width: 15px;
  background: #403130;
  transform: skewY(4deg);
`
const RedRightFace = styled.div`
  position: absolute;
  top: 2px;
  right: -77px;
  height: 100%;
  width: 77px;
  background: #463636;
  transform: skewY(2deg);
`
const UltraVagueBuilding = styled.div`
  position: absolute;
  top: -72px;
  width: 75px;
  height: 30px;
  background: #6c6c71;
  transform: skewY(-1deg);
`
const AnotherVagueBuilding = styled.div`
  position: absolute;
  transform: skewY(2deg);
  top: -56px;
  left: 51px;
  width: 40px;
  height: 20px;
  background: #282a36;
`
const AcThing = styled.div`
  position: absolute;
  top: -4px;
  left: 5px;
  width: 19px;
  height: 10px;
  background: #7f8f9d;
`
export const MiddleBack = () => {
  return (
    <MiddleBackContainer>
      <UltraVagueBuilding>
        <div
          style={{
            position: "absolute",
            left: "28px",
            top: "-16px",
            width: "12px",
            height: "10px",
            background: "#6c6c71",
            transform: "skewY(1deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "25px",
            top: "-8px",
            width: "18px",
            height: "10px",
            background: "#6c6c71",
            transform: "skewY(1deg)",
          }}
        />
        <Doorways
          numDoors={12}
          containerStyles={{
            gap: "4px",
            position: "absolute",
            top: "6px",
            left: "10px",
            width: "15px",
            flexWrap: "wrap",
            height: "10px",
          }}
          doorStyles={{ borderRadius: 0, width: "2px", height: "2px" }}
        />
        <Doorways
          numDoors={68}
          containerStyles={{
            gap: "1px",
            position: "absolute",
            top: "6px",
            left: "40px",
            width: "33px",
            flexWrap: "wrap",
            height: "17px",
          }}
          doorStyles={{ borderRadius: 0, width: "1px", height: "1px" }}
        />
      </UltraVagueBuilding>
      <AnotherVagueBuilding />
      <RedBuilding>
        <AcThing />
        <RedLeftFace />
        <RedRightFace>
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "9px",
              left: "5px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#502b18",
              border: "1px solid #00000054",
              borderRadius: 0,
            }}
          />
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "9px",
              left: "28px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#bb8d36",
              border: "1px solid #000000e0",
              borderRadius: 0,
            }}
          />
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "9px",
              left: "48px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#c69744",
              border: "1px solid #000000e0",
              borderRadius: 0,
            }}
          />
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "29px",
              left: "5px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#502b18",
              border: "1px solid #00000054",
              borderRadius: 0,
            }}
          />
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "29px",
              left: "28px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#0d0e0e",
              border: "1px solid #000000e0",
              borderRadius: 0,
            }}
          />
          <Doorways
            numDoors={1}
            containerStyles={{
              position: "absolute",
              top: "29px",
              left: "48px",
              height: "13px",
            }}
            doorStyles={{
              width: "6px",
              background: "#0d0e0e",
              border: "1px solid #000000e0",
              borderRadius: 0,
            }}
          />
        </RedRightFace>
      </RedBuilding>
    </MiddleBackContainer>
  )
}
