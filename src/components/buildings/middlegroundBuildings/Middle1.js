import { Doorways } from "../../doorways/Doorways"
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
  top: -60px;
`
const PainInTheAssBuilding = styled.div`
  position: absolute;
  top: -111px;
  right: -181px;
  height: 88px;
  width: 95px;
`
const Top = styled.div`
  position: absolute;
  left: 11px;
  display: flex;
  flex-direction: column;
  width: 50px;
`
const TopDivider = styled.div`
  position: absolute;
  display: flex;
  top: 23px;
  width: 100%;
`
const MiddleDivider = styled.div`
  position: absolute;
  display: flex;
  top: 37px;
  left: 4px;
  width: 100%;
`
const BottomDivider = styled(MiddleDivider)`
  top: 55px;
`
const SecondLevel = styled.div`
  display: flex;
  height: 12px;
  position: absolute;
  top: 25px;
  left: 4px;
`
const ThirdLevel = styled.div`
  display: flex;
  height: 12px;
  position: absolute;
  left: 4px;
  top: 39px;
`
const BottomLevel = styled(ThirdLevel)`
  height: 14px;
  top: 53px;
  left: 50px;
`
export const Middle1 = () => {
  return (
    <Middle1Container>
      <PainInTheAssBuilding>
        <Top>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                width: "19px",
                height: "11px",
                background: "#1a212a",
                transform: "skewY(2deg)",
              }}
            />
            <div
              style={{
                position: "relative",
                top: "1px",
                width: "29px",
                height: "11px",
                background: "#1e2a30",
                transform: "skewY(1deg)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                width: "19px",
                height: "13px",
                background: "#405568",
                transform: "skewY(2deg)",
              }}
            />
            <div
              style={{
                position: "relative",
                top: "1px",
                width: "29px",
                height: "13px",
                background: "#384b5c",
                transform: "skewY(1deg)",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              transform: "skewY(1deg)",
              top: "14px",
              left: "2px",
              height: "1px",
              width: "100%",
              background: "#596a7c",
            }}
          />
        </Top>
        <TopDivider>
          <div
            style={{
              height: "2px",
              width: "33px",
              background: "#32424d",
              transform: "skewY(2deg)",
            }}
          />
          <div
            style={{
              position: "relative",
              top: "1px",
              height: "2px",
              flex: "1",
              background: "#32424d",
              transform: "skewY(1deg)",
            }}
          />
        </TopDivider>
        <SecondLevel>
          <div
            style={{
              height: "100%",
              width: "29px",
              background: "#414c4d",
              transform: "skewY(2deg)",
            }}
          >
            {/* bench thing? */}
            <div
              style={{
                position: "absolute",
                width: "24px",
                height: "4px",
                bottom: 0,
                right: "2px",
                background: "#000005b5",
              }}
            />
            <Doorways
              numDoors={5}
              containerStyles={{
                gap: "5px",
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "62px",
              background: "#5d7b7f",
              transform: "skewY(1deg)",
              position: "relative",
              top: "1px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "4px",
                width: "6px",
                background: "#322a125c",
                height: "100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "16px",
                width: "5px",
                background: "#cb9f4dc4",
                height: "100%",
              }}
            />
            <Doorways
              numDoors={21}
              containerStyles={{
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
        </SecondLevel>
        <MiddleDivider>
          <div
            style={{
              height: "2px",
              width: "29px",
              background: "#32363f",
              transform: "skewY(2deg)",
            }}
          />
          <div
            style={{
              position: "relative",
              top: "1px",
              height: "2px",
              width: "62px",
              background: "#3a4753",
              transform: "skewY(1deg)",
            }}
          />
        </MiddleDivider>
        <ThirdLevel>
          <div
            style={{
              height: "100%",
              width: "29px",
              background: "#6b5c4a",
              transform: "skewY(2deg)",
            }}
          >
            <Doorways
              numDoors={5}
              containerStyles={{
                gap: "5px",
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "62px",
              background: "#716959",
              transform: "skewY(1deg)",
              position: "relative",
              top: "1px",
            }}
          >
            <Doorways
              numDoors={21}
              containerStyles={{
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
        </ThirdLevel>
        <BottomDivider>
          <div
            style={{
              position: "relative",
              top: "-3px",
              left: "29px",
              height: "2px",
              width: "62px",
              background: "#3a4753",
              transform: "skewY(1deg)",
            }}
          />
        </BottomDivider>
        <BottomLevel>
          <div
            style={{
              height: "100%",
              width: "18px",
              background: "#5d7b7f",
              transform: "skewY(1deg)",
              position: "relative",
              top: "1px",
            }}
          >
            <Doorways
              numDoors={6}
              containerStyles={{
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "27px",
              background: "#342822",
              transform: "skewY(0deg)",
              position: "relative",
              top: "1px",
            }}
          >
            <Doorways
              numDoors={6}
              containerStyles={{
                height: "100%",
              }}
              doorStyles={{
                borderRadius: 0,
                width: "1px",
                opacity: 0.5,
              }}
            />
          </div>
        </BottomLevel>
      </PainInTheAssBuilding>
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
              top: "9px",
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
