#Steps to get this app working

Install Dependencies
```npm install```


Run Project in Dev Mode
```npm run dev```   

Browser to https://localhost:3000


#Steps to build this app

After install of NextJS, remove `App.tsx`, `App.css`, and `index.css` from the root directory.

1. run `npm i ethers simple-flexbox normalize.css sass react-media-hook ethers @metamask/detect-provider @metamask/onboarding use-immer`
1. Add `context`, `partial-components`, `reducers`, `view-component` and `ui-components`,  and `context` directories
1. In `context` directory add files: 
    - `initialState.ts`
    - `ViewProvider.tsx`
    - `AppContext.tsx`
1. In `partial-components` directory add files: 
    - `Foot.tsx`
    - `Logo.tsx`
    - `Menu.tsx`
    - `Sidenav.tsx`
    - `Sidenav.scss`
    - `Topnav.tsx`
    - `Topnav.scss`
1. In `reducers` directory add files: 
    - `index.ts`
1. In `ui-components` directory add files: 
    - `hamburger/Hamburger.tsx`
    - `hamburger/Hamburger.scss`
    - `mm-connect/atoms/Button.tsx`
    - `mm-connect/atoms/MyLink.tsx`
    - `mm-connect/molecules/ConnectMetaMask.tsx`
    - `mm-connect/molecules/ConnectNetwork.tsx`
    - `mm-connect/molecules/DisplayAddress.tsx`
    - `mm-connect/molecules/GetAccount.tsx`
    - `mm-connect/molecules/GetPermissions.tsx`
    - `mm-connect/molecules/InstallMetaMask.tsx`
    - `switcher/Switcher.tsx`
    - `switcher/Switcher.scss`
1. In `view-components` directory add files: 
    - `Home.tsx`
1. In root directory add files: 
    - `Frame.tsx`
    - `App.scss`

