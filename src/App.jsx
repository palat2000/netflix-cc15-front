import ContentModal from "./feature/ContentModal";
import Route from "./router/Route";

function App() {
  return (
    <div>
      <ContentModal movieId={1} />
      {/* <ContentModal movieId={2} /> */}
      <Route />;
    </div>
  )
}

export default App;
