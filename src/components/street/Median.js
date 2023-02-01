import styled from "@emotion/styled/macro"

const YellowBorder = styled.div`
  position: absolute;
  transform: rotate(3deg) skew(-22deg);
  left: 110px;
  top: 79px;
  border: 3px solid ${({ theme }) => theme.streetYellowPaint};
  padding: 2px;
  border-radius: 0 15px 14px 0;
  border-left: none;
`
const YellowBorderBottomExtended = styled.div`
  position: absolute;
  left: -50px;
  top: 1px;
  height: 30px;
  width: 60px;
  border-bottom: 3px solid ${({ theme }) => theme.streetYellowPaint};
`
const YellowBorderTopExtended = styled(YellowBorderBottomExtended)`
  top: -19px;
  left: -62px;
  transform: rotate(335deg);
`
const MedianContainer = styled.div`
  display: flex;
  gap: 1px;
  height: 27px;
`
const LeftMedian = styled.div`
  width: 20px;
  background: ${({ theme }) => theme.sidewalk};
`
const LeftMedianOverlay = styled(LeftMedian)`
  position: relative;
  left: 0;
  top: -1px;
  border-bottom: 30px solid ${({ theme }) => theme.sidewalk};
  border-left: 12px solid ${({ theme }) => theme.street};
  border-right: 8px solid ${({ theme }) => theme.street};
  height: 0;
  width: 6px;
  transform: rotate(268deg);
`
const RightMedian = styled.div`
  width: 30px;
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.sidewalk};
`
const YellowLine = styled.div`
  position: absolute;
  width: 3px;
  background: ${({ theme }) => theme.streetYellowPaint};
  transform: rotate(333deg);
`
const StreetLight = styled.div`
  position: absolute;
  z-index: 1;
  height: 89px;
  width: 2px;
  background: #969291;
  transform: rotate(320deg);
  top: -60px;
  left: 3px;
`
const StreetLightOverhang = styled(StreetLight)`
  transform: rotate(270deg);
  top: -17px;
  left: 32px;
  height: 66px;
`
const StreetLightSign = styled.div`
  position: absolute;
  top: 30px;
  left: -3px;
  height: 10px;
  width: 7px;
  background: #cfb294;
  transform: rotate(347deg) skew(348deg);
`
const StreetLightTopLeftThing = styled.div`
  position: absolute;
  transform: rotate(38deg);
  top: -1px;
  left: -3px;
  width: 2px;
  height: 12px;
  background: #969291;
`
const TrafficLight = styled.div`
  position: absolute;
  height: 13px;
  width: 6px;
  background: ${({ theme }) => theme.streetYellowPaint};
`
const Light = styled.div`
  position: absolute;
  height: 2px;
  width: 2px;
  background: #1c0a03;
  border-radius: 50%;
`

export const Median = () => {
  return (
    <YellowBorder>
      <YellowLine
        style={{
          height: "16px",
          top: "17px",
          left: "-40px",
        }}
      />
      <YellowLine
        style={{
          height: "24px",
          top: "11px",
          left: "-24px",
        }}
      />
      <YellowLine
        style={{
          height: "30px",
          top: "4px",
          left: "-8px",
        }}
      />
      <YellowBorderTopExtended />
      <YellowBorderBottomExtended />
      <StreetLight>
        <StreetLightTopLeftThing />
        <StreetLightOverhang />
        <StreetLightSign />
        <TrafficLight style={{ left: "2px", top: "12px", zIndex: 1 }}>
          <Light
            style={{ bottom: "9px", left: "2px", background: "#e22c2a" }}
          />
          <Light style={{ bottom: "5px", left: "2px" }} />
          <Light style={{ bottom: "1px", left: "2px" }} />
        </TrafficLight>

        <TrafficLight style={{ left: "56px", top: "18px" }}>
          <Light
            style={{ bottom: "9px", left: "2px", background: "#e22c2a" }}
          />
          <Light style={{ bottom: "5px", left: "2px" }} />
          <Light style={{ bottom: "1px", left: "2px" }} />
        </TrafficLight>
      </StreetLight>
      <MedianContainer>
        <LeftMedianOverlay />
        <LeftMedian />
        <RightMedian />
      </MedianContainer>
    </YellowBorder>
  )
}
