import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Confirmation from "./Pages/Confirmation";
import TrackOrder from "./Pages/Track-order";

function Home() {
  return (
    <div>
      <header>
        <h2>MICORA</h2>

        <nav>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div>
          <a href="/login">
            <button>Login</button>
          </a>

          <a href="/signup">
            <button>Get Started</button>
          </a>
        </div>
      </header>

      <main>
        <section id="home">
          <p>MICORA PRINTING HUB</p>

          <h1>
            Your designs.
            <br />
            Our print.
            <br />
            Delivered.
          </h1>

          <p>
            Order quality printing and branding services online,
            upload your design, and track your order with ease.
          </p>

          <button>Start Your Order</button>
          <button>Explore Services</button>
        </section>

        <section id="services">
          <p>WHAT WE OFFER</p>

          <h2>Everything You Need for Your Brand</h2>

          <div>
            <div>Flyers & Posters</div>
            <div>Banners & Signage</div>
            <div>Business Cards</div>
            <div>T-Shirts & Apparel</div>
            <div>Bags & Packaging</div>
            <div>Stickers & Labels</div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Let's Print Something Great.</h2>
        <button>Get Started</button>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
