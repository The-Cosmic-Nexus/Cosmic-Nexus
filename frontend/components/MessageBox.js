import gsap from "gsap";

export function showMessage(message, type = "info") {
  const messageBox = document.getElementById("message-box");
  if (!messageBox) return;

  let bg = "bg-indigo-700";
  let shadow = "shadow-indigo-600/80";

  if (type === "success") {
    bg = "bg-blue-600";
    shadow = "shadow-blue-500/80";
  }
  if (type === "error") {
    bg = "bg-red-600";
    shadow = "shadow-red-500/80";
  }

  messageBox.innerHTML = `
    <i data-lucide="sparkles" class="w-5 h-5 inline mr-2"></i>
    ${message}
  `;

  messageBox.className = `
    fixed bottom-5 right-5 p-5 rounded-xl shadow-2xl
    ${bg} ${shadow} text-white z-50 pointer-events-none
  `;

  lucide.createIcons();

  gsap.fromTo(
    messageBox,
    { y: 50, opacity: 0, scale: 0.8 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
  );

  setTimeout(() => {
    gsap.to(messageBox, {
      y: 50,
      opacity: 0,
      scale: 0.8,
      duration: 0.5
    });
  }, 3500);
}
