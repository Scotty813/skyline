import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front6Container = styled.div`
  position: absolute;
  bottom: 322px;
  left: 197px;
  display: flex;
`
const FrontFace = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 52px;
`

const RightFace = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 200px;
`
const TopWhiteThing = styled.div`
  position: absolute;
  top: -23px;
  right: 72px;
  width: 57px;
  height: 20px;
  background: #92aec5;
  transform: skewY(1deg);
  border-top: 2px solid #a0bed9;
`
const WhiteTriangleThing = styled.div`
  position: absolute;
  top: -24px;
  right: 120px;
  height: 20px;
  width: 15px;
  background: #869dad;
  clip-path: polygon(0 44%, 0% 100%, 100% 100%);
`
const BackBuildingRed = styled.div`
  position: absolute;
  top: -21px;
  right: 39px;
  width: 50px;
  height: 16px;
  background: #51312e;
  transform: skewY(2deg);
`
const BackBuildingBeige = styled.div`
  position: absolute;
  top: -17px;
  right: 29px;
  width: 20px;
  height: 10px;
  background: #808b93;
`
const BackTallBuildingBeige = styled.div`
  position: absolute;
  bottom: 34px;
  right: 40px;
  width: 30px;
  height: 35px;
  background: #70838f;
`
const AirConditioner = styled.div`
  position: absolute;
  left: 14px;
  top: -6px;
  width: 8px;
  height: 6px;
  background: #87a0b9;
  transform: skewY(-2deg);
`
const AnotherACThing = styled.div`
  position: absolute;
  left: 38px;
  top: -13px;
  width: 8px;
  height: 12px;
  background: #546c7b;
  transform: skewY(-2deg);
`
const BlackCircularThing = styled.div`
  position: absolute;
  left: 47px;
  top: -13px;
  width: 17px;
  height: 17px;
  background: #2c3841;
  clip-path: ellipse(49% 17% at 50% 50%);
`
// Divs are reversed to avoid z indexing everything...
// I want the div at the top of jsx to be on the bottom of the ui so it goes behind the div above it.
const BannerThing = styled.div`
  position: absolute;
  top: 160px;
  left: -4px;
  width: 15px;
  height: 15px;
  background: #0d0b0a;
  border-radius: 4px 4px 0 0;
  transform: skewY(10deg);
`
const BackFace = styled.div`
  position: absolute;
  top: -6px;
  transform: skewY(-3deg);
  background: #372f25;
  width: 200px;
  height: 20px;
`
const BeigeBuilding = styled.div`
  position: absolute;
  top: -18px;
  left: 93px;
  width: 30px;
  height: 15px;
  border-top: 3px solid #08090b;
  background: #657172;
  transform: skewY(-2deg);
`
const RandomDarkBuilding = styled.div`
  position: absolute;
  top: -20px;
  left: 48px;
  width: 43px;
  height: 30px;
  background: #2c3b3e;
  transform: skewY(-5deg);
`
const RandomRedishBuilding = styled.div`
  position: absolute;
  bottom: 36px;
  right: 65px;
  height: 20px;
  width: 50px;
  background: #3f2d2d;
  clip-path: polygon(67% 31%, 67% 0, 100% 0, 100% 100%, 0 100%, 0 31%);
  transform: skewY(-2deg);
`

export const Front6 = () => {
  return (
    <Front6Container>
      <BeigeBuilding></BeigeBuilding>
      <RandomDarkBuilding />

      <BackFace />
      <FrontFace>
        <div
          style={{
            position: "absolute",
            bottom: "-178px",
            width: "35px",
            height: "32px",
            border: "1px solid black",
            background: "#f0b70e78",
            transform: "skewY(17deg)",
          }}
        >
          {/* blue painting thing */}
          <div
            style={{
              position: "absolute",
              top: "11px",
              right: "8px",
              height: "9px",
              width: "5px",
              background: "#aad8aecc",
            }}
          />
          {/* black bars */}
          <div
            style={{
              transform: "skewY(-3deg)",
              position: "absolute",
              top: "7px",
              width: "100%",
              height: "1px",
              background: "#00000061",
            }}
          />
          <div
            style={{
              transform: "skewY(-1deg)",
              position: "absolute",
              bottom: "7px",
              width: "100%",
              height: "1px",
              background: "#00000061",
            }}
          />
          <div
            style={{
              transform: "skewY(-1deg)",
              position: "absolute",
              left: "15px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          {/* red column */}
          <div
            style={{
              position: "absolute",
              right: "3px",
              height: "100%",
              width: "3px",
              background: "#532a19",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-189px",
            right: "-1px",
            height: "34px",
            width: "2px",
            background: "black",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "7px",
            width: "100%",
            bottom: "-148px",
            background: "#585c5c",
            transform: "skewY(14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: "-142px",
            height: "44px",
            background: "#532a19",
            transform: "skewY(14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-102px",
            width: "100%",
            height: "108px",
            background: "#443a2d",
            transform: "skewY(13deg)",
          }}
        />
        <div
          style={{
            height: "3px",
            background: "#221c1c",
            transform: "skewY(4deg)",
          }}
        />
        <div
          style={{
            height: "7px",
            background: "#6e7977",
            transform: "skewY(4deg)",
          }}
        />
        <div
          style={{
            height: "10px",
            background: "#443a2d",
            transform: "skewY(4deg)",
          }}
        />
        <BannerThing>
          <div
            style={{
              color: "white",
              fontSize: "3px",
              position: "absolute",
              fontWeight: 800,
              top: "4px",
              left: "1px",
            }}
          >
            Kings Avenue
          </div>
        </BannerThing>
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "25px",
            left: "10px",
            transform: "skewY(7deg)",
            gap: "4px",
          }}
          doorStyles={{ width: "8px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "60px",
            left: "10px",
            transform: "skewY(7deg)",
            gap: "4px",
          }}
          doorStyles={{ width: "8px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "93px",
            left: "10px",
            transform: "skewY(10deg)",
            gap: "4px",
          }}
          doorStyles={{ width: "8px", background: "#aba86f" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "130px",
            left: "8px",
            transform: "skewY(13deg)",
            gap: "3px",
          }}
          doorStyles={{
            width: "8px",
            background: "#b08537",
            borderRadius: 0,
            border: "1px solid black",
          }}
        />
      </FrontFace>
      <RightFace>
        <div
          style={{
            position: "absolute",
            bottom: "-137px",
            right: "46px",
            width: "70px",
            height: "28px",
            background: "#5d5543",
            transform: "skewY(-24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-169px",
            left: "14px",
            width: "69px",
            height: "37px",
            border: "1px solid black",
            background: "#f0b70e78",
            transform: "skewY(-25deg)",
          }}
        >
          {/* red column */}
          <div
            style={{
              position: "absolute",
              left: "15px",
              width: "6px",
              height: "100%",
              background: "#532a19",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "43px",
              width: "6px",
              height: "100%",
              background: "#532a19",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "70px",
              width: "6px",
              height: "100%",
              background: "#532a19",
            }}
          />
          {/* blue painting thing */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "35px",
              height: "9px",
              width: "4px",
              background: "#baf4d9e3",
            }}
          />
          {/* shadow overlay */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "15px",
              height: "10px",
              background: "#0000009e",
            }}
          />
          {/* black bars */}
          <div
            style={{
              position: "absolute",
              transform: "skewY(5deg)",
              top: "12px",
              height: "1px",
              width: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "4px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "26px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "36px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "52px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "59px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "10px",
              width: "1px",
              height: "100%",
              background: "#00000061",
            }}
          />
          <div
            style={{
              position: "absolute",
              transform: "skewY(3deg)",
              bottom: "8px",
              height: "1px",
              width: "100%",
              background: "#00000061",
            }}
          />
        </div>
        {/* light overlay thing? */}
        <div
          style={{
            zIndex: "-5",
            position: "absolute",
            bottom: "-185px",
            left: "-15px",
            height: "40px",
            width: "29px",
            background: "#f0b70e4f",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-185px",
            left: "-9px",
            transform: "skewX(1deg)",
            height: "26px",
            width: "15px",
            border: "1px solid black",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "7px",
            width: "100%",
            bottom: "-119px",
            background: "#585c5c",
            transform: "skewY(-20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-112px",
            height: "42px",
            width: "100%",
            background: "#532a19",
            transform: "skewY(-20deg)",
          }}
        />

        <div
          style={{
            height: "107px",
            width: "100%",
            background: "#443a2d",
            position: "absolute",
            bottom: "-80px",
            transform: "skewY(-16deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "7px",
            width: "100%",
            height: "3px",
            background: "#221c1c",
            transform: "skewY(-5deg)",
          }}
        />
        <div
          style={{
            height: "7px",
            width: "100%",
            background: "#6e7977",
            position: "absolute",
            bottom: "10px",
            transform: "skewY(-5deg)",
          }}
        />
        <BackTallBuildingBeige>
          <div
            style={{
              position: "absolute",
              top: "-2px",
              right: 0,
              width: "20px",
              height: "2px",
              background: "#323842",
            }}
          />
          <Doorways
            numDoors={8}
            containerStyles={{
              position: "absolute",
              top: "3px",
              left: "5px",
              gap: "1px",
            }}
            doorStyles={{
              borderRadius: 0,
              height: "2px",
              width: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "5px",
              height: "2px",
              width: "2px",
              background: "#eee0b7",
            }}
          />
          <Doorways
            numDoors={5}
            containerStyles={{
              position: "absolute",
              top: "8px",
              left: "9px",
              gap: "1px",
            }}
            doorStyles={{
              borderRadius: 0,
              height: "2px",
              width: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "26px",
              height: "2px",
              width: "2px",
              background: "#eee0b7",
            }}
          />
          <Doorways
            numDoors={6}
            containerStyles={{
              position: "absolute",
              top: "14px",
              left: "5px",
              gap: "2px",
            }}
            doorStyles={{
              borderRadius: 0,
              height: "2px",
              width: "2px",
            }}
          />
        </BackTallBuildingBeige>

        <RandomRedishBuilding />

        <BackBuildingRed>
          <Doorways
            numDoors={2}
            containerStyles={{
              position: "absolute",
              top: "5px",
              left: "23px",
            }}
            doorStyles={{
              width: "3px",
              height: "5px",
              borderRadius: 0,
              border: "1px solid #616f76",
            }}
          />
        </BackBuildingRed>

        <BackBuildingBeige />
        <TopWhiteThing>
          <div
            style={{
              position: "relative",
              height: "1px",
              background: "#00000040",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "24px",
              height: "15px",
              width: "1px",
              background: "#0000002b",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "6px",
              top: "4px",
              display: "flex",
              gap: "4px",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "3px",
                background: "#000000a6",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "3px",
                background: "#00000052",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "3px",
                background: "#000000a6",
              }}
            />
          </div>
        </TopWhiteThing>
        <WhiteTriangleThing />
        <div
          style={{
            position: "absolute",
            top: "-15px",
            right: "122px",
            height: "10px",
            width: "6px",
            background: "#96bad8",
            transform: "skewX(52deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-12px",
            right: "119px",
            height: "5px",
            width: "5px",
            background: "#00000087",
            transform: "skewX(52deg)",
          }}
        />
        <AirConditioner>
          <div
            style={{
              position: "absolute",
              height: "3px",
              width: "3px",
              background: "#1d2328",
              left: "3px",
              top: "2px",
            }}
          />
        </AirConditioner>
        <BlackCircularThing />
        <div // topper to black circular thing
          style={{
            position: "absolute",
            top: "-9px",
            left: "53px",
            width: "4px",
            height: "2px",
            background: "#090d18a8",
            borderRadius: "10px",
          }}
        />
        <AnotherACThing>
          <div
            style={{
              position: "absolute",
              right: "1px",
              top: "3px",
              width: "2px",
              height: "8px",
              background: "#00000066",
            }}
          />
        </AnotherACThing>
        <div
          style={{
            height: "10px",
            width: "100%",
            background: "#443a2d",
            transform: "skewY(-5deg)",
            position: "absolute",
            bottom: "17px",
          }}
        />
        {/* 1st row */}
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "25px",
            left: "10px",
            transform: "skewY(-7deg)",
          }}
          doorStyles={{ width: "5px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "23px",
            left: "38px",
            transform: "skewY(-8deg)",
            height: "22px",
          }}
          doorStyles={{ width: "5px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "21px",
            left: "65px",
            transform: "skewY(-8deg)",
            height: "20px",
          }}
          doorStyles={{ width: "4px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "19px",
            left: "89px",
            transform: "skewY(-8deg)",
            height: "18px",
          }}
          doorStyles={{ width: "4px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "17px",
            left: "112px",
            transform: "skewY(-7deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "15px",
            left: "132px",
            transform: "skewY(-6deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        {/* 2nd row */}
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "58px",
            left: "10px",
            transform: "skewY(-9deg)",
          }}
          doorStyles={{ width: "5px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "56px",
            left: "38px",
            transform: "skewY(-9deg)",
            height: "22px",
          }}
          doorStyles={{ width: "5px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "53px",
            left: "65px",
            transform: "skewY(-9deg)",
            height: "20px",
          }}
          doorStyles={{ width: "4px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "50px",
            left: "89px",
            transform: "skewY(-8deg)",
            height: "18px",
          }}
          doorStyles={{ width: "4px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "47px",
            left: "112px",
            transform: "skewY(-7deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "44px",
            left: "132px",
            transform: "skewY(-6deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        {/* 3rd row */}
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "95px",
            left: "10px",
            transform: "skewY(-13deg)",
          }}
          doorStyles={{ width: "4px", background: "#aba86f" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "89px",
            left: "39px",
            transform: "skewY(-13deg)",
            height: "22px",
          }}
          doorStyles={{ width: "4px", background: "#aba86f" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "85px",
            left: "66px",
            transform: "skewY(-12deg)",
            height: "20px",
          }}
          doorStyles={{ width: "3px", background: "#cdac33" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "81px",
            left: "89px",
            transform: "skewY(-11deg)",
            height: "18px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "75px",
            left: "112px",
            transform: "skewY(-11deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "70px",
            left: "132px",
            transform: "skewY(-11deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            top: "27px",
            left: "-5px",
          }}
          doorStyles={{ width: "7px" }}
        />
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            top: "61px",
            left: "-5px",
          }}
          doorStyles={{ width: "7px" }}
        />
        <Doorways
          numDoors={1}
          containerStyles={{
            position: "absolute",
            top: "98px",
            left: "-2px",
          }}
          doorStyles={{ width: "4px", background: "#aba86f" }}
        />
        {/* 4th row */}
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "127px",
            left: "7px",
            height: "17px",
            transform: "skewY(-19deg)",
            gap: "6px",
          }}
          doorStyles={{
            width: "20px",
            background: "#b08537",
            borderRadius: 0,
            border: "1px solid black",
          }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "110px",
            left: "91px",
            transform: "skewY(-19deg)",
            height: "17px",
          }}
          doorStyles={{ width: "3px" }}
        />
        <Doorways
          numDoors={2}
          containerStyles={{
            position: "absolute",
            top: "105px",
            left: "112px",
            transform: "skewY(-19deg)",
            height: "15px",
            gap: 0,
          }}
          doorStyles={{
            width: "5px",
            borderRadius: 0,
            border: "1px solid black",
            background: "#595848",
          }}
        />
        <Doorways
          numDoors={3}
          containerStyles={{
            position: "absolute",
            top: "97px",
            left: "133px",
            transform: "skewY(-19deg)",
            height: "15px",
          }}
          doorStyles={{ width: "3px" }}
        />
      </RightFace>
    </Front6Container>
  )
}
