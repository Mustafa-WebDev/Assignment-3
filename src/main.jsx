import Reactdom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Reactdom.createRoot(document.getElementById('root')).render(
  <>
  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-center">
    <p className="navbar-brand fs-1" href="#">
      React
    </p>
  </div>
</nav>

<div>
  <img src="https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg" alt="react" style={{width:"100%",maxHeight:"83vh"}} />
</div>
<div className="text-center text-justify my-3 fs-4 text-muted">
  <p>THIS IS REACT JS !</p>
</div>
  </>
)
