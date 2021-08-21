
var classes = [
    {id: 01, slot: 3, subject: "Grade 10 English", group: 1, classroom: "A1", link: "meet.google.com/hnz-qcte-qhj", message:"Hi class, remember you have a literature essay coming up."},
    {id: 02, slot: 2, subject: "Grade 10 English", group: 2, classroom: "C1", link: "meet.google.com/kkz-ieiv-kmr", message:"Hi class, remember you have a literature essay coming up."},
    {id: 03, slot: 1, subject: "Grade 10 Afrikaans", group: 1, classroom: "A2", link: "meet.google.com/kuz-iitr-roo", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 04, slot: 5, subject: "Grade 10 Afrikaans", group: 2, classroom: "C2", link: "meet.google.com/mzp-vvkf-huh", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 05, slot: 4, subject: "Grade 10 History", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg", message:"You have an upcoming case study on ww2"},
    {id: 06, slot: 2, subject: "Grade 10 Mathematics", group: 1, classroom: "B1", link: "meet.google.com/uyr-jaby-xsc", message:"Hi guys, please remember to do ALL your homeword"},
    {id: 07, slot: 6, subject: "Grade 10 Physical Science", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo", message:"We are doing an experiment on tuesday, please be present!"},
    {id: 08, slot: 1, subject: "Grade 10 Biology", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo", message:"Hi guys, please do task 3 for homework"},
    {id: 09, slot: 5, subject: "Grade 10 Accounting", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg", message:"Hi class, remember your calculators"},
    {id: 10, slot: 4, subject: "Grade 10 Life Orientation", group: 1, classroom: "B3", link: "meet.google.com/xih-vxad-kbp"},
    {id: 11, slot: 1, subject: "Grade 11 English", group: 1, classroom: "A1", link: "meet.google.com/hnz-qcte-qhj", message:"Hi guys, please remember your yellow shakesphere book for monday."},
    {id: 12, slot: 6, subject: "Grade 11 English", group: 2, classroom: "C1", link: "meet.google.com/kkz-ieiv-kmr", message:"Hi guys, please remember your yellow shakesphere book for monday."},
    {id: 13, slot: 3, subject: "Grade 11 Afrikaans", group: 1, classroom: "A2", link: "meet.google.com/kuz-iitr-roo", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 14, slot: 2, subject: "Grade 11 Afrikaans", group: 2, classroom: "C2", link: "meet.google.com/mzp-vvkf-huh", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 15, slot: 1, subject: "Grade 11 History", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg",  message:"You have an upcoming case study on ww2"},
    {id: 16, slot: 2, subject: "Grade 11 Mathematics", group: 1, classroom: "B1", link: "meet.google.com/uyr-jaby-xsc",  message:"Hi class, please do homework task 2 and 4 for Monday"},
    {id: 17, slot: 3, subject: "Grade 11 Physical Science", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo", message:"We are doing an experiment on tuesday, please be present!"},
    {id: 18, slot: 4, subject: "Grade 11 Biology", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo",  message:"We are doing an experiment on tuesday, please be present!"},
    {id: 19, slot: 5, subject: "Grade 11 Accounting", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg", message:"Remember your accounting books"},
    {id: 20, slot: 6, subject: "Grade 11 Life Orientation", group: 1, classroom: "B3", link: "meet.google.com/xih-vxad-kbp", message:"You have an upcoming PE task"},
    {id: 21, slot: 4, subject: "Grade 12 English", group: 1, classroom: "A1", link: "meet.google.com/hnz-qcte-qhj", message:"Hi class, remember you have a literature essay coming up."},
    {id: 22, slot: 5, subject: "Grade 12 English", group: 2, classroom: "C1", link: "meet.google.com/kkz-ieiv-kmr", message:"Hi class, remember you have a literature essay coming up."},
    {id: 23, slot: 6, subject: "Grade 12 Afrikaans", group: 1, classroom: "A2", link: "meet.google.com/kuz-iitr-roo", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 24, slot: 1, subject: "Grade 12 Afrikaans", group: 2, classroom: "C2", link: "meet.google.com/mzp-vvkf-huh", message:"Hi guys, please remember your yellow vocab book for monday."},
    {id: 25, slot: 2, subject: "Grade 12 History", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg", message:"You have an upcoming case study on ww2"},
    {id: 26, slot: 3, subject: "Grade 12 Mathematics", group: 1, classroom: "B1", link: "meet.google.com/uyr-jaby-xsc", message:"You have an upcoming exam on trigonometry"},
    {id: 27, slot: 5, subject: "Grade 12 Physical Science", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo", message:"If you would like an extra lesson on organic chemitry please feel pree to email me"},
    {id: 28, slot: 6, subject: "Grade 12 Biology", group: 1, classroom: "Lab", link: "meet.google.com/nmn-zsqu-hoo", message:"Email me for an extra lesson if you got below 50% on last term's test"},
    {id: 29, slot: 6, subject: "Grade 12 Accounting", group: 1, classroom: "Hall", link: "meet.google.com/mfk-ecoz-nzg", message:"Please start preparing for your final exam"},
    {id: 30, slot: 3, subject: "Grade 12 Life Orientation", classroom: "B3", link: "meet.google.com/xih-vxad-kbp", message:"remember your PE kit on tuesday"}
];

var slots = [
    {slot: 1, times: [
        {day: "Mon", period: 2},
        {day: "Tue", period: 4},
        {day: "Wed", period: 3},
        {day: "Thu", period: 5},
        {day: "Fri", period: 1}
    ]},
    {slot: 2, times: [
        {day: "Mon", period: 4},
        {day: "Tue", period: 3},
        {day: "Wed", period: 4},
        {day: "Thu", period: 1},
        {day: "Fri", period: 2}
    ]},
    {slot: 3, times: [
        {day: "Mon", period: 5},
        {day: "Tue", period: 5},
        {day: "Wed", period: 2},
        {day: "Thu", period: 6},
        {day: "Fri", period: 3}
    ]},
    {slot: 4, times: [
        {day: "Mon", period: 1},
        {day: "Tue", period: 2},
        {day: "Wed", period: 6},
        {day: "Thu", period: 3},
        {day: "Fri", period: 6}
    ]},
    {slot: 5, times: [
        {day: "Mon", period: 6},
        {day: "Tue", period: 6},
        {day: "Wed", period: 1},
        {day: "Thu", period: 4},
        {day: "Fri", period: 4}
    ]},
    {slot: 6, times: [
        {day: "Mon", period: 3},
        {day: "Tue", period: 1},
        {day: "Wed", period: 5},
        {day: "Thu", period: 2},
        {day: "Fri", period: 5}
    ]}
];

var teachers = [
    {id: 1, name: "Mr Hunt", email: "hunt@highschool.com", password:"1234", classes: [1,2,11,12,21,22]},
    {id: 2, name: "Mr Mclaughlin", email: "mclaughlin@highschool.com", password:"2345", classes: [6,7,26,27]},
    {id: 3, name: "Ms Berger", email: "berger@highschool.com", password:"3456", classes: [3,4,13,14,23]},
    {id: 4, name: "Ms Murray", email: "murray@highschool.com", password:"4567", classes: [8,9,29,30]},
    {id: 5, name: "Mr Simpson", email: "simpson@highschool.com", password:"5678", classes: [5,15,25,30]}
];

var learners = [
    {id: 1, name: "Ian Reid", classes: [1,3,5,6,7,9], password:"1234", email:"ianR123@gmail.com"},
    {id: 2, name: "Lynne Brock", classes: [12, 13, 15, 16, 18, 19], password:"1234", email:"lyneeB123@gmail.com"},
    {id: 3, name: "Jeffery Medina", classes: [21, 24, 25, 27, 28, 30], password:"1234", email:"jeffM123@gmail.com"},
    {id: 3, name: "Matthew Smart", classes: [2, 4, 8, 10, 11, 14], password:"1234", email:"matt@gmail.com"},
    {id: 3, name: "Misty Goodman", classes: [17, 20, 22, 23, 26, 29], password:"1234", email:"matt@gmail.com"},
    {id: 1, name: "Thora Howe", classes: [1,3,5,6,7,9], password:"1234", email:"thora@gmail.com"},
    {id: 2, name: "Hadley Marsh", classes: [12, 13, 15, 16, 18, 19], password:"1234", email:"hadley@gmail.com"},
    {id: 3, name: "Melvin Berry", classes: [21, 24, 25, 27, 28, 30], password:"1234", email:"melvin@gmail.com"},
    {id: 3, name: "Jade Hardy", classes: [2, 4, 8, 10, 11, 14], password:"1234", email:"jade@gmail.com"},
    {id: 3, name: "Thomas Harmon", classes: [17, 20, 22, 23, 26, 29], password:"1234", email:"thomas@gmail.com"},

];

module.exports = {classes: classes, slots: slots, teachers: teachers, learners: learners};