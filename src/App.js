import { Skyline } from "./components/Skyline"
import skyline from "./pictures/skyline.jpg"

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
      <div style={{ display: "flex", flex: 1, marginTop: "18px", gap: "24px" }}>
        <div style={{ flex: 1 }}>
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
          <Skyline />
        </div>
      </div>
    </div>
  )
}

export default App
