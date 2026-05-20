/**
 * US-1 Pools WebMCP Imperative Agent Tool Registrations
 * Standard-compliant implementation of the W3C WebMCP draft API
 */
(() => {
  "use strict";

  const typeLabels = {
    "above-ground": "Above-ground pool",
    "in-ground-vinyl": "In-ground vinyl liner pool",
    "in-ground-fiberglass": "In-ground fiberglass pool",
    "spa": "Hot tub / spa"
  };

  const sizeLabels = {
    small: "small",
    medium: "medium",
    large: "large"
  };

  const featureLabels = {
    basic: "basic",
    mid: "mid-level",
    premium: "premium"
  };

  const costs = {
    "above-ground": [3000, 10000],
    "in-ground-vinyl": [25000, 65000],
    "in-ground-fiberglass": [55000, 100000],
    "spa": [8000, 15000]
  };

  const multipliers = {
    small: 0.8,
    medium: 1.0,
    large: 1.3
  };

  const additions = {
    basic: [0, 0],
    mid: [3000, 5000],
    premium: [8000, 12000]
  };

  // Pure function to calculate estimated pricing
  const calculatePoolPricing = (poolType, poolSize, features) => {
    const baseRange = costs[poolType] || [0, 0];
    const mult = multipliers[poolSize] || 1.0;
    const addRange = additions[features] || [0, 0];

    const lowEstimate = Math.round(baseRange[0] * mult + addRange[0]);
    const highEstimate = Math.round(baseRange[1] * mult + addRange[1]);
    const description = `${sizeLabels[poolSize] || ""} ${typeLabels[poolType] || ""} with ${featureLabels[features] || ""} features`.trim();

    return {
      lowEstimate,
      highEstimate,
      description,
      formattedEstimate: `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`
    };
  };

  // WebMCP Registration Helper
  const registerWebMCPTools = () => {
    // 1. Register pool calculation tool
    const poolTool = {
      name: "calculatePoolEstimate",
      description: "Calculate an estimated price range for pool or spa installation based on pool type, size, and additional features.",
      parameters: {
        type: "object",
        properties: {
          poolType: {
            type: "string",
            enum: ["above-ground", "in-ground-vinyl", "in-ground-fiberglass", "spa"],
            description: "The type of pool or spa to estimate."
          },
          poolSize: {
            type: "string",
            enum: ["small", "medium", "large"],
            description: "The desired size range of the pool/spa."
          },
          features: {
            type: "string",
            enum: ["basic", "mid", "premium"],
            description: "The level of features and accessories."
          }
        },
        required: ["poolType", "poolSize", "features"]
      },
      async execute({ poolType, poolSize, features }) {
        if (!costs[poolType] || !multipliers[poolSize] || !additions[features]) {
          throw new Error("Invalid parameters provided to pool calculator");
        }
        return calculatePoolPricing(poolType, poolSize, features);
      }
    };

    // 2. Register contact lead tool
    const contactTool = {
      name: "submitContactRequest",
      description: "Submit a customer lead or general inquiry to US-1 Pools for a free on-site quote or spa consultation.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name of the contact person." },
          email: { type: "string", description: "Email address for correspondence." },
          phone: { type: "string", description: "Phone number for direct callback." },
          message: { type: "string", description: "Specific details or pool request requirements." }
        },
        required: ["name", "email", "phone", "message"]
      },
      async execute({ name, email, phone, message }) {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message })
          });
          const result = await response.json();
          if (response.ok) {
            return { success: true, message: result.message || "Thank you! We'll be in touch soon." };
          } else {
            return { success: false, message: result.error || "Something went wrong" };
          }
        } catch (err) {
          return { success: false, message: err.message || "Network request failed. Please call 919.441.0033" };
        }
      }
    };

    // Support standard WebMCP drafts (navigator.modelContext)
    if (typeof navigator !== "undefined" && navigator.modelContext && typeof navigator.modelContext.registerTool === "function") {
      try {
        navigator.modelContext.registerTool(poolTool);
        navigator.modelContext.registerTool(contactTool);
        console.log("WebMCP Tools registered successfully.");
      } catch (err) {
        console.error("Failed to register WebMCP tools:", err);
      }
    }

    // Attach to global window object so that local agentic systems (like local Gemini Nano chatbot) can invoke them
    if (typeof window !== "undefined") {
      window.US1PoolsMCP = {
        calculatePoolEstimate: poolTool.execute,
        submitContactRequest: contactTool.execute,
        calculatePoolPricing // Expose pricing core for local UI uses
      };
    }
  };

  // Run registration
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", registerWebMCPTools);
    } else {
      registerWebMCPTools();
    }
  }
})();
