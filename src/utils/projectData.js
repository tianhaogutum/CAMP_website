import * as XLSX from 'xlsx';

// 读取Excel文件
export const readProjectsFromExcel = async () => {
  try {
    console.log('Attempting to read Excel file...');
    const response = await fetch('/data/projects.xlsx');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    console.log('Excel file loaded, size:', arrayBuffer.byteLength);
    
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    console.log('Excel workbook parsed, sheets:', workbook.SheetNames);
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    console.log('Excel data parsed, rows:', jsonData.length);
    console.log('First row:', jsonData[0]);
    
    return jsonData;
  } catch (error) {
    console.error('Error reading Excel:', error);
    console.log('Falling back to CSV...');
    return await readProjectsFromCSV();
  }
};

// 读取CSV文件（备用方法）
export const readProjectsFromCSV = async () => {
  try {
    console.log('Reading CSV file...');
    const response = await fetch('/data/projects.csv');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    console.log('CSV file loaded, length:', csvText.length);
    
    // 更简单的CSV解析，处理引号内的逗号
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      console.log('No lines found in CSV');
      return [];
    }
    
    const headers = lines[0].split(',').map(h => h.trim());
    console.log('CSV headers:', headers);
    
    const projects = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // 简单的CSV解析，假设字段用引号包围
      const values = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim()); // 添加最后一个值
      
      if (values.length >= headers.length) {
        const project = {};
        headers.forEach((header, index) => {
          project[header] = values[index] || '';
        });
        projects.push(project);
      }
    }
    
    console.log('CSV data parsed, rows:', projects.length);
    console.log('First row:', projects[0]);
    
    return projects;
  } catch (error) {
    console.error('Error reading CSV:', error);
    return [];
  }
};

// 根据项目ID获取项目数据
export const getProjectById = async (projectId) => {
  console.log('Getting project by ID:', projectId, 'type:', typeof projectId);
  const projects = await readProjectsFromExcel();
  console.log('All projects:', projects);
  
  const project = projects.find(project => {
    const projectIdValue = project['Project ID'];
    console.log('Checking project:', projectIdValue, 'type:', typeof projectIdValue, 'against:', projectId, 'type:', typeof projectId);
    
    // 尝试多种匹配方式
    return projectIdValue == projectId || 
           projectIdValue === projectId.toString() || 
           projectIdValue.toString() === projectId.toString() ||
           Number(projectIdValue) === Number(projectId);
  });
  
  console.log('Found project:', project);
  return project;
};

// 获取所有项目
export const getAllProjects = async () => {
  return await readProjectsFromExcel();
};
