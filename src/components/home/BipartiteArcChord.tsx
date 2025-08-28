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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number } | null>(null);

  // 仅在数据变更时重建矩阵，避免无关渲染
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

  // 观察容器尺寸变化，触发重绘（节流至 rAF）
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
    // 初始化尺寸
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
    const width = Math.max(1200, W);
    const height = width * 0.78;
    const innerRadius = Math.min(width, height) * 0.35 - 60;
    const outerRadius = innerRadius + 12;

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

    svg.attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2 - 30, width, height])
      .attr("style", "width: 100%; height: auto; font: 16px 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;")
      .style("border", "none")
      .style("outline", "none");

    svg.selectAll("*").remove();

    // 添加左侧标题 - Research Methods（极简设计：彩色圆点 + 文本，无背景框）
    const leftTitleGroup = svg.append("g")
       .attr("transform", `translate(${-width / 2.5}, ${-height / 2 + 100})`);
    
    leftTitleGroup.append("circle")
       .attr("cx", -12)
       .attr("cy", 4)
       .attr("r", 6)
       .attr("fill", "#3b82f6");

    leftTitleGroup.append("text")
       .attr("x", 6)
       .attr("y", 6)
       .attr("text-anchor", "start")
       .attr("font-size", "20px")
       .attr("font-weight", "700")
       .attr("letter-spacing", "0.3px")
       .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
       .attr("fill", "#111827")
       .text(leftTitle);

    // 添加右侧标题 - Research Topics（极简设计：彩色圆点 + 文本，无背景框）
    const rightTitleX = width / 2.5 - 100; // 向左移动 100px
    const rightTitleGroup = svg.append("g")
       .attr("transform", `translate(${rightTitleX}, ${-height / 2 + 100})`);
    
    rightTitleGroup.append("circle")
       .attr("cx", -12)
       .attr("cy", 4)
       .attr("r", 6)
       .attr("fill", "#ec4899");

    rightTitleGroup.append("text")
       .attr("x", 6)
       .attr("y", 6)
       .attr("text-anchor", "start")
       .attr("font-size", "20px")
       .attr("font-weight", "700")
       .attr("letter-spacing", "0.3px")
       .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
       .attr("fill", "#111827")
       .text(rightTitle);

    // 压缩Y轴比例，使图形呈椭圆形
    const chartGroup = svg.append("g")
      .attr("transform", `scale(1, 0.75)`);

    const chords = chord(matrix);
    const hiddenItems = [
      "Wealth & Income Inequality",
      "Adaptive Behavior",
      "Image Processing",
      "Game Theory"
    ];
    
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

    // 让隐藏项不响应鼠标事件
    group.style("pointer-events", (d: any) => hiddenItems.includes(names[d.index]) ? "none" : "auto");

    group.append("path")
        .attr("fill", d => {
          // 将指定项目对应的块颜色设为白色（背景色）
          return hiddenItems.includes(names[d.index]) ? "#ffffff" : colors[d.index];
        })
        .attr("d", d => arc({
          startAngle: d.startAngle,
          endAngle: d.endAngle,
          innerRadius: innerRadius,
          outerRadius: outerRadius
        }))
        .style("opacity", d => hiddenItems.includes(names[d.index]) ? 0 : 1)
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
          return hiddenItems.includes(names[d.index]) ? "#ffffff" : "#333";
        })
        .attr("font-size", "17px")
        .attr("font-weight", "600")
        .attr("font-family", "'Inter', 'SF Pro Display', 'Segoe UI', system-ui, sans-serif")
        .attr("filter", (d: any) => hiddenItems.includes(names[d.index]) ? null : "drop-shadow(0 1px 1px rgba(0,0,0,0.08))")
        .text(d => names[d.index])
        .style("opacity", d => hiddenItems.includes(names[d.index]) ? 0 : 1)
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
            return (hiddenItems.includes(names[d.target.index]) || hiddenItems.includes(names[d.source.index])) ? "#ffffff" : colors[d.target.index];
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

    // 悬停交互：只显示与目标分组相关的弧和连带
    const highlightByIndex = (i: number) => {
      if (hiddenItems.includes(names[i])) return;
      // 所有关联的分组
      const connected = new Set<number>([i]);
      const setI = connectivity.get(i);
      if (setI) {
        for (const v of setI) connected.add(v);
      }

      // 组块与标签
      group.selectAll("path").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : (connected.has(Number(d.index)) ? 1 : 0));
      group.selectAll("text").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : (connected.has(Number(d.index)) ? 1 : 0.15));

      // 连带
      ribbonSel.style("opacity", (d: any) => {
        const hide = hiddenItems.includes(names[d.source.index]) || hiddenItems.includes(names[d.target.index]);
        if (hide) return 0;
        return (Number(d.source.index) === i || Number(d.target.index) === i) ? 0.9 : 0;
      });
    };

    const resetHighlight = () => {
      group.selectAll("path").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : 1);
      group.selectAll("text").style("opacity", (d: any) => hiddenItems.includes(names[d.index]) ? 0 : 1);
      ribbonSel.style("opacity", (d: any) => (hiddenItems.includes(names[d.source.index]) || hiddenItems.includes(names[d.target.index])) ? 0 : 1);
    };

    group.on("mouseover", (_event: any, d: any) => highlightByIndex(Number(d.index)))
         .on("mouseout", resetHighlight);

    // Cleanup function
    return () => {
      svg.selectAll("*").remove();
    };
  }, [computed, containerSize, leftTitle, rightTitle]);

  return (
    <div ref={wrapperRef} className={"w-full h-[750px] bg-white border-0 outline-none shadow-none " + (className || "")}>
      <svg ref={ref} role="img" aria-label={`${leftTitle} to ${rightTitle} chord diagram`}></svg>
      <div className="sr-only">Interactive chord diagram showing connections between {leftTitle} and {rightTitle}.</div>
    </div>
  );
}
