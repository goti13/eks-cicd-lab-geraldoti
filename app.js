const http = require("http");

// ======================================
// ✏️  CHANGE THESE VALUES TO TRIGGER
//     A VISIBLE UPDATE AFTER DEPLOY
// ======================================
const APP_VERSION = "1.0.0";
const BG_COLOR = "#1a1a2e";
const TEXT_COLOR = "#e94560";
// ======================================

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>EKS CI/CD Lab</title></head>
    <body style="
      margin:0; display:flex; justify-content:center; align-items:center;
      height:100vh; background:${BG_COLOR}; color:${TEXT_COLOR};
      font-family:monospace; flex-direction:column;
    ">
      <h1 style="font-size:3rem;">EKS CI/CD Lab</h1>
      <p style="font-size:2rem;">Version: <strong>${APP_VERSION}</strong></p>
      <p style="font-size:1rem; color:#aaa;">
        Pod: ${process.env.HOSTNAME || "unknown"} |
        Deployed by GitHub Actions
      </p>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log(`Server running on port 3000 — version ${APP_VERSION}`);
});