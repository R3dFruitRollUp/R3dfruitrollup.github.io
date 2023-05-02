document.addEventListener("DOMContentLoaded", function () {
    const projects = [
      {
        title: "Project 1",
        description: "A responsive website for a local business.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Project 2",
        description: "A single-page web app using React.js.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Project 3",
        description: "A blog site built with Jekyll and GitHub Pages.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ];
  
    const projectsContainer = document.getElementById("projects");
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectsContainer.appendChild(projectCard);
    });
  });
  