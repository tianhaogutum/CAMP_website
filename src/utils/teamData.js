import * as XLSX from 'xlsx';

// 读取团队成员Excel文件
export const readTeamFromExcel = async () => {
  try {
    const response = await fetch('/data/team.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    return jsonData;
  } catch (error) {
    console.error('Error reading team Excel:', error);
    return [];
  }
};

// 读取团队成员CSV文件（备用方法）
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
  const teamMembers = await readTeamFromExcel();
  return teamMembers.filter(member => member.Category === category);
};

// 根据ID获取团队成员
export const getTeamMemberById = async (personId) => {
  const teamMembers = await readTeamFromExcel();
  return teamMembers.find(member => member['Person ID'] === personId.toString());
};

// 获取所有团队成员
export const getAllTeamMembers = async () => {
  return await readTeamFromExcel();
};

// 获取研究负责人
export const getResearchLeads = async () => {
  return await getTeamByCategory('Research Leads');
};

// 获取研究助理
export const getResearchAssistants = async () => {
  return await getTeamByCategory('Research Assistants');
};
