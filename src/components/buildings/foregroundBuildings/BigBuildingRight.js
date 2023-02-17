import { Doorways } from "../../doorways/Doorways"
import { WaterThing } from "../../WaterThing"
import rightBuildingGraffiti from "../../../pictures/rightBuildingGraffiti.png"
import styled from "@emotion/styled/macro"

const rotate = "19deg"

const BuildingOverlay1 = styled.div`
  position: absolute;
  bottom: 63px;
  right: 0;
  height: 354px;
  width: 200px;
  background: #766f6b;
  transform: rotate(${rotate}) translate(103px);
`

const BuildingOverlay2 = styled.div`
  z-index: 5;
  position: absolute;
  transform: rotate(2deg);
  bottom: 71px;
  right: -52px;
  height: 341px;
  width: 200px;
  background: #766f6b;
`
const Row = styled.div`
  text-align: left;
`
const RectanlgeWindow = styled.span`
  display: inline-block;
  height: 28px;
  width: 14px;
  background: #c68e36;
  border: 1px solid #000000c4;
  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin-right: 6px;
  }
  &:nth-of-type(2) {
    margin-right: 24px;
  }
`
const AccentRectangleWindow = styled(RectanlgeWindow)`
  background: rgb(187, 134, 44);
  background: linear-gradient(
    47deg,
    rgba(187, 134, 44, 1) 75%,
    rgba(255, 238, 116, 1) 90%
  );
`
const OvalWindow = styled(RectanlgeWindow)`
  border-radius: 10px 10px 0 0;
`
const BigOvalWindow = styled(OvalWindow)`
  border-radius: 18px 18px 0 0;
  background: #d6a840;
  height: 44px;
  width: 32px;
`
const GreenTop = styled.div`
  position: absolute;
  border-bottom: 2px solid #1d282861;
  background: #536772;
  height: 11px;
  width: 100%;
  left: -4px;
  top: -4px;
  transform: rotate(358deg);
`
const GreenTopDots = styled.div`
  width: 7px;
  height: 7px;
  background: #536772;
  border-radius: 50%;
`

export const BigBuildingRight = () => {
  return (
    <div>
      <WaterThing />
      <BuildingOverlay1 />
      <BuildingOverlay2>
        <img
          style={{
            position: "absolute",
            zIndex: "-1",
            bottom: "-25px",
            left: "28px",
            width: "105px",
            opacity: "0.85",
            transform: "skewY(13deg)",
          }}
          src={rightBuildingGraffiti}
          alt="graffiti"
        />
        <GreenTop>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginLeft: "22px",
              marginTop: "-5px",
            }}
          >
            <GreenTopDots />
            <GreenTopDots />
            <GreenTopDots />
            <GreenTopDots />
            <GreenTopDots />
            <GreenTopDots />
          </div>
        </GreenTop>
        <Row
          style={{
            position: "absolute",
            top: "21px",
            left: "34px",
            transform: "skewY(1deg)",
          }}
        >
          <OvalWindow />
          <OvalWindow />
          <OvalWindow />
          <OvalWindow />
        </Row>
        <Doorways
          numDoors={2}
          containerStyles={{
            position: "absolute",
            transform: "skewY(3deg)",
            top: "21px",
            left: "10px",
            gap: "2px",
          }}
          doorStyles={{
            width: "5px",
            height: "29px",
            borderRadius: "10px 10px 0 0",
            background: "#080a096b",
          }}
        />
        {/* <div
          style={{
            position: "absolute",
            top: "30px",
            height: "3px",
            width: "100%",
            background: "black",
          }}
        /> */}

        <Row
          style={{
            position: "absolute",
            left: "34px",
            bottom: "230px",
            transform: "skewY(3deg)",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <AccentRectangleWindow />
        </Row>
        <Doorways
          numDoors={2}
          containerStyles={{
            position: "absolute",
            transform: "skewY(8deg)",
            top: "74px",
            left: "10px",
            gap: "2px",
          }}
          doorStyles={{
            width: "4px",
            height: "29px",
            borderRadius: "0",
            background: "#080a09ab",
          }}
        />

        <Row
          style={{
            position: "absolute",
            bottom: "177px",
            left: "34px",
            transform: "skewY(7deg)",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>
        <Doorways
          numDoors={2}
          containerStyles={{
            position: "absolute",
            transform: "skewY(9deg)",
            top: "120px",
            left: "10px",
            gap: "2px",
          }}
          doorStyles={{
            width: "4px",
            height: "29px",
            borderRadius: "0",
            background: "#080a09ab",
          }}
        />

        <Row
          style={{
            position: "absolute",
            left: "34px",
            bottom: "126px",
            transform: "skewY(10deg)",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>
        <Doorways
          numDoors={2}
          containerStyles={{
            position: "absolute",
            transform: "skewY(10deg)",
            top: "170px",
            left: "10px",
            gap: "2px",
          }}
          doorStyles={{
            width: "3px",
            height: "29px",
            borderRadius: "0",
            background: "#080a09ab",
          }}
        />

        <Row
          style={{
            position: "absolute",
            left: "34px",
            bottom: "76px",
            transform: "skewY(14deg)",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            transform: "skewY(10deg)",
            top: "215px",
            left: "12px",
            gap: "2px",
          }}
          doorStyles={{
            width: "3px",
            height: "25px",
            borderRadius: "0",
            background: "#080a09ab",
          }}
        />

        <Row
          style={{
            position: "absolute",
            bottom: "3px",
            left: "34px",
            display: "flex",
            transform: "skewY(13deg)",
          }}
        >
          <BigOvalWindow style={{ marginRight: "30px" }}>
            <div
              style={{
                display: "flex",
                borderTop: "4px solid black",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                height: "24px",
                marginTop: "16px",
              }}
            >
              <div style={{ flex: 1, borderRight: "2px solid black" }} />
              <div style={{ flex: 1, borderLeft: "2px solid black" }} />
            </div>
          </BigOvalWindow>

          <BigOvalWindow>
            <div
              style={{
                display: "flex",
                borderTop: "4px solid black",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                height: "24px",
                marginTop: "16px",
              }}
            >
              <div style={{ flex: 1, borderRight: "2px solid black" }} />
              <div style={{ flex: 1, borderLeft: "2px solid black" }} />
            </div>
          </BigOvalWindow>
        </Row>
      </BuildingOverlay2>
    </div>
  )
}
