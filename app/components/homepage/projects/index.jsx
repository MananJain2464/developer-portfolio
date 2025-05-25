import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1a1443',
              marginBottom: '1rem',
              marginTop: '3rem',
              background: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              textAlign: 'center',
            }}
          >
            🚀 ML & MLOps
      </h2>

      <div className=" pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0,4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h2
      style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1a1443',
        marginBottom: '1rem',
        marginTop: '3rem',
        background: 'linear-gradient(to right, #f6d365, #fda085)',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
      }}
      >
        🤖 Generative AI
      </h2>

      <div className=" pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(4,8).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <h2
        style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1a1443',
              marginBottom: '1rem',
              marginTop: '3rem',
              background: 'linear-gradient(to right, #84fab0, #8fd3f4)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              textAlign: 'center',
        }}
      >
          🛠️  Development
      </h2>
      <div className=" pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(8,12).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;