"use client";

import React from "react";

export function ResearchContent() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The rapid advancement in hydraulic fracturing and horizontal drilling technologies have unleashed vast quantities of shale oil, positioning the US as one of the world's leading oil producers. This paper evaluates the economic ramifications of this boom. Bjørnland and Skretting's work is particularly crucial because it uses sophisticated econometric techniques to analyze these complex interactions thoroughly.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Methodology
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The authors employ a time-varying parameter factor-augmented vector autoregressive (FAVAR) model with a large data set of state-level, industry, and aggregate US data to capture the evolving dynamics between shale oil production and the US economy. This approach allows them to account for non-linearities and structural changes over time. Their analysis spans from the early 2000s to just before the pandemic, capturing the onset and maturation of the shale oil boom.
            </p>
            
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Key Econometric Techniques:
            </h3>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>FAVAR Model:</strong> Enables understanding of how the relationship between economic indicators and oil related variables evolves.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Stochastic Volatility:</strong> Allows for time-varying volatility in the model, reflecting changing parameters in the US in response to the shale oil boom, and the uncertainty and changing conditions of the global oil market.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Key Findings
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The analysis finds that an increase in the oil price due to an oil-specific shock has positive spillovers to many parts of the US economy, effects that were not present before the shale oil boom. The reason being that the United States has increased its reliance of oil, not as a consumer, but by becoming the world's largest oil producer.
            </p>
            <p className="mb-6">
              Variables such as nonresidential business investment, Industrial production, personal income and (non-oil) employment in both oil-producing and some manufacturing-intensive states increase following oil-specific shocks that increase oil prices.
            </p>
            <p className="mb-6">
              On the other hand, the paper finds that several sectors respond negatively as before. In particular, energy-intensive industries such as motor vehicles still respond negatively to an oil-specific shock, as do average consumption, most likely due to higher costs.
            </p>
          </div>
        </div>

        {/* Implications for Policy */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Implications for Policy
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Bjørnland and Skretting's findings have significant implications for economic and energy policy: In particular, policymakers need to take into account that the transmission of oil price shocks in the United States has changed with the shale oil boom and that there are heterogeneous effects across industries and US states.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Conclusion
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Bjørnland and Skretting's 2024 paper offers valuable insights into the macroeconomic effects of the shale oil boom in the US. By employing sophisticated econometric models, they provide a detailed analysis of how the sector's growth affects broader economic indicators over time. This research underscores the importance of technological advancements in shaping economic landscapes and offers a framework for future policy considerations.
            </p>
          </div>
        </div>

        {/* References */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            References
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Bjørnland, H. C., & Skretting, J. (2024). The shale oil boom and the US economy: Spillovers and time‐varying effects. <em>Journal of Applied Econometrics</em>
            </p>
          </div>
        </div>

        {/* Appendices */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Appendices
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Appendix A: TVP-VAR Model Details
            </h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Explanation of model structure.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Stochastic volatility and its relevance.</span>
              </li>
            </ul>

            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Appendix B: Additional Data
            </h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Supplementary tables and figures illustrating the econometric analysis.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Extended macroeconomic data from the studied period.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Author's Note */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Author's Note
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              This analysis aims to synthesize and articulate the core findings of Bjørnland and Skretting's work, ensuring a coherent understanding for scholars and policymakers interested in the intersection of energy production and macroeconomic performance.
            </p>
            <p className="mb-6">
              You can read more about the published paper here:{" "}
              <a 
                href="https://onlinelibrary.wiley.com/doi/10.1002/jae.3059" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://onlinelibrary.wiley.com/doi/10.1002/jae.3059
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
