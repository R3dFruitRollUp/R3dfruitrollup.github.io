window.addEventListener('load', function () {
  // Populate projects
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive website for a local business.',
      imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=Placeholder',
    },
    {
      title: 'Project 2',
      description: 'A single-page web app using React.js.',
      imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=Placeholder',
    },
    {
      title: 'Project 3',
      description: 'A blog site built with Jekyll and GitHub Pages.',
      imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=Placeholder',
    },
  ];

  const projectsContainer = document.querySelector('.projects-container');
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <img src="${project.imageUrl}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Set up routing
  window.addEventListener("hashchange", handleHashChange);
  if (location.hash) {
    handleHashChange();
  } else {
    location.hash = "#about";
  }
});

function navigateTo(hash) {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    if (section.id === hash) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

function handleHashChange() {
  const hash = location.hash.substring(1);
  navigateTo(hash);
}

function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  bmi = Math.round(bmi);
  
  let message;
  if (bmi < 18.5) {
      message = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
      message = "Your BMI is " + bmi + ", so you are overweight.";
  }
  
  return message;
}

function isLeap(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return "Leap year.";
          } else {
              return "Not leap year.";
          }
      } else {
          return "Leap year.";
      }
  } else {
      return "Not leap year.";
  }
}
