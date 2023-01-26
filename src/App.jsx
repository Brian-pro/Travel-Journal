import Navbar from "./components/Navbar"
import Content from "./components/Content"
import data from "./data"

export default function App() {
  const cardData = data.map(item => 
    <Content 
      key={item.id}
      item={item}
    />
  );

  return (
    <div>
      <Navbar />
      <section className="content-container">
        {cardData}
      </section>
    </div>
  )
}