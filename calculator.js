(() => {
  "use strict";

  const calculator = document.getElementById("poolCalculator");
  if (!calculator) return;

  let selections = {};
  let currentStep = 1;

  const calculatorSteps = Array.from(calculator.querySelectorAll(".calculator-step"));
  const calculatorOptions = calculator.querySelectorAll(".calculator-option");

  const typeLabels = {
    "above-ground": "Above-ground pool",
    "in-ground-vinyl": "In-ground vinyl liner pool",
    "in-ground-fiberglass": "In-ground fiberglass pool",
    spa: "Hot tub / spa",
  };

  const sizeLabels = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const featureLabels = {
    basic: "basic",
    mid: "mid-level",
    premium: "premium",
  };

  const setActiveStep = (stepKey) => {
    calculatorSteps.forEach((step) => {
      step.classList.toggle("active", step.dataset.step === String(stepKey));
    });
  };

  const calculateResult = () => {
    const baseCostRange = selections.step1?.cost?.split("-") || ["0", "0"];
    let lowEstimate = Number.parseInt(baseCostRange[0], 10);
    let highEstimate = Number.parseInt(baseCostRange[1], 10);

    const multiplier = selections.step2?.multiplier || 1;
    lowEstimate *= multiplier;
    highEstimate *= multiplier;

    const addition = selections.step3?.addition || 0;
    lowEstimate += addition;
    highEstimate += addition;

    const resultEl = document.getElementById("calculatorResult");
    resultEl.textContent = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

    const detailsEl = document.getElementById("calculatorDetails");
    detailsEl.textContent = `${sizeLabels[selections.step2?.value] || ""} ${typeLabels[selections.step1?.value] || ""} with ${featureLabels[selections.step3?.value] || ""} features`.trim();

    setActiveStep("result");
  };

  const nextStep = () => {
    currentStep += 1;

    if (currentStep === 5) {
      calculateResult();
      return;
    }

    setActiveStep(currentStep);
  };

  const previousStep = () => {
    currentStep = Math.max(1, currentStep - 1);
    setActiveStep(currentStep);
  };

  const resetCalculator = () => {
    selections = {};
    currentStep = 1;
    calculatorOptions.forEach((option) => option.classList.remove("selected"));
    setActiveStep(1);
  };

  calculatorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const step = option.closest(".calculator-step");
      const stepNum = step?.dataset.step;
      if (!stepNum) return;

      step.querySelectorAll(".calculator-option").forEach((card) => card.classList.remove("selected"));
      option.classList.add("selected");

      selections[`step${stepNum}`] = {
        value: option.dataset.value,
        cost: option.dataset.cost,
        multiplier: Number.parseFloat(option.dataset.multiplier) || 1,
        addition: Number.parseInt(option.dataset.addition || "0", 10),
      };

      window.setTimeout(nextStep, 400);
    });
  });

  calculator.querySelectorAll("[data-calculator-back]").forEach((button) => {
    button.addEventListener("click", previousStep);
  });

  calculator.querySelectorAll("[data-calculator-reset]").forEach((button) => {
    button.addEventListener("click", resetCalculator);
  });
})();

