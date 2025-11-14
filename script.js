// --- Challenges ---
// { name: "Name", logo: "images/logo.png", description: "Text.", tasks: ["Task1","Task2","Task3"], duration: 2, difficulty: 2 },
const challenges = [
  { name: "Youth Academy Only", logo: "images/youthacademy.png", description: "Win trophies using only players developed by your own youth academy.", tasks: ["Win the top division of your country","Win a continental trophy","Develop a player to 5-star current ability"], duration: 4, difficulty: 5 },
  { name: "Road to Glory", logo: "images/rtg.png", description: "Start in the lowest available division of a country and climb to the top-tier league.", tasks: ["Achieve promotion","Win the top division of your country","Win a continental trophy"], duration: 5, difficulty: 4 },
  { name: "Local Hero", logo: "images/localhero.png", description: "Win everything with your hometown club.", tasks: ["Win the national league","Win the national cup","Develop a local youth player to a 5-star ability player"], duration: 4, difficulty: 4 },
  { name: "A To Z Journeyman", logo: "images/az.png", description: "Win a trophy with a club beginning with every letter of the alphabet, starting at the bottom and working your way up.", tasks: ["Create a manager with no badges or experience","Find a job at a club whose name begins with the letter A","Win your first trophy","Reach the highest badge with your manager","Win a trophy with a club beginning with the letter: B","Win a trophy with a club beginning with the letter: C","Win a trophy with a club beginning with the letter: D","Win a trophy with a club beginning with the letter: E","Win a trophy with a club beginning with the letter: F","Win a trophy with a club beginning with the letter: G","Win a trophy with a club beginning with the letter: H","Win a trophy with a club beginning with the letter: I","Win a trophy with a club beginning with the letter: J","Win a trophy with a club beginning with the letter: K","Win a trophy with a club beginning with the letter: L","Win a trophy with a club beginning with the letter: M","Win a trophy with a club beginning with the letter: N","Win a trophy with a club beginning with the letter: O","Win a trophy with a club beginning with the letter: P","Win a trophy with a club beginning with the letter: Q","Win a trophy with a club beginning with the letter: R","Win a trophy with a club beginning with the letter: S","Win a trophy with a club beginning with the letter: T","Win a trophy with a club beginning with the letter: U","Win a trophy with a club beginning with the letter: V","Win a trophy with a club beginning with the letter: W","Win a trophy with a club beginning with the letter: X","Win a trophy with a club beginning with the letter: Y","Win a trophy with a club beginning with the letter: Z"], duration: 5, difficulty: 5 },
  { name: "Build A Nation", logo: "images/ban.png", description: "Manage a club in a lower-rated nation and aim to establish it as the number one nation in FM’s national coefficients.", tasks: ["Make your club the best in your country","Enhance the fortunes of your rivals","Improve national coefficient through European competition"], duration: 4, difficulty: 4 },
  { name: "Pentagon", logo: "images/pentagon.png", description: "Win the biggest continental trophy on every continent.", tasks: ["Win CAF Championship (Africa)","Win AFC Championship (Asia)","Win Champions League (Europe)","Win CONCACAF Champions League (North America)","Win Copa Libertadores (South America)"], duration: 4, difficulty: 4 },
  { name: "Youth Only", logo: "images/Youthonly.png", description: "Sign only players under 21 and sell them as they reach a certain age, focusing on developing potential.", tasks: ["Sign only young players under 21","Sell players once they reach an age of 23","Win trophies using a youth-focused squad"], duration: 2, difficulty: 2 },
  { name: "The Mourinho", logo: "images/mourinho.png", description: "Win the Conference League, Europa League, and Champions League in successive seasons with the same club.", tasks: ["Win the Conference League","Win the Europa League the following season","Win the Champions League the season after"], duration: 4, difficulty: 4 },
  { name: "Independent Success (FM26)", logo: "images/independentsuccess.png", description: "Establish Durham as a leading force in the Women’s Super League, achieving promotion and sustained success.", tasks: ["Lead Durham to promotion to the WSL","Establish the team as a top competitor","Achieve long-term success with limited resources"], duration: 3, difficulty: 3 },
  { name: "The Phoenix Club (FM26)", logo: "images/phoenixclub.png", description: "Take Union Brescia from Serie C back to Serie A, restoring a phoenix club to its former glory.", tasks: ["Start at Serie C with Union Brescia","Achieve promotion to Serie B","Achieve promotion to Serie A","Win Serie A","Rebuild the club’s reputation and status"], duration: 4, difficulty: 3 },
  { name: "Grind Hustle (FM26)", logo: "images/grindhustle.png", description: "Manage Triestina in Serie C through financial hardship and point deductions to restore the club to glory.", tasks: ["Start with Triestina in Serie C under heavy point deductions","Navigate financial challenges and avoid relegation","Achieve promotion to Serie B","Achieve promotion to Serie A"], duration: 3, difficulty: 4 },
  { name: "Repeating the Impossible", logo: "images/impossible.png", description: "Take over Mjällby AIF in the Allsvenskan and replicate their historic title-winning season against the odds.", tasks: ["Manage Mjällby in the Allsvenskan","Overcome budget constraints and modest squad","Win the league title against expectations"], duration: 3, difficulty: 4 },
  { name: "Youth Development Obsession", logo: "images/youthobsession.png", description: "Manage Strasbourg in Ligue 1, focusing on youth development and only signing players under 23 to build a future-proof squad.", tasks: ["Sign only players under 23","Develop young talents through first-team and loan experience","Achieve long-term success using youth-focused strategy"], duration: 3, difficulty: 4 },
  { name: "Romance in Paris", logo: "images/romance.png", description: "Manage a Parisian club outside PSG and aim to overthrow PSG while achieving long-term success.", tasks: ["Start with a lower-league Parisian club","Compete with PSG and other top French teams","Achieve long-term success and eventual top-flight domination"], duration: 3, difficulty: 4 },
  { name: "(Red) Bull Fighting", logo: "images/redbull.png", description: "Take SV Austria Salzburg and overthrow Red Bull Salzburg to become the dominant club in your city and achieve domestic success.", tasks: ["Compete against Red Bull Salzburg","Become the dominant club in the city","Aim to surpass Red Bull Salzburg's domestic achievements"], duration: 3, difficulty: 4 },
  { name: "Independent Women's Teams", logo: "images/independentwomens.png", description: "Take a women’s club with no affiliation to a men’s team and push them to national and continental success.", tasks: ["Select a women’s team with no affiliation to a men’s team","Win the national league","Win the national cup","Win a continental competition"], duration: 4, difficulty: 4 },
  { name: "The Dual Dynasty", logo: "images/dualdynasty.png", description: "Manage a club with both men’s and women’s teams, achieving domestic and continental success with both squads.", tasks: ["Choose a club with men’s and women’s teams","Manage one squad to domestic and continental glory","Switch to the other squad and match or surpass previous success"], duration: 4, difficulty: 4 },
  { name: "Neverlusen", logo: "images/neverlusen.png", description: "Emulate Xabi Alonso’s Leverkusen 23/24 and go an entire Bundesliga season unbeaten.", tasks: ["Complete the season without losing a single match","Win the Bundesliga","Win the DFB-Pokal"], duration: 3, difficulty: 5 },
  { name: "The Crazy Gang FA Cup", logo: "images/crazygang.png", description: "Take AFC Wimbledon and aim to win the FA Cup, replicating the historic 1988 success of The Crazy Gang.", tasks: ["Manage AFC Wimbledon","Win the FA Cup"], duration: 3, difficulty: 4 },
  { name: "Capital Club Champions", logo: "images/capitalclub.png", description: "Manage a club from a capital city that has never won the Champions League and lead them to European glory.", tasks: ["Choose a club from a capital city that has never won the Champions League","Win the Champions League with that club"], duration: 4, difficulty: 5 },
  { name: "Old But Gold", logo: "images/oldbutgold.png", description: "Manage a club while only signing players aged 30 or older, balancing short-term success and squad rotation.", tasks: ["Do not sign players under 30","Maintain squad performance despite aging players","Win the national league","Win the national cup"], duration: 3, difficulty: 4 },
  { name: "Bottom At Christmas", logo: "images/christmas.png", description: "Take over the team bottom of any league at Christmas and avoid relegation, aiming eventually to make them league winners.", tasks: ["Take over the bottom team on Christmas Day","Use the January transfer window wisely","Avoid relegation and improve team performance"], duration: 3, difficulty: 4 },
  { name: "One Love", logo: "images/love.png", description: "Stay with one club for your entire career and build a true dynasty.", tasks: ["Manage the same club for at least 20 seasons","Win all national titles","Win a continental trophy"], duration: 5, difficulty: 4 },
  { name: "European Tour", logo: "images/eurotour.png", description: "Prove your managerial skills by conquering all major European leagues.", tasks: ["Win the league in England","Win the league in Spain","Win the league in Germany","Win the league in Italy","Win the league in France"], duration: 5, difficulty: 5 },
  { name: "Stadium Legacy", logo: "images/stadiumlegacy.png", description: "Become such a legend that the club names its stadium after you.", tasks: ["Reach club legend status (stadium renamed after you)"], duration: 4, difficulty: 4 },
  { name: "Underdog Glory", logo: "images/underdog.png", description: "Take a small nation or outsider club to international success.", tasks: ["Pick a small league or country (e.g. Iceland, Georgia, Luxembourg)","Develop young talents into international players","Win domestic titles","Qualify for continental competitions"], duration: 4, difficulty: 4 },
  { name: "Globetrotter", logo: "images/globetrotter.png", description: "Become a true globetrotter by managing only abroad.", tasks: ["Start unemployed and only accept foreign jobs","Win titles in 10 different countries","Build international reputation and respect"], duration: 4, difficulty: 3 },
  { name: "Retro Legend", logo: "images/retrolegend.png", description: "Revive a fallen giant from its golden era back to glory.", tasks: ["Choose a historic fallen club (e.g. Parma, Leeds, Auxerre)","Return the club to the top division","Win domestic trophies","Win an international trophy"], duration: 4, difficulty: 3 },
  { name: "Defensive Wall", logo: "images/wall.png", description: "Build the strongest defense in Europe and dominate through discipline.", tasks: ["Concede fewer than 15 league goals in one season","Keep at least 20 clean sheets in one season","Win the league with a defense-first philosophy"], duration: 3, difficulty: 3 },
  { name: "One Nation Club", logo: "images/onenation.png", description: "Show national pride by using only players from one country.", tasks: ["Pick any league of your choice","Sign only players of a single nationality","Win the league with this unified squad"], duration: 3, difficulty: 3 },
  { name: "Speed Demons", logo: "images/speed.png", description: "Assemble the fastest team in Europe and win through pace and power.", tasks: ["Sign players with at least 15 in pace and acceleration","Build a counter-attacking or wing-based tactic","Win national titles with a fast, dynamic team"], duration: 3, difficulty: 2 },
  { name: "Ultimate Redemption", logo: "images/redemption.png", description: "Manage your favorite club’s rival and lead them to glory despite fan hatred.", tasks: ["Manage your favorite club’s rival","Win major titles and improve fan opinion","Achieve long-term success and stability"], duration: 3, difficulty: 4 },
  { name: "Homegrown Captain", logo: "images/homecaptain.png", description: "Make a homegrown academy player your captain, win the league with him as player of the season.", tasks: ["Promote a youth academy player to the first team","Assign him the captain's armband","Win the league with him as captain and player of the season"], duration: 2, difficulty: 2 },
  { name: "Super Sub", logo: "images/supersub.png", description: "Score at least 10 league goals in one season using substitutes only.", tasks: ["Create an effective bench rotation","Reach 10 goals from substitutes in a single season"], duration: 2, difficulty: 1 },
  { name: "Guess Who´s Back?", logo: "images/back.png", description: "Get promoted by winning the league title with a team that was relegated last season.", tasks: ["Choose a club that was relegated last season","Rebuild the squad for immediate success","Win the league title"], duration: 2, difficulty: 2 },
  { name: "Fan Favorite", logo: "images/fanfav.png", description: "Re-sign a beloved former club player and make him an important part of your season.", tasks: ["Sign a popular former player of the club","Integrate him into the first team","Achieve at least 5 goal contributions with him"], duration: 1, difficulty: 1 },
  { name: "Clean Sheet Starter", logo: "images/starter.png", description: "Begin the season with a strong defensive record by keeping multiple clean sheets early on.", tasks: ["Play the first 5 league matches","Keep at least 3 clean sheets"], duration: 1, difficulty: 2 },
  { name: "Manchester United – Return to Glory", logo: "images/manu.png", description: "Lead Manchester United back to domestic and European dominance.", tasks: ["Win the Premier League within 3 seasons","Win the Champions League within 5 seasons"], duration: 4, difficulty: 3 },
  { name: "FC Barcelona – La Masia Revival", logo: "images/barca.png", description: "Rely solely on La Masia talents to bring Barcelona back to the top.", tasks: ["Start the season without transfers","Use only La Masia academy players instead of transfers","Win LaLiga"], duration: 3, difficulty: 3 },
  { name: "AC Milan – Back to European Dominance", logo: "images/milan.png", description: "Restore AC Milan to top domestic and European success.", tasks: ["Return Milan to the top 4 in Serie A in year 1","Win Serie A by year 3","Win a European title by year 5"], duration: 4, difficulty: 4 },
  { name: "Borussia Dortmund – Beat Bayern", logo: "images/dortmund.png", description: "Overtake Bayern and establish Dortmund as a Bundesliga powerhouse.", tasks: ["Win the Bundesliga at least once","Develop a top wonderkid into a world star","Reach a Champions League semi-final"], duration: 4, difficulty: 3 },
  { name: "Ajax Amsterdam – Total Football Legacy", logo: "images/ajax.png", description: "Bring Ajax back to its glory.", tasks: ["Win the Eredivisie 3 times in a row","Promote 5 Ajax talents to their national teams"], duration: 5, difficulty: 4 },
  { name: "Leeds United – Premier League Return", logo: "images/leeds.png", description: "Return Leeds to the Premier League and stabilize the club at the top level.", tasks: ["Gain promotion within 2 seasons","Finish in the top 10 of the Premier League by year 3","Win a derby against Manchester United"], duration: 4, difficulty: 3 },
  { name: "Olympique Marseille – Break PSG’s Reign", logo: "images/marseille.png", description: "Challenge PSG’s dominance and achieve European success with Marseille.", tasks: ["Win Ligue 1 against PSG","Build a team without expensive stars","Reach a Champions League quarter-final"], duration: 4, difficulty: 3 },
  { name: "FC Schalke 04 – 'Wir leben dich' Rebuild", logo: "images/schalke.png", description: "Rebuild Schalke into a stable and competitive club.", tasks: ["Get promoted as quickly as possible","Stabilize finances without heavy debt","Return to European competition within 5 years"], duration: 5, difficulty: 3 },
  { name: "Hertha BSC – Hauptstadt Revival", logo: "images/hertha.png", description: "Rebuild Hertha BSC into a stable and competitive Bundesliga club, returning the pride to Berlin.", tasks: ["Achieve promotion to the Bundesliga","Stabilize club finances without overspending","Qualify for European competition within 5 seasons"], duration: 4, difficulty: 3 }
];

// --- State ---
let activeChallenge = null;
let completedChallenges = [];
let displayedChallenges = [];

// --- HTML Container ---
const container = document.getElementById("challenge-container");
const activeContainer = document.getElementById("active-challenge-container");

// Completed Section
const completedSection = document.createElement("section");
completedSection.id = "completed-section";
completedSection.innerHTML = `<h2>Completed Challenges</h2><div id="completed-container"></div>`;
document.body.appendChild(completedSection);
const completedContainer = document.getElementById("completed-container");

// --- Utility: rendered Stars ---
function renderStars(count) {
  const filled = '★'.repeat(count).split('').map(s=>`<span class="filled">${s}</span>`).join('');
  const empty = '☆'.repeat(5-count).split('').map(s=>`<span class="empty">${s}</span>`).join('');
  return filled + empty;
}

// --- Random Challenges ---
function getRandomChallenges() {
  const available = challenges.filter(c=>!completedChallenges.includes(c));
  const shuffled = available.sort(()=>0.5 - Math.random());
  displayedChallenges = shuffled.slice(0,3);
}

// --- Render 3 Challenges ---
function renderChallenges() {
  container.innerHTML = "";
  displayedChallenges.forEach(challenge=>{
    const card = document.createElement("div");
    card.classList.add("challenge-card");
    card.innerHTML = `
      <img src="${challenge.logo}" alt="${challenge.name} logo" class="challenge-logo">
      <h2>${challenge.name}</h2>
      <p class="description">${challenge.description}</p>
      <ul class="tasks">${challenge.tasks.map(t=>`<li>${t}</li>`).join("")}</ul>
      <div class="star-rating"><span>Duration:</span><span class="stars">${renderStars(challenge.duration)}</span></div>
      <div class="star-rating"><span>Difficulty:</span><span class="stars">${renderStars(challenge.difficulty)}</span></div>
      <button class="choose-btn">Choose</button>
    `;
    card.querySelector(".choose-btn").addEventListener("click", ()=>setActiveChallenge(challenge));
    container.appendChild(card);
  });
}

// --- Set Active Challenge ---
function setActiveChallenge(challenge) {
  activeChallenge = challenge;
  displayedChallenges = [];
  container.innerHTML = "";

  activeContainer.innerHTML = `
  <div class="active-header">
    <button class="remove-active-btn" title="Remove Challenge">X</button>
    <h3>${challenge.name}</h3>
  </div>
  <img src="${challenge.logo}" alt="${challenge.name}">
  <p>${challenge.description}</p>
  <ul>
    ${challenge.tasks.map((t,i)=>`<li><label><input type="checkbox" id="task-${i}">${t}</label></li>`).join("")}
  </ul>
  <div class="star-rating"><span>Duration:</span><span class="stars">${renderStars(challenge.duration)}</span></div>
  <div class="star-rating"><span>Difficulty:</span><span class="stars">${renderStars(challenge.difficulty)}</span></div>
  <button id="completed-btn">Completed</button>
`;

  if(challenge.tasksCompleted){
    const checkboxes = activeContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb,i)=>cb.checked = challenge.tasksCompleted[i]||false);
  }

  // Completed Button
  document.getElementById("completed-btn").addEventListener("click", completeActiveChallenge);

  // Remove Button
  activeContainer.querySelector(".remove-active-btn").addEventListener("click", ()=>{
    activeChallenge = null;
    activeContainer.innerHTML = "No challenge selected.";
    getRandomChallenges();
    renderChallenges();
  });
}

// --- Complete Active Challenge ---
function completeActiveChallenge() {
  if (!activeChallenge) return;
  completedChallenges.push(activeChallenge);
  activeChallenge = null;
  activeContainer.innerHTML = "No challenge selected.";

  renderCompletedChallenges();
  getRandomChallenges();
  renderChallenges();
}

// --- Render Completed ---
// --- Render Completed ---
function renderCompletedChallenges() {
  completedContainer.innerHTML = "";

  if(completedChallenges.length === 0) {
    completedContainer.innerHTML = "<p style='text-align:center;color:#ccc;'>No completed challenges.</p>";
    return;
  }

  completedChallenges.forEach((challenge, index)=>{
    const item = document.createElement("div");
    item.classList.add("completed-item");
    item.innerHTML = `
      <img src="images/check.png" alt="Completed" class="check-icon">
      <span class="completed-name">${challenge.name}</span>
      <button class="remove-btn" title="Remove Challenge">X</button>
    `;

    // Entfernen-Funktion
    item.querySelector(".remove-btn").addEventListener("click", ()=>{
      completedChallenges.splice(index, 1);
      renderCompletedChallenges();
    });

    completedContainer.appendChild(item);
  });
}

// --- Re-generate Button ---
document.getElementById("regenerate-btn").addEventListener("click", ()=>{
  getRandomChallenges();
  renderChallenges();
});

// --- Export Active Challenge ---
function getActiveChallengeExport(){
  if(!activeChallenge) return null;
  const checkboxes = activeContainer.querySelectorAll('input[type="checkbox"]');
  const tasksCompleted = Array.from(checkboxes).map(cb=>cb.checked);
  return {...activeChallenge, tasksCompleted};
}

// --- Export JSON ---
document.getElementById("export-btn").addEventListener("click", ()=>{
  const data = {
    activeChallenge: getActiveChallengeExport(),
    completedChallenges,
    displayedChallenges
  };
  const blob = new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "challenges.json";
  a.click();
  URL.revokeObjectURL(url);
});

// --- Import JSON ---
const fileInput = document.getElementById("file-input");
document.getElementById("import-btn").addEventListener("click", ()=>fileInput.click());
fileInput.addEventListener("change",(e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const data = JSON.parse(reader.result);

      activeChallenge = data.activeChallenge || null;
      completedChallenges = data.completedChallenges || [];
      displayedChallenges = data.displayedChallenges || [];

      renderCompletedChallenges();

      if(activeChallenge) setActiveChallenge(activeChallenge);
      else if(displayedChallenges.length>0) renderChallenges();
      else { getRandomChallenges(); renderChallenges(); }

    } catch(e){ alert("Invalid JSON file."); }
  };
  reader.readAsText(file);
});

getRandomChallenges();
renderChallenges();
renderCompletedChallenges();
