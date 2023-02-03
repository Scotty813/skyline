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
// Divs are reversed to avoid z indexing everything...
// I want the div at the top of jsx to be on the bottom of the ui so it goes behind the div above it.

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
            background: "#5d5448",
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
            bottom: "-172px",
            width: "76px",
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
            background: "#5d5448",
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
      </RightFace>
    </Front6Container>
  )
}
