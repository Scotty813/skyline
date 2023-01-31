import styled from "@emotion/styled"

const YellowBorder = styled.div``

const MedianContainer = styled.div`
  position: absolute;
  transform: rotate(3deg) skew(-22deg);
  left: 100px;
  top: 83px;
  display: flex;
  gap: 1px;
  height: 27px;
`
const LeftMedian = styled.div`
  width: 30px;
  background: ${({ theme }) => theme.sidewalk};
`
const LeftMedianOverlay = styled(LeftMedian)`
  position: relative;
  left: 0;
  top: -1px;
  border-bottom: 30px solid ${({ theme }) => theme.sidewalk};
  border-left: 12px solid ${({ theme }) => theme.street};
  border-right: 8px solid ${({ theme }) => theme.street};
  height: 0;
  width: 6px;
  transform: rotate(268deg);
`
const RightMedian = styled.div`
  width: 30px;
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.sidewalk};
`

export const Median = () => {
  return (
    <MedianContainer>
      <LeftMedianOverlay />

      <LeftMedian />
      <RightMedian />
    </MedianContainer>
  )
}
