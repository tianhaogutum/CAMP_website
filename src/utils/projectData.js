import * as XLSX from 'xlsx';

// 读取Excel文件
export const readProjectsFromExcel = async () => {
  try {
    const response = await fetch('/data/projects.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    return jsonData;
  } catch (error) {
    console.error('Error reading Excel:', error);
    return [];
  }
};

// 读取CSV文件（备用方法）
export const readProjectsFromCSV = async () => {
  try {
    const response = await fetch('/data/projects.csv');
    const csvText = await response.text();
    
    // 解析CSV
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const projects = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',');
        const project = {};
        
        headers.forEach((header, index) => {
          project[header.trim()] = values[index] ? values[index].trim() : '';
        });
        
        projects.push(project);
      }
    }
    
    return projects;
  } catch (error) {
    console.error('Error reading CSV:', error);
    return [];
  }
};

// 根据项目ID获取项目数据
export const getProjectById = async (projectId) => {
  const projects = await readProjectsFromExcel();
  return projects.find(project => project['Project ID'] === projectId.toString());
};

// 获取所有项目
export const getAllProjects = async () => {
  return await readProjectsFromExcel();
};
