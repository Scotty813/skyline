import { Clouds } from "./Clouds"
import styled from "@emotion/styled"

const SkyContainer = styled.div`
  position: relative;
  z-index: -999;
  height: 348px;
  background: rgb(189, 199, 214);
  background: linear-gradient(
    171deg,
    rgba(189, 199, 214, 1) 69%,
    rgba(164, 154, 165, 1) 74%,
    rgba(232, 143, 140, 1) 87%,
    rgba(251, 235, 171, 1) 100%
  );
`
export const Sky = () => {
  return (
    <SkyContainer>
      <Clouds />
    </SkyContainer>
  )
}
