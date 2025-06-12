const users = [
  {
    availability: "available",
    rate: "$55/hr",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500",
    name: "Wade Wilson",
    position: "Mobile Designer",
    skills: ["PHP", "Android", "iOS"],
    about: "Wade is an Android and iOS developer who worked at Apple for 6 years."
  },
  {
    availability: "available",
    rate: "$40/hr",
    image: "https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    name: "Sarah Connor",
    position: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    about: "Sarah builds responsive websites with strong frontend skills."
  },
  {
    availability: "Hired",
    rate: "$60/hr",
    image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    name: "John Doe",
    position: "Backend Engineer",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "John specializes in backend APIs and database design."
  },
  {
    availability: "available",
    rate: "$50/hr",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500",
    name: "Emily Davis",
    position: "UI/UX Designer",
    skills: ["Figma", "Sketch", "Photoshop"],
    about: "Emily creates user-friendly designs and wireframes."
  },
  {
    availability: "Hired",
    rate: "$70/hr",
    image: "https://images.unsplash.com/photo-1636172431676-c69e79d8ad92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    name: "Bruce Banner",
    position: "DevOps Engineer",
    skills: ["AWS", "Docker", "CI/CD"],
    about: "Bruce handles cloud deployments and system reliability."
  },
  {
    availability: "available",
    rate: "$45/hr",
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    name: "Natalie Portman",
    position: "Frontend Developer",
    skills: ["React", "Redux", "CSS"],
    about: "Natalie crafts modern frontend apps with React."
  },
  {
    availability: "available",
    rate: "$65/hr",
    image: "https://images.unsplash.com/photo-1679673988162-018d0400240e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    name: "Peter Parker",
    position: "Full Stack Developer",
    skills: ["JavaScript", "Node", "React"],
    about: "Peter handles both client and server-side code."
  },
  {
    availability: "Hired",
    rate: "$58/hr",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    name: "Tony Stark",
    position: "AI Engineer",
    skills: ["Python", "TensorFlow", "ML"],
    about: "Tony builds smart systems and machine learning models."
  },
  {
    availability: "available",
    rate: "$49/hr",
    image: "https://images.unsplash.com/photo-1661851896711-a0f5460f413f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    name: "Diana Prince",
    position: "Project Manager",
    skills: ["Agile", "Scrum", "JIRA"],
    about: "Diana coordinates tech teams and ensures timely delivery."
  },
  {
    availability: "available",
    rate: "$55/hr",
    image: "https://images.unsplash.com/photo-1594245703266-cbcf061378c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
    name: "Clark Kent",
    position: "Data Analyst",
    skills: ["Excel", "SQL", "Power BI"],
    about: "Clark analyzes large datasets and builds dashboards."
  }
];
let cards = document.querySelector('#main')

function name() {
  let sum = ' '
users.forEach(function(elem,indx){
    // console.log(elem.availability);

    sum = sum + `<div class="card">
            <div class="cont">
            <div class="pay">
                <p class="avail ${elem.availability === "available" ? "available" : "hired"}">${elem.availability}</p>
                <p>${elem.rate}</p>
            </div>
            <div class="pic">
               <img src=${elem.image} alt="">
            </div>
            <div class="name-cont">
                <p class="name" >${elem.name}</p>
                <p class="post" >${elem.position}</p>
            </div>
            <div class="skills">
                <p>${elem.skills[0]}</p>
                <p>${elem.skills[1]}</p>
                <p>${elem.skills[2]}</p>
            </div>
            <div class="about">
               ${elem.about}
            </div>
            <div class="line"></div>
            </div>
            <button id="${indx}">HIRE</button>
    </div>`
    
})




cards.innerHTML = `${sum}`
}
name()

cards.addEventListener("click",function(evt){
  let id = evt.target.id


  if (users[id].availability == 'available') {
    users[id].availability = 'hired'
  } else {
    users[id].availability = 'available'
  }
  console.log(users[id].availability);
  name()
})