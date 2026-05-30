const KEY = 'dsa_progress';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function isCompleted(topicId, problemTitle) {
  return !!(load()[topicId]?.[problemTitle]);
}

export function toggle(topicId, problemTitle) {
  const data = load();
  if (!data[topicId]) data[topicId] = {};
  data[topicId][problemTitle] = !data[topicId][problemTitle];
  if (!data[topicId][problemTitle]) delete data[topicId][problemTitle];
  save(data);
  return data[topicId][problemTitle] ?? false;
}

export function getTopicProgress(topicId, total) {
  const done = Object.keys(load()[topicId] || {}).length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

export function getAllProgress(topics) {
  let totalDone = 0, totalAll = 0;
  const result = {};
  for (const [id, topic] of Object.entries(topics)) {
    const p = getTopicProgress(id, topic.problems.length);
    result[id] = p;
    totalDone += p.done;
    totalAll += p.total;
  }
  result._overall = { done: totalDone, total: totalAll, pct: totalAll ? Math.round((totalDone / totalAll) * 100) : 0 };
  return result;
}
