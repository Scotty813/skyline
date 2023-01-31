import styled from "@emotion/styled"

const Main = styled.div`
  position: relative;
  height: 200px;
  width: 550px;
  transform: rotate(21deg);
  background: #736c59;
`
const Side = styled.div`
  position: absolute;
  transform: rotate(32deg);
  right: 124px;
  bottom: 155px;
  background: #736c59;
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
  background: white;
`

export const MainStreet = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-108px",
        left: "-71px",
        zIndex: "-6",
      }}
    >
      <Main>
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
