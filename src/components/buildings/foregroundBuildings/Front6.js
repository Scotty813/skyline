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
const AirConditioner = styled.div`
  position: absolute;
  left: 14px;
  top: -6px;
  width: 8px;
  height: 6px;
  background: #87a0b9;
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
export const Front6 = () => {
  return (
    <Front6Container>
      <FrontFace>
        <div
          style={{
            position: "absolute",
            bottom: "-178px",
            width: "35px",
            height: "32px",
            border: "1px solid black",
            background: "#f0b70e85",
            transform: "skewY(17deg)",
          }}
        ></div>
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
            background: "#50443c",
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
            left: "10px",
            transform: "skewY(13deg)",
            gap: "4px",
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
            width: "76px",
            height: "28px",
            background: "#766753",
            transform: "skewY(-24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-169px",
            left: "14px",
            width: "62px",
            height: "37px",
            border: "1px solid black",
            background: "#f0b70e85",
            transform: "skewY(-25deg)",
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
        <div
          style={{
            height: "10px",
            width: "100%",
            background: "#50443c",
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
