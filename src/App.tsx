import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [chat, setChat] = useState<{ message: string; type: "ai" | "user" }[]>(
    []
  );

  const prompt = async () => {
    const input = inputRef.current?.value;
    if (!input) return;

    inputRef.current.value = "";
    setChat((prevChat) => [...prevChat, { message: input, type: "user" }]);

    const newSession = await window.ai.createTextSession();
    const response = await newSession.prompt(input);
    setChat((prevChat) => [...prevChat, { message: response, type: "ai" }]);
  };

  return (
    <div className="app">
      <h1>Built-in AI Chat</h1>

      {chat?.length > 0 && (
        <div className="chat-container">
          {chat.map((item, index) => (
            <div
              key={index}
              className={`chat-message ${
                item.type === "ai" ? "chat-message--ai" : "chat-message--user"
              }`}
            >
              {item.message}
            </div>
          ))}
        </div>
      )}
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          ref={inputRef}
          placeholder="Type your message here..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              prompt();
            }
          }}
        />
        <button className="send-button" onClick={prompt}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
