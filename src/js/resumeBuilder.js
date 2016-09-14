/*
This is empty on purpose! Your code to build the resume will go here.
 */

var data = "%data%";

var bio = {
	"name": "Adam McMahon",
	"role": "Fullstack Web Developer",
	"contacts": {
		"github": "https://github.com/obelesk411",
		"website": "https://mcmahonadam.com/",
		"location": "Loveland, CO",
		"email": "ask",
		"phone": "ask"
	},
	"welcomeMessage": "More than 8 years of experience",
	"biopic": "images/me.png",
	"skills": ["PHP", "MySQL", "HTML5", "CSS", "Javascript","MongoDB","Wordpress","Codeigniter"],
	"age": 28,
	"display": function() {

		$("#header")
			.prepend(HTMLheaderName.replace(data,this.name)+HTMLheaderRole.replace(data,this.role))
			.append(HTMLbioPic.replace(data,this.biopic))
			.append(HTMLwelcomeMsg.replace(data,this.welcomeMessage))
			.append(HTMLskillsStart);

		$("#topContacts")
			.append(HTMLgithub.replace(data,this.contacts.github))
			.append(HTMLblog.replace(data,this.contacts.website))
			.append(HTMLlocation.replace(data,this.contacts.location))
			.append(HTMLemail.replace(data,this.contacts.email))
			.append(HTMLmobile.replace(data,this.contacts.phone));

		if(this.skills.length !== 0) {
			this.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace(data,skill));
			});

			$("#skills li").each(function(){
				$(this).css("cursor","pointer");
				$(this).bind("click",narrowSkills);
			});
		}
	}
};

var work = {
	"jobs": [{
		"employer": "PIXO",
		"title": "Senior Web Developer",
		"location": "Denver, CO",
		"dates": "2015 - PRESENT",
		"description": "Tackled Concrete5 and node.js projects",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript"]
	}, {
		"employer": "Code For Newark",
		"title": "Volunteer Teacher",
		"location": "Newark, NJ",
		"dates": "2015 - PRESENT",
		"description": "Helped beginners tackle web development",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Wordpress"]
	}, {
		"employer": "P800x",
		"title": "Senior Web Developer",
		"location": "Whitestone, NJ",
		"dates": "2014 - 2015",
		"description": "Helped build and maintain utility locating software",
		"tags": ["PHP", "MySQL", "Javascript", "MongoDB"]
	}, {
		"employer": "Rising Results",
		"title": "Senior Web Developer",
		"location": "Staten Island, NY",
		"dates": "2013",
		"description": "Repaired and maintained custom built lead management system",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript"]
	}, {
		"employer": "Refundo",
		"title": "Web Developer",
		"location": "Elizabeth, NJ",
		"dates": "2011 - 2013",
		"description": "Helped build and maintain tax software",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "MongoDB", "Codeigniter"]
	}, {
		"employer": "Bolt Web Solutions",
		"title": "Web Developer",
		"location": "Brooklyn, NY",
		"dates": "2010 - 2011",
		"description": "Juggled many projects for an Agency",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Wordpress", "Codeigniter"]
	}, {
		"employer": "Rushtax",
		"title": "Web Developer",
		"location": "Elizabeth, NJ",
		"dates": "2009 - 2010",
		"description": "Helped build and maintain tax software",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Codeigniter"]
	}, {
		"employer": "Accutechi",
		"title": "IT Consultant",
		"location": "Edison, NJ",
		"dates": "2008 - 2009",
		"description": "Built and maintained several projects",
		"tags": ["PHP", "MySQL"]
	}, {
		"employer": "Customer Support Inc.",
		"title": "IT Consultant",
		"location": "Jersey City, NJ",
		"dates": "2008",
		"description": "Built and maintained several projects",
		"tags": ["PHP", "MySQL", "Javascript"]
	}],
	"display": function() {
		this.jobs.forEach(function(job) {
			$("#workExperience")
				.append(HTMLworkStart)
				.find(".work-entry:last")
				.append(HTMLworkEmployer.replace(data,job.employer)+HTMLworkTitle.replace(data,job.title))
				.append(HTMLworkDates.replace(data,job.dates))
				.append('<div style="clear:both"></div>')
				.append(HTMLworkLocation.replace(data,job.location))
				.append(HTMLworkDescription.replace(data,job.description))
				.append('<div style="clear:both"></div>');
			
			if(job.tags !== undefined) {
				$(".work-entry:last").attr("skills",job.tags.join(" "));
			}
		});
	}
};

var education = {
	"schools": [{
		"name": "Union County College",
		"location": "Cranford, NJ",
		"degree": "Associates",
		"major": "Computer Science",
		"dates": "2008",
		"url": "http://www.ucc.edu/"
	}],
	"onlineCourses": [{
		"title": "Front-end Developer Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		"location": "Mountain View, CA"
	}, {
		"title": "One Month Rails",
		"school": "One Month",
		"dates": "2015",
		"url": "https://onemonth.com/",
		"location": "New York, NY"
	}, {
		"title": "One Month Startup",
		"school": "One Month",
		"dates": "2016",
		"url": "https://onemonth.com/",
		"location": "New York, NY"
	}, {
		"title": "Understanding Regular Expressions",
		"school": "Laracasts",
		"dates": "2016",
		"url": "https://laracasts.com/",
		"location": "REMOTE"
	}, {
		"title": "Market Campus Certification",
		"school": "Market Campus",		
		"dates": "2016",
		"url": "https://marketcampus.com/",
		"location": "Salt Lake City, UT"
	}, {
		"title": "Hubspot Inbound Certification",
		"school": "Hubspot",
		"dates": "2016",
		"url": "http://certification.hubspot.com/inbound-certification",
		"location": "Cambridge, MA"
	}],
	"display": function() {

		this.schools.forEach(function(school) {
			$("#education")
				.append(HTMLschoolStart)
				.find(".education-entry:last")
				.append(HTMLschoolName.replace(data,school.name))
				.append(HTMLschoolDegree.replace(data,school.degree))
				.append(HTMLschoolDates.replace(data,school.dates))
				.append(HTMLschoolLocation.replace(data,school.location))
				.append(HTMLschoolMajor.replace(data,school.major))
				.append(HTMLonlineURL.replace(data,school.url));
		});
		
		$("#education").append(HTMLonlineClasses);
		
		this.onlineCourses.forEach(function(course) {
			$("#education")
				.append(HTMLschoolStart)
				.find(".education-entry:last")
				.append(HTMLonlineTitle.replace(data,course.title)+HTMLonlineSchool.replace(data,course.school))
				.append(HTMLonlineDates.replace(data,course.dates))
				.append(HTMLonlineURL.replace(data,course.url))
				.append('<div style="clear:both"></div>');
		});
	}
};

var projects = {
	"projects": [{
		"title": "Pest Tracker",
		"dates": "2007",
		"description": "A tracking system for pesticide usage for the county",
		"images": ["images/the_projects.jpg"]
	}, {
		"title": "Web Scraper",
		"dates": "2008",
		"description": "A scaper that pulls thousands of complaints from a consumer complaint website",
		"images": ["images/the_projects.jpg"]
	}, {
		"title": "Refundo",
		"dates": "2011",
		"description": "Tax refund software",
		"images": ["images/the_projects.jpg"]
	}, {
		"title": "Pinterest Clone",
		"dates": "2015",
		"description": "A Pinterest clone build on Rails",
		"images": ["images/the_projects.jpg"]
	}],
	"display": function() {
		this.projects.forEach(function(project) {
			$('#projects')
				.append(HTMLprojectStart)
				.find(".project-entry:last")
				.append(HTMLprojectTitle.replace(data,project.title))
				.append(HTMLprojectDates.replace(data,project.dates))
				.append(HTMLprojectDescription.replace(data,project.description))
				.append(HTMLprojectImage.replace(data,project.images));

		});
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

var narrowSkills = function() {
	
	skill = $(this).text();
	$('#skill').text('('+skill+')');

	// loop through jobs,projects,education
	$('.work-entry').each(function(){
		skills = $(this).attr('skills');

		if(typeof skills === undefined || typeof skills === false) {
			$(this).hide();
		} else if(skills.search(skill) != -1) {
			$(this).show();
		} else {
			$(this).hide();
		}

	});
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);