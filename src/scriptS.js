"use strict";

const raceCourseId = {
  札幌: "1",
  函館: "2",
  福島: "3",
  新潟: "4",
  東京: "5",
  中山: "6",
  中京: "7",
  京都: "8",
  阪神: "9",
  小倉: "a",
};

const url = "https://regist.prc.jp/api/windowopen.aspx?target=race/";

const raceInfo = document.getElementsByClassName("opt")[1].innerHTML;
const year = raceInfo.split("年")[0];
const month = ("0" + raceInfo.split("年")[1].split("月")[0]).slice(-2);
const day = ("0" + raceInfo.split("年")[1].split("月")[1].split("日")[0]).slice(
  -2
);
const kaisaiNumber = raceInfo.split("回")[0].slice(-1);
const kaisaiCourse = raceInfo.split("回")[1].slice(0, 2);
const kaisaiDay = raceInfo.split("回")[1].split(" ")[0].slice(2, -1);
const raceNumber = raceInfo.split(" ")[1].slice(0, -3);

const paddock_url =
  url +
  year +
  "/" +
  year +
  month +
  day +
  "/" +
  year.slice(-2) +
  raceCourseId[kaisaiCourse] +
  kaisaiNumber +
  Number(kaisaiDay).toString(16) +
  Number(raceNumber).toString(16) +
  "_p&quality=4";

const standard_url =
  url +
  year +
  "/" +
  year +
  month +
  day +
  "/" +
  year.slice(-2) +
  raceCourseId[kaisaiCourse] +
  kaisaiNumber +
  Number(kaisaiDay).toString(16) +
  Number(raceNumber).toString(16) +
  "_t&quality=4";

const patrol_url =
  url +
  year +
  "/" +
  year +
  month +
  day +
  "/" +
  year.slice(-2) +
  raceCourseId[kaisaiCourse] +
  kaisaiNumber +
  Number(kaisaiDay).toString(16) +
  Number(raceNumber).toString(16) +
  "_a&quality=5&view=1";

const multi_url =
  url +
  year +
  "/" +
  year +
  month +
  day +
  "/" +
  year.slice(-2) +
  raceCourseId[kaisaiCourse] +
  kaisaiNumber +
  Number(kaisaiDay).toString(16) +
  Number(raceNumber).toString(16) +
  "_m&quality=4";

const oddsButtonElement = document.getElementsByClassName(
  "btn-def btn-sm blue btn-block"
)[0];
const officialRaceButtonElement = document.getElementsByClassName(
  "btn-def btn-sm btn-block"
)[6].parentNode;

const paddockButtonElement = `<a href=${paddock_url} target="_blank" id='paddock-button' class='btn-def btn-sm blue btn-block mt5'><i class='fa fa-chevron-circle-right'></i>パドック</a>`;
const standardButtonElement = `<li><a href=${standard_url} target="_blank" id='standard-button' class='btn-def btn-sm btn-block'><i class='fa fa-chevron-circle-right'></i>レース</a></li>`;
const patrolButtonElement = `<li><a href=${patrol_url} target="_blank" id='patrol-button' class='btn-def btn-sm btn-block'><i class='fa fa-chevron-circle-right'></i>パトロール</a></li>`;
const multiButtonElement = `<li><a href=${multi_url} target="_blank" id='multi-button' class='btn-def btn-sm btn-block'><i class='fa fa-chevron-circle-right'></i>マルチ</a></li>`;

oddsButtonElement.insertAdjacentHTML("afterend", paddockButtonElement);
officialRaceButtonElement.insertAdjacentHTML("afterend", multiButtonElement);
officialRaceButtonElement.insertAdjacentHTML("afterend", patrolButtonElement);
officialRaceButtonElement.insertAdjacentHTML("afterend", standardButtonElement);
