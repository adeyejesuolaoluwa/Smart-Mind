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
    id: "pattern-pilot", world: "logic", subject: "Logic", skill: "Pattern recognition", title: "The pattern pilot", hint: "Compare how each number changes with the number before it.", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Spot what changes, then use the rule to find what comes next.",
    questions: [
      { prompt: "A sequence begins 3, 5, 9, 17… What comes next?", options: ["25", "31", "33", "34"], answer: 2, explanation: "The jumps double each time: +2, +4, +8, so the next jump is +16. That makes 33." },
      { prompt: "A sequence goes 2, 6, 18… What is the next number?", options: ["36", "48", "54", "60"], answer: 2, explanation: "Each term is multiplied by 3: 2 × 3 = 6, 6 × 3 = 18, and 18 × 3 = 54." },
      { prompt: "A shape pattern repeats circle, square, triangle, circle, square… What comes next?", options: ["Circle", "Square", "Triangle", "Star"], answer: 2, explanation: "The three-shape cycle starts again after circle and square, so the next shape is a triangle." }
    ]
  },
  {
    id: "word-detective", world: "academy", subject: "Vocabulary", skill: "Vocabulary", title: "Word detective", hint: "Use the sentence clues and what you already know about the word.", level: "WARM UP", time: "3 MIN", xp: 20,
    description: "Follow the clues in a sentence and uncover the best-fit word.",
    questions: [
      { prompt: "If something is “fragile,” how should you handle it?", options: ["With care", "In a hurry", "Without looking", "Only outdoors"], answer: 0, explanation: "Fragile means easily broken or damaged, so handling it with care is sensible." },
      { prompt: "Which word is closest in meaning to “curious”?", options: ["Sleepy", "Eager to know", "Already certain", "In a hurry"], answer: 1, explanation: "A curious person is interested and eager to learn or find something out." },
      { prompt: "Mina checked the forecast before leaving. What does “forecast” mean here?", options: ["A map of the area", "A prediction of the weather", "A list of directions", "A kind of jacket"], answer: 1, explanation: "A forecast is a prediction about what conditions, such as the weather, may be like." }
    ]
  },
  {
    id: "market-maker", world: "business", subject: "Business & finance", skill: "Business maths", title: "Market maker", hint: "Separate the money coming in from the costs going out.", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Give a tiny weekend stall a smart, sustainable start.",
    questions: [
      { prompt: "You sell 8 notebooks for $5 each. What is your total sales income before costs?", options: ["$13", "$35", "$40", "$45"], answer: 2, explanation: "Sales income is price × number sold: $5 × 8 = $40. Costs have not been taken away yet." },
      { prompt: "Your $40 income came from 8 notebooks. Materials cost $16 altogether. What is the profit?", options: ["$16", "$24", "$32", "$56"], answer: 1, explanation: "Profit is income minus costs: $40 − $16 = $24." },
      { prompt: "Only a few notebooks sold. What is a useful next step before ordering a lot more?", options: ["Ask customers what they want", "Raise every price immediately", "Buy as much stock as possible", "Stop tracking sales"], answer: 0, explanation: "Customer feedback is a low-risk way to learn what people value before spending more." }
    ]
  },
  {
    id: "code-courier", world: "innovation", subject: "Coding", skill: "Computational thinking", title: "The code courier", hint: "Translate each instruction into one small step, then count.", level: "THINKER", time: "4 MIN", xp: 25,
    description: "Trace simple instructions and find a clear route to the goal.",
    questions: [
      { prompt: "A robot starts at 1 on a number line. It repeats “move forward 2” three times. Where does it land?", options: ["5", "6", "7", "8"], answer: 2, explanation: "Three moves of 2 spaces cover 6 spaces. Starting at 1, the robot lands on 7." },
      { prompt: "Which instruction set reaches 6 from 0 in exactly three equal jumps?", options: ["Move 1, three times", "Move 2, three times", "Move 3, three times", "Move 4, three times"], answer: 1, explanation: "Three jumps of 2 make 2 + 2 + 2 = 6." },
      { prompt: "A program checks “is the number greater than 10?” for the number 8. Which path should it take?", options: ["Yes, greater than 10", "No, not greater than 10", "Both paths", "Neither path exists"], answer: 1, explanation: "Eight is less than 10, so the condition is false and the “no” path is the correct one." }
    ]
  },
  {
    id: "everyday-budget", world: "real-life", subject: "Financial literacy", skill: "Budgeting", title: "Everyday budget", hint: "Work out the total planned costs before subtracting them from your money.", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Plan a small outing while keeping a little money in reserve.",
    questions: [
      { prompt: "You have $20. A ticket costs $8 and lunch costs $6. How much remains?", options: ["$4", "$5", "$6", "$8"], answer: 2, explanation: "$8 + $6 = $14 spent. $20 − $14 = $6 remaining." },
      { prompt: "You want to save $3 from the $6 that remains. What is a sensible maximum for a snack?", options: ["$2", "$3", "$4", "$6"], answer: 1, explanation: "Spending $3 leaves the other $3 untouched for your savings goal." },
      { prompt: "The bus is delayed and you might miss the start. What is a helpful first move?", options: ["Check another safe route and tell your group", "Run across traffic", "Ignore the delay", "Spend your saved money immediately"], answer: 0, explanation: "Checking a safe alternative and communicating helps you adapt without taking unnecessary risks." }
    ]
  },
  {
    id: "mastery-mix", world: "mastery", subject: "Study skills", skill: "Reflection and checking", title: "Mastery mix", hint: "Check what the question asks and whether your steps support your answer.", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Connect a few ideas and show how your thinking has grown.",
    questions: [
      { prompt: "Which fraction is equal to one half?", options: ["2/3", "3/6", "4/6", "5/8"], answer: 1, explanation: "Three out of six pieces is the same proportion as one out of two: 3/6 simplifies to 1/2." },
      { prompt: "A good explanation of a solution should usually include…", options: ["Only the final number", "The steps and why they work", "A faster guess", "As many new words as possible"], answer: 1, explanation: "Showing the steps and the reasoning makes a solution easier to understand and check." },
      { prompt: "You notice your answer does not fit the question. What is a strong next step?", options: ["Check your assumptions and try another route", "Erase the question", "Assume the answer is right", "Stop asking questions"], answer: 0, explanation: "Checking assumptions and trying another approach is a thoughtful way to learn from a mismatch." }
    ]
  },
  {
    id: "multiplication-mission", world: "academy", subject: "Mathematics", skill: "Multiplication", title: "The multiplication machine", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Use equal groups and place value to make multiplication make sense.",
    questions: [
      { prompt: "A garden has 4 rows with 6 plants in each row. How many plants are there?", options: ["10", "20", "24", "46"], answer: 2, explanation: "Four equal groups of six make 4 × 6 = 24 plants.", hint: "Think of four groups and count six in each." },
      { prompt: "What is 23 × 3?", options: ["26", "69", "66", "93"], answer: 1, explanation: "Multiply tens and ones: 20 × 3 = 60 and 3 × 3 = 9. Together that is 69.", hint: "Split 23 into 20 and 3 before multiplying." },
      { prompt: "A pack holds 8 cards. How many cards are in 5 packs?", options: ["13", "35", "40", "58"], answer: 2, explanation: "Five groups of eight make 5 × 8 = 40 cards.", hint: "Add eight five times, or use 5 × 8." }
    ]
  },
  {
    id: "fraction-finder", world: "academy", subject: "Mathematics", skill: "Fractions", title: "The fraction finder", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Compare parts of a whole and find equivalent fractions.",
    questions: [
      { prompt: "A pizza is cut into 8 equal slices. You eat 2. What fraction did you eat?", options: ["2/8", "2/6", "6/8", "8/2"], answer: 0, explanation: "Two of the eight equal slices were eaten, so the fraction is 2/8.", hint: "The numerator is slices eaten; the denominator is all slices." },
      { prompt: "Which fraction is equivalent to 3/4?", options: ["4/6", "6/8", "3/8", "8/6"], answer: 1, explanation: "Multiplying both parts of 3/4 by 2 gives 6/8, so the fractions are equivalent.", hint: "Multiply the top and bottom of 3/4 by the same number." },
      { prompt: "Which is larger: 1/3 or 1/2?", options: ["1/3", "1/2", "They are equal", "It depends on the color"], answer: 1, explanation: "When a whole is split into fewer equal parts, each part is larger. One half is larger than one third.", hint: "Imagine the same-sized whole split into two parts and then three." }
    ]
  },
  {
    id: "reading-between-lines", world: "academy", subject: "Reading", skill: "Reading inference", title: "Read between the lines", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Use details in a short passage to make a careful inference.",
    questions: [
      { prompt: "Kai grabbed an umbrella, zipped his coat, and looked at the dark clouds. What might Kai expect?", options: ["Rain", "A birthday party", "Bright sunshine", "A new recipe"], answer: 0, explanation: "The umbrella, coat, and dark clouds are clues that Kai expects rainy weather.", hint: "Look at the objects Kai chooses and the sky described." },
      { prompt: "A story says, “The lights flickered, then the room went quiet.” What can you reasonably infer?", options: ["The power may have gone out", "The room became larger", "Everyone went swimming", "The sun got closer"], answer: 0, explanation: "Flickering lights followed by darkness are clues that the power may have failed.", hint: "Connect the flickering lights with what happened immediately after." },
      { prompt: "Leah practised her speech each day. At the event, she spoke clearly and smiled. Which conclusion fits the clues?", options: ["Practice may have helped her feel prepared", "She forgot there was an event", "The audience wrote her speech", "She never spoke"], answer: 0, explanation: "Daily practice is a reasonable explanation for feeling prepared and speaking clearly.", hint: "Use both the practice detail and what happened at the event." }
    ]
  },
  {
    id: "science-ecosystem", world: "academy", subject: "Science", skill: "Ecosystems", title: "Ecosystem detectives", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Follow the connections between plants, animals, and their habitat.",
    questions: [
      { prompt: "In a simple food chain, grass → rabbit → fox. Which living thing gets energy directly from the grass?", options: ["Fox", "Rabbit", "Cloud", "Rock"], answer: 1, explanation: "The rabbit eats the grass, so it gets energy directly from the producer.", hint: "Follow the arrow from the grass to the next organism." },
      { prompt: "What is one important role of plants in many ecosystems?", options: ["They make food using sunlight", "They turn rocks into animals", "They remove all water", "They stop every animal moving"], answer: 0, explanation: "Many plants use sunlight to make food, forming the base of a food chain.", hint: "Think about what plants use sunlight for." },
      { prompt: "If a pond loses much of its plant life, what could happen to animals that rely on those plants for food or shelter?", options: ["Some may have fewer resources", "They will all become plants", "Nothing in the pond can change", "The pond will become a mountain"], answer: 0, explanation: "Living things are connected; fewer plants can mean less food or shelter for some animals.", hint: "Consider the plants' roles as food and shelter." }
    ]
  },
  {
    id: "science-evidence", world: "innovation", subject: "Science", skill: "Evidence and observation", title: "Clues in the lab", level: "THINKER", time: "4 MIN", xp: 25,
    description: "Separate an observation from a guess and plan a fair test.",
    questions: [
      { prompt: "A student sees water droplets on the outside of a cold glass. Which is an observation?", options: ["The glass feels sad", "Water droplets are on the glass", "It will rain tomorrow", "The drink tastes sweet"], answer: 1, explanation: "An observation describes something directly seen, measured, heard, or felt.", hint: "Choose the statement someone could directly see." },
      { prompt: "Two plants get different amounts of sunlight. To compare growth fairly, what else should stay the same?", options: ["The amount of water and soil", "The question being asked", "The final result", "The length of every leaf"], answer: 0, explanation: "Keep other conditions, such as water and soil, consistent while testing sunlight.", hint: "Change one factor and keep other conditions consistent." },
      { prompt: "A class repeats a measurement and gets similar results. Why can repeating help?", options: ["It helps check whether a result is consistent", "It guarantees every idea is true", "It removes the need to record data", "It changes the question"], answer: 0, explanation: "Repeated measurements can help reveal whether results are consistent or were a one-off.", hint: "Think about how repeated checks help build confidence in a measurement." }
    ]
  },
  {
    id: "map-and-compass", world: "academy", subject: "Geography", skill: "Map reading", title: "Map and compass", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Read a simple map grid and use compass directions.",
    questions: [
      { prompt: "On a map, north is at the top. Which direction is to the right?", options: ["West", "South", "East", "North"], answer: 2, explanation: "On a standard map, east is to the right when north points upward.", hint: "Picture the compass directions with north at the top." },
      { prompt: "A library is at grid B2 and a park is at B3. What changed between the locations?", options: ["The column only", "The row only", "Both the row and column", "Neither"], answer: 1, explanation: "The letter stays B while the number changes from 2 to 3, so only the row changed.", hint: "Compare the letter and number separately." },
      { prompt: "A trail goes east and then turns south. Which compass direction does it go after the turn?", options: ["North", "East", "South", "West"], answer: 2, explanation: "After turning, the trail travels south. On a north-up map, south is shown at the bottom.", hint: "A north-up map places south at the bottom." }
    ]
  },
  {
    id: "money-smart", world: "real-life", subject: "Financial literacy", skill: "Planning and saving", title: "Make your money plan", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Compare everyday choices and make a plan that fits a goal.",
    questions: [
      { prompt: "You have $30 and want to save $10. What is the most you can plan to spend?", options: ["$10", "$20", "$30", "$40"], answer: 1, explanation: "Keep the $10 savings goal aside: $30 − $10 leaves $20 for planned spending.", hint: "Set your savings aside first, then subtract it from the total." },
      { prompt: "A notebook costs $4. How much do 3 notebooks cost before tax?", options: ["$7", "$8", "$12", "$34"], answer: 2, explanation: "Three notebooks at $4 each cost 3 × $4 = $12.", hint: "Multiply the price of one notebook by the number bought." },
      { prompt: "You want a new game but have not checked your budget yet. What is a useful next step?", options: ["Compare the cost with your plan and priorities", "Borrow without asking", "Spend money set aside for a bill", "Assume the price does not matter"], answer: 0, explanation: "Checking a cost against your budget and priorities helps you make an informed choice.", hint: "Consider how the purchase fits your existing plan." }
    ]
  },
  {
    id: "clear-communication", world: "real-life", subject: "Communication", skill: "Clear communication", title: "Say it so it lands", level: "WARM UP", time: "4 MIN", xp: 20,
    description: "Practise listening, asking clear questions, and working through a mix-up.",
    questions: [
      { prompt: "A teammate looks unsure about a task. What is a helpful first response?", options: ["Ask what part they would like to go over", "Tell them to stop asking", "Do the task without telling them", "Change the subject"], answer: 0, explanation: "A specific, open question invites the teammate to explain what support would help.", hint: "Choose the response that invites the other person to share." },
      { prompt: "You disagree about a group plan. Which approach is most constructive?", options: ["Explain your reason and listen to theirs", "Interrupt until they give in", "Leave without saying anything", "Make a decision for everyone"], answer: 0, explanation: "Sharing reasons and listening makes it easier to understand the different viewpoints.", hint: "Look for a choice that includes both speaking and listening." },
      { prompt: "You are not sure what a deadline means. What can you ask?", options: ["Could you clarify when this is due?", "Why is time a thing?", "Can I ignore the task?", "Do you like deadlines?"], answer: 0, explanation: "A clear question names the specific information you need: when the task is due.", hint: "Ask directly for the missing information." }
    ]
  },
  {
    id: "debug-the-route", world: "innovation", subject: "Coding", skill: "Debugging", title: "Debug the route", level: "THINKER", time: "5 MIN", xp: 25,
    description: "Inspect instructions in order and find a small, testable fix.",
    questions: [
      { prompt: "A robot needs to go 3 steps north. Its instructions say north, north, east. Which instruction should be changed?", options: ["The first north", "The second north", "East should become north", "No instruction"], answer: 2, explanation: "The two north steps are correct; replace the east step with north for a total of three.", hint: "Count the correct moves, then compare the final move." },
      { prompt: "A program should show a message when a score is 10 or more. Which condition fits?", options: ["score < 10", "score = 0", "score ≥ 10", "score is a word"], answer: 2, explanation: "The condition score ≥ 10 includes scores equal to 10 and greater than 10.", hint: "Look for the condition that includes both 10 and larger numbers." },
      { prompt: "A small code change causes an unexpected result. What is a useful debugging step?", options: ["Check the changed part and test one fix", "Rewrite everything without checking", "Delete the expected result", "Assume the computer is guessing"], answer: 0, explanation: "Checking the changed part and testing one adjustment at a time helps identify the cause.", hint: "A small, controlled change makes cause and effect easier to see." }
    ]
  },
  {
        id: "shop-receipt", world: "academy", subject: "Mathematics", skill: "Everyday arithmetic", title: "Check the shop receipt", level: "WARM UP", time: "4 MIN", xp: 20,
        description: "Use multiplication, subtraction, and percentages in a simple shopping scenario.",
        questions: [
          { type: "number", prompt: "Three notebooks cost $4 each. What is their total cost?", answer: 12, explanation: "Three notebooks at $4 each cost 3 × 4 = $12.", hint: "Multiply the price of one notebook by three." },
          { type: "number", prompt: "You pay with $20 for the $12 notebooks. How much change should you get?", answer: 8, explanation: "$20 − $12 = $8 change.", hint: "Subtract the purchase total from the amount paid." },
          { prompt: "A $30 backpack is discounted by 10%. What is the discount amount?", options: ["$1", "$3", "$10", "$20"], answer: 1, explanation: "Ten percent is one tenth. One tenth of $30 is $3.", hint: "Find one tenth of $30." }
        ]
      },
      {
        id: "study-plan-sequence", world: "mastery", subject: "Study skills", skill: "Planning and sequencing", title: "Build a study plan", level: "THINKER", time: "5 MIN", xp: 25,
        description: "Arrange a few study steps in an order that supports remembering.",
        questions: [
          { type: "order", prompt: "Put these study steps in a useful order: first understand the goal, then try the work, then check what you learned.", items: ["Check and reflect", "Try a short practice", "Read the goal and example"], answerOrder: ["Read the goal and example", "Try a short practice", "Check and reflect"], explanation: "Understand the goal first, practise it, and then reflect on what worked or needs another try.", hint: "Start by understanding the goal; reflection comes after practice." },
          { prompt: "After practising, you notice one step is still confusing. What is a useful next move?", options: ["Review that step and try a similar example", "Pretend it is clear", "Stop practising forever", "Skip every related lesson"], answer: 0, explanation: "Revisiting the unclear step and trying another example gives you a focused chance to understand it.", hint: "Choose a small next step that targets the part that felt unclear." },
          { prompt: "Why can spacing practice across a few days be useful?", options: ["It gives you chances to revisit and recall ideas", "It makes every task disappear", "It guarantees a perfect score", "It removes the need to understand"], answer: 0, explanation: "Returning to ideas over time gives you more chances to recall and strengthen your understanding.", hint: "Think about what happens when you revisit an idea after a break." }
        ]
      },
      {
        id: "weather-watchers", world: "academy", subject: "Science", skill: "Weather and data", title: "Weather watchers", level: "WARM UP", time: "4 MIN", xp: 20,
        description: "Read a small set of measurements and distinguish weather clues.",
        questions: [
          { prompt: "A thermometer reads 5°C in the morning and 12°C in the afternoon. What happened to the temperature?", options: ["It rose by 7°C", "It fell by 7°C", "It stayed the same", "It became 17°C"], answer: 0, explanation: "12 − 5 = 7, so the temperature rose by 7°C.", hint: "Compare the afternoon reading to the morning reading." },
          { prompt: "Which tool is commonly used to measure rainfall?", options: ["Rain gauge", "Compass", "Ruler for maps", "Stopwatch"], answer: 0, explanation: "A rain gauge collects and measures how much rain has fallen.", hint: "Choose the tool designed to collect rain." },
          { prompt: "A weather report predicts a 90% chance of rain. What is a sensible plan?", options: ["Bring rain protection and check conditions", "Assume the report is a guarantee", "Ignore all weather information", "Wear only a swimsuit"], answer: 0, explanation: "A high chance of rain is useful evidence for planning, while a forecast is still a prediction.", hint: "Use the forecast as helpful evidence, not a certainty." }
        ]
      },
      {
        id: "map-grid-mission", world: "academy", subject: "Geography", skill: "Map grids", title: "Find it on the map", level: "THINKER", time: "4 MIN", xp: 25,
        description: "Use a simple grid reference to locate places and plan a route.",
        questions: [
          { prompt: "On a grid, the museum is at C2 and the bridge is at C4. Which coordinate changed?", options: ["The letter only", "The number only", "Both", "Neither"], answer: 1, explanation: "The letter remains C while the number changes from 2 to 4.", hint: "Compare the letter and number separately." },
          { prompt: "On a north-up map, a route moves from a point to the location directly above it. Which direction is that?", options: ["South", "East", "North", "West"], answer: 2, explanation: "North is at the top of a standard north-up map.", hint: "North is at the top of a north-up map." },
          { prompt: "A park is west of a school. Which place is farther east?", options: ["The park", "The school", "They are the same place", "The map cannot show direction"], answer: 1, explanation: "If the park is west of the school, the school is farther east.", hint: "West is left and east is right on a standard map." }
        ]
      },
      {
        id: "customer-choices", world: "business", subject: "Business & finance", skill: "Customer research", title: "Listen to your customers", level: "THINKER", time: "5 MIN", xp: 25,
        description: "Use customer feedback to make a small business decision thoughtfully.",
        questions: [
          { prompt: "Several customers ask whether your product comes in a smaller size. What is a useful next step?", options: ["Ask a few more customers and compare the costs", "Order hundreds immediately", "Ignore every comment", "Change the price without checking"], answer: 0, explanation: "Gathering a little more feedback and checking costs helps test the idea before making a big commitment.", hint: "Balance customer interest with the cost of making a change." },
          { prompt: "A survey gets 8 “yes” answers and 2 “no” answers. How many people answered?", options: ["6", "8", "10", "16"], answer: 2, explanation: "Eight plus two equals ten total responses.", hint: "Add the yes and no responses." },
          { prompt: "Why might one short survey not represent every customer?", options: ["It may include only a small group of people", "Surveys always contain no information", "Every customer must answer identically", "A survey changes the product automatically"], answer: 0, explanation: "A small group may not reflect the range of customers, so results are clues rather than certainty.", hint: "Think about how many people—and which people—responded." }
        ]
  }
];

const interestOptions = [
  { id: "mathematics", label: "Mathematics", subjects: ["Mathematics"] },
  { id: "reading", label: "Reading & vocabulary", subjects: ["Reading", "Vocabulary"] },
  { id: "science", label: "Science", subjects: ["Science"] },
  { id: "geography", label: "Geography", subjects: ["Geography"] },
  { id: "finance", label: "Money & business", subjects: ["Financial literacy", "Business & finance"] },
  { id: "logic", label: "Logic puzzles", subjects: ["Logic"] },
  { id: "coding", label: "Coding & technology", subjects: ["Coding"] },
  { id: "communication", label: "Communication & life skills", subjects: ["Communication", "Study skills"] }
];

const subjectPaths = [
  { id: "Mathematics", name: "Mathematics", icon: "＋", subjects: ["Mathematics"], description: "Build number sense step by step." },
  { id: "Reading", name: "Reading & words", icon: "Aa", subjects: ["Reading", "Vocabulary"], description: "Grow vocabulary and read for meaning." },
  { id: "Science", name: "Science", icon: "◎", subjects: ["Science"], description: "Notice evidence and explore connections." },
  { id: "Geography", name: "Geography", icon: "⌖", subjects: ["Geography"], description: "Read maps and reason about places." },
  { id: "Financial literacy", name: "Money & business", icon: "↗", subjects: ["Financial literacy", "Business & finance"], description: "Practise planning and real-world maths." },
  { id: "Coding", name: "Coding & logic", icon: "⌘", subjects: ["Coding", "Logic"], description: "Break down patterns and instructions." },
  { id: "Communication", name: "Study & communication", icon: "✳", subjects: ["Study skills", "Communication"], description: "Practise planning, listening, and reflection." }
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
const defaultState = () => ({
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastCompletedDate: "",
  completed: [],
  attempts: [],
  profile: { name: "Alex Morgan", ageRange: "", interests: [] }
});
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
    const savedProfile = parsed.profile && typeof parsed.profile === "object" ? parsed.profile : {};
    const ageRanges = ["", "under-13", "13-15", "16-18", "19-plus"];
    return {
      ...defaultState(),
      xp: Number.isFinite(parsed.xp) ? Math.max(0, parsed.xp) : 0,
      streak: Number.isFinite(parsed.streak) ? Math.max(0, parsed.streak) : 0,
      bestStreak: Number.isFinite(parsed.bestStreak) ? Math.max(0, parsed.bestStreak) : 0,
      lastCompletedDate: typeof parsed.lastCompletedDate === "string" ? parsed.lastCompletedDate : "",
      completed: parsed.completed.filter(item => item && typeof item.id === "string" && Number.isFinite(item.score) && Number.isFinite(item.total)),
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts.filter(attempt =>
        attempt && typeof attempt.id === "string" && Array.isArray(attempt.answers)
      ).map(attempt => ({
        id: attempt.id,
        completedAt: typeof attempt.completedAt === "string" ? attempt.completedAt : "",
        answers: attempt.answers.filter(answer => answer && typeof answer.skill === "string" && typeof answer.correct === "boolean")
      })) : [],
      profile: {
        name: typeof savedProfile.name === "string" && savedProfile.name.trim() ? savedProfile.name.trim().slice(0, 32) : "Alex Morgan",
        ageRange: ageRanges.includes(savedProfile.ageRange) ? savedProfile.ageRange : "",
        interests: Array.isArray(savedProfile.interests)
          ? savedProfile.interests.filter(id => interestOptions.some(option => option.id === id))
          : []
      }
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
let activeOrder = [];
let activeAnswerResults = [];
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
    <div class="mission-meta"><span class="mission-world-tag"><span class="world-dot dot-${world.id}"></span>${world.name}</span><span class="difficulty">${mission.subject}</span></div>
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

function missionMatchesFilter(mission, filter) {
  if (filter === "academy") return ["Mathematics", "Reading", "Vocabulary", "Science", "Geography"].includes(mission.subject);
  if (filter === "all" || mission.world === filter || categoryForWorld(mission.world) === filter) return true;
  const path = subjectPaths.find(item => item.id === filter);
  return path ? path.subjects.includes(mission.subject) : mission.subject === filter;
}

function renderMissions(target, filter) {
  const list = missions.filter(mission => missionMatchesFilter(mission, filter));
  target.innerHTML = list.map(renderMissionCard).join("");
  return list.length;
}

function renderWorlds(target, filter = "all") {
  const list = worlds.filter(world => filter === "all" || missions.some(mission =>
    mission.world === world.id && missionMatchesFilter(mission, filter)
  ));
  target.innerHTML = list.map(renderWorldCard).join("");
}

function missionPracticeStats() {
  const stats = new Map();
  state.attempts.forEach(attempt => {
    const session = new Map();
    attempt.answers.forEach(answer => {
      const current = stats.get(answer.skill) || { attempts: 0, correct: 0, sessions: [] };
      current.attempts += 1;
      if (answer.correct) current.correct += 1;
      stats.set(answer.skill, current);
      const sessionResult = session.get(answer.skill) || { attempts: 0, correct: 0 };
      sessionResult.attempts += 1;
      if (answer.correct) sessionResult.correct += 1;
      session.set(answer.skill, sessionResult);
    });
    session.forEach((result, skill) => {
      stats.get(skill).sessions.push(result);
    });
  });
  return stats;
}

function recommendedMissions() {
  const skillStats = missionPracticeStats();
  return [...missions].sort((a, b) => {
    const score = mission => {
      const practice = skillStats.get(mission.skill);
      const interest = interestOptions.find(option => state.profile.interests.includes(option.id));
      const likesSubject = interestOptions.some(option =>
        state.profile.interests.includes(option.id) && option.subjects.includes(mission.subject)
      );
      let recommendation = isCompleted(mission.id) ? -12 : 12;
      if (likesSubject) recommendation += 30;
      if (!practice) recommendation += 9;
      else if (practice.attempts > 0) recommendation += (1 - practice.correct / practice.attempts) * 18;
      if (mission.level === "WARM UP" && practice && practice.correct / practice.attempts < 0.6) recommendation += 4;
      if (!interest) recommendation += mission.level === "WARM UP" ? 2 : 0;
      return recommendation;
    };
    return score(b) - score(a);
  });
}

function renderPathways() {
  $("#pathwayGrid").innerHTML = subjectPaths.map(path => {
    const lessons = missions.filter(mission => path.subjects.includes(mission.subject));
    const completed = lessons.filter(mission => isCompleted(mission.id)).length;
    const next = recommendedMissions().find(mission => path.subjects.includes(mission.subject) && !isCompleted(mission.id))
      || lessons.find(mission => !isCompleted(mission.id));
    const progress = lessons.length ? Math.round(completed / lessons.length * 100) : 0;
    return `<article class="pathway-card">
      <span class="pathway-icon" aria-hidden="true">${path.icon}</span>
      <span class="pathway-copy"><strong>${path.name}</strong><small>${path.description}</small></span>
      <span class="pathway-steps">${completed} / ${lessons.length} tried</span>
      <span class="pathway-track" aria-label="${progress}% of missions completed"><span style="width:${progress}%"></span></span>
      <button class="pathway-link" type="button" data-path-filter="${path.id}">${next ? `Continue: ${next.title}` : "Practise again"} <span aria-hidden="true">↗</span></button>
    </article>`;
  }).join("");
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
  renderSkillProgress();
  renderHistory();
}

function renderSkillProgress() {
  const container = $("#skillProgressList");
  const stats = missionPracticeStats();
  const skillNames = [...new Set(missions.map(mission => mission.skill))];
  const practiced = skillNames.filter(skill => stats.has(skill));
  if (!practiced.length) {
    container.innerHTML = '<div class="history-empty">Your skill snapshot will appear after you finish a mission. Older saved missions stay in your mission log; play one again to start tracking question-level practice.</div>';
    return;
  }
  container.innerHTML = practiced.map(skill => {
    const result = stats.get(skill);
    const accuracy = Math.round(result.correct / result.attempts * 100);
    const firstPractice = Math.round(result.sessions[0].correct / result.sessions[0].attempts * 100);
    const latestSession = result.sessions[result.sessions.length - 1];
    const latestPractice = Math.round(latestSession.correct / latestSession.attempts * 100);
    const comparison = result.sessions.length > 1
      ? `First practice ${firstPractice}% · latest practice ${latestPractice}%`
      : `First practice · try another mission to compare`;
    return `<article class="skill-progress-item">
      <span class="skill-progress-name"><strong>${skill}</strong><small>${result.correct} of ${result.attempts} answers correct · ${result.attempts} questions practised</small><small class="skill-practice-trend">${comparison}</small></span>
      <span class="skill-progress-track" role="img" aria-label="${accuracy}% correct across ${result.attempts} practice questions"><span style="width:${accuracy}%"></span></span>
      <span class="skill-progress-value">${accuracy}%</span>
    </article>`;
  }).join("");
}

function renderProfileForm() {
  $("#learnerNameInput").value = state.profile.name;
  $("#ageRangeInput").value = state.profile.ageRange;
  $("#interestOptions").innerHTML = interestOptions.map(option =>
    `<label class="interest-option"><input type="checkbox" name="interest" value="${option.id}" ${state.profile.interests.includes(option.id) ? "checked" : ""}><span>${option.label}</span></label>`
  ).join("");
}

function updateLearnerIdentity() {
  const name = state.profile.name.trim() || "Learner";
  const givenName = name.split(/\s+/)[0];
  $("#learnerGreeting").textContent = givenName;
  $("#sidebarLearnerName").textContent = name;
  $("#topAvatar").textContent = [...givenName][0].toLocaleUpperCase();
  $("#topAvatar").setAttribute("aria-label", name);
}

function saveLearnerProfile(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("learnerName") || "").trim();
  if (!name) {
    $("#learnerNameInput").focus();
    return;
  }
  state.profile = {
    name: name.slice(0, 32),
    ageRange: String(formData.get("ageRange") || ""),
    interests: formData.getAll("interest").filter(value => interestOptions.some(option => option.id === value))
  };
  const saved = saveState();
  updateLearnerIdentity();
  refreshDashboard();
  if (saved) {
    showToast("Your learning profile has been saved on this device.");
    setView("home");
  }
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
  updateLearnerIdentity();
  $("#homeWorldGrid").innerHTML = worlds.map(renderWorldCard).join("");
  const recommendations = recommendedMissions();
  $("#homeMissionGrid").innerHTML = recommendations.slice(0, 3).map(renderMissionCard).join("");
  $("#homeMissionSummary").textContent = `${Math.min(recommendations.length, 3)} PICKS FROM ${missions.length} MISSIONS`;
  $("#heroMissionButton").dataset.startChallenge = recommendations[0]?.id || "pattern-pilot";
  renderWorlds($("#allWorldGrid"), selectedFilter);
  const count = renderMissions($("#allMissionGrid"), selectedFilter);
  $("#missionCount").textContent = `${count} ${count === 1 ? "MISSION" : "MISSIONS"}`;
  $("#emptyMissions").hidden = count !== 0;
  renderPathways();
  renderProgress();
  renderAchievements();
}

function setView(view, title) {
  const target = $(`#view-${view}`);
  if (!target) return;
  $$(".view-panel").forEach(panel => panel.classList.toggle("active", panel === target));
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === view));
  $("#breadcrumbCurrent").textContent = title || ({
    home: "Overview", worlds: "Explore worlds", progress: "My progress", achievements: "Achievements", premium: "Premium", "learning-profile": "Learning profile"
  }[view] || "Overview");
  $$(".nav-link").forEach(link => {
    if (link.dataset.view === view) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (view === "learning-profile") renderProfileForm();
  $("#sidebar").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectFilter(filter) {
  selectedFilter = filter;
  $$("[data-filter]").forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderWorlds($("#allWorldGrid"), filter);
  const count = renderMissions($("#allMissionGrid"), filter);
  $("#missionCount").textContent = `${count} ${count === 1 ? "MISSION" : "MISSIONS"}`;
  $("#emptyMissions").hidden = count !== 0;
  renderPathways();
}

function openWorld(worldId) {
  selectFilter(worldId);
  setView("worlds", worldById(worldId)?.name || "Explore worlds");
  $("#allMissionGrid").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showAllMissions() {
  selectFilter("all");
  setView("worlds");
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
  activeOrder = [];
  activeAnswerResults = [];
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
  const promptControl = question.type === "number"
    ? `<label class="numeric-answer-label" for="numericAnswer">Your answer</label><div class="numeric-answer-row"><input id="numericAnswer" class="numeric-answer-input" type="number" step="any" inputmode="decimal" autocomplete="off" required aria-label="Enter your numeric answer"><button class="button button-dark" id="checkNumeric" type="button">Check answer <span aria-hidden="true">→</span></button></div>`
    : question.type === "order"
      ? `<p class="order-instructions">Use the move buttons to put the steps in order, then check your answer.</p><ol class="order-list" id="orderList" aria-label="Steps to arrange"></ol><div class="challenge-next-row"><button class="button button-dark" id="checkOrder" type="button">Check order <span aria-hidden="true">→</span></button></div>`
      : `<div class="answer-list">${question.options.map((option, index) => `<button class="answer-option" type="button" data-answer="${index}"><span class="answer-key">${String.fromCharCode(65 + index)}</span>${option}</button>`).join("")}</div>`;
  if (question.type === "order") activeOrder = [...question.items];
  const hint = question.hint || activeMission.hint;
  $("#challengeStage").innerHTML = `<p class="challenge-world">${world.name} · ${activeMission.subject} · ${activeMission.level}</p>
    <h2 id="challengeTitle">${activeMission.title}</h2>
    <p class="challenge-prompt">${question.prompt}</p>${promptControl}
    <div class="hint-controls"><button class="hint-toggle" type="button" aria-expanded="false" aria-controls="questionHint">Need a hint?</button><p class="hint-content" id="questionHint" hidden>${hint}</p></div>`;
  renderOrderControls();
  $$(".answer-option").forEach(button => button.addEventListener("click", () => submitAnswer(Number(button.dataset.answer))));
  $("#checkNumeric")?.addEventListener("click", () => {
    const input = $("#numericAnswer");
    if (!input.value.trim() || !input.checkValidity()) {
      input.reportValidity();
      input.focus();
      return;
    }
    submitAnswer(Number(input.value));
  });
  $("#numericAnswer")?.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#checkNumeric").click();
    }
  });
  $("#checkOrder")?.addEventListener("click", () => submitAnswer([...activeOrder]));
  $(".hint-toggle").addEventListener("click", event => {
    const hintButton = event.currentTarget;
    const hintContent = $("#questionHint");
    const expanded = hintButton.getAttribute("aria-expanded") === "true";
    hintButton.setAttribute("aria-expanded", String(!expanded));
    hintContent.hidden = expanded;
  });
  if (question.type === "number") $("#numericAnswer").focus();
  else if (question.type !== "order") $$(".answer-option")[0]?.focus();
}

function renderOrderControls() {
  const orderList = $("#orderList");
  if (!orderList) return;
  orderList.innerHTML = activeOrder.map((item, index) => `<li class="order-item">
    <span class="order-step">${item}</span>
    <span class="order-controls">
      <button class="order-move" type="button" data-move-order="${index}:-1" aria-label="Move ${item} up" ${index === 0 ? "disabled" : ""}>↑</button>
      <button class="order-move" type="button" data-move-order="${index}:1" aria-label="Move ${item} down" ${index === activeOrder.length - 1 ? "disabled" : ""}>↓</button>
    </span>
  </li>`).join("");
  $$("[data-move-order]").forEach(button => button.addEventListener("click", () => {
    const [index, direction] = button.dataset.moveOrder.split(":").map(Number);
    const target = index + direction;
    if (target < 0 || target >= activeOrder.length) return;
    [activeOrder[index], activeOrder[target]] = [activeOrder[target], activeOrder[index]];
    renderOrderControls();
    $(`[data-move-order="${target}:${-direction}"]`)?.focus();
  }));
}

function submitAnswer(selected) {
  const question = activeMission.questions[activeQuestion];
  const correct = question.type === "order"
    ? selected.every((item, index) => item === question.answerOrder[index])
    : selected === question.answer;
  if (correct) correctAnswers += 1;
  activeAnswerResults.push({ skill: activeMission.skill, correct });
  $$(".answer-option").forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct-answer");
    else if (index === selected) button.classList.add("wrong-answer");
  });
  $("#checkNumeric")?.setAttribute("disabled", "true");
  $("#numericAnswer")?.setAttribute("disabled", "true");
  $("#checkOrder")?.setAttribute("disabled", "true");
  $$("[data-move-order]").forEach(button => button.disabled = true);
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
  const day = today();
  state.attempts.push({
    id: mission.id,
    completedAt: day,
    score: correctAnswers,
    total: mission.questions.length,
    answers: [...activeAnswerResults]
  });
  if (!prior) {
    if (state.lastCompletedDate !== day) {
      state.streak = state.lastCompletedDate === dayBefore(day) ? state.streak + 1 : 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      state.lastCompletedDate = day;
    }
    state.xp += earnedXp;
    state.completed.push({ id: mission.id, score: correctAnswers, total: mission.questions.length, earnedXp, completedAt: day });
  } else if (correctAnswers > prior.score) {
    prior.score = correctAnswers;
    prior.total = mission.questions.length;
  }
  const saved = saveState();
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
    activeAnswerResults = [];
    renderQuestion();
  });
  $("#closeResult").focus();
  if (!prior && saved) showToast(`Mission complete! ${earnedXp} XP added to your journey.`);
  if (prior && saved) showToast("Practice recorded. Your skill snapshot has been updated.");
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
  renderProfileForm();
  refreshDashboard();

  document.addEventListener("click", event => {
    if (event.target.closest("[data-show-all-missions]")) return showAllMissions();
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) return setView(viewButton.dataset.view);
    const challengeButton = event.target.closest("[data-start-challenge]");
    if (challengeButton) return startChallenge(challengeButton.dataset.startChallenge);
    const worldCard = event.target.closest("[data-open-world]");
    if (worldCard) return openWorld(worldCard.dataset.openWorld);
    const worldFilter = event.target.closest("[data-world-filter]");
    if (worldFilter) return openWorld(worldFilter.dataset.worldFilter);
  });

  $$(".filter-chip").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === selectedFilter));
    button.addEventListener("click", () => selectFilter(button.dataset.filter));
  });
  $$(".nav-link").forEach(link => {
    if (link.dataset.view === "home") link.setAttribute("aria-current", "page");
  });
  $("#profileForm").addEventListener("submit", saveLearnerProfile);
  document.addEventListener("click", event => {
    const pathButton = event.target.closest("[data-path-filter]");
    if (pathButton) {
      selectFilter(pathButton.dataset.pathFilter);
      $("#allMissionGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
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
    if (event.key === "Tab") {
      const activeModal = !$("#challengeModal").hidden ? $("#challengeModal") : !$("#paymentModal").hidden ? $("#paymentModal") : null;
      if (activeModal) {
        const focusable = [...activeModal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
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
