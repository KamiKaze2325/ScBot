<div align="center">
<img src="https://i.ibb.co/p0p7nMZ/IMG-20211026-084119.jpg" alt="YT KAMIKAZE" width="500" />

# KamiKaze

> Senya Bot is a multipurpose WhatsApp bot using Adiwajshing-Baileys library!
>
>

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/kamikaze2325/ScBot"><img src="https://avatars.githubusercontent.com/u/81684610?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/kamikaze2325/ScBot"><img title="Author" src="https://img.shields.io/badge/Author-KAMIKAZE-purple.svg?style=for-the-badge&logo=github" /></a>
</p>
<p align="center">
<a href="https://github.com/kamikaze2325/ScBot/followers"><img title="Followers" src="https://img.shields.io/github/followers/kamikaze2325?color=blue&style=flat-square"></a>
<a href="https://github.com/kamikaze2325/ScBot"><img title="Stars" src="https://img.shields.io/github/stars/kamikaze2325/ScBot?color=red&style=flat-square"></a>
<a href="https://github.com/kamikaze2325/ScBot"><img title="Forks" src="https://img.shields.io/github/forks/kamikaze2325/ScBot?color=red&style=flat-square"></a>
<a href="https://github.com/kamikaze2325/ScBot"><img title="Watching" src="https://img.shields.io/github/watchers/kamikaze2325/ScBot?label=Watchers&color=blue&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://github.com/kamikaze2325/ScBot#requirements">Requirements</a> •
  <a href="https://github.com/kamikaze2325/ScBot#instalasi">Installation</a> •
  <a href="https://https://github.com/kamikaze2325/ScBot">Features</a> •
  <a href="https://github.com/kamikaze2325/ScBot#thanks-to">Thanks to</a>
</p>
</div>


---



# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases) (for sticker command)
* [Libwebp](https://developers.google.com/speed/webp/download) (for sticker wm)
* Any text editor

# Instalasi
## For Windows
```bash
git clone https://github.com/kamikaze2325/ScBot
cd ScBot
npm install
node main
```
## For Termux
```bash
termux-setup-storage
pkg update && pkg upgrade
pkg install nodejs git ffmpeg libwebp 
git clone https://github.com/kamikaze2325/ScBot
cd ScBot
npm install
npm start
```

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://github.com/BtbN/FFmpeg-Builds/releases).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```


## Installing the libwebp for Windows
* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `libwebp`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
setx /m PATH "C:\libwebp\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
webpmux -version
```

# THANKS
* [`Baileys`](https://github.com/adiwajshing/Baileys)
* [`Xinz`](https://github.com/Xinz-Team)
