import { Doorways as Columns } from "../../doorways/Doorways"
import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const Middle3Container = styled.div`
  position: absolute;
  top: 346px;
  left: 184px;
`
const InsanelyVagueGreyBuilding = styled.div`
  position: absolute;
  left: -14px;
  top: -9px;
  width: 22px;
  height: 26px;
  background: #465868;
  transform: skewY(-4deg);
`
const SlightlyLessVagueBrownBuilding = styled.div`
  position: absolute;
  top: -15px;
  right: -25px;
  width: 21px;
  height: 40px;
  background: #524e53;
`
const WhiteBuildingContainer = styled.div`
  position: absolute;
  right: -35px;
`
const WhatEvenIsThisBuilding = styled.div`
  position: absolute;
  top: -18px;
  right: -94px;
  width: 54px;
  height: 28px;
  & > div {
    &:nth-child(odd) {
      background: #465767;
    }
    &:nth-child(even) {
      background: #374755;
    }
  }
`
const WoodenLookingThing = styled.div`
  position: absolute;
  top: 5px;
  left: 49px;
  width: 44px;
  height: 6px;
  background: #5b4d3d;
  clip-path: polygon(
    44% 0,
    71% 0,
    76% 33%,
    100% 64%,
    100% 100%,
    0 100%,
    0 48%,
    30% 33%
  );
`
const ColumnBuilding = styled.div`
  position: absolute;
  top: 0;
  right: -95px;
`

export const Middle3 = () => {
  return (
    <Middle3Container>
      <InsanelyVagueGreyBuilding />

      <SlightlyLessVagueBrownBuilding>
        {/* topper */}
        <div
          style={{
            position: "absolute",
            top: "-6px",
            left: "4px",
            height: "7px",
            width: "15px",
            background: "#524e53",
            clipPath:
              "polygon(14% 0, 87% 0, 87% 54%, 100% 54%, 100% 100%, 0 100%, 0 54%, 13% 54%)",
          }}
        />
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "1px",
            left: "1px",
          }}
        />
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "3px",
            left: "1px",
          }}
        />
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "5px",
            left: "1px",
          }}
        />
      </SlightlyLessVagueBrownBuilding>

      <WhiteBuildingContainer>
        {/* left face */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-19px",
            width: "14px",
            height: "25px",
            background: "#7c9297",
            clipPath:
              "polygon(27% 0, 77% 0, 77% 33%, 100% 33%, 100% 100%, 0 100%, 0 14%, 28% 14%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "4px",
              left: "1px",
              display: "flex",
              gap: "1px",
            }}
          >
            <Lights
              numLights={1}
              lightStyles={{
                height: "3px",
                width: "1px",
                background: "#00000085",
              }}
            />
            <Lights
              numLights={1}
              lightStyles={{
                height: "3px",
                width: "1px",
              }}
            />
          </div>
          <Lights
            numLights={2}
            containerStyles={{
              position: "absolute",
              top: "8px",
              left: "1px",
              gap: "1px",
            }}
            lightStyles={{
              height: "3px",
              width: "1px",
              background: "#00000085",
            }}
          />
          <Lights
            numLights={2}
            containerStyles={{
              position: "absolute",
              top: "12px",
              left: "1px",
              gap: "1px",
            }}
            lightStyles={{
              height: "3px",
              width: "1px",
              background: "#00000085",
            }}
          />
        </div>
        {/* right face */}
        <div
          style={{
            position: "absolute",
            transform: "skewY(4deg)",
            top: "-2px",
            right: "-5px",
            width: "11px",
            background: "#798c8f",
            height: "15px",
          }}
        >
          <Lights
            numLights={4}
            containerStyles={{
              position: "absolute",
              top: "1px",
              left: "1px",
              gap: "1px",
            }}
            lightStyles={{
              width: "1px",
              height: "2px",
              background: "#00000085",
            }}
          />
          <Lights
            numLights={4}
            containerStyles={{
              position: "absolute",
              top: "5px",
              left: "1px",
              gap: "1px",
            }}
            lightStyles={{
              width: "1px",
              height: "2px",
              background: "#00000085",
            }}
          />
        </div>
      </WhiteBuildingContainer>

      <WhatEvenIsThisBuilding>
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
        <div style={{ height: "1px", width: "100%" }} />
      </WhatEvenIsThisBuilding>
      <WoodenLookingThing />
      {/* bottom part */}
      <div
        style={{
          position: "absolute",
          top: "11px",
          left: "62px",
          width: "31px",
          height: "30px",
          background: "#60696e",
        }}
      >
        <Lights
          numLights={4}
          containerStyles={{
            position: "absolute",
            width: "100%",
            gap: "4px",
            top: "1px",
          }}
          lightStyles={{
            width: "4px",
            height: "7px",
            background: "#0000008c",
          }}
        />
        <Lights
          numLights={4}
          containerStyles={{
            position: "absolute",
            width: "100%",
            gap: "4px",
            top: "10px",
          }}
          lightStyles={{
            width: "4px",
            height: "7px",
            background: "#0000008c",
          }}
        />
      </div>

      {/* i dont know */}
      <div
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "10px",
          right: "-136px",
          width: "45px",
          height: "30px",
          background: "#224551",
        }}
      />

      <ColumnBuilding>
        <div
          style={{
            position: "absolute",
            bottom: "17px",
            left: "6px",
            width: "3px",
            height: "2px",
            background: "#aac4db",
            clipPath: "polygon(51% 24%, 0 100%, 100% 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "6px",
            width: "2px",
            height: "5px",
            background: "#aac4db",
          }}
        />
        {/* green top part */}
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            width: "9px",
            height: "8px",
            left: "3px",
            background: "#375e65",
            clipPath:
              "polygon(25% 0, 79% 0, 90% 22%, 97% 61%, 100% 100%, 0 100%, 6% 61%, 17% 22%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "3px",
            left: "2px",
            height: "3px",
            width: "11px",
            background: "#596469",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            height: "3px",
            width: "15px",
            background: "#596469",
          }}
        />
        {/* light thing */}
        <div
          style={{
            position: "absolute",
            top: "-6px",
            left: "4px",
            height: "2px",
            width: "2px",
            borderRadius: "50%",
            background: "#d2c79f",
            transform: "scale(1, 1.5) skewX(8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-6px",
            left: "9px",
            height: "2px",
            width: "2px",
            borderRadius: "50%",
            background: "#d2c79f",
            transform: "scale(1, 1.5) skewX(8deg)",
          }}
        />
        {/*  */}
        <div style={{ position: "absolute" }}>
          <Columns
            numDoors={8}
            containerStyles={{
              gap: "1px",
            }}
            doorStyles={{
              height: "10px",
              width: "1px",
              background: "#596469",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            left: "0px",
            height: "3px",
            width: "15px",
            background: "#596469",
          }}
        />
      </ColumnBuilding>
    </Middle3Container>
  )
}
