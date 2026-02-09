import { exec } from "child_process";
import fs from "fs";
import { google } from "googleapis";

const fileName = `backup-${new Date().toISOString().replace(/[:.]/g, "-")}.sql`;

exec(`pg_dump "${process.env.DATABASE_URL}" > ${fileName}`, async (err) => {
  if (err) {
    console.error("Error en pg_dump:", err);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GDRIVE_SERVICE_ACCOUNT),
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [process.env.GDRIVE_FOLDER_ID],
    },
    media: {
      mimeType: "application/sql",
      body: fs.createReadStream(fileName),
    },
  });

  console.log("Backup subido a Google Drive ✅");
});
