function Projects() {
    return (
      <section id="projects" className="p-8 bg-gray-200">
        <h2 className="text-3xl text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow">
            <h3 className="text-2xl">Project 1</h3>
            <p>A brief description of the project...</p>
          </div>
          <div className="bg-white p-4 shadow">
            <h3 className="text-2xl">Project 2</h3>
            <p>A brief description of the project...</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;