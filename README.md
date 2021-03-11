# Volvo Cars (Global Online Digital)

This is a [React.js](https://reactjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the custom development server:

```bash
yarn
&&
yarn start
```

Or

```bash
npm i
&&
npm start
```

**Note:** Custom server is created to ease the monitoring of code change during developement, rather than build and run every time. No additional server functioanlity is added, but the future scope is there to use this custom server as per requirement.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features:

1. Initial landing page displays carousel of cars which is created using [react-slick](https://www.npmjs.com/package/react-slick)
2. After the initial launch, user is able to filter the results (based on `bodyType`) with help of provided filters.
3. Clcking on Learn/Shop will redirect you to the respective dynamic page. URL will be changed according to the car id.
4. A mobile-first design approach is implemented using modular css where,
   - device < 600px will render 1 and the fraction of second card in the view area. (Mobile View)
   - 601px < device < 768px will render 1 and fthe raction of second card in the view area. (Tab View)
   - devices > 768px will render 4 cards in the view area. (Laptop/Desktop View)

## Asumptions:

1. Each button click will trigger an api call along with the query stirng to get the filtered results. The page will be client side rendered.
2. The state has not been persisted. State was handled locally without using any additional library (Eg., Redux) to avoid unnecessary app size increase.
3. CSS Media query and [VCC-UI](https://vcc-ui.netlify.app) component library have been used for this responsive design.
4. Error handling is not implemented.

## Project Structure:

1. index.tsx is the staring file in this repository. 
2. App.tsx is used for router setup and layout.
3. All the screens/pages are under `view` folder. 3 components are added under the `view` folder.
   - `Home.tsx` for car display carousel and filter.
   - `Learn.tsx` for learn about the car page.
   - `Shop.tsx` for shop the car page
   - cardItemList for list of card item. This component is dynamically imported to index.js to improve performance
3. Style folder contains modular css file for each component.

## Screenshots

![VolvoCars](/public/SS_desktop.png?raw=true "Desktop View")

![VolvoCars](/public/SS_Tab.png?raw=true "Tab View")

![VolvoCars](/public/SS_Mobile.png?raw=true "Mobile View")
