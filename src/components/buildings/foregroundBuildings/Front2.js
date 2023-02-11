import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front2Container = styled.div`
  position: absolute;
  bottom: 199px;
  left: 14px;
  width: 27px;
`
const FrontFace = styled.div`
  background: #5f4b44;
  height: 122px;
  clip-path: polygon(0 9%, 100% 15%, 100% 100%, 0 93%);
`
const SideFace = styled.div`
  position: absolute;
  height: 50px;
  width: 100px;
  background: #5f4b44;
  top: 0;
  right: -99px;
  clip-path: polygon(42% 27%, 42% 0, 100% 0, 100% 100%, 0 100%, 0 28%);
  transform: skewY(-4deg);
`
const SideFront = styled.div`
  position: absolute;
  top: 0px;
  right: -46px;
  width: 30px;
  height: 30px;
  background: #5a4640;
  transform: skewY(4deg);
`
const TopThing = styled.div`
  position: absolute;
`
const LeftFace = styled.div`
  position: absolute;
  left: 3px;
  top: 10px;
  transform: skewY(-3deg);
  width: 48px;
  height: 10px;
  background: #5b6364;
`
const TopTopFace = styled.div`
  position: absolute;
  width: 50px;
  height: 20px;
  background: #5f6974;
  top: -3px;
  left: 44px;
  transform: skewY(-3deg);
`
export const Front2 = () => {
  return (
    <Front2Container>
      <TopTopFace />
      <LeftFace />
      <SideFront>
        <TopThing>
          <div
            style={{
              position: "absolute",
              transform: "skewY(-12deg)",
              top: "5px",
              right: "-23px",
              width: "23px",
              height: "20px",
              background: "#666d6e",
            }}
          >
            <div
              style={{
                position: "absolute",
                transform: "skewY(10deg)",
                display: "flex",
                gap: "2px",
                height: "5px",
                top: "4px",
                left: "2px",
              }}
            >
              <div
                style={{
                  width: "2px",
                  background: "#212c2e",
                }}
              />
              <div
                style={{
                  width: "2px",
                  background: "#212c2e",
                }}
              />
              <div
                style={{
                  width: "2px",
                  background: "#212c2e",
                }}
              />
              <div
                style={{
                  width: "2px",
                  background: "#212c2e",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "3px",
              width: "21px",
              transform: "skew(-43deg, -1deg)",
              height: "5px",
              background: "#909baa",
            }}
          />
        </TopThing>
      </SideFront>
      <SideFace />
      <FrontFace></FrontFace>
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "26px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "8px",
          height: "8px",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "45px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "8px",
          height: "8px",
          borderRadius: "0",
        }}
      />
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "65px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "8px",
          height: "8px",
          borderRadius: "0",
        }}
      />
    </Front2Container>
  )
}
