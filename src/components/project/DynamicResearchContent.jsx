import React from "react";

export function DynamicResearchContent({ projectData }) {
  console.log('DynamicResearchContent received projectData:', projectData);
  
  if (!projectData) {
    console.log('No projectData provided to DynamicResearchContent');
    return null;
  }

  const renderContent = (content, title) => {
    if (!content) return null;
    
    return (
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            // Check if it's a list item or special formatting
            if (paragraph.includes(':')) {
              const [label, description] = paragraph.split(':');
              return (
                <div key={index} className="mb-4">
                  <strong className="text-gray-900">{label}:</strong> {description}
                </div>
              );
            }
            
            return (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAppendices = (appendices) => {
    if (!appendices) return null;
    
    return (
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Appendices
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {appendices.split(' - ').map((item, index) => {
            if (item.trim() === '') return null;
            
            return (
              <div key={index} className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.split(':')[0]}
                </h3>
                <ul className="mb-6 space-y-2">
                  {item.split(':')[1]?.split('.').map((subItem, subIndex) => {
                    if (subItem.trim() === '') return null;
                    return (
                      <li key={subIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{subItem.trim()}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAuthorNote = (authorNote) => {
    if (!authorNote) return null;
    
    return (
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Author's Note
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {authorNote.split(' You can read more about the published paper here: ').map((part, index) => {
            if (index === 0) {
              return (
                <p key={index} className="mb-6">
                  {part}
                </p>
              );
            } else {
              return (
                <p key={index} className="mb-6">
                  You can read more about the published paper here:{" "}
                  <a 
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {part}
                  </a>
                </p>
              );
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent(projectData.Introduction, "Introduction")}
        {renderContent(projectData.Methodology, "Methodology")}
        {renderContent(projectData['Key Findings'], "Key Findings")}
        {renderContent(projectData['Policy Implications'], "Implications for Policy")}
        {renderContent(projectData.Conclusion, "Conclusion")}
        {renderContent(projectData.References, "References")}
        {renderAppendices(projectData.Appendices)}
        {renderAuthorNote(projectData['Author Note'])}
      </div>
    </section>
  );
}
