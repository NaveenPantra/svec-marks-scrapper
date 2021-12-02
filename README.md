# svec-marks-scrapper
A CLI tool to scrape marks for Sree vidyanikethan engineering college examination portal.

## About
This CLI tool will extract the marks of the SVEC student from `2010` and above and display them in the `terminal/cmd prompt`.

you have to give the following information for scrapping
- start year
- end year
- branch code

I use the above provided information to generate the roll numbers of the students from start year to end year and scrape data

```text
start year  = 15
end year = 15
branch code = 12

I'm using this expression to translate to given data to roll number ({{startYear}}121A{{branchCode}}{{roll}}) 
Example roll number: 15121A12B2
```

### Requirements and Setup
- Clone the repository `git clone git@github.com:NaveenPantra/svec-marks-scrapper.git`
- Download [node v14 or higher](https://nodejs.org/en/).
- Check your `node` and `npm` version using `node -v` and `npm -v`.
- Run `npm intall`.
- Run `npm start` / `node app.js`.
- To debug run `node inspect app.js` and use CLI debugger tool or `Chrome` node dev tools by visiting [chrome://inspect](chrome://inspect).

### upcoming

- Will give option to store the fetched data to `CSV` and `JSON` files.

## Screenshots

![Marks Scrapper (figlet drawing)](./assets/Screenshot%202021-12-03%20at%2002.17.24.png)
![Marks Scrapper (inquirer questions)](./assets/Screenshot%202021-12-03%20at%2002.17.52.png)
![Marks Scrapper (scrapping marks)](./assets/Screenshot%202021-12-03%20at%2002.18.04.png)

## video

![Marks Scrapper usage video](./assets/Screen%20Recording%202021-12-03%20at%2002.18.22.mov)
