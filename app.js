const worlds = [
  { id: "logic", name: "Logic Lab", symbol: "⌘", category: "logic", description: "Patterns, puzzles & the joy of a good question.", label: "THINK IT THROUGH" },
  { id: "academy", name: "Knowledge Academy", symbol: "⌑", category: "academy", description: "Maths, language & ideas from every subject.", label: "LEARN SOMETHING NEW" },
  { id: "business", name: "Business District", symbol: "↗", category: "business", description: "Make thoughtful calls in a little world of work.", label: "TRY A REAL-WORLD IDEA" },
  { id: "innovation", name: "Innovation Workshop", symbol: "✳", category: "innovation", description: "Code, invent & imagine what comes next.", label: "MAKE SOMETHING CLICK" },
  { id: "real-life", name: "Real-Life Arena", symbol: "◎", category: "business", description: "Practise decisions for everyday moments.", label: "PRACTISE FOR LIFE" },
  { id: "mastery", name: "Mastery Tower", symbol: "♧", category: "logic", description: "Revisit, reflect & show what you know.", label: "GROW YOUR MASTERY" }
];

const missions = [
  {
    id: "pattern-pilot", world: "logic", title: "The pattern pilot", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Spot what changes, then use the rule to find what comes next.",
    questions: [
      { prompt: "A sequence begins 3, 5, 9, 17… What comes next?", options: ["25", "31", "33", "34"], answer: 2, explanation: "The jumps double each time: +2, +4, +8, so the next jump is +16. That makes 33." },
      { prompt: "A sequence goes 2, 6, 18… What is the next number?", options: ["36", "48", "54", "60"], answer: 2, explanation: "Each term is multiplied by 3: 2 × 3 = 6, 6 × 3 = 18, and 18 × 3 = 54." },
      { prompt: "A shape pattern repeats circle, square, triangle, circle, square… What comes next?", options: ["Circle", "Square", "Triangle", "Star"], answer: 2, explanation: "The three-shape cycle starts again after circle and square, so the next shape is a triangle." }
    ]
  },
  {
    id: "word-detective", world: "academy", title: "Word detective", level: "WARM UP", time: "3 MIN", xp: 20,
    description: "Follow the clues in a sentence and uncover the best-fit word.",
    questions: [
      { prompt: "If something is “fragile,” how should you handle it?", options: ["With care", "In a hurry", "Without looking", "Only outdoors"], answer: 0, explanation: "Fragile means easily broken or damaged, so handling it with care is sensible." },
      { prompt: "Which word is closest in meaning to “curious”?", options: ["Sleepy", "Eager to know", "Already certain", "In a hurry"], answer: 1, explanation: "A curious person is interested and eager to learn or find something out." },
      { prompt: "Mina checked the forecast before leaving. What does “forecast” mean here?", options: ["A map of the area", "A prediction of the weather", "A list of directions", "A kind of jacket"], answer: 1, explanation: "A forecast is a prediction about what conditions, such as the weather, may be like." }
    ]
  },
  {
    id: "market-maker", world: "business", title: "The market maker", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Give a tiny weekend stall a smart, sustainable start.",
    questions: [
      { prompt: "You sell 8 notebooks for $5 each. What is your total sales income before costs?", options: ["$13", "$35", "$40", "$45"], answer: 2, explanation: "Sales income is price × number sold: $5 × 8 = $40. Costs have not been taken away yet." },
      { prompt: "Your $40 income came from 8 notebooks. Materials cost $16 altogether. What is the profit?", options: ["$16", "$24", "$32", "$56"], answer: 1, explanation: "Profit is income minus costs: $40 − $16 = $24." },
      { prompt: "Only a few notebooks sold. What is a useful next step before ordering a lot more?", options: ["Ask customers what they want", "Raise every price immediately", "Buy as much stock as possible", "Stop tracking sales"], answer: 0, explanation: "Customer feedback is a low-risk way to learn what people value before spending more." }
    ]
  },
  {
    id: "code-courier", world: "innovation", title: "Code courier", level: "THINKER", time: "4 MIN", xp: 25,
    description: "Trace simple instructions and find a clear route to the goal.",
    questions: [
      { prompt: "A robot starts at 1 on a number line. It repeats “move forward 2” three times. Where does it land?", options: ["5", "6", "7", "8"], answer: 2, explanation: "Three moves of 2 spaces cover 6 spaces. Starting at 1, the robot lands on 7." },
      { prompt: "Which instruction set reaches 6 from 0 in exactly three equal jumps?", options: ["Move 1, three times", "Move 2, three times", "Move 3, three times", "Move 4, three times"], answer: 1, explanation: "Three jumps of 2 make 2 + 2 + 2 = 6." },
      { prompt: "A program checks “is the number greater than 10?” for the number 8. Which path should it take?", options: ["Yes, greater than 10", "No, not greater than 10", "Both paths", "Neither path exists"], answer: 1, explanation: "Eight is less than 10, so the condition is false and the “no” path is the correct one." }
    ]
  },
  {
    id: "everyday-budget", world: "real-life", title: "A thoughtful budget", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Plan a small outing while keeping a little money in reserve.",
    questions: [
      { prompt: "You have $20. A ticket costs $8 and lunch costs $6. How much remains?", options: ["$4", "$5", "$6", "$8"], answer: 2, explanation: "$8 + $6 = $14 spent. $20 − $14 = $6 remaining." },
      { prompt: "You want to save $3 from the $6 that remains. What is a sensible maximum for a snack?", options: ["$2", "$3", "$4", "$6"], answer: 1, explanation: "Spending $3 leaves the other $3 untouched for your savings goal." },
      { prompt: "The bus is delayed and you might miss the start. What is a helpful first move?", options: ["Check another safe route and tell your group", "Run across traffic", "Ignore the delay", "Spend your saved money immediately"], answer: 0, explanation: "Checking a safe alternative and communicating helps you adapt without taking unnecessary risks." }
    ]
  },
  {
    id: "mastery-mix", world: "mastery", title: "The mastery mix", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Connect a few ideas and show how your thinking has grown.",
    questions: [
      { prompt: "Which fraction is equal to one half?", options: ["2/3", "3/6", "4/6", "5/8"], answer: 1, explanation: "Three out of six pieces is the same proportion as one out of two: 3/6 simplifies to 1/2." },
      { prompt: "A good explanation of a solution should usually include…", options: ["Only the final number", "The steps and why they work", "A faster guess", "As many new words as possible"], answer: 1, explanation: "Showing the steps and the reasoning makes a solution easier to understand and check." },
      { prompt: "You notice your answer does not fit the question. What is a strong next step?", options: ["Check your assumptions and try another route", "Erase the question", "Assume the answer is right", "Stop asking questions"], answer: 0, explanation: "Checking assumptions and trying another approach is a thoughtful way to learn from a mismatch." }
    ]
  }
];

const achievements = [
  { id: "first-orbit", symbol: "✦", title: "First orbit", description: "Finish your first learning mission.", color: "#e9f0e2", ink: "#668260", unlocked: state => state.completed.length >= 1 },
  { id: "world-hopper", symbol: "↗", title: "World hopper", description: "Explore missions in three different worlds.", color: "#e8eef5", ink: "#6d86a3", unlocked: state => new Set(state.completed.map(item => missionById(item.id)?.world).filter(Boolean)).size >= 3 },
  { id: "mission-maker", symbol: "⌘", title: "Mission maker", description: "Complete five learning missions.", color: "#f2eafb", ink: "#8a75aa", unlocked: state => state.completed.length >= 5 },
  { id: "sharp-thinker", symbol: "◎", title: "Sharp thinker", description: "Get every answer right in a mission.", color: "#fbefe7", ink: "#bb8664", unlocked: state => state.completed.some(item => item.score === item.total) },
  { id: "streak-keeper", symbol: "♧", title: "Streak keeper", description: "Build a three-day learning streak.", color: "#eaf2eb", ink: "#6c9372", unlocked: state => state.bestStreak >= 3 },
  { id: "six-horizons", symbol: "✳", title: "Six horizons", description: "Visit every one of your six learning worlds.", color: "#f8f1df", ink: "#a18a4d", unlocked: state => new Set(state.completed.map(item => missionById(item.id)?.world).filter(Boolean)).size >= worlds.length }
];

const STORAGE_KEY = "smartmind-progress-v1";
const defaultState = () => ({ xp: 0, streak: 0, bestStreak: 0, lastCompletedDate: "", completed: [] });
const today = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
const dayBefore = dateString => {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.completed)) throw new Error("Saved progress has an unexpected format.");
    return {
      ...defaultState(),
      xp: Number.isFinite(parsed.xp) ? Math.max(0, parsed.xp) : 0,
      streak: Number.isFinite(parsed.streak) ? Math.max(0, parsed.streak) : 0,
      bestStreak: Number.isFinite(parsed.bestStreak) ? Math.max(0, parsed.bestStreak) : 0,
      lastCompletedDate: typeof parsed.lastCompletedDate === "string" ? parsed.lastCompletedDate : "",
      completed: parsed.completed.filter(item => item && typeof item.id === "string" && Number.isFinite(item.score) && Number.isFinite(item.total))
    };
  } catch (error) {
    console.error("SmartMind could not load saved progress.", error);
    return defaultState();
  }
}

let state = loadState();
if (state.lastCompletedDate && state.lastCompletedDate !== today() && state.lastCompletedDate !== dayBefore(today())) {
  state.streak = 0;
}
let activeMission = null;
let activeQuestion = 0;
let correctAnswers = 0;
let selectedFilter = "all";
let selectedPlan = "monthly";
let paymentReturnFocus = null;
let toastTimer;
let returnFocus = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const worldById = id => worlds.find(world => world.id === id);
const missionById = id => missions.find(mission => mission.id === id);
const worldColor = id => ({
  logic: ["#f0edf8", "#62528d"], academy: ["#edf3f9", "#496c91"], business: ["#fbf0e9", "#996543"],
  innovation: ["#ebf3eb", "#4c7757"], "real-life": ["#f6f2e4", "#82703d"], mastery: ["#f7edf1", "#916076"]
}[id] || ["#eef3ed", "#56745a"]);
const isCompleted = id => state.completed.some(item => item.id === id);
const completedRecord = id => state.completed.find(item => item.id === id);

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("SmartMind could not save your progress.", error);
    showToast("Your mission is complete, but this browser couldn't save progress. Check storage permissions and try again.");
    return false;
  }
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
}

function renderWorldCard(world) {
  const count = missions.filter(mission => mission.world === world.id && isCompleted(mission.id)).length;
  const total = missions.filter(mission => mission.world === world.id).length;
  const percent = total ? Math.round((count / total) * 100) : 0;
  return `<article class="world-card" data-world="${world.id}" data-open-world="${world.id}" tabindex="0" role="button" aria-label="Explore ${world.name}">
    <div class="world-top"><span class="world-symbol" aria-hidden="true">${world.symbol}</span><span class="world-art"></span></div>
    <div><h3>${world.name}</h3><p>${world.description}</p></div>
    <div class="world-card-bottom"><span>${world.label}</span><span class="world-progress-mini"><span class="mini-progress"><span style="width:${percent}%"></span></span>${count}/${total}</span><span class="world-arrow" aria-hidden="true">↗</span></div>
  </article>`;
}

function renderMissionCard(mission) {
  const world = worldById(mission.world);
  const done = completedRecord(mission.id);
  return `<article class="mission-card">
    <div class="mission-meta"><span class="mission-world-tag"><span class="world-dot dot-${world.id}"></span>${world.name}</span><span class="difficulty">${mission.level}</span></div>
    <h3>${mission.title}</h3><p>${mission.description}</p>
    <div class="mission-card-footer"><span class="mission-time">${mission.time} · ${mission.xp}–${mission.xp + mission.questions.length * 5} XP</span>
      ${done ? `<span class="mission-done" title="Best result ${done.score} of ${done.total}">✓ ${done.score}/${done.total} best</span>` : ""}
      <button class="play-mission" type="button" data-start-challenge="${mission.id}">${done ? "Play again" : "Start mission"} <span aria-hidden="true">↗</span></button>
    </div>
  </article>`;
}

function categoryForWorld(world) {
  return worldById(world)?.category || world;
}

function renderMissions(target, filter) {
  const list = missions.filter(mission => filter === "all" || mission.world === filter || categoryForWorld(mission.world) === filter);
  target.innerHTML = list.map(renderMissionCard).join("");
  return list.length;
}

function renderWorlds(target, filter = "all") {
  const list = worlds.filter(world => filter === "all" || world.id === filter || world.category === filter);
  target.innerHTML = list.map(renderWorldCard).join("");
}

function renderHistory() {
  const container = $("#missionHistory");
  const sorted = [...state.completed].sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  if (!sorted.length) {
    container.innerHTML = '<div class="history-empty">Your mission log is ready for its first adventure. Pick a world and give a challenge a try.</div>';
    return;
  }
  container.innerHTML = sorted.slice(0, 8).map(item => {
    const mission = missionById(item.id);
    if (!mission) return "";
    const world = worldById(mission.world);
    const [bg, color] = worldColor(mission.world);
    const date = new Date(`${item.completedAt}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric" });
    return `<div class="history-row"><span class="history-icon" style="--world-bg:${bg};--world-color:${color}" aria-hidden="true">${world.symbol}</span><span class="history-copy"><strong>${mission.title}</strong><small>${world.name} · ${date} · ${item.score}/${item.total} thoughtful answers</small></span><span class="history-xp">+${item.earnedXp} XP</span></div>`;
  }).join("");
}

function renderProgress() {
  $("#progressXp").textContent = state.xp;
  $("#progressMissions").textContent = state.completed.length;
  $("#progressStreak").textContent = `${state.bestStreak} ${state.bestStreak === 1 ? "day" : "days"}`;
  const explored = new Set(state.completed.map(item => missionById(item.id)?.world).filter(Boolean)).size;
  $("#worldsExplored").textContent = `${explored} / ${worlds.length} explored`;
  $("#worldProgressList").innerHTML = worlds.map(world => {
    const total = missions.filter(mission => mission.world === world.id).length;
    const done = missions.filter(mission => mission.world === world.id && isCompleted(mission.id)).length;
    const percent = total ? Math.round(done / total * 100) : 0;
    const [bg, color] = worldColor(world.id);
    return `<div class="progress-world-row" style="--world-bg:${bg};--world-color:${color}"><span class="progress-world-icon" aria-hidden="true">${world.symbol}</span><span class="progress-world-name"><strong>${world.name}</strong><span class="progress-track"><span style="width:${percent}%"></span></span></span><span>${done} / ${total}</span></div>`;
  }).join("");
  renderHistory();
}

function renderAchievements() {
  $("#achievementGrid").innerHTML = achievements.map(achievement => {
    const unlocked = achievement.unlocked(state);
    return `<article class="achievement-card ${unlocked ? "" : "locked"}" style="--badge-bg:${achievement.color};--badge-color:${achievement.ink}">
      <span class="achievement-badge" aria-hidden="true">${unlocked ? achievement.symbol : "· · ·"}</span>
      <h3>${achievement.title}</h3><p>${achievement.description}</p>
      <span class="achievement-status">${unlocked ? "✓  UNLOCKED" : "✧  STILL WITHIN REACH"}</span>
    </article>`;
  }).join("");
}

function refreshDashboard() {
  $("#streakCount").textContent = state.streak;
  $("#homeWorldGrid").innerHTML = worlds.map(renderWorldCard).join("");
  $("#homeMissionGrid").innerHTML = missions.slice(0, 3).map(renderMissionCard).join("");
  renderWorlds($("#allWorldGrid"), selectedFilter);
  const count = renderMissions($("#allMissionGrid"), selectedFilter);
  $("#missionCount").textContent = `${count} ${count === 1 ? "MISSION" : "MISSIONS"}`;
  $("#emptyMissions").hidden = count !== 0;
  renderProgress();
  renderAchievements();
}

function setView(view, title) {
  const target = $(`#view-${view}`);
  if (!target) return;
  $$(".view-panel").forEach(panel => panel.classList.toggle("active", panel === target));
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === view));
  $("#breadcrumbCurrent").textContent = title || ({
    home: "Overview", worlds: "Explore worlds", progress: "My progress", achievements: "Achievements", premium: "Premium"
  }[view] || "Overview");
  $("#sidebar").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectFilter(filter) {
  selectedFilter = filter;
  $$(".filter-chip").forEach(button => button.classList.toggle("selected", button.dataset.filter === filter));
  renderWorlds($("#allWorldGrid"), filter);
  const count = renderMissions($("#allMissionGrid"), filter);
  $("#missionCount").textContent = `${count} ${count === 1 ? "MISSION" : "MISSIONS"}`;
  $("#emptyMissions").hidden = count !== 0;
}

function openWorld(worldId) {
  selectFilter(worldById(worldId)?.category || "all");
  setView("worlds", worldById(worldId)?.name || "Explore worlds");
  $("#allMissionGrid").scrollIntoView({ behavior: "smooth", block: "start" });
}

function startChallenge(id) {
  activeMission = missionById(id);
  if (!activeMission) {
    showToast("That mission isn't available right now. Choose another challenge.");
    return;
  }
  activeQuestion = 0;
  correctAnswers = 0;
  returnFocus = document.activeElement;
  $("#challengeModal").hidden = false;
  document.body.style.overflow = "hidden";
  renderQuestion();
  $(".close-modal").focus();
}

function closeChallenge() {
  $("#challengeModal").hidden = true;
  document.body.style.overflow = "";
  activeMission = null;
  if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
}

function renderQuestion() {
  const question = activeMission.questions[activeQuestion];
  const total = activeMission.questions.length;
  $("#challengeProgressLabel").textContent = `QUESTION ${activeQuestion + 1} OF ${total}`;
  $("#challengeXp").textContent = `${activeMission.xp}–${activeMission.xp + activeMission.questions.length * 5} XP`;
  $("#challengeProgressBar").style.width = `${(activeQuestion / total) * 100}%`;
  const world = worldById(activeMission.world);
  $("#challengeStage").innerHTML = `<p class="challenge-world">${world.name} · ${activeMission.level}</p>
    <h2 id="challengeTitle">${activeMission.title}</h2>
    <p class="challenge-prompt">${question.prompt}</p>
    <div class="answer-list">${question.options.map((option, index) => `<button class="answer-option" type="button" data-answer="${index}"><span class="answer-key">${String.fromCharCode(65 + index)}</span>${option}</button>`).join("")}</div>`;
  $$(".answer-option").forEach(button => button.addEventListener("click", () => submitAnswer(Number(button.dataset.answer))));
}

function submitAnswer(selected) {
  const question = activeMission.questions[activeQuestion];
  const correct = selected === question.answer;
  if (correct) correctAnswers += 1;
  $$(".answer-option").forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct-answer");
    else if (index === selected) button.classList.add("wrong-answer");
  });
  const feedbackTitle = correct ? "That's the thinking." : "A new clue for next time.";
  $("#challengeStage").insertAdjacentHTML("beforeend", `<div class="feedback-panel ${correct ? "" : "incorrect"}" role="status"><span class="feedback-mark" aria-hidden="true">${correct ? "✓" : "↗"}</span><span><strong>${feedbackTitle}</strong>${question.explanation}</span></div>
    <div class="challenge-next-row"><button class="button button-dark" id="nextQuestion" type="button">${activeQuestion + 1 === activeMission.questions.length ? "See your result" : "Next question"} <span aria-hidden="true">→</span></button></div>`);
  $("#nextQuestion").focus();
  $("#nextQuestion").addEventListener("click", () => {
    activeQuestion += 1;
    if (activeQuestion === activeMission.questions.length) finishChallenge();
    else renderQuestion();
  });
}

function finishChallenge() {
  const mission = activeMission;
  const prior = completedRecord(mission.id);
  const earnedXp = prior ? 0 : mission.xp + correctAnswers * 5;
  let saved = true;
  if (!prior) {
    const day = today();
    if (state.lastCompletedDate !== day) {
      state.streak = state.lastCompletedDate === dayBefore(day) ? state.streak + 1 : 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      state.lastCompletedDate = day;
    }
    state.xp += earnedXp;
    state.completed.push({ id: mission.id, score: correctAnswers, total: mission.questions.length, earnedXp, completedAt: day });
    saved = saveState();
  } else if (correctAnswers > prior.score) {
    prior.score = correctAnswers;
    prior.total = mission.questions.length;
    saved = saveState();
  }
  refreshDashboard();
  const fullMarks = correctAnswers === mission.questions.length;
  $("#challengeProgressLabel").textContent = "MISSION COMPLETE";
  $("#challengeProgressBar").style.width = "100%";
  $("#challengeStage").innerHTML = `<div class="challenge-result">
    <span class="result-symbol" aria-hidden="true">${fullMarks ? "✦" : "↗"}</span>
    <p class="challenge-world">${worldById(mission.world).name} · MISSION COMPLETE</p>
    <h2 id="challengeTitle">${fullMarks ? "Brilliantly figured out." : "You kept thinking. That counts."}</h2>
    <p>You answered ${correctAnswers} of ${mission.questions.length} thoughtfully. ${fullMarks ? "Every answer was right—enjoy that well-earned win." : "The explanations are clues you can take with you. There’s always another chance to practise."}</p>
    <span class="result-score">✦ ${earnedXp ? `+${earnedXp} XP earned` : "Mission revisited"} · ${correctAnswers}/${mission.questions.length}</span>
    <div class="result-actions"><button class="button button-secondary" id="closeResult" type="button">Back to my journey</button><button class="button button-dark" id="anotherMission" type="button">Try another <span aria-hidden="true">↗</span></button></div>
    </div>`;
  $("#closeResult").addEventListener("click", closeChallenge);
  $("#anotherMission").addEventListener("click", () => {
    const next = missions.find(item => item.id !== mission.id && item.world === mission.world) || missions.find(item => item.id !== mission.id);
    if (!next) return closeChallenge();
    activeMission = next;
    activeQuestion = 0;
    correctAnswers = 0;
    renderQuestion();
  });
  $("#closeResult").focus();
  if (!prior && saved) showToast(`Mission complete! ${earnedXp} XP added to your journey.`);
}

function showHelp() {
  $("#challengeModal").hidden = false;
  document.body.style.overflow = "hidden";
  $("#challengeProgressLabel").textContent = "A FRIENDLY NOTE";
  $("#challengeProgressBar").style.width = "100%";
  $("#challengeStage").innerHTML = `<p class="challenge-world">WELCOME TO SMARTMIND</p><h2 id="challengeTitle">A good question can take you anywhere.</h2><p class="challenge-prompt">Choose a world that interests you. Each mission offers a few short questions, helpful explanations, and experience points for practising. Your progress stays in this browser. You can take your time, replay a mission, or simply explore—there’s no penalty for getting an answer wrong.</p><div class="feedback-panel"><span class="feedback-mark" aria-hidden="true">✦</span><span><strong>Understanding is the real win.</strong>Experience points celebrate showing up and learning, not speed or perfection.</span></div><div class="challenge-next-row"><button class="button button-dark" id="helpDone" type="button">Let's explore <span aria-hidden="true">↗</span></button></div>`;
  $(".close-modal").focus();
  $("#helpDone").addEventListener("click", () => {
    $("#challengeModal").hidden = true;
    document.body.style.overflow = "";
    $("#helpButton").focus();
  });
}

function updateSelectedPlan(plan) {
  selectedPlan = plan === "yearly" ? "yearly" : "monthly";
  const isYearly = selectedPlan === "yearly";
  $$("[data-plan]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.plan === selectedPlan)));
  $("#selectedPlanName").textContent = `${selectedPlan} plan`;
  $("#selectedPlanPrice").textContent = isYearly ? "$39.99 / year" : "$4.99 / month";
}

function openPaymentPreview() {
  const isYearly = selectedPlan === "yearly";
  paymentReturnFocus = document.activeElement;
  $("#paymentDialogPlan").textContent = isYearly ? "Example yearly plan · $39.99 / year" : "Example monthly plan · $4.99 / month";
  $("#paymentModal").hidden = false;
  document.body.style.overflow = "hidden";
  $("#closePaymentPreview").focus();
}

function closePaymentPreview() {
  $("#paymentModal").hidden = true;
  document.body.style.overflow = "";
  if (paymentReturnFocus && document.contains(paymentReturnFocus)) paymentReturnFocus.focus();
}

function init() {
  const date = new Date();
  $("#todayDate").textContent = ` ${date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }).toUpperCase()}`;
  refreshDashboard();

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) return setView(viewButton.dataset.view);
    const challengeButton = event.target.closest("[data-start-challenge]");
    if (challengeButton) return startChallenge(challengeButton.dataset.startChallenge);
    const worldCard = event.target.closest("[data-open-world]");
    if (worldCard) return openWorld(worldCard.dataset.openWorld);
    const worldFilter = event.target.closest("[data-world-filter]");
    if (worldFilter) return openWorld(worldFilter.dataset.worldFilter);
  });

  $$(".filter-chip").forEach(button => button.addEventListener("click", () => selectFilter(button.dataset.filter)));
  $$("[data-plan]").forEach(button => button.addEventListener("click", () => updateSelectedPlan(button.dataset.plan)));
  $("#previewCheckout").addEventListener("click", openPaymentPreview);
  $("#closePaymentPreview").addEventListener("click", closePaymentPreview);
  $("#finishPaymentPreview").addEventListener("click", closePaymentPreview);
  $("#paymentModal").addEventListener("click", event => {
    if (event.target === $("#paymentModal")) closePaymentPreview();
  });
  $("#menuToggle").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });
  $("#helpButton").addEventListener("click", showHelp);
  $(".close-modal").addEventListener("click", () => activeMission ? closeChallenge() : closeHelp());
  $("#challengeModal").addEventListener("click", event => {
    if (event.target === $("#challengeModal")) activeMission ? closeChallenge() : closeHelp();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !$("#challengeModal").hidden) activeMission ? closeChallenge() : closeHelp();
    if (event.key === "Escape" && !$("#paymentModal").hidden) closePaymentPreview();
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-world]")) {
      event.preventDefault();
      openWorld(event.target.dataset.openWorld);
    }
  });
}

function closeHelp() {
  $("#challengeModal").hidden = true;
  document.body.style.overflow = "";
  $("#helpButton").focus();
}

init();
