import { Median } from "./Median"
import styled from "@emotion/styled"

const whiteStreetPaint = "#c2baad"

const Main = styled.div`
  position: relative;
  height: 200px;
  width: 550px;
  transform: rotate(21deg);
  background: ${({ theme }) => theme.street};
`
const Side = styled.div`
  position: absolute;
  transform: rotate(32deg);
  right: 124px;
  bottom: 155px;
  background: ${({ theme }) => theme.street};
  height: 200px;
  width: 150px;
`
const WhiteStripesContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
`
const WhiteStripe = styled.div`
  background: ${whiteStreetPaint};
`
const LaneContainer = styled.div`
  position: absolute;
  transform: rotate(92deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainStreet = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-108px",
        left: "-71px",
        zIndex: "-9999",
      }}
    >
      <Main>
        <Median />
        <WhiteStripe
          style={{
            position: "absolute",
            height: "56px",
            width: "8px",
            left: "75px",
            top: "123px",
            transform: "rotate(343deg) skew(307deg)",
          }}
        />

        <WhiteStripe
          style={{
            position: "absolute",
            height: "30px",
            width: "2px",
            left: "73px",
            top: "120px",
            transform: "rotate(98deg)",
          }}
        />

        <LaneContainer style={{ height: "158px", top: "-54px", left: "123px" }}>
          <WhiteStripe
            style={{
              height: "40px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "20px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "20px",
              width: "2px",
            }}
          />
        </LaneContainer>

        <LaneContainer style={{ height: "168px", top: "-35px", left: "101px" }}>
          <WhiteStripe
            style={{
              height: "40px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "20px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "20px",
              width: "2px",
            }}
          />
        </LaneContainer>

        <LaneContainer style={{ height: "168px", top: "-11px", left: "80px" }}>
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
          <WhiteStripe
            style={{
              height: "5px",
              width: "2px",
            }}
          />
        </LaneContainer>

        {/* Left top */}
        <WhiteStripesContainer
          style={{
            right: "324px",
            top: "9px",
            transform: "rotate(360deg) skew(-39deg)",
          }}
        >
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
          <WhiteStripe style={{ height: "2px", width: "35px" }} />
        </WhiteStripesContainer>

        {/* Left bottom */}
        <WhiteStripesContainer
          style={{
            right: "385px",
            top: "117px",
            transform: "rotate(360deg) skew(-39deg)",
            gap: "6px",
          }}
        >
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
        </WhiteStripesContainer>

        {/* Top */}
        <WhiteStripesContainer
          style={{
            right: "204px",
            top: "-50px",
            transform: "rotate(305deg) skew(37deg)",
            gap: "5px",
          }}
        >
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
          <WhiteStripe style={{ height: "3px", width: "40px" }} />
        </WhiteStripesContainer>

        {/* Right */}
        <WhiteStripesContainer
          style={{
            right: "174px",
            bottom: "121px",
            transform: "rotate(5deg) skew(332deg)",
            gap: "5px",
          }}
        >
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
          <WhiteStripe style={{ height: "3px", width: "50px" }} />
        </WhiteStripesContainer>

        <Side />
      </Main>
    </div>
  )
}
