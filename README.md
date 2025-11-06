# 🤖 LLM-Driven Code Review Agent

Welcome to the **LLM-Driven Code Review Agent** — an AI-powered web app that automatically **reviews, analyzes, and improves code** using Google’s **Gemini 2.0 Flash** model.

This application bridges AI intelligence with developer productivity by offering **real-time, explainable code reviews** in a clean web interface.  
Unlike ChatGPT, this tool is **focused entirely on code understanding, optimization, and clarity**.

---

## 🧠 Introduction to the Application

The **LLM-Driven Code Review Agent** allows you to:
- Upload your source code (Python, JavaScript, Java, etc.)
- Analyze it using **Gemini 2.0 Flash**
- Receive detailed suggestions and improvements with plain-language explanations

### 💡 Why It’s Different from ChatGPT
| Feature | ChatGPT | LLM-Driven Code Review Agent |
|----------|----------|-----------------------------|
| Focus | General conversation | Code review & optimization |
| Output | Text-based | Structured code feedback |
| Technology | OpenAI models | Google Gemini 2.0 Flash |
| Integration | Manual chat | Ready for web & CI/CD use |

---

## 🖥️ How to Run the Application Locally

Follow the simple step-by-step guide below 👇  
*(Even if you’re new to Node.js or React, these commands will work on Windows, Mac, or Linux.)*

---

### 🧩 Prerequisites

| Tool | Version | Download Link |
|------|----------|----------------|
| **Node.js** | 18 or later | [https://nodejs.org/en/download](https://nodejs.org/en/download) |
| **Git** | Latest | [https://git-scm.com/downloads](https://git-scm.com/downloads) |
| **Browser** | Chrome / Edge / Brave | — |

Check installations:
```bash
node -v
npm -v


---

### ✅ Summary of Commands to Copy-Paste Quickly

```bash
# Clone the repository
git clone https://github.com/VasaGanesh/LLM-Driven-Code-Review-Agent.git
cd LLM-Driven-Code-Review-Agent

# Run backend
cd BackEnd
npm install
npm nodemon   # or npx nodemon app.js

# Run frontend (open new terminal)
cd ../FrontEnd
npm install
npm run dev
