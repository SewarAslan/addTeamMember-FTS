export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "24px",
      }}
    >
      <button
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "14px 20px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
        }}
      >
        Add Selected (3)
      </button>

      <button
        style={{
          padding: "14px 20px",
          background: "transparent",
          color: "#718096",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = "#cbd5e0";
          e.target.style.color = "#4a5568";
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = "#e2e8f0";
          e.target.style.color = "#718096";
        }}
      >
        Cancel
      </button>
    </div>
  );
}
