$(document).ready(function () {
  $('.summary-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    items : 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
  
        },
        1000: {
            items: 1,
        }
    }
  })
});



// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

  // Check saved preference on page load
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  } else {
    if (darkModeToggle) {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Toggle dark mode on button click
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const darkModeEnabled = document.body.classList.contains("dark-mode");

      // Update button icon
      darkModeToggle.innerHTML = darkModeEnabled
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

      // Save preference to localStorage
      localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
    });
  }

// Fullscreen Toggle
const fullscreenBtn = document.getElementById("fullscreenBtn");
if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}

// User Profile Dropdown
const userProfile = document.getElementById("userProfile");
const userDropdown = document.getElementById("userDropdown");
if (userProfile && userDropdown) {
  userProfile.addEventListener("click", (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle("show");
  });
}

// Notification Dropdown
const notificationBtn = document.getElementById("notificationBtn");
const notificationDropdown = document.getElementById("notificationDropdown");
if (notificationBtn && notificationDropdown) {
  notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationDropdown.classList.toggle("show");
  });
}

// Settings Panel Toggle
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
if (settingsBtn && settingsPanel) {
  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle("show");
  });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const headerActions = document.getElementById("headerActions");
if (hamburger && headerActions) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    headerActions.classList.toggle("show");
  });
}

// Theme Selector Change
const themeSelector = document.getElementById("themeSelector");
if (themeSelector) {
  themeSelector.addEventListener("change", (e) => {
    if (e.target.value === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
}

// Close dropdowns and panels on outside click
document.addEventListener("click", (e) => {
  if (userProfile && userDropdown && !userProfile.contains(e.target)) {
    userDropdown.classList.remove("show");
  }
  if (notificationBtn && notificationDropdown && !notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
    notificationDropdown.classList.remove("show");
  }
  if (settingsPanel && settingsBtn && !settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
    settingsPanel.classList.remove("show");
  }
  if (headerActions && hamburger && !headerActions.contains(e.target) && !hamburger.contains(e.target)) {
    headerActions.classList.remove("show");
  }
});



//Summary Chart

Highcharts.chart('chartContainer', {
  chart: {
      type: 'column'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: [
          'UT 1',
          'UT 2',
          'Tower A',
          'Tower B',
          'Tower C',
          'Tower D',
          'Tower E',
      ]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Water Level (Litres)'
    }
    // Only one yAxis declared
  },
  legend: {
      shadow: false
  },
  tooltip: {
      shared: true
  },
  plotOptions: {
      column: {
          grouping: false,
          shadow: false,
          borderWidth: 0,
      }
  },
  series: [{
      name: 'Overall Capacity',
      color: 'rgb(26, 98, 193)',
      data: [5000, 5000, 4000, 4000, 3000, 3000, 4000],
      pointWidth: 60, 
      pointPadding: 0.3,
      pointPlacement: -0.2,
      tooltip: {
        valuePrefix: '',
        valueSuffix: 'ltrs'
    },
  }, {
      name: 'Available Water Capacity',
      color: 'rgba(99, 208, 230, 0.9)',
      data: [1600, 1357, 650, 778, 888, 590, 875],
      pointWidth: 40, 
      pointPadding: 0.4,
      pointPlacement: -0.2,
      tooltip: {
        valuePrefix: '',
        valueSuffix: 'ltrs'
    },
  }, {
      name: 'Valve Open',
      color: 'rgba(237, 12, 12, 0.9)',
      data: [220, 0, 0, 220, 200, 0, 220],
      pointWidth: 20, 
      pointPadding: 0.45,
      pointPlacement: -0.2,
    //        tooltip: {
    //     valuePrefix: '',
    //     valueSuffix: 'Volts'
    // } 
  },
]
  
  
});



