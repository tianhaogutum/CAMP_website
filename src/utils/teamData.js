// 读取团队成员CSV文件
export const readTeamFromCSV = async () => {
  try {
    const response = await fetch('/data/team.csv');
    const csvText = await response.text();
    
    // 解析CSV
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const teamMembers = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',');
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

// 根据类别获取团队成员
export const getTeamByCategory = async (category) => {
  const teamMembers = await readTeamFromCSV();
  return teamMembers.filter(member => member.Category === category);
};

// 根据ID获取团队成员
export const getTeamMemberById = async (personId) => {
  const teamMembers = await readTeamFromCSV();
  return teamMembers.find(member => member['Person ID'] === personId.toString());
};

// 获取所有团队成员
export const getAllTeamMembers = async () => {
  return await readTeamFromCSV();
};

// 获取研究负责人
export const getResearchLeads = async () => {
  return await getTeamByCategory('Research Leads');
};

// 获取研究助理
export const getResearchAssistants = async () => {
  return await getTeamByCategory('Research Assistants');
};
