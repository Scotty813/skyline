import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front3Container = styled.div`
  position: absolute;
  bottom: 177px;
  left: 41px;
  width: 68px;
`
const WhitePart = styled.div`
  background: #8d8d95;
  height: 98px;
  clip-path: polygon(0 3%, 100% 15%, 100% 100%, 0 76%);
`
const TopPart = styled.div`
  position: relative;
  background: #616977;
  height: 7px;
  transform: skewY(10deg);
  top: 10px;
`
const SideFace = styled.div`
  position: absolute;
  top: -19px;
  left: 0px;
  width: 100px;
  height: 50px;
  clip-path: polygon(100% 14%, 0 50%, 100% 76%);
  background: #8297ae;
  transform: rotate(2deg);
`
const Banner = styled.div`
  position: absolute;
  bottom: 27px;
  left: -5px;
  height: 15px;
  width: 72px;
  background: #b88738;
  transform: skewY(15deg);
  border-radius: 5px 0 0 0;
`
export const Front3 = () => {
  return (
    <Front3Container>
      <SideFace />
      <TopPart />
      <WhitePart />
      <Banner>
        <div
          style={{
            position: "absolute",
            top: "6px",
            left: "2px",
            display: "flex",
            gap: "3px",
            color: "#aa3337",
            fontSize: "2px",
            fontWeight: 800,
            transform: "scaleY(2.5)",
            width: "70px",
          }}
        >
          <div>DAROMA RESTAURANT EQUIPMENT</div>
          <div>DIAMOND EQUIPMENT</div>
        </div>
      </Banner>
      <Doorways
        numDoors={4}
        containerStyles={{
          position: "absolute",
          top: "24px",
          left: "6px",
          gap: "10px",
          transform: "skewY(10deg)",
        }}
        doorStyles={{
          height: "10px",
          width: "6px",
          borderRadius: 0,
        }}
      />
      <Doorways
        numDoors={4}
        containerStyles={{
          position: "absolute",
          top: "45px",
          left: "6px",
          gap: "10px",
          transform: "skewY(10deg)",
        }}
        doorStyles={{
          height: "10px",
          width: "6px",
          borderRadius: 0,
        }}
      />
    </Front3Container>
  )
}
