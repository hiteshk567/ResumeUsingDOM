let row1 = createEle("div", "row1");

let header = createEle("div", "header");

let profileImage = document.createElement("img");
profileImage.src = "hitesh.jpg";
profileImage.setAttribute("class", "profile_img");
header.append(profileImage);

let innerDiv = createEle("div", "inner_div");

let name = createEle("div", "name");
name.innerHTML = "HITESH KUMAR";

let personalInfo = createEle("div", "personal_info");
let p = createEle("p");
p.innerHTML = "Air Force Station, Viman Nagar, Pune 411015 | 111-111-1111 | hiteshk567@gmail.com";

personalInfo.append(p);

row1.append(header, innerDiv, name, personalInfo);

let hr1 = createHr();

let division = createEle("div", "division");

let liMap = {
    0: "Worked in SONY FQA.",
    1: "Successfully executed 2 pilot projects.",
    2: "Got the chance to lead a team of 4 members very early in my career."
}

let map = {
    0: "95%",
    1: "85%",
    2: "95%",
    3: "90%",
    4: "90%",
    5: "85%"
}

let skillMap = {
    0: "C++ / C",
    1: "Data Structures and Algorithms",
    2: "JavaScript",
    3: "ReactJS",
    4: "NodeJS",
    5: "MongoDB"
}

getCol();

function getCol() {
    for (let i = 0; i < 2; i++) {
        let col = createEle("div", "col");
        if (i === 0) {
            let leftSide = createLeft();
            col.append(leftSide);
        } else {
            let rightSide = createEle("div", "rightside");
            let h2 = document.createElement("h2");
            let i2 = createEle("i", "fas fa-briefcase");
            h2.append(i2, "WORK EXPERIENCE");
            let table = createRight();
            rightSide.append(h2, table);
            let hr2 = createHr();
            let ho2 = document.createElement("h2");
            let i = createEle("i", "fas fa-university");
            ho2.append(i, "EDUCATION");
            let p = createPara("", "Completed my Engineering with specilization in Information and Technology from Pune University in 2018.")
            rightSide.append(hr2, ho2, p);
            col.append(rightSide);
        }
        division.append(col);
    }
}

function createRight() {
    let table = document.createElement("table");
    let tr1 = createTr();
    let tr2 = createTr();
    let td1 = createExp("exp_title", "Software Test Engineer");
    let td2 = createDate("exp_data", "08/2018 - 06/2020");
    tr1.append(td1, td2);
    let td3 = createDetail();
    tr2.append(td3);
    table.append(tr1, tr2);
    return table;
}

function createDetail() {
    let td = document.createElement("td");
    td.colSpan = "2";
    let ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        let li = createLi(liMap[i]);
        ul.append(li);
    }
    td.append(ul);
    return td;
}

function createLi(text) {
    let li = document.createElement("li");
    li.innerHTML = text;
    return li;
}

function createDate(className, text) {
    let td = document.createElement("td");
    let p = document.createElement("p");
    p.classList.add(className);
    p.innerHTML = text;
    td.append(p);
    return td;
}

function createExp(title, desig) {
    let td = document.createElement("td");
    let h3 = document.createElement("h3");
    h3.classList.add(title);
    h3.innerHTML = desig;
    td.append(h3);
    return td;
}

function createLeft() {
    let leftSide = createEle("div", "leftside");;
    leftSide.classList.add("leftside");
    let ha2 = document.createElement("h2");
    let i = createEle("i", "fas fa-user");
    ha2.append(i, "PROFILE");
    let content = "Energetic and self motivated individual who comes from defense family is a big fan of Indian Armed Forces and believes in their ideology that people work for a leader who can motivate and inspire his colleagues to push their limits to achieve their personal goals and hence help organization to achieve its.";
    let profile_para = createPara("profile_para", content);
    let conten1 = "Competetive Programmer - Regular participant in online coding competitions on and other platforms to enhance my knowledge on Data Structures and Algorithms."
    let next_para = createPara("", conten1);
    let hr2 = createHr();
    let h2 = document.createElement("h2");
    let i1 = createEle("i", "fas fa-clipboard-list");
    let table = createTable("100%");
    h2.append(i1, "SKILLS");
    leftSide.append(ha2, profile_para, next_para, hr2, h2, table);
    return leftSide;
}

function createTable(style1) {
    let element = document.createElement("table");
    element.style.width = style1;
    for (let i = 0; i < 6; i++) {
        let tr = createTr();
        let td1 = createTd1(skillMap[i]);
        let td2 = createTd2(map[i]);
        tr.append(td1, td2);
        element.append(tr);
    }
    return element;
}

function createTd2(text) {
    let div = createEle("div", "container");
    let div1 = createEle("div", "skill JavaScript");
    div1.innerHTML = text;
    div.append(div1);
    return div;
}

function createTd1(text) {
    let ele = document.createElement("td");
    ele.style.width = "30%";
    let p = createPara("", text);
    ele.append(p);
    return ele;
}

function createTr() {
    return document.createElement("tr");
}

function createH2(text) {
    let element = document.createElement("h2");
    element.innerHTML = text;
    return element;
}

function createPara(className, text) {
    let element = document.createElement("p");
    if (className.length !== 0)
        element.classList.add(className);
    element.innerHTML = text;
    return element;
}

function createEle(tagName, className = "") {
    let element = document.createElement(tagName);
    let arr = className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== 0)
            element.classList.add(arr[i]);
    }
    return element;
}

function createHr() {
    let element = document.createElement("hr");
    return element;
}

document.body.append(row1, hr1, division);