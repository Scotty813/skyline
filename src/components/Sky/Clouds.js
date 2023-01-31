import styled from "@emotion/styled"

const Cloud = styled.div`
  height: 8px;
  width: 8px;
  margin: 4px;
  background: #abb6c8;
`

const clouds1 = Array(220)
const Clouds1 = clouds1.fill(Cloud)
const Clouds1Container = styled.div`
  position: absolute;
  left: 50px;
  display: flex;
  flex-wrap: wrap;
  transform: rotate(0.07turn);
  filter: blur(3px);
`

const clouds2 = Array(200)
const Clouds2 = clouds2.fill(Cloud)

export const Clouds = () => {
  return (
    <div>
      {/* <Clouds1Container>
        {Clouds1.map((Cloud, i) => (
          <Cloud key={i} />
        ))}
      </Clouds1Container> */}
    </div>
  )
}
