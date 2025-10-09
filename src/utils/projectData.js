// 读取CSV文件
export const readProjectsFromCSV = async () => {
  try {
    console.log('Reading CSV file...');
    const response = await fetch('/data/projects.csv');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    console.log('CSV file loaded, length:', csvText.length);
    
    // 改进的CSV解析，处理引号内的逗号和换行符
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      console.log('No lines found in CSV');
      return [];
    }
    
    // 解析第一行获取headers
    const headerLine = lines[0];
    const headers = [];
    let currentHeader = '';
    let inQuotes = false;
    
    for (let j = 0; j < headerLine.length; j++) {
      const char = headerLine[j];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        headers.push(currentHeader.trim());
        currentHeader = '';
      } else {
        currentHeader += char;
      }
    }
    headers.push(currentHeader.trim()); // 添加最后一个header
    
    console.log('CSV headers:', headers);
    console.log('Number of headers:', headers.length);
    
    const projects = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // 解析数据行
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
      
      console.log(`Row ${i} values count:`, values.length);
      console.log(`Row ${i} first few values:`, values.slice(0, 5));
      
      if (values.length >= headers.length) {
        const project = {};
        headers.forEach((header, index) => {
          project[header] = values[index] || '';
        });
        projects.push(project);
      } else {
        console.warn(`Row ${i} has ${values.length} values but expected ${headers.length} headers`);
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
  const projects = await readProjectsFromCSV();
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
  return await readProjectsFromCSV();
};
