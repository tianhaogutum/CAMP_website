// Read team members CSV file
export const readTeamFromCSV = async () => {
  try {
    const response = await fetch('/data/team.csv');
    const csvText = await response.text();
    
    // Parse CSV with proper handling of quoted fields
    const lines = csvText.split('\n');
    const headers = parseCSVLine(lines[0]);
    const teamMembers = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = parseCSVLine(lines[i]);
        const member = {};
        
        headers.forEach((header, index) => {
          member[header.trim()] = values[index] ? values[index].trim() : '';
        });
        
        teamMembers.push(member);
      }
    }
    
    return teamMembers;
  } catch (error) {
    console.error('Error reading team CSV:', error);
    return [];
  }
};

// Helper function to parse CSV line with proper quote handling
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}

// Get team members by category
export const getTeamByCategory = async (category) => {
  const teamMembers = await readTeamFromCSV();
  return teamMembers.filter(member => member.Category === category);
};

// Get team member by ID
export const getTeamMemberById = async (personId) => {
  const teamMembers = await readTeamFromCSV();
  return teamMembers.find(member => member['Person ID'] === personId.toString());
};

// Get all team members
export const getAllTeamMembers = async () => {
  return await readTeamFromCSV();
};

// Get research leads
export const getResearchLeads = async () => {
  const allMembers = await readTeamFromCSV();
  console.log('All team members:', allMembers);
  const researchLeads = allMembers.filter(member => member.Category === 'Research Leads');
  console.log('Filtered research leads:', researchLeads);
  return researchLeads;
};

// Get research assistants
export const getResearchAssistants = async () => {
  return await getTeamByCategory('Research Assistants');
};
