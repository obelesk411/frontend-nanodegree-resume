/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Adam McMahon",
	"role": "Fullstack Web Developer",
	"summmary": "Fullstack Developer",
	"pic": "images/fry.jpg",
	"contacts": {
		"github": "https://github.com/obelesk411",
		"website": "https://mcmahonadam.com/",
		"location": "Loveland, CO",
		"email": "ask",
		"phone": "ask"
	},
	"age": 28,
	"skills": ["PHP", "MySQL", "HTML5", "CSS", "Javascript","MongoDB","Wordpress","Codeigniter"]
};

var work = {
	"jobs": [{
		"employer": "PIXO",
		"role": "Senior Web Developer",
		"location": "Denver, CO",
		"start_year": "2015",
		"end_year": "PRESENT",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript"]
	}, {
		"employer": "Code For Newark",
		"role": "Volunteer Teacher",
		"location": "Newark, NJ",
		"start_year": "2015",
		"end_year": "PRESENT",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Wordpress"]
	}, {
		"employer": "P800x",
		"role": "Senior Web Developer",
		"location": "Whitestone, NJ",
		"start_year": "2014",
		"end_year": "2015",
		"tags": ["PHP", "MySQL", "Javascript", "MongoDB"]
	}, {
		"employer": "Rising Results",
		"role": "Senior Web Developer",
		"location": "Staten Island, NY",
		"start_year": "2013",
		"end_year": "2013",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript"]
	}, {
		"employer": "Refundo",
		"role": "Web Developer",
		"location": "Elizabeth, NJ",
		"start_year": "2011",
		"end_year": "2013",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "MongoDB", "Codeigniter"]
	}, {
		"employer": "Bolt Web Solutions",
		"role": "Web Developer",
		"location": "Brooklyn, NY",
		"start_year": "2010",
		"end_year": "2011",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Wordpress", "Codeigniter"]
	}, {
		"employer": "Rushtax",
		"role": "Web Developer",
		"location": "Elizabeth, NJ",
		"start_year": "2009",
		"end_year": "2010",
		"tags": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Codeigniter"]
	}, {
		"employer": "Accutechi",
		"role": "IT Consultant",
		"location": "Edison, NJ",
		"start_year": "2008",
		"end_year": "2009",
		"tags": ["PHP", "MySQL"]
	}, {
		"employer": "Customer Support Inc.",
		"role": "IT Consultant",
		"location": "Jersey City, NJ",
		"start_year": "2008",
		"end_year": "2008",
		"tags": ["PHP", "MySQL", "Javascript"]
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
			
			if(this.jobs[job].tags !== undefined) {
				$(".work-entry:last").attr("skills",this.jobs[job].tags.join(" "));
			}
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
		"url": "https://onemonth.com/",
		"year": "2015"
	}, {
		"title": "One Month Startup",
		"school": "One Month",
		"location": "New York, NY",
		"url": "https://onemonth.com/",
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
		"url": "https://marketcampus.com/",
		"year": "2016"
	}, {
		"title": "Hubspot Inbound Certification",
		"school": "Hubspot",
		"location": "Boston, MA",
		"url": "http://certification.hubspot.com/inbound-certification",
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
		"image": "images/the_projects.jpg",
		"description": "A tracking system for pesticide usage for the county"
	}, {
		"title": "Web Scraper",
		"year": "2008",
		"image": "images/the_projects.jpg",
		"description": "A scaper that pulls thousands of complaints from a consumer complaint website"
	}, {
		"title": "Refundo",
		"year": "2011",
		"image": "images/the_projects.jpg",
		"description": "Tax refund software"
	}, {
		"title": "Pinterest Clone",
		"year": "2015",
		"image": "images/the_projects.jpg",
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

var narrowSkills = function() {
	
	skill = $(this).text();
	$('#skill').text('('+skill+')');

	// loop through jobs,projects,education
	$('.work-entry').each(function(){
		skills = $(this).attr('skills');

		if(typeof skills == undefined || typeof skills == false) {
			$(this).hide();
		} else if(skills.search(skill) != -1) {
			$(this).show();
		} else {
			$(this).hide();
		}

	});
};

if(bio.skills.length !== 0) {
	for(skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
	}

	$("#skills li").each(function(){
		$(this).css("cursor","pointer");
		$(this).bind("click",narrowSkills);
	});
}

work.display();

projects.display();

education.display();

$('button').click(function(){

});

$("#mapDiv").append(googleMap);