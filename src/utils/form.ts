export interface FormOptions {
  formId: string;
  calculateBtnId: string;
  calculateHintId: string;
  progressCountId: string;
  progressFillId: string;
  totalItems: number;
  onCalculate: (answers: Record<string, number>) => void;
  onRetake?: () => void;
}

export function setupFormProgress(options: FormOptions) {
  const form = document.getElementById(options.formId) as HTMLFormElement | null;
  if (!form) return;

  const calculateBtn = document.getElementById(options.calculateBtnId) as HTMLButtonElement;
  const calculateHint = document.getElementById(options.calculateHintId) as HTMLElement;
  const progressCount = document.getElementById(options.progressCountId) as HTMLElement;
  const progressFill = document.getElementById(options.progressFillId) as HTMLElement;
  const answers: Record<string, number> = {};

  function getAnsweredCount(): number {
    return Object.keys(answers).length;
  }

  function updateProgress() {
    const count = getAnsweredCount();
    const pct = (count / options.totalItems) * 100;
    if (progressCount) progressCount.textContent = String(count);
    if (progressFill) progressFill.style.width = `${pct}%`;

    if (count === options.totalItems) {
      if (calculateBtn) calculateBtn.disabled = false;
      if (calculateHint) calculateHint.hidden = true;
    } else {
      if (calculateBtn) calculateBtn.disabled = true;
      if (calculateHint) calculateHint.hidden = false;
    }
  }

  const changeHandler = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (input.type === "radio") {
      answers[input.name] = Number(input.value);
      const fieldset = input.closest("fieldset");
      fieldset?.querySelectorAll(".option-card").forEach((card) => {
        card.classList.remove("selected");
      });
      input.parentElement?.querySelector(".option-card")?.classList.add("selected");
      updateProgress();
    }
  };

  const submitHandler = (e: Event) => {
    e.preventDefault();
    if (getAnsweredCount() < options.totalItems) return;
    options.onCalculate(answers);
  };

  const retakeHandler = () => {
    form.reset();
    Object.keys(answers).forEach((k) => delete answers[k]);
    document.querySelectorAll(".option-card").forEach((c) => c.classList.remove("selected"));
    updateProgress();
    form.hidden = false;
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    if (options.onRetake) options.onRetake();
  };

  form.addEventListener("change", changeHandler);
  form.addEventListener("submit", submitHandler);
  document.addEventListener("scale:retake", retakeHandler);

  // Initialize progress
  updateProgress();

  // Return cleanup function if needed (though Astro's after-swap handles re-init)
  return () => {
    form.removeEventListener("change", changeHandler);
    form.removeEventListener("submit", submitHandler);
    document.removeEventListener("scale:retake", retakeHandler);
  };
}
