import { useState } from "react";

function App() {
  const [page, setPage] = useState("dog");

  if (page === "resume") {
    return <ResumePage goBack={() => setPage("dog")} />;
  }

  return <DogPage goToResume={() => setPage("resume")} />;
}

function DogPage({ goToResume }) {
  return (
    <div className="container">
    <h1>The Best Dog: The Beagle </h1>

    <img
    src="https://www.bil-jac.com/wp-content/uploads/2024/12/beagle2-184102750.webp"
    alt="Beagle"
    className="dog-image"
    />

    <h2>Why Beagles are the best:</h2>
    <ul>
    <li>Great with kids and families</li>
    <li>Adaptable to apartments or farms</li>
    <li>Excellent hunting instincts</li>
    <li>Low grooming maintenance</li>
    </ul>

    <p>
    Beagles are friendly, intelligent dogs often used for hunting. They work
    well with families and other animals.
    </p>

    <br></br>
    <h2>Showcase Video</h2>
    <iframe
    src="https://www.youtube.com/embed/hbGslNsH1UM"
    title="Beagle Video"
    allowFullScreen
    ></iframe>

    <br></br>
    <br></br>

    <button onClick={goToResume} className="nav-btn">
    View My Resume
    </button>
    </div>
  );
}

function ResumePage({ goBack }) {
  return (
    <div class="container">
    <h1>Benjamin Lukens</h1>
    <p>Email: jowen22@murraystate.edu | Phone: (812) 646-GOAT</p>
    <h2>Education</h2>
    <p>Murray State University</p>
    <p>Bachelor of Science in Computer Science</p>
    <p>Graduation: 2028</p>

    <h2>Work Experience</h2>
    <ul>
    <li>Muscle Motors Booneville IN: Engine teardown services. Cleaned machinery and inspected inventory.</li>
    <li>CP Handheld Technologies LLC: Intern web app developer for VINpoint and VINpoint API.</li>
    </ul>

    <h2>Extracurricular</h2>
    <ul>
    <li>Murray State SAE Baja Social Media Manager</li>
    <li>CNM Cyberteam</li>
    <li>Wellness Center ping pong player</li>
    </ul>

    <h2>Future Career</h2>
    <p>
    I aspire to make software for large tech companies in the future. Until then, I am working on a music app and building web applications. 
    </p>

    <br></br>

    <button onClick={goBack} className="nav-btn">
    Back to Dogs
    </button>
    </div>
  );
}

export default App;
