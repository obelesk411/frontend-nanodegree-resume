/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Adam McMahon",
	"role": "Fullstack Web Developer",
	"summmary": "Developer, Marketer, Smartass",
	"pic": "images/fry.jpg",
	"contacts": {
		"github": "https://github.com/obelesk411",
		"website": "https://mcmahonadam.com/",
		"location": "Loveland, CO",
		"email": "ask",
		"phone": "ask"
	},
	"age": 28,
	"skills": ["PHP", "MySQL", "HTML5", "CSS", "Javascript"]
};

var work = {
	"jobs": [{
		"employer": "PIXO",
		"role": "Senior Web Developer",
		"location": "Denver, CO",
		"start_year": "2015",
		"end_year": "PRESENT"
	}, {
		"employer": "Code For Newark",
		"role": "Volunteer Teacher",
		"location": "Newark, NJ",
		"start_year": "2015",
		"end_year": "PRESENT"
	}, {
		"employer": "P800x",
		"role": "Senior Web Developer",
		"location": "Whitestone, NJ",
		"start_year": "2014",
		"end_year": "2015"
	}, {
		"employer": "Rising Results",
		"role": "Senior Web Developer",
		"location": "Staten Island, NY",
		"start_year": "2013",
		"end_year": "2013"
	}, {
		"employer": "Refundo",
		"role": "Web Developer",
		"location": "Elizabeth, NJ",
		"start_year": "2011",
		"end_year": "2013"
	}, {
		"employer": "Bolt Web Solutions",
		"role": "Web Developer",
		"location": "Brooklyn, NY",
		"start_year": "2010",
		"end_year": "2011"
	}, {
		"employer": "Rushtax",
		"role": "Web Developer",
		"location": "Elizabeth, NJ",
		"start_year": "2009",
		"end_year": "2010"
	}, {
		"employer": "Accutechi",
		"role": "IT Consultant",
		"location": "Edison, NJ",
		"start_year": "2008",
		"end_year": "2009"
	}, {
		"employer": "Customer Support Inc.",
		"role": "IT Consultant",
		"location": "Jersey City, NJ",
		"start_year": "2008",
		"end_year": "2008"
	}],
	"display": function() {
		for(job in this.jobs) {
			$("#workExperience")
				.append(HTMLworkStart)
				.find(".work-entry:last")
				.append(HTMLworkEmployer.replace("%data%",this.jobs[job].employer)
					+HTMLworkTitle.replace("%data%",this.jobs[job].role))
				.append(HTMLworkDates.replace("%data%",this.jobs[job].start_year
					+" - "+this.jobs[job].end_year))
				.append('<div style="clear:both"></div>')
				.append(HTMLworkLocation.replace("%data%",this.jobs[job].location))
				.append('<div style="clear:both"></div>');
		}
	}
};

var education = {
	"schools": [{
		"title": "Front-end Developer Nanodegree",
		"school": "Udacity",
		"location": "Mountain View, CA",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		"year": "2016"
	}, {
		"title": "One Month Rails",
		"school": "One Month",
		"location": "New York, NY",
		"url": "",
		"year": "2015"
	}, {
		"title": "One Month Startup",
		"school": "One Month",
		"location": "New York, NY",
		"url": "",
		"year": "2016"
	}, {
		"title": "Understanding Regular Expressions",
		"school": "Laracasts",
		"location": "REMOTE",
		"url": "https://laracasts.com/",
		"year": "2016"
	}, {
		"title": "Market Campus Certification",
		"school": "Market Campus",
		"location": "Salt Lake City, UT",
		"url": "",
		"year": "2016"
	}, {
		"title": "Hubspot Inbound Certification",
		"school": "Hubspot",
		"location": "Boston, MA",
		"url": "",
		"year": "2016"
	}],
	"display": function() {
		for(course in this.schools) {
			$("#education")
				.append(HTMLschoolStart)
				.find(".education-entry:last")
				.append(HTMLonlineTitle.replace("%data%",this.schools[course].title)
					+HTMLonlineSchool.replace("%data%",this.schools[course].school))
				.append(HTMLonlineDates.replace("%data%",this.schools[course].year))
				.append('<div style="clear:both"></div>');
		}
	}
};

var projects = {
	"projects": [{
		"title": "Pest Tracker",
		"year": "2007",
		"image": "",
		"description": ""
	}, {
		"title": "Web Scraper",
		"year": "2008",
		"image": "",
		"description": ""
	}, {
		"title": "Refundo",
		"year": "",
		"image": "",
		"description": ""
	}, {
		"title": "Pinterest Clone",
		"year": "",
		"image": "",
		"description": "A Pinterest clone build on Rails"
	}],
	"display": function() {
		for(project in this.projects) {
			$('#projects')
				.append(HTMLprojectStart)
				.find(".project-entry:last")
				.append(HTMLprojectTitle.replace("%data%",this.projects[project].title))
				.append(HTMLprojectDates.replace("%data%",this.projects[project].year))
				.append(HTMLprojectDescription.replace("%data%",this.projects[project].description))
				.append(HTMLprojectImage.replace("%data%",this.projects[project].image))

		}
	}
};

$('#main').append(internationalizeButton);

function inName(name) {
	var names = name.split(' ');

	var firstName = names[0].slice(0,1).toUpperCase();
	firstName += names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();
	
	return firstName+' '+lastName;
}

$("#header")
	.prepend(HTMLheaderName.replace("%data%",bio.name)+HTMLheaderRole.replace("%data%",bio.role))
	.append(HTMLbioPic.replace("%data%",bio.pic))
	.append(HTMLwelcomeMsg.replace("%data%",bio.summmary))
	.append(HTMLskillsStart);

$("#topContacts")
	.append(HTMLgithub.replace("%data%",bio.contacts.github))
	.append(HTMLblog.replace("%data%",bio.contacts.website))
	.append(HTMLlocation.replace("%data%",bio.contacts.location))
	.append(HTMLemail.replace("%data%",bio.contacts.email))
	.append(HTMLmobile.replace("%data%",bio.contacts.phone));

if(bio.skills.length !== 0)
	for(skill in bio.skills) $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));

work.display();

projects.display();

education.display();

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

$('button').click(function(){

});

$("#mapDiv").append(googleMap);