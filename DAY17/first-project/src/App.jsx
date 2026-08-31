import Navbar from "./components/NavBar/NavBar.jsx";
import Counter from "./components/Counter/Counter.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
    
      <main className="container my-auto py-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h2 className="text-center fw-bold mb-4 text-dark">
              React Essentials Dashboard
            </h2>
            
            <Counter />
            <UserCard name="Boshra" role="Frontend Developer" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default App;