
document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const otpForm = document.getElementById("otpForm");

  const step1 = document.getElementById("login-step1");
  const step2 = document.getElementById("login-step2");

  if (!loginForm || !otpForm || !step1 || !step2) {
    console.error("Required elements missing");
    return;
  }

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (u === "admin" && p === "1234") {
      step1.style.display = "none";
      step2.style.display = "block";
    } else {
      alert("Wrong credentials");
    }
  });

  otpForm.addEventListener("submit", e => {
    e.preventDefault();

    const otp = document.getElementById("otp").value;

    if (otp === "123456") {
      alert("Login successful");
      window.location.href = "flight_details.html";
    } else {
      alert("Wrong OTP");
    }
  });

});


  const quickForm = document.getElementById("quickCheckForm");
  const quickResult = document.getElementById("quickResult");

  if (quickForm) {
    quickForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const origin = document.getElementById("origin").value.trim();
      const destination = document.getElementById("destination").value.trim();
      const airline = document.getElementById("airline").value;
      const time = document.getElementById("time").value;

      if (!origin || !destination || !airline || !time) {
        quickResult.textContent = "Please fill all fields.";
        return;
      }

     
      const hour = parseInt(time.split(":")[0], 10);
      let tendency = "";
      let avgDelay = "";

      if (hour >= 18 || hour < 6) {
        tendency = "High chance of delay.";
        avgDelay = "Average delay on this route (demo): 30–45 minutes.";
      } else {
        tendency = "Low to moderate chance of delay.";
        avgDelay = "Average delay on this route (demo): 5–20 minutes.";
      }

      quickResult.innerHTML = `
        <p><strong>Route:</strong> ${origin} → ${destination}</p>
        <p><strong>Airline:</strong> ${airline}</p>
        <p><strong>Flight time:</strong> ${time}</p>
        <p><strong>Delay tendency (demo):</strong> ${tendency}</p>
        <p>${avgDelay}</p>
      `;
    });
  }


document.addEventListener("DOMContentLoaded", function () {
  const adminForm = document.getElementById("adminFlightForm");
  const adminMsg = document.getElementById("adminMsg");

  if (adminForm) {
    adminForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const entry = {
        date: document.getElementById("date").value,
        day: document.getElementById("day").value,
        airline: document.getElementById("airline").value.trim(),
        origin: document.getElementById("origin_admin").value.trim(),
        destination: document.getElementById("destination_admin").value.trim(),
        distance: Number(document.getElementById("distance").value) || 0,
        sched_dep: document.getElementById("sched_dep").value,
        actual_dep: document.getElementById("actual_dep").value,
        arr_delay: Number(document.getElementById("arr_delay").value) || 0,
        weather_delay: Number(document.getElementById("weather_delay").value) || 0,
        nas_delay: Number(document.getElementById("nas_delay").value) || 0,
        security_delay: Number(document.getElementById("security_delay").value) || 0,
        late_aircraft_delay: Number(document.getElementById("late_aircraft_delay").value) || 0,
        timestamp: new Date().toISOString()
      };

      localStorage.setItem("adminFlightEntry", JSON.stringify(entry));

      adminMsg.style.color = "#155724";
      adminMsg.textContent = "Saved. Redirecting to Prediction Result...";

      setTimeout(function () {
        window.location.href = "prediction_result.html";
      }, 900);
    });
  }

  
  const viewLatest = document.getElementById("viewLatest");
  if (viewLatest) {
    viewLatest.addEventListener("click", function () {
     
      if (!localStorage.getItem("adminFlightEntry")) {
        alert("No saved admin flight entry found. Please save first.");
      }
    });
  }
});



if (otpVal === "123456") {
  const adminSession = {
    isAdmin: true,
    user: "admin",
    email: "admin@airline.com",
    expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString()
  };
  localStorage.setItem("adminSession", JSON.stringify(adminSession));

  otpMsg.style.color = "#155724";
  otpMsg.textContent = "Login successful! Redirecting to Admin area...";
  setTimeout(() => {
    window.location.href = "admin_flight_entry.html";
  }, 900);
}


function isAdminLoggedIn() {
  const raw = localStorage.getItem("adminSession");
  if (!raw) return false;
  try {
    const s = JSON.parse(raw);
    if (!s.isAdmin) return false;
    if (s.expiresAt && new Date(s.expiresAt) < new Date()) {
      localStorage.removeItem("adminSession");
      return false;
    }
    return true;
  } catch (err) {
    localStorage.removeItem("adminSession");
    return false;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("admin_flight_entry.html") ||
      window.location.pathname.endsWith("flight_details.html")) {
    if (!isAdminLoggedIn()) {
   
      window.location.href = "login.html";
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("flightSearchForm");
  const results = document.getElementById("flightResults");

  if (!form || !results) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("origin").value.trim().toUpperCase();
    const to = document.getElementById("destination").value.trim().toUpperCase();

    if (!from || !to) {
      results.innerHTML = "<p class='msg'>Please enter both origin and destination.</p>";
      return;
    }

// Protect Flight Details Link

document.addEventListener("DOMContentLoaded", function () {

  const flightLink = document.getElementById("flightDetailsLink");
  const warningBox = document.getElementById("warningMsg");

  if (flightLink) {

    flightLink.addEventListener("click", function (e) {

      e.preventDefault();

      const session = localStorage.getItem("adminSession");

      if (session) {

        window.location.href = "flight_details.html";

      } else {

        warningBox.textContent = "Please login first to access Flight Details.";
        warningBox.style.display = "block";

        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500);

      }

    });

  }

});

    // Demo flight data (static)
    const flights = [
      { airline: "Air India", time: "06:30", duration: "2h 10m", status: "On Time" },
      { airline: "IndiGo", time: "09:45", duration: "2h 05m", status: "Delayed 15 min" },
      { airline: "Vistara", time: "14:20", duration: "2h 15m", status: "On Time" },
      { airline: "SpiceJet", time: "20:05", duration: "2h 20m", status: "High Delay Risk" }
    ];

    results.innerHTML = `<h3>Flights ${from} → ${to}</h3>`;

    flights.forEach(f => {
      results.innerHTML += `
        <div class="flight-item">
          <div class="flight-left">
            <strong>${f.airline}</strong>
            <span>${f.time}</span>
          </div>
          <div class="flight-right">
            <span>${f.duration}</span>
            <span class="status">${f.status}</span>
          </div>
        </div>
      `;
    });
  });

});




