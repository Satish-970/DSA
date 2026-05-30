import { TOPICS, TOPIC_ORDER } from './data.js';
import { getAllProgress } from './progress.js';

// Enhanced roadmap structure with better positioning and dependencies
const ROADMAP_STRUCTURE = [
  // Row 1: Fundamentals (Foundation Layer)
  { id: 'arrays', row: 0, col: 0, prerequisites: [], category: 'foundation' },
  { id: 'strings', row: 0, col: 1, prerequisites: [], category: 'foundation' },
  { id: 'hashing', row: 0, col: 2, prerequisites: [], category: 'foundation' },
  { id: 'recursion', row: 0, col: 3, prerequisites: [], category: 'foundation' },
  
  // Row 2: Basic Data Structures
  { id: 'linkedlist', row: 1, col: 0, prerequisites: ['arrays'], category: 'basic-ds' },
  { id: 'stack', row: 1, col: 1, prerequisites: ['arrays'], category: 'basic-ds' },
  { id: 'queue', row: 1, col: 2, prerequisites: ['arrays'], category: 'basic-ds' },
  { id: 'bit', row: 1, col: 3, prerequisites: ['recursion'], category: 'basic-ds' },
  
  // Row 3: Intermediate Algorithms & Structures
  { id: 'tree', row: 2, col: 0, prerequisites: ['linkedlist', 'recursion'], category: 'intermediate' },
  { id: 'heap', row: 2, col: 1, prerequisites: ['arrays', 'tree'], category: 'intermediate' },
  { id: 'binarysearch', row: 2, col: 2, prerequisites: ['arrays', 'recursion'], category: 'intermediate' },
  { id: 'sorting', row: 2, col: 3, prerequisites: ['arrays'], category: 'intermediate' },
  
  // Row 4: Advanced Structures
  { id: 'bst', row: 3, col: 0, prerequisites: ['tree'], category: 'advanced-ds' },
  { id: 'trie', row: 3, col: 1, prerequisites: ['tree', 'strings'], category: 'advanced-ds' },
  { id: 'graph', row: 3, col: 2, prerequisites: ['tree', 'queue'], category: 'advanced-ds' },
  { id: 'greedy', row: 3, col: 3, prerequisites: ['sorting'], category: 'advanced-ds' },
  
  // Row 5: Expert Level
  { id: 'backtracking', row: 4, col: 1, prerequisites: ['recursion', 'graph'], category: 'expert' },
  { id: 'dp', row: 4, col: 2, prerequisites: ['recursion', 'arrays'], category: 'expert' },
  { id: 'advanced', row: 4, col: 3, prerequisites: ['graph', 'dp', 'greedy'], category: 'expert' }
];

const CATEGORY_COLORS = {
  'foundation': { border: '#10b981', bg: 'rgba(16, 185, 129, 0.05)' },
  'basic-ds': { border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.05)' },
  'intermediate': { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.05)' },
  'advanced-ds': { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.05)' },
  'expert': { border: '#ef4444', bg: 'rgba(239, 68, 68, 0.05)' }
};

function getNodeStatus(topicId, progress) {
  const topicProgress = progress[topicId];
  if (!topicProgress) return 'locked';
  
  if (topicProgress.pct === 100) return 'completed';
  if (topicProgress.pct > 0) return 'in-progress';
  
  // Check if prerequisites are met
  const node = ROADMAP_STRUCTURE.find(n => n.id === topicId);
  if (node && node.prerequisites.length > 0) {
    const prerequisitesMet = node.prerequisites.every(prereq => {
      const prereqProgress = progress[prereq];
      return prereqProgress && prereqProgress.pct >= 60; // 60% completion required
    });
    return prerequisitesMet ? 'available' : 'locked';
  }
  
  return 'available';
}

function getDifficultyLevel(topic) {
  const easyCount = topic.problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = topic.problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = topic.problems.filter(p => p.difficulty === 'Hard').length;
  
  const total = easyCount + mediumCount + hardCount;
  const hardRatio = hardCount / total;
  const mediumRatio = mediumCount / total;
  
  if (hardRatio > 0.4) return 'hard';
  if (mediumRatio > 0.5 || hardRatio > 0.2) return 'medium';
  return 'easy';
}

function createRoadmapStats(progress) {
  const stats = {
    total: ROADMAP_STRUCTURE.length,
    completed: 0,
    inProgress: 0,
    available: 0,
    locked: 0
  };
  
  ROADMAP_STRUCTURE.forEach(node => {
    const status = getNodeStatus(node.id, progress);
    stats[status.replace('-', '')]++;
  });
  
  const completionRate = Math.round((stats.completed / stats.total) * 100);
  
  return { ...stats, completionRate };
}

function renderRoadmapStats(stats) {
  return `
    <div class="roadmap-stats">
      <div class="roadmap-stat">
        <span class="roadmap-stat-number">${stats.completed}</span>
        <span class="roadmap-stat-label">Completed</span>
      </div>
      <div class="roadmap-stat">
        <span class="roadmap-stat-number">${stats.inProgress}</span>
        <span class="roadmap-stat-label">In Progress</span>
      </div>
      <div class="roadmap-stat">
        <span class="roadmap-stat-number">${stats.available}</span>
        <span class="roadmap-stat-label">Available</span>
      </div>
      <div class="roadmap-stat">
        <span class="roadmap-stat-number">${stats.completionRate}%</span>
        <span class="roadmap-stat-label">Overall</span>
      </div>
    </div>
  `;
}

function createRoadmapNode(nodeData, progress) {
  const topic = TOPICS[nodeData.id];
  const status = getNodeStatus(nodeData.id, progress);
  const topicProgress = progress[nodeData.id] || { done: 0, total: 0, pct: 0 };
  const difficulty = getDifficultyLevel(topic);
  const categoryColor = CATEGORY_COLORS[nodeData.category];
  
  const node = document.createElement('div');
  node.className = `roadmap-node ${status}`;
  node.dataset.topicId = nodeData.id;
  node.dataset.row = nodeData.row;
  node.dataset.col = nodeData.col;
  node.dataset.category = nodeData.category;
  
  // Add category styling
  if (status === 'available' || status === 'in-progress' || status === 'completed') {
    node.style.borderColor = categoryColor.border;
    if (status === 'available') {
      node.style.background = categoryColor.bg;
    }
  }
  
  // Add click handler if not locked
  if (status !== 'locked') {
    node.addEventListener('click', () => {
      // Add click animation
      node.style.transform = 'scale(0.95)';
      setTimeout(() => {
        window.location.href = `topic.html?id=${nodeData.id}`;
      }, 100);
    });
    
    // Add keyboard support
    node.setAttribute('tabindex', '0');
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = `topic.html?id=${nodeData.id}`;
      }
    });
  }
  
  node.innerHTML = `
    <div class="difficulty-indicator ${difficulty}"></div>
    ${nodeData.prerequisites.length > 0 ? `<div class="prerequisites-badge">${nodeData.prerequisites.length}</div>` : ''}
    <span class="node-icon">${topic.icon || '📌'}</span>
    <div class="node-title">${topic.title}</div>
    <div class="node-subtitle">${topicProgress.total} problems</div>
    <div class="node-progress">
      <div class="node-progress-fill" style="width: ${topicProgress.pct}%"></div>
    </div>
  `;
  
  // Enhanced tooltip
  node.addEventListener('mouseenter', (e) => showTooltip(e, topic, topicProgress, nodeData));
  node.addEventListener('mouseleave', hideTooltip);
  
  return node;
}

function showTooltip(event, topic, progress, nodeData) {
  const tooltip = document.createElement('div');
  tooltip.className = 'roadmap-tooltip visible';
  
  const prereqText = nodeData.prerequisites.length > 0 
    ? `<br><br><strong>Prerequisites:</strong><br>${nodeData.prerequisites.map(p => TOPICS[p].title).join(', ')}`
    : '';
  
  const categoryText = `<br><strong>Category:</strong> ${nodeData.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
  
  tooltip.innerHTML = `
    <strong>${topic.title}</strong><br>
    <em>${progress.done}/${progress.total} solved (${progress.pct}%)</em><br>
    ${topic.description.substring(0, 120)}...
    ${categoryText}
    ${prereqText}
  `;
  
  document.body.appendChild(tooltip);
  
  const rect = event.target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  let top = rect.top - tooltipRect.height - 12;
  
  // Adjust if tooltip goes off screen
  if (left < 10) left = 10;
  if (left + tooltipRect.width > window.innerWidth - 10) {
    left = window.innerWidth - tooltipRect.width - 10;
  }
  if (top < 10) {
    top = rect.bottom + 12;
  }
  
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip() {
  const tooltip = document.querySelector('.roadmap-tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}

function drawConnections(progress) {
  const svg = document.getElementById('connections-svg');
  const container = document.querySelector('.roadmap-wrapper');
  
  // Clear existing connections
  svg.innerHTML = '';
  
  // Set SVG dimensions
  const containerRect = container.getBoundingClientRect();
  svg.setAttribute('width', containerRect.width);
  svg.setAttribute('height', containerRect.height);
  
  ROADMAP_STRUCTURE.forEach(nodeData => {
    if (nodeData.prerequisites.length === 0) return;
    
    const currentNode = document.querySelector(`[data-topic-id="${nodeData.id}"]`);
    if (!currentNode) return;
    
    nodeData.prerequisites.forEach(prereqId => {
      const prereqNode = document.querySelector(`[data-topic-id="${prereqId}"]`);
      if (!prereqNode) return;
      
      const currentRect = currentNode.getBoundingClientRect();
      const prereqRect = prereqNode.getBoundingClientRect();
      const containerRect = svg.getBoundingClientRect();
      
      const x1 = prereqRect.left + prereqRect.width / 2 - containerRect.left;
      const y1 = prereqRect.bottom - containerRect.top - 20;
      const x2 = currentRect.left + currentRect.width / 2 - containerRect.left;
      const y2 = currentRect.top - containerRect.top + 20;
      
      // Create smooth curved path
      const midY = (y1 + y2) / 2;
      const controlY1 = y1 + (midY - y1) * 0.5;
      const controlY2 = y2 - (y2 - midY) * 0.5;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = `M ${x1} ${y1} C ${x1} ${controlY1} ${x2} ${controlY2} ${x2} ${y2}`;
      
      path.setAttribute('d', d);
      path.setAttribute('class', 'connection-line');
      
      // Style based on completion status
      const prereqProgress = progress[prereqId];
      const currentProgress = progress[nodeData.id];
      
      if (prereqProgress && prereqProgress.pct === 100 && currentProgress && currentProgress.pct > 0) {
        path.classList.add('completed');
      } else if (prereqProgress && prereqProgress.pct >= 60) {
        path.classList.add('active');
      } else if (currentProgress && currentProgress.pct > 0) {
        path.classList.add('in-progress');
      }
      
      svg.appendChild(path);
    });
  });
}

function createLegend() {
  const legend = document.createElement('div');
  legend.className = 'roadmap-legend';
  legend.innerHTML = `
    <div class="legend-item">
      <div class="legend-icon completed"></div>
      <span>Completed (100%)</span>
    </div>
    <div class="legend-item">
      <div class="legend-icon in-progress"></div>
      <span>In Progress (1-99%)</span>
    </div>
    <div class="legend-item">
      <div class="legend-icon available"></div>
      <span>Available (Prerequisites Met)</span>
    </div>
    <div class="legend-item">
      <div class="legend-icon locked"></div>
      <span>Locked (Need Prerequisites)</span>
    </div>
  `;
  return legend;
}

function renderRoadmap() {
  const progress = getAllProgress(TOPICS);
  const stats = createRoadmapStats(progress);
  const container = document.querySelector('.roadmap-container');
  const grid = document.getElementById('roadmap-grid');
  
  // Add stats and legend
  const statsElement = document.createElement('div');
  statsElement.innerHTML = renderRoadmapStats(stats);
  container.insertBefore(statsElement.firstElementChild, container.firstChild);
  
  container.insertBefore(createLegend(), grid.parentElement);
  
  // Clear grid
  grid.innerHTML = '';
  
  // Calculate grid dimensions
  const maxRow = Math.max(...ROADMAP_STRUCTURE.map(n => n.row));
  const maxCol = Math.max(...ROADMAP_STRUCTURE.map(n => n.col));
  
  // Set grid template
  grid.style.gridTemplateRows = `repeat(${maxRow + 1}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${maxCol + 1}, 1fr)`;
  
  // Create nodes
  ROADMAP_STRUCTURE.forEach(nodeData => {
    const node = createRoadmapNode(nodeData, progress);
    node.style.gridRow = nodeData.row + 1;
    node.style.gridColumn = nodeData.col + 1;
    grid.appendChild(node);
  });
  
  // Draw connections after a short delay
  setTimeout(() => {
    drawConnections(progress);
    
    // Redraw connections on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => drawConnections(progress), 100);
    });
  }, 150);
}

 // Initialize roadmap
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderRoadmap();

    window.addEventListener('resize', () => {
      const progress = getAllProgress(TOPICS);
      drawConnections(progress);
    });

  } catch (error) {
    console.error('Roadmap Error:', error);

    const container = document.querySelector('.roadmap-container');

    if (container) {
      container.innerHTML = `
        <div style="
          padding:40px;
          text-align:center;
          color:red;
          font-size:18px;
        ">
          Failed to load roadmap.<br>
          Open F12 → Console and check the error.
        </div>
      `;
    }
  }
});