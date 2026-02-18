import { useState } from "react";

export default function TermsConditions() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="termsWrapper">
      <p className="small">
        By creating an account, you agree to our Terms & Conditions.
        We collect basic account information and ensure your data is protected.
      </p>

      {expanded && (
        <p className="small">
          You agree not to misuse the platform, share false information,
          attempt unauthorized access, or violate applicable laws.
          We reserve the right to suspend accounts that breach these terms.
        </p>
      )}

      <button
        type="button"
        className="ghost small"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
