interface Project{
  name: string,
  image: string
  content: string[],
  siteLink: string,
  codeLink: string,
  skills: string[]
}

const getProjectData = () => {
  fetch('./projects.json').then(response => {
    return response.json();
  }).then(data => {
      buildProjectCards(data.projectsArray);
  }).catch(err => {
    console.error(err);
  });
}

const buildProjectCards = (projectData: Project[]) => {
  for (let project of projectData){
    const newCard = createCard();
    getImage(newCard, project);
    getContent(newCard, project);
    document.getElementById("projects-container").appendChild(newCard);
  }
}

const createCard = (): HTMLDivElement => {
  const newCard = document.createElement("div");
  newCard.className = 'project-card'
  return newCard;
}

const getImage = (card: HTMLDivElement, project: Project) => {
  const newImage = document.createElement("img");
  newImage.src = project.image;
  newImage.className = 'card-image';
  card.appendChild(newImage);
}

const getContent = (card: HTMLDivElement, project: Project) => {
  const content = document.createElement("div");
  content.className = 'card-content';
  getTitle(content, project);
  getBodyContent(content, project);
  getSkillChips(content, project);
  card.appendChild(content);
}

const getTitle = (div: HTMLDivElement, project: Project) => {
  const titleRow = document.createElement("div");
  titleRow.className = 'card-title-row';
  const newTitle = document.createElement("div");
  newTitle.className = 'card-title';
  newTitle.innerHTML += project.name;
  titleRow.appendChild(newTitle);
  getButtons(titleRow, project);
  div.appendChild(titleRow);

}

const getButtons = (div: HTMLDivElement, project: Project) => {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = 'card-button-wrapper';
  const viewButton = getViewButton(project);
  buttonWrapper.appendChild(viewButton);
  const codeButton = getCodeButton(project);
  buttonWrapper.appendChild(codeButton);
  div.appendChild(buttonWrapper);
}

const getViewButton = (project: Project):HTMLAnchorElement => {
  const viewButton = document.createElement("a");
  viewButton.className = 'card-button visit';
  viewButton.href = project.siteLink;
  viewButton.innerHTML = 'Visit Site <i class="fas fa-external-link-alt"></i>';
  return viewButton;
 }

const getCodeButton = (project: Project):HTMLAnchorElement => {
  const codeButton = document.createElement("a");
  codeButton.className = 'code';
  codeButton.href = project.codeLink;
  codeButton.innerHTML = 'View Code <i class="far fa-code"></i>';
  return codeButton;
 }

const getBodyContent = (div: HTMLDivElement, project: Project) => {
  div.innerHTML += project.content.join('');
}

const getSkillChips = (div: HTMLDivElement, project: Project) => {
  const chipWrapper = document.createElement("div");
  chipWrapper.className = 'chip-wrapper';
  for (let skill of project.skills){
    const chip = document.createElement("span");
    chip.className = 'card-chip';
    chip.innerHTML = skill;
    chipWrapper.appendChild(chip);
  }
  div.appendChild(chipWrapper);
}

const onLoad = () => {
  getProjectData();
}
onLoad();

