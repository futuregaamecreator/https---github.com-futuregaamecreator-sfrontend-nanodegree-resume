var bio = {
    "name": 'George Harrison',
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(404) 954-2917",
        "mobileURL": "",
        "email": "futuregamecreator@gmail.com",
        "emailURL": "mailto:futuregamecreator@gmail.com",
        "github": "futuregaamecreator",
        "twitter": "Futuregamecreat",
        "linkedin": "George Harrison",
        "linkedinURL": "https://www.linkedin.com/in/george-harrison-30178144",
        "location": "Atlanta, GA",
        "locationURL": "https://www.google.com/maps/place/Atlanta,+GA/@33.7679192,-84.560692,11z/data=!3m1!4b1!4m2!3m1!1s0x88f5045d6993098d:0x66fede2f990b630b"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to My Resume Page. I am working everyday to become a better Front End Web Developer",
    "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub", "Windows", "Drupal", "WordPress", "Networking", "Troubleshooting"],
};
bio.display = function () {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedbioEmail = formattedbioEmail.replace("#", bio.contacts.emailURL);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.githubURL);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedbioTwitter);
    $("#footerContacts").append(formattedbioTwitter);
    var formattedbioLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedbioLinkedin = formattedbioLinkedin.replace("#", bio.contacts.linkedinURL);
    $("#topContacts").append(formattedbioLinkedin);
    $("#footerContacts").append(formattedbioLinkedin);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
    $("#topContacts").append(formattedbioLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
        $("#skills").append(formattedSkill);
    }

};

var work = {
    "jobs": [{
            "employer": "Cricket",
            "title": "ROS Desk Tier 2 Specialist",
            "location": "Atlanta, GA",
            "dates": 2014,
            "description": "I assist all Cricket Dealer with issues with Store Issues such as Setting up Camera Systesm, Not able to open applications, and Locked out of Accounts"
        }, {
            "employer": "Horizon Software",
            "title": "K - 12 POS Anaylst ",
            "location": "Duluth,GA ",
            "dates": 2014,
            "description": "I fixed school system POS system Remotely"
        }, {
            "employer": "OutComes Heatlh",
            "title": "Document Management Specialist",
            "location": "Alpharetta, GA ",
            "dates": 2014,
            "description": " Verified Electronic Medical Records for Accurate reports and Merge Duplicates"
        }, {
            "employer": "Wellstar",
            "title": "Kennestone Implation Specialist",
            "location": "Marietta, GA",
            "dates": 2013,
            "description": "Assisted in Converting Wellstar Biggest Hospital from Paper Records to Electronic Medical Record"
        }]
};
work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

var education = {
    "schools": [{
            "name": "DeVry University",
            "location": "Decatur, GA",
            "degree": "Bachelor of Science",
            "majors": "Game Simulation and Programming",
            "dates": 2009,
            "url": "http://www.devry.edu/"
        },
    ],
    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd/"
        }, {
            "title": "Responsive Web Design Fundementals",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd/"
        }, {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/responsive-images--ud882-nd/"
        }, {
            "title": "JavaScript Fundamentals",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804-nd/"
        }, {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }]
};
education.display = function () {
    for (school in education.schools) {
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchool = formattedSchool.replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);

    }
};

var projects = {
    "projects": [{
            "title": "ProfileES",
            "dates": 2013,
            "description": "Interned for Accelerated Design and helped create their Kickstart web page. Created Webforms, Created Custom Rules in PHP, and some Front End work",
            "images": ["images/ProfileES.jpg"],
            "url": "http://profilees.com"
        },
        {
            "title": "Formula ATL",
            "dates": 2015,
            "description": "Created a Wordpress website for a Private Car Seller that sells custom cars to Celebrities and sports player. Created a Custom Login and Created a unique website layout for new buyers and admins to update content",
            "images": ["images/forumula1.jpg"],
            "url": "http://formulaatl.com"
        },
        {
            "title": "GX Website",
            "dates": 2015,
            "description": "Created a new responsive HTML website for a Gaming Lounge in ATL",
            "images": ["images/gx.jpg"],
            "url": "http://gxgaming.com"
        }]
};
projects.display = function () {
    for (project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

            }
        }


        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);

    }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
