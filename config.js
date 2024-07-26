const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349033831906";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_57_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYcUdSQkY1Nkc4eDNEbXJhaDJXa3hLYURCMG9EbWxiSjlZcHUydEg1aU1jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzM4MzE5MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNzU3REZEMkVGMkQ3QzhEMTgzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk4NDIzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0MkxiQXYxUFNDaVJUM19rM3psQkpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmZTRhZGU1LWE1YTUtNDQ1OS1iMTRiLTdhMGU0NGE4OTljOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDcsXG4gICAgICA4NCxcbiAgICAgIDksXG4gICAgICAyMjUsXG4gICAgICAyMjksXG4gICAgICAyMzIsXG4gICAgICA4NSxcbiAgICAgIDEyMixcbiAgICAgIDczLFxuICAgICAgMjUwLFxuICAgICAgMTE1LFxuICAgICAgMjIzLFxuICAgICAgMTY4LFxuICAgICAgMzUsXG4gICAgICAxNCxcbiAgICAgIDE5MixcbiAgICAgIDEzLFxuICAgICAgMjA5LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDQ1LFxuICAgICAgMTM2LFxuICAgICAgMjI0LFxuICAgICAgNDksXG4gICAgICAxNjgsXG4gICAgICAyMDgsXG4gICAgICAwLFxuICAgICAgMTQxLFxuICAgICAgMTI2LFxuICAgICAgMTIwLFxuICAgICAgNzEsXG4gICAgICAxMjMsXG4gICAgICAyMzYsXG4gICAgICAxOTAsXG4gICAgICAyMDMsXG4gICAgICA0MixcbiAgICAgIDIyMSxcbiAgICAgIDEzNSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRzVUQVpBQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMzgzMTkwNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueWdyb3dzd2VhbHRoXCIsXG4gICAgXCJsaWRcIjogXCI4MTk5MTQyOTAyOTk1NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppU2g5RUZFT2JKamJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2NsNkh3cjZwTHM3UjZ1WDZ4TGx4Q01CVmJzVWFSYURLalo4TXByQS96OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmOGdSZzU2R0FUSmw1Y29adC9UVkVDM3h6Q2VrdnBqL1B5SkFyVUcwY2oxNDBwbWQvb0pkUWlsbGtyQVBBSlJPODNxWmRGSEJ6RWVUaU55STJBVUhpZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMVFoyV0hxblRtWDRQcC9BZVJGVkl4RkRxYk1jeXVKaHVISFdHbXNhTksxbE9ROFFBdGRtRnZ1alJHS2lCdkl4YmNleUxocWl1Q21YVHZCSVY1Z2lqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMzODMxOTA2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODQyMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYeS5qc29uIjogIntcImtleURhdGFcIjpcIkJjQVkxYWd0aVo0Yi9IYVZ3VDVTaHZ2UUlaNHp1eVdKYyt3NHNIRHYwbTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxMjE2MzYwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxOTg0MjM1NjAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
