import ProjectsCard from "../projectsCard/projectsCard";
import { StyledProjectsList } from "./styled";

function ProjectsList({ projectsData }) {
  return (
    <StyledProjectsList>
      {projectsData.map((item, index) => (
        <ProjectsCard key={index + item.id} projectData={item} />
      ))}
    </StyledProjectsList>
  );
}

export default ProjectsList;
