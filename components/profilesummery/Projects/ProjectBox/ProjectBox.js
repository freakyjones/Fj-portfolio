function ProjectBox({ description, name, technology, github, website }) {
  const getTechnologies = () => {
    let allTechnology = "";
    technology.forEach((element) => {
      allTechnology += element;
    });
    return allTechnology;
  };
  return (
    <div className="projectbox">
      <div className="projectbox__language">
        <h2>{getTechnologies()}</h2>
      </div>
      <div className="projectbox__repo">
        <a href="" target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>
      <div className="projectbox__website">
        <a href="" target="_blank" rel="noopener noreferrer">
          hello link
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
