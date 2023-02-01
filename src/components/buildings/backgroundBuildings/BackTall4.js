import styled from "@emotion/styled/macro"

const BackTall4Container = styled.div`
  position: absolute;
  top: 286px;
  left: 272px;
`
const Building = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 70px;
`
const Topper = styled.div`
  position: absolute;
  left: 12px;
  top: -5px;
  height: 5px;
  width: 4px;
  border-radius: 4px 4px 0 0;
  background: #414055a8;
`
const BuildingTop = styled.div`
  width: 18px;
  height: 10px;
  background: #768a9b;
`
const BuildingBottom = styled.div`
  width: 100%;
  height: 100%;
  background: #657a85;
`
const Light = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  background: ${({ theme }) => theme.lights.smallLight};
`

export const BackTall4 = () => {
  return (
    <BackTall4Container>
      <Light
        style={{
          top: "7px",
          right: "13px",
        }}
      />
      <Light
        style={{
          top: "7px",
          right: "10px",
        }}
      />
      <Light
        style={{
          top: "20px",
          right: "8px",
        }}
      />
      <Light
        style={{
          top: "30px",
          right: "8px",
        }}
      />
      <Topper />
      <Building>
        <BuildingTop />
        <BuildingBottom />
      </Building>
    </BackTall4Container>
  )
}
