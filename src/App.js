import { Skyline } from "./components/Skyline"
import skyline from "./skyline.jpg"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>Skyline</h1>
      <div style={{ display: "flex", flex: 1, marginTop: "48px", gap: "24px" }}>
        <div style={{ flex: 1 }}>
          Img
          <div>
            <img
              alt="skyline"
              src={skyline}
              width="100%"
              style={{ maxWidth: "550px" }}
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          Code
          <Skyline />
        </div>
      </div>
    </div>
  )
}

export default App