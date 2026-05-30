import { TOPICS, TOPIC_ORDER } from './data.js';
import { isCompleted, toggle, getTopicProgress } from './progress.js';
import { getTheoryLink } from './theory-resources.js';

const params = new URLSearchParams(location.search);
const id = params.get('id') || TOPIC_ORDER[0];
const topic = TOPICS[id];

if (!topic) {
  document.getElementById('topic-container').innerHTML = '<p style="color:#ef4444;padding:40px">Topic not found.</p>';
  throw new Error('Topic not found: ' + id);
}

document.title = `${topic.title} — DSA Roadmap`;

function diffClass(d) {
  return d === 'Easy' ? 'easy' : d === 'Medium' ? 'medium' : 'hard';
}

function renderProblems() {
  const { done, total, pct } = getTopicProgress(id, topic.problems.length);
  return `
    <div class="section-header">
      <h2>Problems <span class="count-badge">${total}</span></h2>
      <span class="progress-text">${done}/${total} solved · ${pct}%</span>
    </div>
    <div class="progress-bar-wrap" style="margin-bottom:20px">
      <div class="progress-bar-fill" id="prob-bar" style="width:${pct}%"></div>
    </div>
    <div class="problems-list" id="problems-list">
      ${topic.problems.map((p, i) => {
        const done = isCompleted(id, p.title);
        return `
          <div class="problem-row ${done ? 'solved' : ''}" data-idx="${i}">
            <button class="check-btn ${done ? 'checked' : ''}" data-title="${p.title}" aria-label="Mark solved">
              ${done ? '✓' : ''}
            </button>
            <span class="prob-title">${p.title}</span>
            <span class="diff-badge ${diffClass(p.difficulty)}">${p.difficulty}</span>
            <a class="lc-link" href="${p.leetcode}" target="_blank" rel="noopener">LeetCode ↗</a>
          </div>`;
      }).join('')}
    </div>`;
}

function renderAlgorithms() {
  if (!topic.algorithms?.length) return '';
  return `
    <div class="section">
      <h2>Key Algorithms</h2>
      <div class="algo-grid">
        ${topic.algorithms.map(a => `
          <div class="algo-card">
            <div class="algo-name">${a.name}</div>
            <div class="algo-complexity">
              <span class="complexity time">⏱ ${a.time}</span>
              <span class="complexity space">💾 ${a.space}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderTheory() {
  if (!topic.theory?.length) return '';
  return `
    <div class="section">
      <div class="section-header">
        <h2>Theory Checklist <span class="count-badge">${topic.theory.length}</span></h2>
        <span class="theory-hint">Click to learn each concept</span>
      </div>
      <div class="theory-grid">
        ${topic.theory.map(t => {
          const link = getTheoryLink(id, t);
          if (link) {
            return `<a class="theory-chip theory-link" href="${link}" target="_blank" rel="noopener">${t} ↗</a>`;
          } else {
            return `<div class="theory-chip">${t}</div>`;
          }
        }).join('')}
      </div>
    </div>`;
}

function renderNav() {
  const idx = TOPIC_ORDER.indexOf(id);
  const prev = idx > 0 ? TOPIC_ORDER[idx - 1] : null;
  const next = idx < TOPIC_ORDER.length - 1 ? TOPIC_ORDER[idx + 1] : null;
  return `
    <div class="topic-nav">
      ${prev ? `<a class="nav-btn" href="topic.html?id=${prev}">← ${TOPICS[prev].title}</a>` : '<span></span>'}
      <a class="nav-btn home-btn" href="index.html">🏠 Dashboard</a>
      <a class="nav-btn roadmap-btn" href="roadmap.html">🗺️ Roadmap</a>
      ${next ? `<a class="nav-btn" href="topic.html?id=${next}">${TOPICS[next].title} →</a>` : '<span></span>'}
    </div>`;
}

function renderProgress() {
  const { done, total, pct } = getTopicProgress(id, topic.problems.length);
  const easyCount = topic.problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = topic.problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = topic.problems.filter(p => p.difficulty === 'Hard').length;
  
  return `
    <div class="topic-stats-section">
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-number">${total}</div>
          <div class="stat-label">Total Problems</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${done}</div>
          <div class="stat-label">Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${pct}%</div>
          <div class="stat-label">Progress</div>
        </div>
      </div>
      <div class="difficulty-breakdown">
        <div class="diff-stat easy">
          <span class="diff-count">${easyCount}</span>
          <span class="diff-label">Easy</span>
        </div>
        <div class="diff-stat medium">
          <span class="diff-count">${mediumCount}</span>
          <span class="diff-label">Medium</span>
        </div>
        <div class="diff-stat hard">
          <span class="diff-count">${hardCount}</span>
          <span class="diff-label">Hard</span>
        </div>
      </div>
    </div>`;
}

function mount() {
  document.getElementById('topic-container').innerHTML = `
    ${renderNav()}
    <div class="topic-hero">
      <span class="topic-icon-lg">${topic.icon || '📌'}</span>
      <div>
        <h1>${topic.title}</h1>
        <p class="topic-desc">${topic.description}</p>
      </div>
    </div>
    ${renderProgress()}
    ${renderTheory()}
    ${renderAlgorithms()}
    <div class="section">
      ${renderProblems()}
    </div>
    ${renderNav()}`;

  document.getElementById('problems-list').addEventListener('click', e => {
    const btn = e.target.closest('.check-btn');
    if (!btn) return;
    const title = btn.dataset.title;
    const nowDone = toggle(id, title);
    const row = btn.closest('.problem-row');
    row.classList.toggle('solved', nowDone);
    btn.classList.toggle('checked', nowDone);
    btn.textContent = nowDone ? '✓' : '';
    // update bar
    const { done, total, pct } = getTopicProgress(id, topic.problems.length);
    document.getElementById('prob-bar').style.width = pct + '%';
    document.querySelector('.progress-text').textContent = `${done}/${total} solved · ${pct}%`;
  });
}

mount();