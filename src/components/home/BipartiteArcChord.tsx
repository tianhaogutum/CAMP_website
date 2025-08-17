import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const LEFT_COLOR = "#4A90E2";
const RIGHT_COLOR = "#F5A623";

interface HoverState {
  side: "left" | "right";
  index: number;
}

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
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],
    [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]
  ]
};

export default function BipartiteArcChord({ left, right, links, leftTitle, rightTitle, className }: BipartiteArcChordProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<HoverState | null>(null);

  // Create adjacency matrix for hover effects
  const adj = useMemo(() => {
    const matrix = new Array(left.length).fill(0).map(() => new Array(right.length).fill(0));
    links.forEach(([i, j]) => {
      matrix[i][j] = 1;
    });
    return matrix;
  }, [links, left.length, right.length]);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    const { width: W, height: H } = (ref.current.parentElement?.getBoundingClientRect() || { width: 1200, height: 700 });

    const width = Math.max(900, W);
    const height = Math.max(700, H);
    const outerRadius = Math.min(width, height) * 0.35;
    const innerRadius = outerRadius * 0.75;

    svg.attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`)
       .attr("width", "100%")
       .attr("height", "100%")
       .style("cursor", "default");

    svg.selectAll("*").remove();

    // Titles - positioned in the center of each C arc
    svg.append("text").attr("text-anchor", "middle").attr("x", -outerRadius * 0.4).attr("y", -outerRadius * 0.2)
      .attr("font-size", 19).attr("font-weight", 600).attr("fill", LEFT_COLOR).text(leftTitle);
    svg.append("text").attr("text-anchor", "middle").attr("x", outerRadius * 0.4).attr("y", -outerRadius * 0.2)
      .attr("font-size", 19).attr("font-weight", 600).attr("fill", RIGHT_COLOR).text(rightTitle);

    // Layout angles - Two separate C-shaped arcs with proper gaps
    const leftStart = (-150 * Math.PI) / 180;  // Left C: from left-center
    const leftEnd = (-30 * Math.PI) / 180;     // to left-bottom (120° arc)
    const rightStart = (30 * Math.PI) / 180;   // Right C: from right-bottom
    const rightEnd = (150 * Math.PI) / 180;    // to right-center (120° arc)

    const leftScale = d3.scaleLinear().domain([0, left.length]).range([leftStart, leftEnd]);
    const rightScale = d3.scaleLinear().domain([0, right.length]).range([rightStart, rightEnd]);

    // Create custom C-shaped paths instead of full arcs
    const createCShapePath = (startAngle: number, endAngle: number, innerR: number, outerR: number) => {
      const startOuter = [outerR * Math.cos(startAngle), outerR * Math.sin(startAngle)];
      const endOuter = [outerR * Math.cos(endAngle), outerR * Math.sin(endAngle)];
      const startInner = [innerR * Math.cos(startAngle), innerR * Math.sin(startAngle)];
      const endInner = [innerR * Math.cos(endAngle), innerR * Math.sin(endAngle)];
      
      // C-shape: outer arc + inner arc + connecting lines
      return `M ${startOuter[0]} ${startOuter[1]} 
              A ${outerR} ${outerR} 0 0 1 ${endOuter[0]} ${endOuter[1]}
              L ${endInner[0]} ${endInner[1]}
              A ${innerR} ${innerR} 0 0 0 ${startInner[0]} ${startInner[1]}
              Z`;
    };

    const leftAngles = left.map((_, i) => [leftScale(i), leftScale(i + 1)] as [number, number]);
    const rightAngles = right.map((_, i) => [rightScale(i), rightScale(i + 1)] as [number, number]);

    // Groups for layering
    const gLeft = svg.append("g");
    const gRight = svg.append("g");
    const gLinks = svg.append("g");

    // Draw C-shaped segments (left) - Individual segments for each method
    const leftArcs = gLeft.selectAll("path.arc-left").data(leftAngles).enter()
      .append("path").attr("class", "arc-left")
      .attr("fill", LEFT_COLOR).attr("opacity", 0.85)
      .attr("stroke", "#ffffff").attr("stroke-width", 1)
      .attr("d", (d) => createCShapePath(d[0], d[1], innerRadius, outerRadius))
      .style("cursor", "pointer")
      .on("mouseenter", function(event, d) {
        const idx = leftAngles.indexOf(d);
        setHovered({ side: "left", index: idx });
      })
      .on("mouseleave", function(event, d) {
        setHovered(null);
      });

    // Labels left - positioned at center of each arc segment
    gLeft.selectAll("text.label-left").data(left.map((name, i) => ({ name, i }))).enter()
      .append("text").attr("class", "label-left")
      .attr("font-size", 11).attr("alignment-baseline", "middle")
      .attr("transform", (d) => {
        const a = (leftAngles[d.i][0] + leftAngles[d.i][1]) / 2;
        const r = outerRadius + 40;
        const x = r * Math.cos(a), y = r * Math.sin(a);
        // Rotate text 90 degrees for better readability
        let rotate = (a * 180) / Math.PI + 90;
        return `translate(${x},${y}) rotate(${rotate})`;
      })
      .attr("text-anchor", "middle")
      .style("cursor", "pointer")
      .style("font-weight", "500")
      .text((d) => `${d.i}: ${d.name}`)
      .on("mouseenter", function(event, d) {
        setHovered({ side: "left", index: d.i });
      })
      .on("mouseleave", function(event, d) {
        setHovered(null);
      });

    // Draw C-shaped segments (right) - Individual segments for each topic
    const rightArcs = gRight.selectAll("path.arc-right").data(rightAngles).enter()
      .append("path").attr("class", "arc-right")
      .attr("fill", RIGHT_COLOR).attr("opacity", 0.85)
      .attr("stroke", "#ffffff").attr("stroke-width", 1)
      .attr("d", (d) => createCShapePath(d[0], d[1], innerRadius, outerRadius))
      .style("cursor", "pointer")
      .on("mouseenter", function(event, d) {
        const idx = rightAngles.indexOf(d);
        setHovered({ side: "right", index: idx });
      })
      .on("mouseleave", function(event, d) {
        setHovered(null);
      });

    // Labels right - positioned at center of each arc segment
    gRight.selectAll("text.label-right").data(right.map((name, i) => ({ name, i }))).enter()
      .append("text").attr("class", "label-right")
      .attr("font-size", 11).attr("alignment-baseline", "middle")
      .attr("transform", (d) => {
        const a = (rightAngles[d.i][0] + rightAngles[d.i][1]) / 2;
        const r = outerRadius + 40;
        const x = r * Math.cos(a), y = r * Math.sin(a);
        // Rotate text 90 degrees for better readability
        let rotate = (a * 180) / Math.PI + 90;
        return `translate(${x},${y}) rotate(${rotate})`;
      })
      .attr("text-anchor", "middle")
      .style("cursor", "pointer")
      .style("font-weight", "500")
      .text((d) => `${d.i}: ${d.name}`)
      .on("mouseenter", function(event, d) {
        setHovered({ side: "right", index: d.i });
      })
      .on("mouseleave", function(event, d) {
        setHovered(null);
      });

    // Draw links between left and right
    const linkData = links.map(([i, j]) => ({
      source: { x: 0, y: 0, angle: (leftAngles[i][0] + leftAngles[i][1]) / 2, radius: outerRadius },
      target: { x: 0, y: 0, angle: (rightAngles[j][0] + rightAngles[j][1]) / 2, radius: outerRadius }
    }));

    // Remove unused linkPath variable

    gLinks.selectAll("path.link").data(linkData).enter()
      .append("path").attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#999")
      .attr("stroke-width", 1)
      .attr("opacity", 0.3)
      .attr("d", (d) => {
        const startX = d.source.radius * Math.cos(d.source.angle);
        const startY = d.source.radius * Math.sin(d.source.angle);
        const endX = d.target.radius * Math.cos(d.target.angle);
        const endY = d.target.radius * Math.sin(d.target.angle);
        
        // Create curved path through center
        const midX = (startX + endX) * 0.1;
        const midY = (startY + endY) * 0.1;
        
        return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
      })
      .style("cursor", "pointer")
      .on("mouseenter", function(event, d) {
        d3.select(this).attr("opacity", 0.8).attr("stroke-width", 2);
      })
      .on("mouseleave", function(event, d) {
        d3.select(this).attr("opacity", 0.3).attr("stroke-width", 1);
      });

    // Hover effects
    if (hovered) {
      const { side, index } = hovered;
      
      // Highlight selected arc
      if (side === "left") {
        leftArcs.filter((d, i) => i === index)
          .attr("opacity", 1)
          .attr("stroke-width", 3)
          .attr("stroke", "#333");
      } else {
        rightArcs.filter((d, i) => i === index)
          .attr("opacity", 1)
          .attr("stroke-width", 3)
          .attr("stroke", "#333");
      }

      // Highlight related links
      gLinks.selectAll("path.link").attr("opacity", (d, i) => {
        if (side === "left") {
          return adj[index][Math.floor(i / left.length)] > 0 ? 0.8 : 0.1;
        } else {
          return adj[Math.floor(i / left.length)][index] > 0 ? 0.8 : 0.1;
        }
      });
    } else {
      // Reset all to default
      leftArcs.attr("opacity", 0.85).attr("stroke-width", 1).attr("stroke", "#ffffff");
      rightArcs.attr("opacity", 0.85).attr("stroke-width", 1).attr("stroke", "#ffffff");
      gLinks.selectAll("path.link").attr("opacity", 0.3);
    }

    // Cleanup function
    return () => {
      svg.selectAll("*").interrupt();
    };
  }, [left, right, links, leftTitle, rightTitle, hovered, adj]);

  return (
    <div className={"w-full h-[800px] md:h-[900px] bg-white flex items-center justify-center " + (className || "")}>
      <svg ref={ref} role="img" aria-label={`${leftTitle} to ${rightTitle} arc–chord diagram`} className="w-full h-full"></svg>
      <div className="sr-only">Hover over any label or arc to highlight its connections. Move away to reset.</div>
    </div>
  );
}
