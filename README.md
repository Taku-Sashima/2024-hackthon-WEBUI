# WEB UI
## OpenHack U 2024 Tokyoに出場した際に作成したものです
その時の動画↓
https://www.youtube.com/live/VB_LScUyFnk?si=VjJbpBYXvLOy0Pyn[https://www.youtube.com/live/VB_LScUyFnk?si=VjJbpBYXvLOy0Pyn]


### ファイル・フォルダ構成

| フォルダ・ファイル名 | 説明                           |
| -------------------- | ------------------------------ |
| public               | Web で公開されるファイルを置く |
| src                  | ソースコード                   |

### Docker

#### develop

run (command line)

```
docker run -it --rm -v $(pwd):/usr/src -w /usr/src -p 3000:3000 node:16.16.0-alpine npm install #はじめだけ
docker run -it --rm -v $(pwd):/usr/src -w /usr/src -p 3000:3000 node:16.16.0-alpine npm start
```

#### build

For mac

```
docker build -t moffyblack/web-ui:1.0.0 .
```

For linux

```
docker buildx build --platform linux/amd64 -t moffyblack/web-ui:1.0.0 .
```

run (container)

```
docker run -p 3000:3000 --rm moffyblack/web-ui:1.0.0
```

#### push

```
docker push moffyblack/web-ui:1.0.0
```
