import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(
    "Hei! Jeg er Assisto – jeg kan fortelle deg hva vi tilbyr. Hva lurer du på?"
  );

  const handleUserMessage = () => {
    const lower = message.toLowerCase();

    if (lower.includes("hr") || lower.includes("ansatte") || lower.includes("onboarding")) {
      setResponse(
        "Vi tilbyr AI-assistenter som hjelper ansatte med onboarding, rutiner og intern kommunikasjon."
      );
    } else if (lower.includes("kundeservice") || lower.includes("kunde") || lower.includes("chatbot")) {
      setResponse(
        "Vi lager chatboter som kan svare på kundehenvendelser døgnet rundt, med personlig tilpasning."
      );
    } else if (lower.includes("integrasjon") || lower.includes("kobling") || lower.includes("crm") || lower.includes("system")) {
      setResponse(
        "Vi kan koble chatboten til CRM, e-post eller bookingsystemer om ønskelig."
      );
    } else if (lower.includes("pris") || lower.includes("kostnad") || lower.includes("betaling")) {
      setResponse(
        "Vi tilbyr fleksible prisplaner. Ønsker du en gratis vurdering, så tar vi kontakt!"
      );
    } else if (lower.includes("nettside") || lower.includes("hjemmeside") || lower.includes("hva kan dere tilby") || lower.includes("tjenester")) {
      setResponse(
        "Vi tilbyr AI-chatboter med promptdesign, HR-assistenter, kundeserviceboter og teknisk integrasjon på nettsiden din."
      );
    } else if (lower.includes("nystartet") || lower.includes("nyoppstartet") || lower.includes("liten bedrift")) {
      setResponse(
        "Vi hjelper også små og nyoppstartede bedrifter med en enkel og rimelig AI-løsning for å komme raskt i gang."
      );
    } else if (lower.includes("fordel") || lower.includes("hvorfor") || lower.includes("nytte")) {
      setResponse(
        "Med AI-chatbot fra Assisto Norge får du bedre kundeservice, færre manuelle henvendelser og en mer moderne nettside."
      );
    } else {
      setResponse(
        "Takk for meldingen! Du kan spørre meg om HR, kundeservice, integrasjoner, priser, nettsidehjelp og mer. Hva lurer du på?"
      );
    }

    setMessage("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#1e40af" }}>Assisto Norge</h1>
      <p style={{ marginTop: "0.5rem" }}>
        Skreddersydde AI-chatboter for norske bedrifter
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Hva vi tilbyr</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>AI-chatbot med promptdesign</li>
          <li>Implementering på nettsiden</li>
          <li>HR-bot og internkommunikasjon</li>
          <li>Vedlikehold og støtte</li>
          <li>Integrasjoner med systemer (valgfritt)</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem", backgroundColor: "#f3f4f6", padding: "1rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Demo-chatbot</h2>
        <div style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "0.5rem", maxWidth: "500px" }}>
          <p>{response}</p>
          <div style={{ display: "flex", marginTop: "1rem", gap: "0.5rem" }}>
            <input
              style={{ flex: 1, padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
              placeholder="Skriv her..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button onClick={handleUserMessage} style={{ padding: "0.5rem 1rem" }}>
              Send
            </button>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Kontakt oss</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", marginTop: "1rem" }}>
          <input placeholder="Navn" style={{ padding: "0.5rem" }} />
          <input type="email" placeholder="E-post" style={{ padding: "0.5rem" }} />
          <textarea placeholder="Hva kan vi hjelpe deg med?" style={{ padding: "0.5rem" }} />
          <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#1e40af", color: "white", border: "none" }}>
            Send henvendelse
          </button>
        </form>
      </section>

      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.875rem", color: "#6b7280" }}>
        © 2025 Assisto Norge — Skreddersydde AI-løsninger
      </footer>
    </div>
  );
}
