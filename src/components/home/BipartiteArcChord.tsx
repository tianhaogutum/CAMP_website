import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    const { width: W, height: H } = (ref.current.parentElement?.getBoundingClientRect() || { width: 1080, height: 1080 });

               const width = Math.max(1200, W); // 增加最小宽度到1200
           const height = width * 0.78; // 略微减小高度以整体上移
           const innerRadius = Math.min(width, height) * 0.35 - 60; // 增大半径，减少边距
           const outerRadius = innerRadius + 12; // 增加弧的厚度

    // 转换数据格式为chord diagram需要的格式
    const allNames = [...left, ...right];
    const data = links.map(([i, j]) => ({
      source: left[i],
      target: right[j],
      value: 1
    }));

    // Compute a dense matrix from the weighted links in data.
    const names = d3.sort(d3.union(data.map(d => d.source), data.map(d => d.target)));
    const index = new Map(names.map((name, i) => [name, i]));
    const matrix = Array.from(index, () => new Array(names.length).fill(0));
    for (const {source, target, value} of data) {
      const sourceIndex = index.get(source);
      const targetIndex = index.get(target);
      if (sourceIndex !== undefined && targetIndex !== undefined) {
        matrix[sourceIndex][targetIndex] += value;
      }
    }

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

                   svg.attr("width", width)
       .attr("height", height)
       .attr("viewBox", [-width / 2, -height / 2 - 30, width, height])
       .attr("style", "width: 100%; height: auto; font: 16px 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;")
       .style("border", "none")
       .style("outline", "none");

    svg.selectAll("*").remove();

    // 添加左侧标题 - Research Methods
    const leftTitleGroup = svg.append("g")
       .attr("transform", `translate(${-width / 2.5}, ${-height / 2 + 100})`);
    
    // 左侧背景装饰
    leftTitleGroup.append("rect")
       .attr("x", -100)
       .attr("y", -30)
       .attr("width", 200)
       .attr("height", 60)
       .attr("rx", 30)
       .attr("fill", "rgba(59, 130, 246, 0.1)")
       .attr("stroke", "#3b82f6")
       .attr("stroke-width", 2);

    leftTitleGroup.append("text")
       .attr("x", 0)
       .attr("y", 6)
       .attr("text-anchor", "middle")
       .attr("font-size", "22px")
       .attr("font-weight", "800")
       .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
       .attr("fill", "#1e40af")
       .attr("filter", "drop-shadow(0 1px 2px rgba(0,0,0,0.1))")
       .text(leftTitle);

    // 添加右侧标题 - Research Topics
    const rightTitleGroup = svg.append("g")
       .attr("transform", `translate(${width / 2.5}, ${-height / 2 + 100})`);
    
    // 右侧背景装饰
    rightTitleGroup.append("rect")
       .attr("x", -100)
       .attr("y", -30)
       .attr("width", 200)
       .attr("height", 60)
       .attr("rx", 30)
       .attr("fill", "rgba(236, 72, 153, 0.1)")
       .attr("stroke", "#ec4899")
       .attr("stroke-width", 2);

    rightTitleGroup.append("text")
       .attr("x", 0)
       .attr("y", 6)
       .attr("text-anchor", "middle")
       .attr("font-size", "22px")
       .attr("font-weight", "800")
       .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
       .attr("fill", "#be185d")
       .attr("filter", "drop-shadow(0 1px 2px rgba(0,0,0,0.1))")
       .text(rightTitle);

    // 压缩Y轴比例，使图形呈椭圆形
    const chartGroup = svg.append("g")
      .attr("transform", `scale(1, 0.75)`);

    const chords = chord(matrix);
    
    // 预计算相邻关系，便于快速高亮相关弧线
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

    group.append("path")
        .attr("fill", d => {
          // 将指定项目对应的块颜色设为白色（背景色）
          const hiddenItems = ["Wealth & Income Inequality", "Adaptive Behavior", "Image Processing", "Game Theory"];
          return hiddenItems.includes(names[d.index]) ? "#ffffff" : colors[d.index];
        })
        .attr("d", d => arc({
          startAngle: d.startAngle,
          endAngle: d.endAngle,
          innerRadius: innerRadius,
          outerRadius: outerRadius
        }))
        .style("cursor", "pointer");

    group.append("text")
        .attr("dy", "0.35em")
        .attr("transform", d => {
          const angle = Number(d.startAngle) + Number(d.endAngle);
          const midAngle = angle / 2;
          return `
            rotate(${(midAngle * 180 / Math.PI - 90)})
            translate(${outerRadius + 10})
            ${midAngle > Math.PI ? "rotate(180)" : ""}
          `;
        })
        .attr("text-anchor", d => {
          const angle = Number(d.startAngle) + Number(d.endAngle);
          const midAngle = angle / 2;
          return midAngle > Math.PI ? "end" : null;
        })
        .attr("fill", d => {
          // 将指定项目的文本颜色设为白色（背景色）
          const hiddenItems = ["Wealth & Income Inequality", "Adaptive Behavior", "Image Processing", "Game Theory"];
          return hiddenItems.includes(names[d.index]) ? "#ffffff" : "#333";
        })
        .attr("font-size", "17px")
        .attr("font-weight", "600")
        .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
        .attr("filter", "drop-shadow(0 1px 1px rgba(0,0,0,0.08))")
        .text(d => names[d.index])
        .style("cursor", "pointer");

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
            // 将指定项目相关的连接线颜色设为白色（背景色）
            const hiddenItems = ["Wealth & Income Inequality", "Adaptive Behavior", "Image Processing", "Game Theory"];
            return (hiddenItems.includes(names[d.target.index]) || hiddenItems.includes(names[d.source.index])) ? "#ffffff" : colors[d.target.index];
          })
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

    // 悬停交互：只显示与目标分组相关的弧和连带
    const highlightByIndex = (i: number) => {
      // 所有关联的分组
      const connected = new Set<number>([i]);
      const setI = connectivity.get(i);
      if (setI) {
        for (const v of setI) connected.add(v);
      }

      // 组块与标签
      group.selectAll("path").style("opacity", (d: any) => connected.has(Number(d.index)) ? 1 : 0);
      group.selectAll("text").style("opacity", (d: any) => connected.has(Number(d.index)) ? 1 : 0.15);

      // 连带
      ribbonSel.style("opacity", (d: any) => (Number(d.source.index) === i || Number(d.target.index) === i) ? 0.9 : 0);
    };

    const resetHighlight = () => {
      group.selectAll("path").style("opacity", 1);
      group.selectAll("text").style("opacity", 1);
      ribbonSel.style("opacity", 1);
    };

    group.on("mouseover", (_event: any, d: any) => highlightByIndex(Number(d.index)))
         .on("mouseout", resetHighlight);

    // Cleanup function
    return () => {
      svg.selectAll("*").remove();
    };
  }, [left, right, links, leftTitle, rightTitle]);

  return (
    <div className={"w-full h-[750px] bg-white border-0 outline-none shadow-none " + (className || "")}>
      <svg ref={ref} role="img" aria-label={`${leftTitle} to ${rightTitle} chord diagram`}></svg>
      <div className="sr-only">Interactive chord diagram showing connections between {leftTitle} and {rightTitle}.</div>
    </div>
  );
}
