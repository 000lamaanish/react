
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/Card"


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="card">
          <Card title="card 1" description="desc 2" />
          <Card title="card 2" description="desc 2" />
          <Card title="card 3" description="desc 2" />
          <Card title="card 4" description="desc 2" />
        </div>

        <Footer />

      </div>
    </>
  )
}
export default App
