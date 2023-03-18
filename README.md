# jfm-development-task-performance

## Technologies
jfm-development-task-performance is created with:
* react: 18.2.0
* webpack: 5.76.2
* webpack-bundle-analyzer: 4.8.0

## Setup
To run this project, install it locally using npm or yarn:

``` 
1. npm install / yarn install.
```

```
2. npm run start / yarn start
```

if you want to generate the build, you have to run:

```
npm run build / yarn build
```

it will be generated in the folder /dist

Also you can run the report:

```
npm report / yarn report
```

And you will see in the browser a page like this:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/63980760/226130103-6d5a5305-0bbf-4ce7-ab0a-5dea55a8e589.png">


## What can you see in this project?

The idea of this assigment is to create a React project with Webpack and use some React tools to enhance the performance of the application.

In this case, I am using different approaches to enhance the performance.

1. In Home page, you can see that I import dynamically a component (Welcome message).

2. You have an input and a button to generate a list of names, which is created using useMemo, to enhance the performance and try not to generate many renders.

3. The count page is using React.memo. Just as the previous point, the idea is to enhance the performance and try not to generate renders every time you click the button.

## A short video through the page
https://www.loom.com/share/14cef7a98b9b4fe491891a8305b4b09d

