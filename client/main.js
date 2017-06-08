import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//Import Layouts
import '/imports/ui/layouts/header/header.js';
import '/imports/ui/layouts/footer/footer.js';

//Import Pages
import '/imports/ui/pages/about/about.js';
import '/imports/ui/pages/education/education.js';
import '/imports/ui/pages/research/research.js';
import '/imports/ui/pages/contact/contact.js';
import '/imports/ui/pages/work/work.js';

//Import Components
import '/imports/ui/components/nav/nav.js';
import '/imports/ui/components/heroimage/heroimage.js';



///////////////////////////////////////
//  Allows for Scrolling Navigation  //
///////////////////////////////////////

var scrollFunction = function(idstring) {
  $('html, body').animate({
    scrollTop: $(idstring).offset().top
  }, 1000);
};

// Pages to Scroll To
Template.nav.events({
  "click #aboutlink": function() {
    scrollFunction('#about');
  },

  "click #worklink": function() {
    scrollFunction('#work');
  },

  "click #educationlink": function() {
    scrollFunction('#education');
  },

  "click #contactlink": function() {
    scrollFunction('#contact');
  },

  "click #researchlink": function() {
    scrollFunction('#research');
  },
});

Template.heroimage.events({
  "click #aboutlink": function() {
    scrollFunction('#about');
  },
});

Template.footer.events({
  "click #aboutlink": function() {
    scrollFunction('#about');
  },

  "click #worklink": function() {
    scrollFunction('#work');
  },

  "click #educationlink": function() {
    scrollFunction('#education');
  },

  "click #contactlink": function() {
    scrollFunction('#contact');
  },

  "click #researchlink": function() {
    scrollFunction('#research');
  },
});
