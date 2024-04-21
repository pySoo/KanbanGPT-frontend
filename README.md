# KanbanGPT

<div>
  <img src="https://img.shields.io/badge/version-1.2.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</div>

<br />

KanbanGPT는 **개발 생산성 향상**을 위해 칸반 보드와 Chat GPT를 연동한 React 기반 프로젝트입니다.

**개발 이슈를 칸반보드를 통해 관리**하고 GPT를 이용하여 **요구사항을 구현한 코드를 즉시 생성**할 수 있도록 구현되었습니다.

## 🌐 URL

[KanbanGPT](https://kanban-gpt.vercel.app/)

<br />

## ⚒️ Tech Stack

<div align=center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :----------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/React_query-FF4154?&style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?&style=for-the-badge&logo=recoil&logoColor=white"> <br /> <img src="https://img.shields.io/badge/Emotion-D26AC2?&style=for-the-badge&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"> |

</div>

<br />

## ✅ 설계 방식 및 개선 사항

### 성능 개선

#### Suspense, lazy를 이용한 코드 스플리팅

- CSR의 **`초기 로딩 시간이 긴 문제를 개선`** 하기 위해 Route 페이지 별로 코드 스플리팅을 적용하여 **번들 사이즈를 줄였습니다.**

#### 스켈레톤 UI를 이용한 LCP 개선

- 메인 화면에서 가장 큰 영역을 차지하는 리스트 영역은 스켈레톤 UI를 적용하여 **`LCP를 개선`** 하였습니다.

#### 빌드 시간 단축을 위한 Vite 번들링

- **`빌드 속도가 느린 CRA의 단점을 개선`** 하기 위해 번들링 도구로 Vite를 선택하였습니다.
- Vite의 **esbuild와 브라우저의 ESM을 이용한 번들링**을 활용하여 개발 속도를 개선했습니다.

<br />

### 에러 **처리**

### AsyncBoundary를 이용한 선언적 비동기 처리

- Suspense와 ErrorBoundary를 AsyncBoundary 컴포넌트를 통해 관리합니다.
- 컴포넌트 내부에서는 **비동기 성공 상태와** **`비즈니스 로직에만 집중하여 개발`** 할 수 있습니다.
- SuspenseFallback, ErrorFallback을 props로 주입할 수 있도록 설계하여 **컴포넌트마다 다른 Skeleton**을 보여줄 수 있으며, 컴포넌트 에러로 인해 **`전체 앱이 멈추는 현상을 방지`** 할 수 있습니다.

<br />

## ✨ 주요 기능

- #### 칸반 보드

  - **`드래그 앤 드랍`** 을 통해 이슈 상태를 업데이트합니다.

- #### ChatGPT 연동

  - KanbanGPT-backend에서 **`구현한 API 서버`** 를 통해 GPT의 코드 생성 API를 호출합니다.

- #### 요구사항 코드 생성

  - 사용자는 GPT에게서 **`요구사항을 구현한 코드를 즉시 받아볼 수 있습니다.`**
  - 코드의 정확도를 높이기 위해 언어와 프레임워크를 입력할 수 있습니다.
  - 편의성을 위해 언어와 프레임워크 정보는 **`전역으로 관리`** 하여 **`재입력을 방지`** 합니다.

- #### 요구사항 검색

  - 검색어 생성과 이동을 한 번의 클릭으로 수행하여 사용자의 시간을 절약합니다.
  - 검색 버튼을 누르면 구현에 필요한 **`검색어가 생성되어 클립보드에 복사`** 되며, **`GPT 사이트로 이동`** 합니다.

- #### 화면 조정 핸들러

  - 이슈 모달에서 사용하지 않는 공간을 최소화하기 위해 **`영역의 크기를 사용자가 조절`** 할 수 있습니다.

- #### 코드 블럭

  - **`언어마다 다른 하이라이터`** 기능을 적용하여 가독성을 높였습니다.
  - 해당 코드는 **복사** 하여 사용할 수 있습니다.

- #### 반응형 웹 구현 및 모바일 대응

  - 모바일, 타블렛, 데스크탑 사이즈에 대응되는 **`반응형 레이아웃`** 으로 구성하였습니다.
  - safe-area 속성을 이용하여 **`모바일 노치, 인디케이터 영역`** 내에서 웹이 그려지도록 모바일 환경에 대응하였습니다.

<br />

## 🤔 사용성을 위한 고민

- #### 입력은 간편하게

  - 이슈, 요구사항 등 자주 업데이트 되는 입력 필드는 **`포커스 out 되었을 때에도 업데이트`** 가 되도록 구현하였습니다.

- #### 정보를 한 눈에 볼 수 있도록

  - 특정 이슈의 요구사항이 많아져서 스크롤이 길어지는 이슈를 발견하여 각 요구사항을 최대 **`2줄까지만 표시하고 말줄임`** 을 적용하였습니다.

- #### 이어지는 유저 플로우

  - API 키를 입력했음에도 인증 에러가 발생하는 경우, 사용자를 **`API 안내 페이지로 바로 연결하는 커스텀 토스트`** 를 제공합니다.

- #### 모바일 대응

  - 모바일 환경에서 **노치, 인디케이터 영역**으로 인해 **`웹 페이지가 꽉 차게 표시되지 않는 문제`** 를 **safe-area** 속성을 통해 해결하였습니다.
  - 모바일 환경에서의 **`스크롤 사용성을 높이기 위해 scroll snap`** 을 적용하였습니다.

- #### 실수 방지

  - **`실수로 삭제하는 것을 방지`** 하기 위해 확인 토스트를 표시하였습니다.
  - 입력 값이 없는 경우 토스트 메시지로 **누락된 정보를 채울 수 있게** 안내합니다.

- #### 웹 접근성

  - 웹 접근성을 향상시키기 위해, **`시맨틱 태그와 aria-label`** 을 적절히 활용하였습니다.

<br />

## 📦 Project Structure

```
📦 src
├── 📂 api
├── 📂 assets
├── 📂 atoms
|── 📂 components
|   ├── 📂 CodeArchive
|   ├── 📂 Gpt
|   ├── 📂 KanbanBoard
|   |   ├── 📂 Issue
|   |   └── 📂 Requirement
|   ├── 📂 Modal
|   └── 📂 Shared
├── 📂 constants
├── 📂 hooks
├── 📂 pages
├── 📂 styles
├── 📂 types
└── 📂 utils
```

<br />

## 🚀 Getting Started

```bash
yarn install
```

```bash
yarn dev
```

<br />

## ⚖️ License

```
MIT License

Copyright (c) 2023 Suhyeon Park

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
