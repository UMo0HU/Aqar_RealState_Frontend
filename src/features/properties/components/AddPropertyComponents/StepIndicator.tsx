import type { FC } from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Details" },
  { id: 3, label: "Media" },
  { id: 4, label: "Verify" },
];

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex items-center"
            >

              {/* Step */}
              <div className="flex sm:flex-col items-center sm:w-auto w-40">

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold border-2 z-10
                  ${
                    isActive
                      ? "bg-dark-knight text-white border-black"
                      : isCompleted
                      ? "bg-gray-600 text-white border-gray-600"
                      : "bg-white text-gray-400 border-gray-300"
                  }`}
                >
                  {step.id}
                </div>

                <span
                  className={`text-sm font-medium uppercase sm:mt-2 ml-3 sm:ml-0 text-center ${
                    isActive ? "text-dark-knight" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop Line */}
                  <div
                    className={`hidden sm:block h-1 sm:w-24 md:w-36 mx-2 mb-5
                    ${
                      isCompleted
                        ? "bg-dark-knight"
                        : "bg-gray-200"
                    }`}
                  />
                </>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default StepIndicator;