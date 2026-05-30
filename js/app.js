import { TOPICS, TOPIC_ORDER } from './data.js';
import { getAllProgress } from './progress.js';

function updateStats(progress) {
  const totalProblems = Object.values(TOPICS).reduce((sum, topic) => sum + topic.problems.length, 0);
  const { done, total, pct } = progress._overall;
  
  document.getElementById('total-problems').textContent = `${totalProblems}+`;
  document.getElementById('completion-rate').textContent = `${pct}%`;
  document.getElementById('overall-count').textContent = `${done} / ${total} solved`;
  document.getElementById('overall-fill').style.width = `${pct}%`;
  document.getElementById('overall-percent').textContent = `${pct}% complete`;
}

function renderTopicCard(topic, prog) {
  const { done, total, pct } = prog;
  const easyCount = topic.problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = topic.problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = topic.problems.filter(p => p.difficulty === 'Hard').length;

  return `
    <a class="topic-card" href="topic.html?id=${topic.id}">
      <div class="topic-header">
        <div class="topic-icon">${topic.icon || '📌'}</div>
        <div class="topic-info">
          <h3 class="topic-title">${topic.title}</h3>
          <p class="topic-description">${topic.description}</p>
        </div>
      </div>
      <div class="topic-stats">
        <span class="difficulty-badge easy">${easyCount} Easy</span>
        <span class="difficulty-badge medium">${mediumCount} Medium</span>
        <span class="difficulty-badge hard">${hardCount} Hard</span>
      </div>
      <div class="topic-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${pct}%"></div>
        </div>
        <span class="topic-progress-text">${done}/${total}</span>
      </div>
    </a>`;
}

function render() {
  const progress = getAllProgress(TOPICS);
  
  updateStats(progress);
  
  const grid = document.getElementById('topics-grid');
  grid.innerHTML = TOPIC_ORDER
    .map(id => renderTopicCard(TOPICS[id], progress[id]))
    .join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', render);