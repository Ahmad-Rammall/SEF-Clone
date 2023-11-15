const fcsFilter = document.getElementById("fcs");
const fswFilter = document.getElementById("fsw");
const fsdFilter = document.getElementById("fsd");
const uixFilter = document.getElementById("uix");
const coloredText = document.getElementById("colored-text");
const progImg = document.getElementById("progImg");

fcsFilter.addEventListener("click", () => {
  changeProgramsInfo("fcs");
  fcsFilter.classList.add("selected-filter");
  removeClass([fswFilter, fsdFilter, uixFilter]);
  fcsFilter.style.color = "#ffc635";
  addBlackColor([fswFilter,uixFilter,fsdFilter])
  coloredText.style.color = "#ffc635";
  progImg.setAttribute("src", "./assets/fcs.png");
});

fswFilter.addEventListener("click", () => {
  changeProgramsInfo("fsw");
  fswFilter.classList.add("selected-filter");
  removeClass([fcsFilter, fsdFilter, uixFilter]);
  fswFilter.style.color = "#28eea7";
  addBlackColor([fcsFilter,uixFilter,fsdFilter])
  coloredText.style.color = "#28eea7";
  progImg.setAttribute("src", "./assets/fsw.png");
});

fsdFilter.addEventListener("click", () => {
  changeProgramsInfo("fsd");
  fsdFilter.classList.add("selected-filter");
  removeClass([fswFilter, fcsFilter, uixFilter]);
  addBlackColor([fcsFilter,fswFilter,uixFilter])
  fsdFilter.style.color = "#9864da";
  coloredText.style.color = "#9864da";
  progImg.setAttribute("src", "./assets/fsd.png");
});

uixFilter.addEventListener("click", () => {
  changeProgramsInfo("uix");
  uixFilter.classList.add("selected-filter");
  removeClass([fswFilter, fsdFilter, fcsFilter]);
  uixFilter.style.color = "#fb508e";
  addBlackColor([fcsFilter,fswFilter,fsdFilter])
  coloredText.style.color = "#fb508e";
  progImg.setAttribute("src", "./assets/uix.png");
});

const removeClass = (arr) => {
  arr.forEach((element) => {
    element.classList.remove("selected-filter");
  });
};

const addBlackColor = (arr) => {
  arr.forEach((element) => {
    element.style.color = "#000";
  });
};

const changeProgramsInfo = (id) => {
  const section = document.getElementsByClassName("programs-section")[0];
  const title = document.getElementsByClassName("prog-title")[0];
  const description = document.getElementsByClassName("prog-desc")[0];
  switch (id) {
    case "fcs":
      title.innerHTML =
        '<span class="yellow-text">> FCS: </span>Foundations of Computer Science';
      description.textContent =
        "// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.";
      section.setAttribute("class", "programs-section yellow-background");
      break;
    case "fsw":
      title.innerHTML =
        '<span class="green-text">> FSW: </span>Full-Stack Web Development';
      description.textContent =
        "// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.";
      section.setAttribute("class", "programs-section green-background");
      break;
    case "fsd":
      title.innerHTML =
        '<span class="purple-text">> FSD: </span>Full-Stack Data';
      description.textContent =
        "// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.";
      section.setAttribute("class", "programs-section purple-background");
      break;
    case "uix":
      title.innerHTML =
        '<span class="pink-text">> UIX: </span>UI/UX Design Bootcamp';
      description.textContent =
        "// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.";
      section.setAttribute("class", "programs-section pink-background");
      break;

    default:
      break;
  }
};

// FAQs Section

document.getElementById('q-1').addEventListener('click' , () => {
    toggleElement('answer-1')
})

document.getElementById('q-2').addEventListener('click' , () => {
    toggleElement('answer-2')
})

document.getElementById('q-3').addEventListener('click' , () => {
    toggleElement('answer-3')
})

const toggleElement = (element) => {
    document.getElementById(`${element}`).classList.toggle("hidden")
    document.getElementById(`${element}`).classList.toggle("visible")
}