import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

interface BipartiteArcChordProps {
  left: string[];
  right: string[];
  links: [number, number][];
  leftTitle: string;
  rightTitle: string;
  className?: string;
}

export const demoData = {
  left: [
    "Agent-based Modelling",
    "Deep Learning", 
    "Dynamical Systems Theory",
    "Empirical Analysis",
    "Game Theory",
    "Information Theory",
    "Numerical Simulation",
    "Random Matrix Theory", 
    "Statistical Mechanics",
    "Stochastic Processes"
  ],
  right: [
    "Climate Economics",
    "Economic Networks",
    "Emergent Phenomena",
    "Financial Time-Series",
    "Image Processing",
    "Adaptive Behavior",
    "Market Microstructure",
    "Risk Management",
    "Social Dynamics",
    "Wealth & Income Inequality"
  ],
  links: [
    // (Stochastic Processes, Financial Time-Series) - left[9] -> right[3]
    [9, 3],
    // (Statistical Mechanics, Economic Networks) - left[8] -> right[1]
    [8, 1],
    // (Social Dynamics, Agent-based Modelling) - right[8] -> left[0] (reverse connection)
    [0, 8],
    // (Risk Management, Empirical Analysis) - right[7] -> left[3] (reverse connection)
    [3, 7],
    // (Random Matrix Theory, Risk Management) - left[7] -> right[7]
    [7, 7],
    // (Numerical Simulation, Climate Economics) - left[6] -> right[0]
    [6, 0],
    // (Market Microstructure, Deep Learning) - right[6] -> left[1] (reverse connection)
    [1, 6],
    // (Information Theory, Emergent Phenomena) - left[5] -> right[2]
    [5, 2],
    // (Statistical Mechanics, Emergent Phenomena) - left[8] -> right[2]
    [8, 2],
    // (Dynamical Systems Theory, Deep Learning) - left[2] -> left[1] (both in left, skip this connection)
    // [2, 1], // Skipped as both are in left array
    // (Agent-based Modelling, Social Dynamics) - left[0] -> right[8]
    [0, 8],
    // (Deep Learning, Financial Time-Series) - left[1] -> right[3]
    [1, 3]
  ]
};

export default function BipartiteArcChord({ left, right, links, leftTitle, rightTitle, className }: BipartiteArcChordProps) {
  const ref = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number } | null>(null);

  // Only rebuild matrix when data changes, avoid unnecessary rendering
  const computed = useMemo(() => {
    const data = links.map(([i, j]) => ({ source: left[i], target: right[j], value: 1 }));
    const names = d3.sort(d3.union(data.map(d => d.source), data.map(d => d.target)));
    const index = new Map(names.map((name, i) => [name, i] as const));
    const matrix = Array.from(index, () => new Array<number>(names.length).fill(0));
    for (const { source, target, value } of data) {
      const si = index.get(source);
      const ti = index.get(target);
      if (si !== undefined && ti !== undefined) matrix[si][ti] += value;
    }
    return { names, matrix };
  }, [left, right, links]);

  // Observe container size changes, trigger redraw (throttled to rAF)
  useEffect(() => {
    if (!wrapperRef.current) return;
    const elem = wrapperRef.current;
    let frame: number | null = null;
    const ro = new ResizeObserver(() => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const rect = elem.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      });
    });
    ro.observe(elem);
    // Initialize size
    const rect = elem.getBoundingClientRect();
    setContainerSize({ width: rect.width, height: rect.height });
    return () => {
      ro.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || !containerSize) return;

    const svg = d3.select(ref.current);
    const W = containerSize.width || 1080;
    // Use container width directly with an upper cap to avoid forcing large layouts on mobile
    const width = Math.min(1800, Math.max(400, W));
    const isSmall = width < 640;
    // Make height proportional and allow extra headroom on small screens to avoid crowding
    const height = Math.max(isSmall ? 320 : 300, Math.floor(width * (isSmall ? 0.9 : 0.7)));
    const innerRadius = Math.min(width, height) * 0.5 - 60;
    const outerRadius = innerRadius + 22;

    const names = computed.names;
    const matrix = computed.matrix;

    const chord = d3.chordDirected()
      .padAngle(10 / innerRadius)
      .sortSubgroups(d3.descending)
      .sortChords(d3.descending);

    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const ribbon = d3.ribbon()
      .radius(innerRadius - 1)
      .padAngle(1 / innerRadius);

    const colors = d3.quantize(d3.interpolateRainbow, names.length);

    const padX = isSmall ? 0 : Math.max(60, Math.floor(width * 0.12));
    const padTop = isSmall ? 10 : 20;
    const padBottom = 0;

    svg.attr("width", width)
      .attr("height", height)
      .attr("viewBox", [(-width / 2) - padX, (-height / 2) - padTop, width + padX * 2, height + padBottom])
      .attr("style", "width: 100%; height: auto; font: 18px 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;")
      .style("border", "none")
      .style("outline", "none");

    svg.selectAll("*").remove();

    if (!isSmall) {
      const leftTitleGroup = svg.append("g")
         .attr("transform", `translate(${-width / 1.75}, 0)`);

      // Create vertical title "Research Methods"
      const leftTitleText = "Research Methods";
      const leftTitleWords = leftTitleText.split(" ");
      
      leftTitleWords.forEach((word, index) => {
        leftTitleGroup.append("text")
           .attr("x", 6)
           .attr("y", 6 + index * 20)
           .attr("text-anchor", "middle")
           .attr("font-size", "22px")
           .attr("font-weight", "600")
           .attr("letter-spacing", "0.5px")
           .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
           .attr("fill", "#628296")
           .text(word);
      });

      // Add adaptive background box for left title (including all text)
      try {
        const paddingX = 10;
        const paddingY = 6;
        const textNodes = leftTitleGroup.selectAll("text").nodes() as SVGTextElement[];
        if (textNodes.length > 0) {
          // Calculate boundaries of all text elements
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          textNodes.forEach(node => {
            const b = node.getBBox();
            minX = Math.min(minX, b.x);
            minY = Math.min(minY, b.y);
            maxX = Math.max(maxX, b.x + b.width);
            maxY = Math.max(maxY, b.y + b.height);
          });
          
          const rect = leftTitleGroup.append("rect")
            .attr("x", minX - paddingX)
            .attr("y", minY - paddingY)
            .attr("width", (maxX - minX) + paddingX * 2)
            .attr("height", (maxY - minY) + paddingY * 2)
            .attr("rx", 10)
            .attr("fill", "#ffffff")
            .attr("stroke", "#3b82f6")
            .attr("stroke-width", 1);
          rect.lower();
        }
      } catch {}
    }

    // Add right title - Research Topics
    if (!isSmall) {
      const rightTitleX = width / 1.75 - 12; // Adjust position to appropriate distance
      const rightTitleGroup = svg.append("g")
         .attr("transform", `translate(${rightTitleX}, 0)`);

      // Create vertical title "Research Topics"
      const rightTitleText = "Research Topics";
      const rightTitleWords = rightTitleText.split(" ");
      
      rightTitleWords.forEach((word, index) => {
        rightTitleGroup.append("text")
           .attr("x", 6)
           .attr("y", 6 + index * 20)
           .attr("text-anchor", "middle")
           .attr("font-size", "22px")
           .attr("font-weight", "600")
           .attr("letter-spacing", "0.5px")
           .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
           .attr("fill", "#ea580c")
           .text(word);
      });

      // Add adaptive background box for right title (including all text)
      try {
        const paddingX = 10;
        const paddingY = 6;
        const textNodes = rightTitleGroup.selectAll("text").nodes() as SVGTextElement[];
        if (textNodes.length > 0) {
          // Calculate boundaries of all text elements
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          textNodes.forEach(node => {
            const b = node.getBBox();
            minX = Math.min(minX, b.x);
            minY = Math.min(minY, b.y);
            maxX = Math.max(maxX, b.x + b.width);
            maxY = Math.max(maxY, b.y + b.height);
          });
          
          const rect = rightTitleGroup.append("rect")
            .attr("x", minX - paddingX)
            .attr("y", minY - paddingY)
            .attr("width", (maxX - minX) + paddingX * 2)
            .attr("height", (maxY - minY) + paddingY * 2)
            .attr("rx", 10)
            .attr("fill", "#ffffff")
            .attr("stroke", "#ec4899")
            .attr("stroke-width", 1);
          rect.lower();
        }
      } catch {}
    }

    // Compress Y-axis ratio to make the graph elliptical
    const compressionY = isSmall ? 0.9 : 0.75;
    const verticalOffset = isSmall ? -10 : -36;
    const chartGroup = svg.append("g")
      .attr("transform", `translate(0, ${verticalOffset}) scale(1, ${compressionY})`);
    // Independent label layer (no text scaling), hide labels on small screens to avoid crowding and clipping
    const labelsGroup = isSmall ? null : svg.append("g");

    const chords = chord(matrix);
    const hiddenItems = [
      "Wealth & Income Inequality",
      "Adaptive Behavior",
      "Image Processing",
      "Game Theory"
    ];
    
    // Pre-calculate adjacency relationships for quick highlighting of related arcs
    const connectivity = new Map<number, Set<number>>();
    for (const c of chords) {
      const s = Number(c.source.index);
      const t = Number(c.target.index);
      if (!connectivity.has(s)) connectivity.set(s, new Set<number>());
      if (!connectivity.has(t)) connectivity.set(t, new Set<number>());
      connectivity.get(s)!.add(t);
      connectivity.get(t)!.add(s);
    }

    const group = chartGroup.append("g")
      .selectAll("g")
      .data(chords.groups)
      .join("g");

    // Make hidden items not respond to mouse events
    group.style("pointer-events", (d: any) => hiddenItems.includes(names[d.index]) ? "none" : "auto");

    group.append("path")
        .attr("fill", d => {
          // Set the color of specified items to white (background color)
          if (hiddenItems.includes(names[d.index])) {
            return "#ffffff";
          }
          // Specified items use blue-gray color
          const blueGrayItems = [
            "Stochastic Processes",
            "Statistical Mechanics",
            "Social Dynamics",
            "Risk Management",
            "Random Matrix Theory",
            "Numerical Simulation",
            "Market Microstructure",
            "Information Theory"
          ];
          // Specified items use orange color
          const orangeItems = [
            "Agent-based Modelling",
            "Climate Economics",
            "Deep Learning",
            "Dynamical Systems Theory",
            "Economic Networks",
            "Emergent Phenomena",
            "Empirical Analysis",
            "Financial Time-Series"
          ];
          const shouldBeBlueGray = blueGrayItems.includes(names[d.index]);
          const shouldBeOrange = orangeItems.includes(names[d.index]);
          if (shouldBeBlueGray) return "#628296";
          if (shouldBeOrange) return "#ea580c";
          return colors[d.index];
        })
        .attr("d", d => arc({
          startAngle: d.startAngle,
          endAngle: d.endAngle,
          innerRadius: innerRadius,
          outerRadius: outerRadius
        }))
        .style("opacity", d => hiddenItems.includes(names[d.index]) ? 0 : 1)
        .style("cursor", "pointer");

    if (labelsGroup) {
      labelsGroup.selectAll("text")
          .data(chords.groups)
          .join("text")
            .attr("dy", "0.35em")
            .attr("transform", d => {
              const angle = (Number(d.startAngle) + Number(d.endAngle)) / 2;
              const r = outerRadius + 12;
              const x = Math.cos(angle - Math.PI / 2) * r;
              const y = Math.sin(angle - Math.PI / 2) * r * compressionY + verticalOffset;
              return `translate(${x}, ${y})`;
            })
            .attr("text-anchor", d => {
              const angle = (Number(d.startAngle) + Number(d.endAngle)) / 2;
              const r = outerRadius + 12;
              const x = Math.cos(angle - Math.PI / 2) * r;
              return x < 0 ? "end" : "start";
            })
            .attr("fill", d => hiddenItems.includes(names[d.index]) ? "#ffffff" : "#333")
            .attr("font-size", "19px")
            .attr("font-weight", "400")
            .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
            .attr("filter", (d: any) => hiddenItems.includes(names[d.index]) ? null : "drop-shadow(0 1px 1px rgba(0,0,0,0.08))")
            .text(d => names[d.index])
            .style("opacity", d => hiddenItems.includes(names[d.index]) ? 0 : 1)
            .style("cursor", "pointer");
    }

    group.append("title")
        .text(d => `${names[d.index]}
${d3.sum(chords, c => {
  const sourceIndex = Number(c.source.index);
  const targetIndex = Number(d.index);
  const value = Number(c.source.value) || 0;
  return sourceIndex === targetIndex ? value : 0;
})} outgoing →
${d3.sum(chords, c => {
  const sourceIndex = Number(c.target.index);
  const targetIndex = Number(d.index);
  const value = Number(c.source.value) || 0;
  return sourceIndex === targetIndex ? value : 0;
})} incoming ←`);

    const ribbonSel = chartGroup.append("g")
        .attr("fill-opacity", 0.75)
      .selectAll("path")
        .data(chords)
        .join("path")
          .style("mix-blend-mode", "multiply")
          .attr("fill", d => {
            // Set the color of connection lines related to specified items to white (background color), others use light gray
            return (hiddenItems.includes(names[d.target.index]) || hiddenItems.includes(names[d.source.index])) ? "#ffffff" : "#d1d5db";
          })
          .style("opacity", d => (hiddenItems.includes(names[d.target.index]) || hiddenItems.includes(names[d.source.index])) ? 0 : 1)
          .attr("d", d => {
            const path = ribbon({
              source: {
                startAngle: d.source.startAngle,
                endAngle: d.source.endAngle,
                radius: innerRadius - 1
              },
              target: {
                startAngle: d.target.startAngle,
                endAngle: d.target.endAngle,
                radius: innerRadius - 1
              }
            }) as unknown as string;
            return path;
          });

    ribbonSel.append("title")
      .text(d => `${names[d.source.index]} → ${names[d.target.index]} ${Number(d.source.value) || 0}`);

    // Hover interaction: only show arcs and connections related to the target group
    const highlightByIndex = (i: number) => {
      if (hiddenItems.includes(names[i])) return;
      // All related groups
      const connected = new Set<number>([i]);
      const setI = connectivity.get(i);
      if (setI) {
        for (const v of setI) connected.add(v);
      }

      // Blocks and labels
      group.selectAll("path").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : (connected.has(Number(d.index)) ? 1 : 0));
      if (labelsGroup) labelsGroup.selectAll("text").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : (connected.has(Number(d.index)) ? 1 : 0.15));

      // Connections
      ribbonSel.style("opacity", (d: any) => {
        const hide = hiddenItems.includes(names[d.source.index]) || hiddenItems.includes(names[d.target.index]);
        if (hide) return 0;
        return (Number(d.source.index) === i || Number(d.target.index) === i) ? 0.9 : 0;
      });
    };

    const resetHighlight = () => {
      group.selectAll("path").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : 1);
      if (labelsGroup) labelsGroup.selectAll("text").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : 1);
      ribbonSel.style("opacity", (d: any) => (hiddenItems.includes(names[d.source.index]) || hiddenItems.includes(names[d.target.index])) ? 0 : 1);
    };

    // Add mouse hover interaction effects
    group.on("mouseover", (_event: any, d: any) => {
      const hoveredIndex = Number(d.index);
      if (hiddenItems.includes(names[hoveredIndex])) return;
      
      // Highlight hovered node and related chords
      highlightByIndex(hoveredIndex);
    });

    // Add mouse leave reset effect
    group.on("mouseout", resetHighlight);

    // Cleanup function
    return () => {
      svg.selectAll("*").remove();
    };
  }, [computed, containerSize, leftTitle, rightTitle]);

  return (
    <div ref={wrapperRef} className={"w-full bg-[#f1f1f1] border-0 outline-none shadow-none " + (className || "")}
         style={{ aspectRatio: '16 / 10', maxHeight: 780, minHeight: 220 }}>
      <svg ref={ref} role="img" aria-label={`${leftTitle} to ${rightTitle} chord diagram`}></svg>
      <div className="sr-only">Interactive chord diagram showing connections between {leftTitle} and {rightTitle}.</div>
    </div>
  );
}
