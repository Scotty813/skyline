import { WaterThing } from "./WaterThing"
import styled from "@emotion/styled"

const rotate = "19deg"

const BuildingOverlay1 = styled.div`
  position: absolute;
  bottom: 63px;
  right: 0;
  height: 354px;
  width: 200px;
  background: #76777e;
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
  background: #76777e;
`
const Row = styled.div`
  text-align: left;
  margin-top: 18px;
`
const RectanlgeWindow = styled.span`
  display: inline-block;
  height: 28px;
  width: 14px;
  background: #c68e36;
  border: 1px solid #000000c4;
  &:nth-child(1),
  &:nth-child(3) {
    margin-right: 6px;
  }
  &:nth-child(2) {
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
            marginLeft: "24px",
            marginTop: "22px",
          }}
        >
          <OvalWindow />
          <OvalWindow />
          <OvalWindow />
          <OvalWindow />
        </Row>

        <Row
          style={{
            marginLeft: "26px",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <AccentRectangleWindow />
        </Row>

        <Row
          style={{
            marginLeft: "28px",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>

        <Row
          style={{
            marginLeft: "30px",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>

        <Row
          style={{
            marginLeft: "32px",
          }}
        >
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
          <RectanlgeWindow />
        </Row>

        <Row
          style={{
            display: "flex",
            marginLeft: "34px",
            marginTop: "22px",
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
