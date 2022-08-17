"use strict";

const raceCourseId = {
    "札幌": "1",
    "函館": "2",
    "福島": "3",
    "新潟": "4",
    "東京": "5",
    "中山": "6",
    "中京": "7",
    "京都": "8",
    "阪神": "9",
    "小倉": "a"
};

let url = "https://regist.prc.jp/api/windowopen.aspx?target=race/";

let raceInfo = document.getElementsByClassName("opt")[2].innerHTML;
let year = raceInfo.split("年")[0];
let month = ("0" + raceInfo.split("年")[1].split("月")[0]).slice(-2);
let day = ("0" + raceInfo.split("年")[1].split("月")[1].split("日")[0]).slice(-2);
let kaisaiNumber = raceInfo.split("回")[0].slice(-1);
let kaisaiCourse = raceInfo.split("回")[1].slice(0, 2);
let kaisaiDay = raceInfo.split("回")[1].split(" ")[0].slice(2, -1);
let raceNumber = raceInfo.split(" ")[1].slice(0, -3);

url = url + year + "/" + year + month + day + "/" + year.slice(-2) + raceCourseId[kaisaiCourse] + kaisaiNumber + (Number(kaisaiDay).toString(16)) + (Number(raceNumber).toString(16)) + "_p&quality=4";

let oddsButtonElement = document.getElementsByClassName("btn-def btn-sm blue btn-block")[0];
let paddockButtonElement = `<a href=${url} class='btn-def btn-sm blue btn-block mt5'><i class='fa fa-chevron-circle-right'></i>パドック</a>`

oddsButtonElement.insertAdjacentHTML("afterend", paddockButtonElement);
