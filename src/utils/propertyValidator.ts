import type { PropertyFormData } from "@/types";

type StepErrors = Record<string, string>;

// ─── Limits ───────────────────────────────────────────────────────────────────
const LIMITS = {
  propertyName:    { min: 5,   max: 100         },
  propertyDesc:    { min: 20,  max: 1000        },
  location:        { min: 5,   max: 255         },
  bedroomsNumber:  { min: 1,   max: 20          },
  bathroomsNumber: { min: 1,   max: 20          },
  bedsNumber:      { min: 1,   max: 30          },
  size:            { min: 1,   max: 10000       },
  price:           { min: 1,   max: 500_000_000 },
  pricePerDay:     { min: 1,   max: 100_000     },
  priceMonthly:    { min: 1,   max: 500_000     },
  images:          { min: 5                     }, // at least 5 property photos
  ownershipProof:  { min: 3                     }, // at least 3 documents
} as const;

// ─── Step 1 ───────────────────────────────────────────────────────────────────
export const validateStep1 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (!formData.propertyName.trim())
    errors.propertyName = "Property title is required.";
  else if (formData.propertyName.trim().length < LIMITS.propertyName.min)
    errors.propertyName = `Title must be at least ${LIMITS.propertyName.min} characters.`;
  else if (formData.propertyName.trim().length > LIMITS.propertyName.max)
    errors.propertyName = `Title must not exceed ${LIMITS.propertyName.max} characters.`;

  if (!formData.propertyDesc.trim())
    errors.propertyDesc = "Description is required.";
  else if (formData.propertyDesc.trim().length < LIMITS.propertyDesc.min)
    errors.propertyDesc = `Description must be at least ${LIMITS.propertyDesc.min} characters.`;
  else if (formData.propertyDesc.trim().length > LIMITS.propertyDesc.max)
    errors.propertyDesc = `Description must not exceed ${LIMITS.propertyDesc.max} characters.`;

  if (formData.property_type === "for_sale") {
    if (!formData.price || formData.price <= 0)
      errors.price = "Asking price must be greater than 0.";
    else if (formData.price > LIMITS.price.max)
      errors.price = `Price must not exceed ${LIMITS.price.max.toLocaleString()} EGP.`;

    if (!formData.sellingPlan || ![1, 3, 6].includes(formData.sellingPlan))
      errors.sellingPlan = "Please select a valid selling plan (1, 3, or 6 months).";
  }

  if (formData.property_type === "for_rent") {
    if (!formData.pricingUnit)
      errors.pricingUnit = "Please select a rent type (Daily or Monthly).";

    if (formData.pricingUnit === "DAY") {
      if (!formData.pricePerDay || formData.pricePerDay <= 0)
        errors.pricePerDay = "Daily price must be greater than 0.";
      else if (formData.pricePerDay > LIMITS.pricePerDay.max)
        errors.pricePerDay = `Daily price must not exceed ${LIMITS.pricePerDay.max.toLocaleString()} EGP.`;
    }

    if (formData.pricingUnit === "MONTH") {
      if (!formData.priceMonthly || formData.priceMonthly <= 0)
        errors.priceMonthly = "Monthly price must be greater than 0.";
      else if (formData.priceMonthly > LIMITS.priceMonthly.max)
        errors.priceMonthly = `Monthly price must not exceed ${LIMITS.priceMonthly.max.toLocaleString()} EGP.`;
    }
  }

  if (!formData.bedroomsNumber || formData.bedroomsNumber < LIMITS.bedroomsNumber.min)
    errors.bedroomsNumber = "At least 1 bedroom is required.";
  else if (formData.bedroomsNumber > LIMITS.bedroomsNumber.max)
    errors.bedroomsNumber = `Bedrooms must not exceed ${LIMITS.bedroomsNumber.max}.`;

  if (!formData.bathroomsNumber || formData.bathroomsNumber < LIMITS.bathroomsNumber.min)
    errors.bathroomsNumber = "At least 1 bathroom is required.";
  else if (formData.bathroomsNumber > LIMITS.bathroomsNumber.max)
    errors.bathroomsNumber = `Bathrooms must not exceed ${LIMITS.bathroomsNumber.max}.`;

  if (formData.is_furnished) {
    if (!formData.bedsNumber || formData.bedsNumber < LIMITS.bedsNumber.min)
      errors.bedsNumber = "Beds count is required for furnished properties.";
    else if (formData.bedsNumber > LIMITS.bedsNumber.max)
      errors.bedsNumber = `Beds must not exceed ${LIMITS.bedsNumber.max}.`;
  }

  if (!formData.size || formData.size < LIMITS.size.min)
    errors.size = "Size must be greater than 0.";
  else if (formData.size > LIMITS.size.max)
    errors.size = `Size must not exceed ${LIMITS.size.max.toLocaleString()} m².`;

  return errors;
};

// ─── Step 2 ───────────────────────────────────────────────────────────────────
export const validateStep2 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (!formData.location.trim())
    errors.location = "Location is required. Type manually or pick from map.";
  else if (formData.location.trim().length < LIMITS.location.min)
    errors.location = `Location must be at least ${LIMITS.location.min} characters.`;
  else if (formData.location.trim().length > LIMITS.location.max)
    errors.location = `Location must not exceed ${LIMITS.location.max} characters.`;

  return errors;
};

// ─── Step 3 ───────────────────────────────────────────────────────────────────
export const validateStep3 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (formData.images.length < LIMITS.images.min)
    errors.images = `Please upload at least ${LIMITS.images.min} property photos.`;

  return errors;
};

// ─── Step 4 ───────────────────────────────────────────────────────────────────
export const validateStep4 = (formData: PropertyFormData): StepErrors => {
  const errors: StepErrors = {};

  if (formData.ownershipProof.length < LIMITS.ownershipProof.min)
    errors.ownershipProof = `Please upload at least ${LIMITS.ownershipProof.min} ownership documents.`;

  return errors;
};

// ─── Router ───────────────────────────────────────────────────────────────────
export const validateStep = (step: number, formData: PropertyFormData): StepErrors => {
  switch (step) {
    case 1: return validateStep1(formData);
    case 2: return validateStep2(formData);
    case 3: return validateStep3(formData);
    case 4: return validateStep4(formData);
    default: return {};
  }
};

export const hasErrors = (errors: StepErrors): boolean =>
  Object.values(errors).some((msg) => msg !== "");
