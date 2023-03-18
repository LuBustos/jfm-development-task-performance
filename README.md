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


## What do you can see in this project?

The idea of this assigment is create a react project with webpack and use some react tools to increase the performance of the project.

In this case, I use different approach to increase the performance.

1. in Home page, you can see that I import dynamically an Welcome message.

2. You have an input and a button to generate a list of names, this list is created using useMemo, to increase the performance and try to don't generate many renders

3. the count page is using React.memo, the same as the last point the idea is to increase the performance and try to don't generate renders every time you click in the button.

## A short video throw the page
https://www.loom.com/share/14cef7a98b9b4fe491891a8305b4b09d

