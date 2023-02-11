import styled from "@emotion/styled/macro"

const Middle1Container = styled.div`
  position: absolute;
  bottom: 284px;
  left: -4px;
`
const LeftBuilding = styled.div`
  position: absolute;
  top: -48px;
  transform: skewY(-1deg);
  width: 80px;
`
const MiddleBuilding = styled.div`
  position: absolute;
  right: -137px;
  top: -59px;
`
const RightBuilding = styled.div``

export const Middle1 = () => {
  return (
    <Middle1Container>
      <MiddleBuilding>
        <div
          style={{
            width: "57px",
            height: "28px",
            background: "#71858c",
            transform: "skewY(-1deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "13px",
              display: "flex",
              height: "10px",
            }}
          >
            <div
              style={{
                width: "12px",
                background: "#1e2725",
              }}
            />
            <div
              style={{
                width: "8px",
                background: "#635c52",
              }}
            />
            <div
              style={{
                width: "12px",
                background: "#1e2725",
              }}
            />
          </div>
        </div>
      </MiddleBuilding>
      <LeftBuilding>
        <div
          style={{
            background: "#030000",
            height: "6px",
            width: "100%",
          }}
        />
        <div
          style={{
            background: "#656863",
            height: "50px",
            width: "100%",
          }}
        />
        {/* windows */}
        <div
          style={{
            position: "absolute",
            top: "9px",
            left: "20px",
            background: "#151515",
            height: "11px",
            width: "10px",
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: "9px",
            left: "38px",

            height: "10px",
          }}
        >
          <div
            style={{
              background: "#151515",
              width: "4px",
            }}
          />
          <div
            style={{
              background: "#2a2221",
              width: "6px",
            }}
          />
          <div
            style={{
              background: "#151515",
              width: "4px",
            }}
          />
        </div>
      </LeftBuilding>
    </Middle1Container>
  )
}
