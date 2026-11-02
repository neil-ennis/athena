"use strict";

const examples = {
  enquiries: {title: "ENQUIRY → JOB BRIEF", input: "“Hi, we need the front garden tidied before Saturday. Some hedges, weeds and green waste. Can you give us a price?”", heading: "Garden tidy-up · enquiry brief", items: [["Requested:", "hedge trimming, weeding and green-waste removal."], ["Timing:", "before Saturday; availability to confirm."], ["Still needed:", "address, photos and approximate garden size."]], approval: "You confirm the scope and price before replying."},
  reports: {title: "WEEKLY NOTES → DRAFT UPDATE", input: "Weekly notes: 12 jobs completed. Two bookings moved to next week. Supplier delay on the Miller job. Customer feedback is in a separate spreadsheet.", heading: "Weekly operations · draft summary", items: [["Completed:", "12 jobs recorded in this week’s notes."], ["Follow up:", "confirm revised dates for two bookings and the Miller delivery."], ["Still needed:", "customer feedback and checked figures before sharing."]], approval: "You check the source figures and approve the final report."},
  knowledge: {title: "TEAM QUESTION → SOURCED ANSWER", input: "A new team member asks: “What information do I need to collect before booking a first site visit?”", heading: "First visit · booking checklist", items: [["Collect:", "customer name, contact details, site address and a short job description."], ["Confirm:", "site access and preferred appointment times."], ["Example source:", "fictional Site Visit Procedure, section 2. Check the current approved version."]], approval: "Illustrative only. Real answers need your approved documents."}
};

const tabs = Array.from(document.querySelectorAll("[data-example]"));
function selectExample(key, focus = false) {
  const example = examples[key];
  if (!example) return;
  tabs.forEach(tab => { const selected = tab.dataset.example === key; tab.setAttribute("aria-selected", String(selected)); tab.tabIndex = selected ? 0 : -1; if (selected && focus) tab.focus(); });
  document.getElementById("example-panel").setAttribute("aria-labelledby", `tab-${key}`);
  document.getElementById("demo-title").textContent = example.title;
  document.getElementById("demo-input").textContent = example.input;
  document.getElementById("demo-output-title").textContent = example.heading;
  const list = document.getElementById("demo-output-list");
  list.replaceChildren(...example.items.map(([label, text]) => {const li = document.createElement("li"); const strong = document.createElement("strong"); strong.textContent = label; li.append(strong, ` ${text}`); return li;}));
  document.getElementById("demo-approval").textContent = `✓  ${example.approval}`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectExample(tab.dataset.example));
  tab.addEventListener("keydown", event => {
    let next;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (index + 1) % tabs.length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {event.preventDefault(); selectExample(tabs[next].dataset.example, true);}
  });
});
document.querySelectorAll("[data-example-link]").forEach(link => link.addEventListener("click", () => selectExample(link.dataset.exampleLink)));

const hours = document.getElementById("hours");
const rate = document.getElementById("hourly-rate");
const money = new Intl.NumberFormat("en-AU", {maximumFractionDigits: 0});
function updateCalculator() {
  const saved = Number(hours.value);
  document.getElementById("hours-value").textContent = `${saved} ${saved === 1 ? "hour" : "hours"}`;
  document.getElementById("annual-hours").textContent = `${money.format(saved * 48)} hours`;
  const valid = rate.value.trim() !== "" && Number.isFinite(Number(rate.value)) && Number(rate.value) >= 0 && Number(rate.value) <= 1000;
  rate.setAttribute("aria-invalid", String(!valid));
  document.getElementById("annual-value").textContent = valid ? `A$${money.format(saved * Number(rate.value) * 48)}` : "—";
}
hours.addEventListener("input", updateCalculator);
rate.addEventListener("input", updateCalculator);
updateCalculator();

const menu = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
function closeMenu() {navigation.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-label", "Open navigation");}
menu.addEventListener("click", () => {const open = navigation.classList.toggle("is-open"); menu.setAttribute("aria-expanded", String(open)); menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {if (event.key === "Escape" && navigation.classList.contains("is-open")) {closeMenu(); menu.focus();}});

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const business = String(data.get("business")).trim();
  const email = String(data.get("email")).trim();
  const task = String(data.get("task")).trim();
  if (!name || !task) {document.getElementById("form-status").textContent = "Please add your name and a short description of the task."; return;}
  const subject = "Athena Practical AI — introductory conversation";
  const body = `Hi Harrison,\n\nI’d like to discuss an AI workflow for my business.\n\nName: ${name}\nBusiness: ${business || "Not supplied"}\nReply email: ${email}\n\nThe task:\n${task}\n\nThanks,\n${name}`;
  window.location.href = `mailto:h.ennis.cyber@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("form-status").textContent = "Your email app should open with a draft. Nothing has been sent by this website. If no draft appears, use the email link below.";
});
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector('#contact-form button[type=submit]').disabled = false;
