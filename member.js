function skillsMember() {
  return {
    skills: ['React', 'Node', 'MongoDB'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
} 
