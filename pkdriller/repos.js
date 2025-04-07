"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🛠️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/pkdriller/PKXMD-BOT';
  const img = 'https://files.catbox.moe/fanlnq.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *PKXMD-BOT .*\n support our channel *by*,  https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x

╭─────────────────────➳
│╭────────────────────➳
││ 🗼 *REPOSITORY:* ${data.html_url}
││ 🌟 *STARS:* ${repoInfo.stars}
││ 🧧 *FORKS:* ${repoInfo.forks}
││ 📅 *RELEASE DATE:* ${releaseDate}
││🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
││ 👨‍💻 *OWNER:* *Pk driller*
││ 💞 *THEME:* *pk tech*
││ 🥰 *ENJOY TO USE PKXMD-BOT *
│╰────────────────────➳
│╭──────────────────❍ 
││  ╭───────────────➳
││  │ _*Made By pk tech*_
││  ╰───────────────➳
│╰──────────────────❍ 
╰─────────────────────➳ 
 ❍━━━━━━━━━━━━━━━━━━❍`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
