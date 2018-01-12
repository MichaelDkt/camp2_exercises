import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from "wapiti";

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

const fakeData = [
  {decathlon_id: 2, title: "chaufferette", price: 5.99},
  {decathlon_id: 3, title: "pantalon", price: 14.99},
  {decathlon_id: 1, title: "ekiden", price: 21.99}
];

// Tests
test('Everything looks the same', () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("should display title column", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("tr").textContent)
    .run()
    .then(result => {
      expect(result).toBe("IDTitlePrice");
    });
});

test("Should fill the table with 3 lines (of fake data) order by id", () => {
  expect.assertions(3);
  const load = shallow(<App lines={fakeData}/>);
  expect(load.find("tr").at(1).text()).toBe("1ekiden21.99");
  expect(load.find("tr").at(2).text()).toBe("2chaufferette5.99");
  expect(load.find("tr").at(3).text()).toBe("3pantalon14.99");
});

test("Should order the list by the title", () => {
  expect.assertions(1);
  const load = shallow(<App lines={fakeData}/>);
  load.find("thead tr th").at(1).simulate("click");
  expect(load.find("tr").at(1).text()).toBe("2chaufferette5.99");
})

test("Should order the list by the price and reverse", () => {
  expect.assertions(2);
  const load = shallow(<App lines={fakeData}/>);
  load.find("thead tr th").at(2).simulate("click");
  expect(load.find("tr").at(1).text()).toBe("2chaufferette5.99");
  load.find("thead tr th").at(2).simulate("click");
  expect(load.find("tr").at(1).text()).toBe("1ekiden21.99");
})

test("tri column", () => {
  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("tr").textContent)
    .run()
    .then(result => {
      expect(result).toBe("IDTitlePrice");
    });
});

//Wapiti tests for integration tests
test("Test full scenario with sorts on all columns", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .run()
    .then(result => {
      expect(result).toEqual([
        "8044622",
        "8380024",
        "8044622",
      ]);
    });
});
